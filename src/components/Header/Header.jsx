import React from "react";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";
import "../../styling/header.css";

function Header() {
  

  return (
    <div id="Header" className="header w-100">
      <TopNav />
      <BottomNav />
    </div>
  );
}

export default Header;
