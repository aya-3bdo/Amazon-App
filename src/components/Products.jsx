import React from "react";
import BigCarousel from "./Carousels-container/BigCarousel";
import MiddleContainer from "./Carousels-container/MiddleContainer";
const Products = () => {
  return (
    <div className="Products mb-3">
      {/* Big carousel & first 2 Carousels */}
      <BigCarousel />
      <MiddleContainer/>      
      {/*  Second Carousels */}

    </div>
     
      
  );
};

export default Products;

