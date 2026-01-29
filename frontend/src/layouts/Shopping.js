import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../pages/shopping/Cart";
import { useCart } from "./CartContext";

const Shopping = () => {
  const location = useLocation();
  const { cartState, addToCart, updateQuantity, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const cartItemsFromState = location.state && location.state.cartItems ? location.state.cartItems : [];
    if (cartState.cartItems.length === 0 && cartItemsFromState.length > 0) {
      cartItemsFromState.forEach((item) => addToCart(item));
    }
  }, [location.state, addToCart, cartState.cartItems.length]);


  return (
    <div className="container">
      <Cart
        cartItems={cartState.cartItems}
        onRemoveFromCart={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />
      {/* ... */}
    </div>
  );
};

export default Shopping;
