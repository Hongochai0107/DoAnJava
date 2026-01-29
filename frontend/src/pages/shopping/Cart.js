import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import OrderForm from "./OrderForm";
import "./Cart.css";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity, onClearCart }) => {
  const [updatedQuantities, setUpdatedQuantities] = useState({});
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const calculateTotalPrice = useCallback(() => {
    const total = cartItems.reduce((sum, item) => {
      if (item && item.price) {
        return sum + Number(item.price) * Number(item.quantity || 1);
      }
      return sum;
    }, 0);
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  const handleUpdateQuantity = (productId, quantity) => {
    const nextQuantity = Math.max(1, Number(quantity || 1));
    onUpdateQuantity(productId, nextQuantity);
    setUpdatedQuantities({ ...updatedQuantities, [productId]: false });
  };

  const handleShowOrderForm = () => {
    setShowOrderForm(true);
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
  };

  const handleOrderSuccess = () => {
    onClearCart();
    setShowOrderForm(false);
  };
  
  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <main className="col-md-9">
            <div className="card">
              <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                  <tr className="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width="120">
                      Quantity
                    </th>
                    <th scope="col" width="120">
                      Price
                    </th>
                    <th scope="col" className="text-right" width="200"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item) => (
                      item && (
                        <tr key={item.id}>
                          <td>
                            <figure className="itemside">
                              <div className="aside">
                                <img
                                  src={item.thumbnail ? `/images/items/${item.thumbnail}` : require("../../assets/images/items/1.jpg")}
                                  className="img-sm"
                                  alt={item.title}
                                />
                              </div>
                              <figcaption className="info">
                                <span className="title text-dark" style={{ cursor: 'pointer' }}>
                                  {item.title}
                                </span>
                                <p className="text-muted small">Size: XL, Color: blue, Brand: {item.brand}</p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <div className="form-row mt-0">
                              <div className="form-group col-md">
                                <div className="input-group">
                                  <input
                                    type="number"
                                    className="form-control"
                                    min={1}
                                    value={updatedQuantities[item.id] ?? item.quantity}
                                    onChange={(e) =>
                                      setUpdatedQuantities((prevQuantities) => ({
                                        ...prevQuantities,
                                        [item.id]: e.target.value,
                                      }))
                                    }
                                  />
                                  <div className="input-group-append">
                                    <button
                                      className="btn btn-info"
                                      onClick={() => handleUpdateQuantity(item.id, updatedQuantities[item.id] ?? item.quantity)}
                                    >
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="price-wrap">
                              <var className="price">${Number(item.price) * Number(item.quantity || 1)}</var>
                              <small className="text-muted"> ${item.price} each </small>
                            </div>
                          </td>
                          <td className="text-right">
                            <button className="btn btn-light btn-round" onClick={() => onRemoveFromCart(item.id)}>
                              Remove
                            </button>
                          </td>
                        </tr>
                      )
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No items in the cart</td>
                    </tr>
                  )}
                </tbody>
              </table>

              <div className="card-body border-top">
                <button
                  onClick={handleShowOrderForm}
                  className="btn btn-info float-md-right"
                  disabled={!cartItems || cartItems.length === 0}
                >
                  Mua hàng <i className="fa fa-chevron-right"></i>
                </button>
                <button className="btn btn-light" onClick={() => navigate("/")}> 
                  <i className="fa fa-chevron-left"></i> Continue shopping
                </button>
              </div>
            </div>
            <div className="alert alert-success mt-3">
              <p className="icontext">
                <i className="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks
              </p>
            </div>
          </main>
          <aside className="col-md-3">
            <div className="card mb-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Have coupon?</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="" placeholder="Coupon code" />
                      <span className="input-group-append">
                        <button className="btn btn-info">Apply</button>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right">${totalPrice}</dd>
                </dl>

                <dl className="dlist-align">
                  <dt>Total:</dt>
                  <dd className="text-right h5">${totalPrice}</dd>
                </dl>

                <p className="text-center mb-3">
                  <img src={require("../../assets/images/misc/payments.png")} style={{ height: "26" }} />
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {showOrderForm && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-content">
            <span className="close" onClick={handleCloseOrderForm}>
              &times;
            </span>
            {showOrderForm && (
              <OrderForm
                totalPrice={totalPrice}
                cartItems={cartItems}
                onSuccess={handleOrderSuccess}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
