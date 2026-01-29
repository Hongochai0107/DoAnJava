import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const { user, isLoggedIn, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [stats, setStats] = useState({
        totalOrders: 0,
        wishlists: 0,
        awaitingDelivery: 0,
        deliveredItems: 0
    });

    useEffect(() => {
        if (user && user.id) {
            setStats({
                totalOrders: 38,
                wishlists: 5,
                awaitingDelivery: 12,
                deliveredItems: 50
            });
            
            setOrders([
                {
                    id: 1,
                    date: '12.09.2019',
                    name: 'Great book name goes here',
                    status: 'Order confirmed',
                    image: require('../assets/images/items/1.jpg')
                },
                {
                    id: 2,
                    date: '12.09.2019',
                    name: 'How to be rich',
                    status: 'Departured',
                    image: require('../assets/images/items/2.jpg')
                }
            ]);
        }
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!isLoggedIn || !user) {
        return (
            <div className="container mt-5">
                <div className="alert alert-warning">
                    <h4>Bạn chưa đăng nhập</h4>
                    <p>Vui lòng đăng nhập để xem thông tin profile.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/login')}>
                        Đăng nhập
                    </button>
                </div>
            </div>
        );
    }

    return (
        <section className="section-content padding-y bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <h2 className="mb-0">My account</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <aside className="col-md-3">
                        <nav className="list-group">
                            <a className="list-group-item active" href="/profile">Account overview</a>
                            <a className="list-group-item" href="/address">My Address</a>
                            <a className="list-group-item" href="/orders">My Orders</a>
                            <a className="list-group-item" href="/wishlist">My wishlist</a>
                            <a className="list-group-item" href="/seller">My Selling Items</a>
                            <a className="list-group-item" href="/setting">Settings</a>
                            <a className="list-group-item" href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>Log out</a>
                        </nav>
                    </aside>

                    <main className="col-md-9">
                        <article className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h5 className="card-title mb-4">
                                            Mr. {user.fullName || user.username || 'User'}
                                        </h5>
                                        <p className="text-muted">
                                            <i className="fa fa-envelope"></i> {user.email || 'myloginname@gmail.com'}
                                        </p>
                                        <button className="btn btn-light btn-sm" onClick={() => navigate('/setting')}>
                                            <i className="fa fa-edit"></i> Edit
                                        </button>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <img 
                                            src={require('../assets/images/avatars/avatar1.jpg')} 
                                            className="img-fluid rounded-circle border" 
                                            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                                            alt="Avatar"
                                        />
                                    </div>
                                </div>

                                <hr />

                                <div className="row mb-3">
                                    <div className="col-12">
                                        <p className="text-muted">
                                            <i className="fa fa-map-marker-alt"></i> My address: {user.address || 'Tashkent city, Street name, Building 123, House 321'}
                                            <a href="/address" className="ml-2">Edit</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="row text-center mt-4">
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="stats-card">
                                            <h3>{stats.totalOrders}</h3>
                                            <p>Orders</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="stats-card">
                                            <h3>{stats.wishlists}</h3>
                                            <p>Wishlists</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="stats-card">
                                            <h3>{stats.awaitingDelivery}</h3>
                                            <p>Awaiting delivery</p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-6 mb-3">
                                        <div className="stats-card">
                                            <h3>{stats.deliveredItems}</h3>
                                            <p>Delivered items</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <article className="card">
                            <div className="card-body">
                                <h5 className="card-title mb-4">Recent orders</h5>
                                <div className="row">
                                    {orders.map((order) => (
                                        <div key={order.id} className="col-md-6 mb-4">
                                            <div className="card hover-lift">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-4">
                                                            <img 
                                                                src={order.image} 
                                                                className="img-fluid" 
                                                                alt={order.name}
                                                                style={{ width: '100%', height: 'auto' }}
                                                            />
                                                        </div>
                                                        <div className="col-8">
                                                            <p className="text-muted mb-1">
                                                                <i className="fa fa-calendar"></i> {order.date}
                                                            </p>
                                                            <h6 className="mb-2">{order.name}</h6>
                                                            <p className={`mb-0 ${order.status === 'Order confirmed' ? 'text-success' : 'text-info'}`}>
                                                                {order.status}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default Profile;