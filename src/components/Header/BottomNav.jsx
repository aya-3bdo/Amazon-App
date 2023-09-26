import React from "react";
import "../../styling/bottomNav.css";
import { NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";

export const BottomNav = () => {
  return (
    <div className="BottomStrip d-flex w-100">
      <nav className="navbar navbar-expand   px-md-0 d-flex justify-content-start text-capitalize flex-nowrap container-fluid py-0">
        <ul className="navbar-nav ms-3 d-flex align-items-end ">
          <li className="all d-flex">
            <NavLink className="navbar-brand" to="#">
              <h6 className="fs-5 fw-bolder"><HiBars3 /></h6> all
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link">today's Deals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              mobile phones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="#">
              help
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">electronics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">applications</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">video Games</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">prime</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">fashion</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">your amazon.eg</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">toys & games</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">perfumes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">coupons</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link ">sell</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
