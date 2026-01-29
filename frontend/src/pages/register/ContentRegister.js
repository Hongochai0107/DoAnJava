// import React from "react";

// const ContentRegister = () => (
//     <section class="section-content padding-y">

//         <div class="card mx-auto" style={{ width: "520px" }} >
//             <article class="card-body">
//                 <header class="mb-4"><h4 class="card-title">Sign up</h4></header>
//                 <form>
//                     <div class="form-row">
//                         <div class="col form-group">
//                             <label>First name</label>
//                             <input type="text" class="form-control" placeholder="" />
//                         </div>
//                         <div class="col form-group">
//                             <label>Last name</label>
//                             <input type="text" class="form-control" placeholder="" />
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <label>Email</label>
//                         <input type="email" class="form-control" placeholder="" />
//                         <small class="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div class="form-group">
//                         <label class="custom-control custom-radio custom-control-inline">
//                             <input class="custom-control-input" type="radio" name="gender" value="option1" />
//                             <span class="custom-control-label"> Male </span>
//                         </label>
//                         <label class="custom-control custom-radio custom-control-inline">
//                             <input class="custom-control-input" type="radio" name="gender" value="option2" />
//                             <span class="custom-control-label"> Female </span>
//                         </label>
//                     </div>
//                     <div class="form-row">
//                         <div class="form-group col-md-6">
//                             <label>City</label>
//                             <input type="text" class="form-control" />
//                         </div>
//                         <div class="form-group col-md-6">
//                             <label>Country</label>
//                             <select id="inputState" class="form-control">
//                                 <option> Choose...</option>
//                                 <option>Uzbekistan</option>
//                                 <option>Russia</option>
//                                 <option selected="">United States</option>
//                                 <option>India</option>
//                                 <option>Afganistan</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="form-row">
//                         <div class="form-group col-md-6">
//                             <label>Create password</label>
//                             <input class="form-control" type="password" />
//                         </div>
//                         <div class="form-group col-md-6">
//                             <label>Repeat password</label>
//                             <input class="form-control" type="password" />
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <button type="submit" class="btn btn-primary btn-block"> Register  </button>
//                     </div>
//                     <div class="form-group">
//                         <label class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input" checked="" /> <div class="custom-control-label"> I am agree with <a href="/">terms and contitions</a>  </div> </label>
//                     </div>
//                 </form>
//             </article>
//         </div>
//         <p class="text-center mt-4">Have an account? <a href="/">Log In</a></p>




//     </section>
// );
// export default ContentRegister





// 

// import React, { useState } from 'react';

// const ContentRegister = () => {
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         email: ''
//     });
//     const [message, setMessage] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch("http://localhost:8080/api/users/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.status === 200) {
//                 setMessage("Registration successful!");
//             } else {
//                 setMessage("Registration failed.");
//             }
//         } catch (error) {
//             setMessage("An error occurred: " + error.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username:</label>
//                     <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Password:</label>
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//                 </div>
//                 <div>
//                     <label>Email:</label>
//                     <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default ContentRegister;



// RegistrationForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const [user, setUser] = useState({ fullname: '', username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users', user);
            console.log('Registration successful:', response.data);
            // Chuyển hướng đến trang chủ sau khi đăng ký thành công
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
            setError('Đăng ký không thành công. Hãy thử lại.');
        }
    };




    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Đăng Ký</h2>
                            <form>
                                <div className="form-group">
                                    <label>Họ và tên:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={user.fullname}
                                        onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                                    />
                                </div>
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
                                <button type="button" className="btn btn-primary btn-block" onClick={handleRegister}>
                                    Đăng Ký
                                </button>
                            </form>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
