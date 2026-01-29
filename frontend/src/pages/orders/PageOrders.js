import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const PageOrders = () => {
  const { user, isLoggedIn, logout } = useContext(UserContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    console.log("All stored orders:", storedOrders);
    console.log("Current user:", user);
    
    if (user) {
      const filtered = storedOrders.filter((order) => {
        const matchUserId = order.userId && user.id && order.userId === user.id;
        const matchUsername = order.username && user.username && order.username === user.username;
        const matchEmail = order.email && user.email && order.email.toLowerCase() === user.email.toLowerCase();
        
        console.log("Checking order:", order.id, { matchUserId, matchUsername, matchEmail });
        return matchUserId || matchUsername || matchEmail;
      });
      
      console.log("Filtered orders:", filtered);
      setOrders(filtered);
    } else {
      setOrders([]);
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!isLoggedIn) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning">
          <h4>Bạn chưa đăng nhập</h4>
          <p>Vui lòng đăng nhập để xem đơn hàng.</p>
          <button className="btn btn-primary" onClick={() => navigate("/login")}>Đăng nhập</button>
        </div>
      </div>
    );
  }

  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <aside className="col-md-3">
            <nav className="list-group">
              <a className="list-group-item" href="/profile">Account overview</a>
              <a className="list-group-item" href="/address">My Address</a>
              <a className="list-group-item active" href="/orders">My Orders</a>
              <a className="list-group-item" href="/wishlist">My wishlist</a>
              <a className="list-group-item" href="/seller">My Selling Items</a>
              <a className="list-group-item" href="/setting">Settings</a>
              <a className="list-group-item" href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Log out</a>
            </nav>
          </aside>
          <main className="col-md-9">
            {orders.length === 0 ? (
              <div className="card">
                <div className="card-body">
                  <p className="mb-0">Bạn chưa có đơn hàng nào.</p>
                </div>
              </div>
            ) : (
              orders.map((order) => (
                <article className="card mb-4" key={order.id}>
                  <header className="card-header">
                    <strong className="d-inline-block mr-3">Order ID: {order.id}</strong>
                    <span>Order Date: {new Date(order.orderDate).toLocaleDateString()}</span>
                  </header>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-8">
                        <h6 className="text-muted">Delivery to</h6>
                        <p>
                          {user?.fullName || user?.username || "User"}
                          <br />
                          Phone {order.phone || "N/A"} Email: {order.email || "N/A"}
                          <br />
                          Location: {order.address || "N/A"}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <h6 className="text-muted">Payment</h6>
                        <p>
                          Subtotal: ${order.total}
                          <br />
                          <span className="b">Total: ${order.total}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <tbody>
                        {(order.items || []).map((item, idx) => (
                          <tr key={`${order.id}-${idx}`}>
                            <td width="65">
                              <img
                                src={item.thumbnail ? `/images/items/${item.thumbnail}` : require("../../assets/images/items/1.jpg")}
                                className="img-xs border"
                                alt={item.title}
                              />
                            </td>
                            <td>
                              <p className="title mb-0">{item.title}</p>
                              <var className="price text-muted">USD {item.price}</var>
                            </td>
                            <td>Qty: {item.quantity || 1}</td>
                            <td className="text-right">
                              <span className="badge badge-info">Status: {order.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </article>
              ))
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

export default PageOrders;