import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const UserLogin = () => {
    const [user, setUser] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', user);
            console.log('Login successful:', response.data);
            // Lưu thông tin người dùng vào context và localStorage
            login(response.data);
            // Chuyển hướng đến trang chủ sau khi đăng nhập thành công
            navigate('/');
        } catch (error) {
            console.error('Login failed:', error.response);
            setError('Tên đăng nhập hoặc mật khẩu không chính xác. Hãy thử lại.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Đăng Nhập</h2>
                            <form>
                                <div className="form-group">
                                    <label>Tên đăng nhập:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.username}
                                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mật khẩu:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </div>
                                {error && <p className="text-danger">{error}</p>}
                                <button type="button" className="btn btn-primary btn-block" onClick={handleLogin}>
                                    Đăng Nhập
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
