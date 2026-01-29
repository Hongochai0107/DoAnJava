import React, { useEffect, useState } from "react";
import Slider from "../pages/home/Slider";
import Deal from "../pages/home/Deal";
import Apparel from "../pages/home/Apparel";
import Electronics from "../pages/home/Electronics";
import Items from "../pages/home/Items";
import Request from "../pages/home/Request";
import Services from "../pages/home/Services";
import Region from "../pages/home/Region";
import Subscribe from "../pages/home/Subscribe";
import AllProduct from "../pages/home/AllProduct";

import { GET_ALL } from "../api/apiService";
import CurrentDateTime from "../pages/home/CurrentDateTime";
import Sale from "../pages/home/Sale";
function Home() {
    const [categories, setCategories] = useState([]);

    
    useEffect(() => {
        GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, [categories]);
    const filteredCategories = categories.filter(
        (category) => category.isHome === 1
    );


    return (
        <div className="container">
            <Slider />
            <CurrentDateTime/>
            <Sale/>
            <Deal />
            <AllProduct />
            <Request />
            {filteredCategories.length > 0 &&
                filteredCategories.map((row) => (
                    <Items categoryName={row.name} categoryId={row.id} />
                ))}
            <AllProduct />
            <Apparel />
            <AllProduct />
            <Electronics />
            <Services />
            <Region />
            <Subscribe />
        </div>
    );
}
export default Home