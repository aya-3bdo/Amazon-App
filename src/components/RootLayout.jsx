import React from "react";
import '../styling/rootLayout.css'
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      
      <div className="header">
      <Header />
      </div>
      <div className="outlet">
        <Outlet/>
      </div>
       <div className="footer">
        <Footer />
      </div>
      
    </div>
  );
};

export default RootLayout;
