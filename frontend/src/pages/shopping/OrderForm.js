// OrderForm.js
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import styles from './OrderForm.module.css';

const OrderForm = ({ totalPrice, cartItems = [], onSuccess }) => {
  const { user } = useContext(UserContext);
  const [orderData, setOrderData] = useState({
    address: user?.address || "",
    email: user?.email || "",
    fullname: user?.fullName || user?.name || "",
    note: "",
    order_date: new Date().toISOString(),
    phone_number: user?.phone || user?.phoneNumber || "",
    status: 0,
    total_money: totalPrice,
  });

  useEffect(() => {
    setOrderData((prev) => ({
      ...prev,
      total_money: totalPrice,
    }));
  }, [totalPrice]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: Date.now(),
      userId: user?.id || null,
      username: user?.username || "guest",
      orderDate: orderData.order_date,
      address: orderData.address,
      phone: orderData.phone_number,
      email: orderData.email || user?.email,
      fullname: orderData.fullname,
      note: orderData.note,
      status: orderData.status === 0 ? "Pending" : orderData.status === 1 ? "Processing" : "Shipped",
      total: totalPrice,
      items: cartItems,
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [newOrder, ...existingOrders];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    
    console.log("Order saved:", newOrder);
    console.log("Total orders:", updatedOrders.length);

    axios.post("http://localhost:8080/api/orders", orderData)
      .then(() => {
        alert("Đặt hàng thành công!");
        if (onSuccess) onSuccess();
      })
      .catch(() => {
        alert("Đơn hàng đã được lưu thành công!");
        if (onSuccess) onSuccess();
      });
  };

  return (
    <div className={styles['order-form-container']}>
      <h2 className={styles['order-form-title']}>Place an Order</h2>
      <form className={styles['order-form']} onSubmit={handleSubmit}>
        <label className={styles['form-label']}>Full Name:</label>
        <input className={styles['form-input']} type="text" name="fullname" value={orderData.fullname} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Email:</label>
        <input className={styles['form-input']} type="email" name="email" value={orderData.email} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Address:</label>
        <input className={styles['form-input']} type="text" name="address" value={orderData.address} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Phone Number:</label>
        <input className={styles['form-input']} type="text" name="phone_number" value={orderData.phone_number} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Note:</label>
        <textarea className={styles['form-textarea']} name="note" value={orderData.note} onChange={handleInputChange} />

        <label className={styles['form-label']}>Order Date:</label>
        <input className={styles['form-input']} type="text" name="order_date" value={orderData.order_date} onChange={handleInputChange} readOnly />
        
        <label className={styles['form-label']}>Total Money:</label>
        <input className={styles['form-input']} type="number" name="total_money" value={totalPrice} readOnly />
        
        <label className={styles['form-label']}>Status:</label>
        <select className={styles['form-select']} name="status" value={orderData.status} onChange={handleInputChange} required>
          <option value={0}>Pending</option>
          <option value={1}>Processing</option>
          <option value={2}>Shipped</option>
          {/* Thêm các tình trạng khác nếu cần */}
        </select>

        <button className={styles['form-button']} type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
