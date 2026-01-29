import React from 'react'
import "../../assets/js/bootstrap.bundle.min.js"
const Slider = () => (
    <div className="container">

        <section className="section-main padding-y">
            <main className="card">






                <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel1_indicator" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel1_indicator" data-slide-to="1"></li>
                        <li data-target="#carousel1_indicator" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active"  >
                            <img src={require("../../assets/images/banners/slide4.jpeg")} alt="First slide"  style={{ height:"80%" }} />

                        </div>
                        <div className="carousel-item">
                            <img src={require("../../assets/images/banners/slide2.jpg")} alt="Second slide" style={{ height: "80%" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={require("../../assets/images/banners/slide3.jpg")} alt="Third slide" style={{ height: "80%" }} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>




            </main>

        </section>
        {/* 
        <section class="padding-bottom">
            <div class="card card-deal">
                <div class="col-heading content-body">
                    <header class="section-heading">
                        <h3 class="section-title">Deals and offers</h3>
                        <p>Hygiene equipments</p>
                    </header>
                    <div class="timer">
                        <div> <span class="num">04</span> <small>Days</small></div>
                        <div> <span class="num">12</span> <small>Hours</small></div>
                        <div> <span class="num">58</span> <small>Min</small></div>
                        <div> <span class="num">02</span> <small>Sec</small></div>
                    </div>
                </div>
                <div class="row no-gutters items-wrap">
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="#" class="img-wrap">
                                <img src="images/items/3.jpg"/>
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title">Summer clothes</a>
                                <span class="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="#" class="img-wrap">
                                <img src="images/items/4.jpg"/>
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title">Some category</a>
                                <span class="badge badge-danger"> -5% </span>
                            </div>
                        </figure>
                    </div>
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="#" class="img-wrap">
                                <img src="images/items/5.jpg"/>
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title">Another category</a>
                                <span class="badge badge-danger"> -20% </span>
                            </div>
                        </figure>
                    </div>
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="#" class="img-wrap">
                                <img src="images/items/6.jpg"/>
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title">Home apparel</a>
                                <span class="badge badge-danger"> -15% </span>
                            </div>
                        </figure>
                    </div>
                    <div class="col-md col-6">
                        <figure class="card-product-grid card-sm">
                            <a href="#" class="img-wrap">
                                <img src="images/items/7.jpg"/>
                            </a>
                            <div class="text-wrap p-3">
                                <a href="#" class="title text-truncate">Smart watches</a>
                                <span class="badge badge-danger"> -10% </span>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>

        </section>

        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Apparel</h4>
            </header>

            <div class="card card-home-category">
                <div class="row no-gutters">
                    <div class="col-md-3">

                        <div class="home-category-banner bg-light-orange">
                            <h5 class="title">Best trending clothes only for summer</h5>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
                            <img src="images/items/2.jpg" class="img-bg"/>
                        </div>

                    </div>
                    <div class="col-md-9">
                        <ul class="row no-gutters bordered-cols">
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Well made women clothes with trending collection  </h6>
                                        <img class="img-sm float-right" src="images/items/1.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Great clothes with trending collection  </h6>
                                        <img class="img-sm float-right" src="images/items/2.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Beijing, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Demo clothes with sample collection  </h6>
                                        <img class="img-sm float-right" src="images/items/3.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/4.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/5.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> London, Britain</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/6.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Well made clothes with trending collection </h6>
                                        <img class="img-sm float-right" src="images/items/7.jpg"/>
                                            <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>

                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen interior  stuff collection   </h6>
                                        <img class="img-sm float-right" src="images/items/6.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="padding-bottom">
            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Electronics</h4>
            </header>

            <div class="card card-home-category">
                <div class="row no-gutters">
                    <div class="col-md-3">

                        <div class="home-category-banner bg-light-orange">
                            <h5 class="title">Machinery items for manufacturers</h5>
                            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <a href="#" class="btn btn-outline-primary rounded-pill">Source now</a>
                            <img src="images/items/14.jpg" class="img-bg" />
                        </div>

                    </div>
                    <div class="col-md-9">
                        <ul class="row no-gutters bordered-cols">
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Well made electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/7.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tokyo, Japan</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Another demo text for item stuff goes here  </h6>
                                        <img class="img-sm float-right" src="images/items/8.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Hong Kong, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/9.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Tashkent, Uzb</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Group of electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/10.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/11.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/12.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/1.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>

                                    </div>
                                </a>
                            </li>
                            <li class="col-6 col-lg-3 col-md-4">
                                <a href="#" class="item">
                                    <div class="card-body">
                                        <h6 class="title">Home and kitchen electronic  stuff collection  </h6>
                                        <img class="img-sm float-right" src="images/items/2.jpg" />
                                        <p class="text-muted"><i class="fa fa-map-marker-alt"></i> Guanjou, China</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>



        <section class="padding-bottom">

            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Request for Quotation</h4>
            </header>

            <div class="row">
                <div class="col-md-8">
                    <div class="card-banner banner-quote overlay-gradient" style={{background_image:"url('images/banners/banner9.jpg');"}}>
                        <div class="card-img-overlay white">
                            <h3 class="card-title">An easy way to send request to suppliers</h3>
                            <p class="card-text" style={{max_width:"400px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt.</p>
                            <a href="" class="btn btn-primary rounded-pill">Learn more</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="card card-body">
                        <h4 class="title py-3">One Request, Multiple Quotes</h4>
                        <form>
                            <div class="form-group">
                                <input class="form-control" name="" placeholder="What are you looking for?" type="text" />
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <input class="form-control" placeholder="Quantity" name="" type="text" />

                                    <select class="custom-select form-control">
                                        <option>Pieces</option>
                                        <option>Litres</option>
                                        <option>Tons</option>
                                        <option>Gramms</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group text-muted">
                                <p>Select template type:</p>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option1" />
                                    <span class="form-check-label">Request price</span>
                                </label>
                                <label class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" value="option2" />
                                    <span class="form-check-label">Request a sample</span>
                                </label>
                            </div>
                            <div class="form-group">
                                <button class="btn btn-warning">Request for quote</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>

        <section class="padding-bottom-sm">

            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Recommended items</h4>
            </header>

            <div class="row row-sm">
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/1.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/2.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/3.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Great product name here</a>
                            <div class="price mt-1">$56.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/4.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/5.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/6.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/7.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Great product name here</a>
                            <div class="price mt-1">$56.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/9.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/4.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/5.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Just another product name</a>
                            <div class="price mt-1">$179.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/6.jpg" /> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Some item name here</a>
                            <div class="price mt-1">$280.00</div>
                        </figcaption>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-md-4 col-6">
                    <div class="card card-sm card-product-grid">
                        <a href="#" class="img-wrap"> <img src="images/items/7.jpg"/> </a>
                        <figcaption class="info-wrap">
                            <a href="#" class="title">Great product name here</a>
                            <div class="price mt-1">$56.00</div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </section>

        <section class="padding-bottom">

            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Trade services</h4>
            </header>

            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="images/posts/1.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Trade Assurance</h6>
                            <p class="small text-uppercase text-muted">Order protection</p>
                        </div>
                    </article>
                </div>
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="images/posts/2.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Pay anytime</h6>
                            <p class="small text-uppercase text-muted">Finance solution</p>
                        </div>
                    </article>
                </div>
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="images/posts/3.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Inspection solution</h6>
                            <p class="small text-uppercase text-muted">Easy Inspection</p>
                        </div>
                    </article>
                </div>
                <div class="col-md-3 col-sm-6">
                    <article class="card card-post">
                        <img src="images/posts/4.jpg" class="card-img-top" />
                        <div class="card-body">
                            <h6 class="title">Ocean and Air Shipping</h6>
                            <p class="small text-uppercase text-muted">Logistic services</p>
                        </div>
                    </article>
                </div>
            </div>

        </section>

        <section class="padding-bottom">

            <header class="section-heading heading-line">
                <h4 class="title-section text-uppercase">Choose region</h4>
            </header>

            <ul class="row mt-4">
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/CN.png" /> <span>China</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/DE.png" /> <span>Germany</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/AU.png" /> <span>Australia</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/RU.png" /> <span>Russia</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/IN.png" /> <span>India</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/GB.png" /> <span>England</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/TR.png" /> <span>Turkey</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <img class="icon-flag-sm" src="images/icons/flags/UZ.png" /> <span>Uzbekistan</span> </a></li>
                <li class="col-md col-6"><a href="#" class="icontext"> <i class="mr-3 fa fa-ellipsis-h"></i> <span>More regions</span> </a></li>
            </ul>
        </section> */}

        {/* <article class="my-4">
            <img src="images/banners/ad-sm.png" class="w-100" />
        </article> */}
    </div>

);

export default Slider


