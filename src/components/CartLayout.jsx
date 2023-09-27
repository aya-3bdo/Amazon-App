import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import '../styling/cart-layout.css';


export const CartLayout = () => {
//  $(function () {
//    $(' .lang-slice').on('mouseover', () => {
//     $('#lang-dropdown').show();
//     }),
 
//       $(' .lang-slice').on('mouseleave', () => {
//     $('#lang-dropdown').hide();
//     })
// })
  return (
    <div className="CartLayout">
      <div className="cart-Header">
        <Header />
      </div>
      <Outlet />
      <div className="cart-Footer">
        <Footer />
      </div>
    </div>
  );
};
