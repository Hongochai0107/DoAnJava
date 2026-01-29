import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const PageSetting = () => {
    const { user, isLoggedIn, updateUser, logout } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({
                fullName: user.fullName || user.name || '',
                email: user.email || '',
                phone: user.phone || user.phoneNumber || '',
                address: user.address || '',
                city: user.city || '',
                country: user.country || ''
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        updateUser(formData);
        setMessage('Thông tin đã được cập nhật thành công!');
        setTimeout(() => setMessage(''), 3000);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!isLoggedIn) {
        return (
            <div className="container mt-5">
                <div className="alert alert-warning">
                    <h4>Bạn chưa đăng nhập</h4>
                    <p>Vui lòng đăng nhập để xem cài đặt.</p>
                    <button className="btn btn-primary" onClick={() => navigate('/login')}>
                        Đăng nhập
                    </button>
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
                            <a className="list-group-item" href="/profile"> Tổng quan tài khoản </a>
                            <a className="list-group-item" href="/address"> Địa chỉ của tôi </a>
                            <a className="list-group-item" href="/orders"> Đơn hàng của tôi </a>
                            <a className="list-group-item" href="/wishlist"> Danh sách yêu thích </a>
                            <a className="list-group-item" href="/seller"> Sản phẩm đang bán </a>
                            <a className="list-group-item active" href="/setting"> Cài đặt </a>
                            <button 
                                className="list-group-item list-group-item-action text-left" 
                                onClick={handleLogout}
                                style={{ border: 'none', cursor: 'pointer', background: 'transparent' }}
                            > 
                                Đăng xuất 
                            </button>
                        </nav>
                    </aside>
                    <main className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {message && <div className="alert alert-success">{message}</div>}
                                <form className="row" onSubmit={handleSave}>
                                    <div className="col-md-9">
                                        <div className="form-row">
                                            <div className="col form-group">
                                                <label>Họ và tên</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col form-group">
                                                <label>Email</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Quốc gia</label>
                                                <select 
                                                    className="form-control"
                                                    name="country"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Chọn...</option>
                                                    <option value="Vietnam">Việt Nam</option>
                                                    <option value="USA">United States</option>
                                                    <option value="China">China</option>
                                                    <option value="Japan">Japan</option>
                                                    <option value="Korea">Korea</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Thành phố</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Địa chỉ</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Số điện thoại</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Lưu</button>
                                    </div>
                                    <div className="col-md">
                                        <img src={require("../../assets/images/avatars/avatar1.jpg")} className="img-md rounded-circle border" alt="Avatar"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default PageSetting;