import React from "react";
import BigCarousel from "./BigCarousel";
import MiddleCarousels from "./MiddleCarousels";
import FirstCarousels from "./FirstCarousels";

const Products = () => {
  return (
    <div className="Products m-0 p-0 position-relative">
      {/* Big carousel & first 2 Carousels */}
      <BigCarousel />
      <FirstCarousels/>
      <MiddleCarousels/>
      
      {/*  Second Carousels */}
      

    </div>
     
      
  );
};

export default Products;

