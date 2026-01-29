// CartContext.js
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_CART':
      return { ...state, cartItems: action.payload.cartItems, totalQuantity: action.payload.totalQuantity };
    case 'ADD_TO_CART': {
      const product = action.payload.product;
      const existingIndex = state.cartItems.findIndex((item) => item && item.id === product.id);
      let updatedCartItems = [];

      if (existingIndex !== -1) {
        updatedCartItems = state.cartItems.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: (item.quantity || 1) + (product.quantity || 1) }
            : item
        );
      } else {
        updatedCartItems = [...state.cartItems, { ...product, quantity: product.quantity || 1 }];
      }

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      const updatedTotalQuantity = updatedCartItems.reduce((total, item) => {
        if (item && item.quantity) {
          return total + Number(item.quantity);
        }
        return total;
      }, 0);

      return {
        ...state,
        cartItems: updatedCartItems,
        totalQuantity: updatedTotalQuantity,
      };
    }
    case 'UPDATE_QUANTITY': {
      const { productId, quantity } = action.payload;
      const updatedCartItems = state.cartItems.map((item) =>
        item && item.id === productId ? { ...item, quantity } : item
      );

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      const updatedTotalQuantity = updatedCartItems.reduce((total, item) => {
        if (item && item.quantity) {
          return total + Number(item.quantity);
        }
        return total;
      }, 0);

      return {
        ...state,
        cartItems: updatedCartItems,
        totalQuantity: updatedTotalQuantity,
      };
    }
    case 'REMOVE_FROM_CART': {
      const productId = action.payload.productId;
      const updatedCartItems = state.cartItems.filter((item) => item && item.id !== productId);

      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

      const updatedTotalQuantity = updatedCartItems.reduce((total, item) => {
        if (item && item.quantity) {
          return total + Number(item.quantity);
        }
        return total;
      }, 0);

      return {
        ...state,
        cartItems: updatedCartItems,
        totalQuantity: updatedTotalQuantity,
      };
    }
    case 'CLEAR_CART': {
      localStorage.setItem('cartItems', JSON.stringify([]));
      return { ...state, cartItems: [], totalQuantity: 0 };
    }
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [], totalQuantity: 0 });

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalQuantity = storedCartItems.reduce((total, item) => {
      if (item && item.quantity) {
        return total + Number(item.quantity);
      }
      return total;
    }, 0);
    dispatch({ type: 'RESTORE_CART', payload: { cartItems: storedCartItems, totalQuantity } });
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product } });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ cartState: state, addToCart, updateQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
