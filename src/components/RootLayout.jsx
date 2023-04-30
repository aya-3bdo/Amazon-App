import React from "react";
import '../styling/RootLayout.css'
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      
      <div className="header">
      <Header />
      </div>
      <div className="details">
        <Outlet/>
      </div>
       <div className="footer">
        <Footer />
      </div>
      
    </>
  );
};

export default RootLayout;
