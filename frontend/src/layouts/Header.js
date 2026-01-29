import React, { useState, useEffect, useContext } from "react";
import { GET_ALL } from "../api/apiService";
import imgus from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
import SearchCategoryResults from "./SearchCategoryResults";
import { useCart } from "./CartContext";
import { UserContext } from "../context/UserContext";

function Header() {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { cartState } = useCart();
    const { user, isLoggedIn, logout } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, []);

    const handleSearch = () => {
        const results = categories.filter(category => category.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchResults(results);
    };

    //soluong

    return (
        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-2 col-lg-3 col-md-12">
                            <a href="/" className="brand-wrap">
                                <img className="logo" src={imgus} alt="Logo" />
                            </a>
                        </div>
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSearch();
                                }}
                                className="search-header btn-info"
                            >
                                <div className="input-group w-100">
                                    <select className="custom-select border-right" name="category_name">
                                        <option value="">All type</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.name}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-info" type="submit">
                                            <i className="fa fa-search"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* Hiển thị kết quả tìm kiếm */}
                            {searchResults.length > 0 && <SearchCategoryResults results={searchResults} />}
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="widgets-wrap float-md-right">
                                <div className="widget-header mr-3">
                                    <a href="/profile" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-user"></i>
                                        </div>
                                        <small className="text"> 
                                            {isLoggedIn ? user?.username || 'Profile' : 'My profile'} 
                                        </small>
                                    </a>
                                </div>
                                {!isLoggedIn ? (
                                    <>
                                        <div className="widget-header mr-3">
                                            <a href="/register" className="widget-view">
                                                <div className="icon-area">
                                                    <i className="fa fa-comment-dots"></i>
                                                </div>
                                                <small className="text"> Register </small>
                                            </a>
                                        </div>
                                        <div className="widget-header mr-3">
                                            <a href="/login" className="widget-view">
                                                <div className="icon-area">
                                                    <i className="fa fa-users"></i>
                                                </div>
                                                <small className="text"> Login </small>
                                            </a>
                                        </div>
                                    </>
                                ) : (
                                    <div className="widget-header mr-3">
                                        <a href="#" onClick={(e) => { e.preventDefault(); logout(); navigate('/login'); }} className="widget-view">
                                            <div className="icon-area">
                                                <i className="fa fa-sign-out-alt"></i>
                                            </div>
                                            <small className="text"> Logout </small>
                                        </a>
                                    </div>
                                )}
                                <div className="widget-header mr-3">
                                    <a href="/orders" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-store"></i>
                                        </div>
                                        <small className="text"> Orders </small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="/shopping-cart" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-shopping-cart"></i>
                                            <span className="notify">{cartState.totalQuantity}</span>
                                        </div>
                                        <small className="text"> Cart </small>
                                    </a>
                                </div>
                                <div className="widget-header">
                                    <a href="/" className="widget-view">
                                        <div className="icon-area">
                                            <i className="fa fa-home"></i>
                                        </div>
                                        <small className="text"> Home </small>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <nav className="navbar navbar-main navbar-expand pl-0">
                        <ul className="navbar-nav flex-wrap">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Danh mục
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {categories.length > 0 &&
                                        categories.map((row) => (
                                            <a
                                                key={row.id}
                                                className="dropdown-item"
                                                href={`/listinggrid?categoryId=${row.id}`}
                                            >
                                                {row.name}
                                            </a>
                                        ))}

                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/listinggrid">Tất cả sản phẩm</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/listinggrid">Sản phẩm</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/listinglarge">Bán chạy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/offers">Khuyến mãi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/wishlist">Yêu thích</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/orders">Đơn hàng</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarMore"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Tài khoản
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarMore">
                                    <a className="dropdown-item" href="/profile">Hồ sơ</a>
                                    <a className="dropdown-item" href="/address">Địa chỉ</a>
                                    <a className="dropdown-item" href="/setting">Cài đặt</a>
                                    <a className="dropdown-item" href="/seller">Bán hàng</a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>




        </header>



    );
}
export default Header;