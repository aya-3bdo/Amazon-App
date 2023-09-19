import React from 'react';
import { TopNav } from './TopNav';
import { BottomNav } from './BottomNav';
import "../../styling/header.css";
// import '../../jquery-3.7.1.min.js';
// import '../../pages/JQuery.js';

function Header() {
  return (
    <div id='Header' className='header w-100'>
      <TopNav />
      <BottomNav/>
    </div>
  );
}

export default Header;
