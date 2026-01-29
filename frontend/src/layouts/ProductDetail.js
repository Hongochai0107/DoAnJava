// ProductDetail.js
import Subscribe from "../pages/home/Subscribe";
import Content from "../pages/productdetail/Content";
import Description from "../pages/productdetail/Description";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
   const navigate = useNavigate();
   const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
   const [cartItems, setCartItems] = useState(initialCartItems);



   useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]);

   return (
      <div className="container">
    
      <Content  setCartItems={setCartItems} cartItems={cartItems} />

         <Description />
         <Subscribe />
      </div>
   );
};

export default ProductDetail;
