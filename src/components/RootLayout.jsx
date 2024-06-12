import React from "react";
import '../styling/rootLayout.css'
import Header from "./Header/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const outletStyle = {
  minHeight: '3809px',
  maxHeight: 'none',
  height: 'auto',
  overflowY: 'visible',
  position: 'relative'
}

const RootLayout = () => {
  return (
    <>
    <div className="rootLayout position-relative overflow-hidden">
      
      <div className="header">
      <Header />
      </div>
      <div style={outletStyle} className="outlet">
        <Outlet/>
      </div>
       <div className="footer">
        <Footer />
      </div>
      
      </div>
      
    </>
      
  );
};

export default RootLayout;
