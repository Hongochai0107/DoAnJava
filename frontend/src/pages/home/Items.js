import React, { useEffect, useState } from "react";
import { GET_ALL } from "../../api/apiService";
import startsActive from "../../assets/images/icons/stars-active.svg";
import startsDisable from "../../assets/images/icons/starts-disable.svg";
import { Link } from "react-router-dom";
const cardTextStyle = {
	maxWidth: "80%",
};

const handleItemClick = () => {
	// Cuộn lên đầu trang khi bấm vào sản phẩm
	window.scrollTo(0, 0);
};

const Items = (category) => {
	const { categoryName, categoryId } = category;
	const [products, setProducts] = useState([]);


	useEffect(() => {
		GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) =>
			setProducts(item.data)
		);
	}, [categoryId]);


	return (
		<section class="padding-bottom">
			<header class="section-heading mb-4">
				<h3 class="title-section">{categoryName}</h3>
			</header>

			<div class="row">
				{products.length > 0 &&
					products.map((row) => (
						<div class="col-xl-3 col-lg-3 col-md-4 col-6" key={row.id}>
							<div class="card card-product-grid">
								<Link to={`/product-detail?productId=${row.id}`}  class="img-wrap">
									<img src={`./images/items/${row.thumbnail}`} onClick={handleItemClick} />{" "}
								</Link>
								<figcaption class="info-wrap">
									<ul class="rating-stars mb-1">
										<li style={{ cardTextStyle }} class="stars-active">
											<img src={startsActive} alt="" />
										</li>
										<li>
											<img src={startsDisable} alt="" />
										</li>
									</ul>
									<div>
										<Link to={`/product-detail?productId=${row.id}`} onClick={handleItemClick} class="title">
											{row.title}

										</Link>
									</div>
									<div class="price h5 mt-2">Giá:{row.price}$</div>
									<div class="price h5 mt-2">Sale:{row.discount}$</div>
								</figcaption>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};
export default Items;