import React, { useState, useEffect } from "react";

const Deal = () => {
  const [currentTime, setCurrentTime] = useState({
    currentDay: 0,
    currentMonth: 0,
    currentYear: 0,
    currentHour: 0,
    currentMinute: 0,
    currentSecond: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        currentDay: now.getDate(),
        currentMonth: now.getMonth() + 1,
        currentYear: now.getFullYear(),
        currentHour: now.getHours(),
        currentMinute: now.getMinutes(),
        currentSecond: now.getSeconds(),
      });
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the first render
    return (
        <section className="padding-bottom">
        <div className="card card-deal">
          <div className="row">
            <div className="row-heading content-body">
              <header className="section-heading">
                <h3 className="section-title">Khung giờ vàng</h3>
                <p>giảm giá bất ngờ</p>
              </header>
              <div className="timer">
                <div>
                  <span className="num">{currentTime.currentDay}</span> <small>Ngày</small>
                </div>
                <div>
                  <span className="num">{currentTime.currentHour}</span> <small>Giờ</small>
                </div>
                <div>
                  <span className="num">{currentTime.currentMinute}</span> <small>Phút</small>
                </div>
                <div>
                  <span className="num">{currentTime.currentSecond}</span> <small>Giây</small>
                </div>
              </div>
            </div>
                    <div class="row col-8 no-gutters items-wrap">
                        <div class="col-md col-6" >
                            <figure class="card-product-grid card-sm">
                                <a href="http://localhost:3000/product-detail" class="img-wrap">
                                    <img src={require("../../assets/images/items/3.jpg")} alt="#" />
                                </a>
                                <div class="text-wrap p-3">
                                    <a href="http://localhost:3000/product-detail" class="title">Nước hoa SexyMan</a>
                                    <span class="badge badge-danger"> -20% </span>
                                </div>
                            </figure>
                        </div>
                        <div class="col-md col-6">
                            <figure class="card-product-grid card-sm">
                                <a href="http://localhost:3000/product-detail" class="img-wrap">
                                    <img src={require("../../assets/images/items/4.jpg")} alt="#" />
                                </a>
                                <div class="text-wrap p-3">
                                    <a href="#" class="title">Nước hoa SexyMan</a>
                                    <span class="badge badge-danger"> -5% </span>
                                </div>
                            </figure>
                        </div>
                        <div class="col-md col-6">
                            <figure class="card-product-grid card-sm">
                                <a href="#" class="img-wrap">
                                    <img src={require("../../assets/images/items/5.jpg")} alt="#" />
                                </a>
                                <div class="text-wrap p-3">
                                    <a href="#" class="title">Nước hoa SexyMan</a>
                                    <span class="badge badge-danger"> -20% </span>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>


            </div>




        </section>
    );
};
export default Deal