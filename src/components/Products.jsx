import React from "react";
import BigCarousel from "./BigCarousel";
import MiddleContainer from "./MiddleContainer";
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

