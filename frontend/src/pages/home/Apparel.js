import React from "react";

const Apparel = () => (
    
    <section class="padding-bottom">
        {/* <header class="section-heading heading-line">
            <h4 class="title-section text-uppercase">Apparel</h4>
        </header>

        <div class="card card-home-category">
            <div class="row no-gutters">
                <div class="col-md-3">

                    <div class="home-category-banner bg-light-orange">
                        <h5 class="title">Dòng nước hoa mới nhất cho mùa hè</h5>
                        <p>Dòng nước hoa mới nhất cho mùa hè dành cho mọi lứa tuổi . </p>
                        <a href="http://localhost:3000/product-detail" class="btn btn-outline-primary rounded-pill">Source now</a>
                        <img class="img-bg" src={require("../../assets/images/items/2.jpg")}  />

                    </div>

                </div>
                <div class="col-md-9">
                    <ul class="row no-gutters bordered-cols">
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè</h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/1.jpg")} alt="http://localhost:3000/product-detail"  />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè </h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/2.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Beijing, China</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè</h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/3.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè</h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/4.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè</h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/5.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> London, Britain</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè</h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/6.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè </h6>
                                    <img class="img-sm float-right"  src={require("../../assets/images/items/7.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>

                                </div>
                            </a>
                        </li>
                        <li class="col-6 col-lg-3 col-md-4">
                            <a href="http://localhost:3000/product-detail" class="item">
                                <div class="card-body">
                                    <h6 class="title">Dòng nước hoa mới nhất cho mùa hè</h6>
                                    <img class="img-sm float-right" src={require("../../assets/images/items/8.jpg")} alt="http://localhost:3000/product-detail" />

                                    <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> */}
         <div class="card card-deal">
            <div class="row">
                <div class="row-heading content-body">
                    <header class="section-heading">
                        <h3 class="section-title">Sản Phẩm Bán Chạy</h3>
                        <p>Sản phẩm được ưa chuộng trong 1 tháng qua</p>
                    </header>
               
                </div>
                <div class="row col-8 no-gutters items-wrap">
                    <div class="col-md col-6" >
                        <figure class="card-product-grid card-sm">
                            <a href="http://localhost:3000/product-detail" class="img-wrap">
                                <img src={require("../../assets/images/items/coco1.jpg")} alt="#" />
                            </a>
                            <div class="text-wrap p-3">
                                <a href="http://localhost:3000/product-detail" class="title">Nước hoa CoCo</a>
                                <span class="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="http://localhost:3000/product-detail" class="img-wrap">
                                <img src={require("../../assets/images/items/coco2.jpg")} alt="#" />
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title">Nước hoa CoCo</a>
                                <span class="badge badge-danger"> -5% </span>
                            </div>
                        </figure>
                    </div>
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="#" class="img-wrap">
                                <img src={require("../../assets/images/items/coco7.jpg")} alt="#" />
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title">Nước hoa CoCo</a>
                                <span class="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="image-container">
            <div class="text-overlay">

            </div>
            <img src={require("../../assets/images/banners/slide5.jpg")} style={{ height: '100%', width: '100%' }} />
            <div class="button-container">
                <button class="button">CHANNEL</button>


            </div>
        </div>
           
        </div>

    </section>
);

export default Apparel