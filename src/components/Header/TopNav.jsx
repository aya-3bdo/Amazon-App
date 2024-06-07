import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../styling/topNav.css";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineLocationMarker, HiOutlineSearch } from "react-icons/hi";
import {
  hanleResizingInput,
  handleShowSignInSliceList,
  handleHideSignInSliceList,
  handleShowSelectWrapperStyle,
  handleRemoveSelectWrapperStyle,
  handleShowLangSliceList,
  handleHideLangSliceList,
} from "../../logic/Utils.js";
import {
  getShoppingCartItems,
  addShoppingCartItem,
} from "../../logic/Cart-slice.js";
export const TopNav = () => {
  const { cartLength } = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCartItems());
    addShoppingCartItem();
  }, [dispatch]);

  // // Handle Resizing select-input
  // const hanleResizingInput = () => {
  //   const selectMenu = document.querySelector("#select-menu");
  //   if (selectMenu.value.length < 4) {
  //     selectMenu.style.width = `${selectMenu.value.length * 17}px`;
  //   } else if (selectMenu.value.length < 7) {
  //     selectMenu.style.width = `${selectMenu.value.length * 14.5}px`;
  //   } else if (selectMenu.value.length <= 14) {
  //     selectMenu.style.width = `${selectMenu.value.length * 11}px`;
  //   } else if (selectMenu.value.length < 20) {
  //     selectMenu.style.width = `${selectMenu.value.length * 10}px`;
  //   } else if (selectMenu.value.length < 35) {
  //     selectMenu.style.width = `${selectMenu.value.length * 8}px`;
  //   }
  // };
  // Show style of select-wrapper

  return (
    <div className="TopStrip d-flex w-100">
      <nav className="navbar navbar-expand-lg top-strip w-100 px-md-0 d-flex flex-nowrap">
        {/*  ** ** ** ** ## ##  Top strip ## ## ** **  ** ** ** */}

        <div className="parent-top-strip  container-fluid mx-1">
          {/*  ** ** ** Left section-- top strip  ** ** ** */}

          <div className="left-section-top-strip d-flex  justify-content-between ">
            {/* Logo slice */}
            <div className="navLogo d-flex  justify-content-center">
              <NavLink to={"/"} className=" d-block justify-content-center">
                <img
                  className="navImg"
                  src="/assets/imgs/amazon-logo-white.png"
                ></img>
              </NavLink>
              <div className="logoText d-flex">
                <span>.eg</span>
              </div>
            </div>

            {/* Location slice */}
            <div className="location d-flex pt-2 pb-1 px-0 ms-2 justify-content-start ">
              <div className="locationIco">
                <HiOutlineLocationMarker />
              </div>
              <div className="locationText  d-flex flex-column">
                <div className="d-flex">
                  <span className="text-capitalize">deliver</span> to
                </div>
                <div className="text-capitalize">egypt</div>
              </div>
            </div>
          </div>

          {/*  ** ** ** middle section-- top strip  ** ** ** */}

          <div className="middle-section-top-strip  pt-1 px-2 px-xlg-0">
            {/* select slice */}

            <div className="left-side-search d-flex border-radius-3">
              <div
                className="select-wrapper d-flex position-relative"
                onClick={() => handleShowSelectWrapperStyle()}
                onBlur={() => handleRemoveSelectWrapperStyle()}
              >
                <select
                  id="select-menu"
                  className="resizeselect d-flex px-2  text-capitalize"
                  onChange={() => hanleResizingInput()}
                >
                  <option defaultValue>all</option>
                  <option>books</option>
                  <option>amazon fashion</option>
                  <option>amazon devices</option>
                  <option>electronics</option>
                  <option>automotive pats & accessories</option>
                  <option>sports</option>
                  <option>health & household & baby care</option>
                  <option>pet supplies</option>
                  <option>office products</option>
                  <option>toys & games</option>
                  <option>tools & home improvements</option>
                  <option>home related</option>
                </select>
                <span className="d-flex align-self-center mb-1  dropDown-icon pe-none">
                  <i className=" fa-solid fa-caret-down "></i>
                </span>
                {/* <select
                  style={{
                    display: "none",
                    visibility: "hidden",
                  }}
                  id="select-width"
                >
                  <option id="option-width"></option>
                </select> */}
              </div>
            </div>

            {/* search input slice */}

            <div className="middle-side-search d-flex me-0 w-100 overflow-hidden">
              <form className="d-flex search-wrapper">
                <input
                  className="form-control d-flex "
                  type="search"
                  placeholder="Search Amazon.eg"
                  aria-label="Search"
                ></input>
              </form>
            </div>

            {/* search button slice */}

            <div className="right-side-search search-ico d-flex  ms-0 ">
              <button className="nav-search-submit-button px-2 " type="submit">
                <HiOutlineSearch />
              </button>
            </div>
          </div>

          {/*  ** ** ** right section-- top strip  ** ** ** */}

          <div className="right-section-top-strip d-flex  align-items-end flex-nowrap  justify-content-between ">
            {/*  Lang slices */}

            <div
              onMouseOver={() => handleShowLangSliceList()}
              onMouseLeave={() => handleHideLangSliceList()}
              className="lang-slice position-relative d-flex flex-row flex-nowrap align-items-end"
            >
              <span id="dropDown-arrow"></span>
              <div id="flag-img">
                <img src="/assets/imgs/icons8-egypt-48.png"></img>
              </div>
              <span className="text-uppercase  d-block lang">en</span>
              <div className="dropdown ms-0 d-flex vertical-align-bottom">
                <button
                  className="btn  dropdown-toggle d-flex "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>

                <ul
                  id="lang-dropdown"
                  className="dropdown-menu m-0 p-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <input type="radio" id="ar" name="lang" value="arabic-ar" />
                    <span className="check-circle mx-2"></span>
                    <label htmlFor="ar">
                      العربية - <span className="text-uppercase">ar</span>
                    </label>
                  </li>
                  <div className="dropdown-divider mx-auto"> </div>

                  <li>
                    <input
                      type="radio"
                      id="en"
                      name="lang"
                      value="english-en"
                    />
                    <span className="check-circle mx-2"></span>
                    <label htmlFor="en">
                      english -<span className="text-uppercase"> en</span>
                    </label>
                  </li>
                  <NavLink className="text-decoration-none ms-4 ps-2" href="#">
                    learn more
                  </NavLink>
                  <div className="dropdown-divider mx-auto"> </div>
                  <li className="d-block mx-3">
                    <img
                      src="/assets/imgs/icons8-egypt-48.png"
                      id="dropDown-img"
                    ></img>
                    <div className="d-inline">
                      <span className="text-capitalize">y</span>
                      ou are shopping on
                    </div>
                    <br />
                    <span className="text-capitalize">amazon</span>.eg
                    <br />
                    <NavLink className="d-block text-decoration-none text-center ">
                      <span className="text-capitalize">change</span>{" "}
                      country/region.
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sign in slice */}

            <div
              className="sign-in-slice position-relative"
              onMouseOver={() => handleShowSignInSliceList()}
              onMouseLeave={() => handleHideSignInSliceList()}
            >
              <div className="d-flex signIn-title pt-0">
                {" "}
                <span className="text-capitalize pe-1">hello, </span>sign in
              </div>
              <div className="signIn-dropDown-menu dropdown d-flex flex-nowrap flex-row position-relative">
                <h6 className="text-capitalize d-block">account & lists</h6>
                <span id="dropDown-arrow-signIn"></span>
                <button
                  className="btn  dropdown-toggle d-flex align-self-center  pe-1"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></button>
                <div
                  id="sign-in-menu"
                  className="dropdown-menu m-0 p-0 "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div
                    className="signIn-btn d-flex flex-column justify-content-center
                  align-items-center lh-lg mt-3 position-relative"
                  >
                    <div className="btn  d-flex justify-content-center align-items-center">
                      <NavLink to="/signin"> sign in</NavLink>
                    </div>
                    <div className="new-customer">
                      new customer?
                      <NavLink
                        to="/createAccount"
                        className="text-decoration-none ps-1"
                      >
                        start here.
                      </NavLink>
                    </div>
                  </div>

                  <div className="dropdown-divider mx-auto"></div>

                  <div className="row d-flex flex-nowrap ">
                    <div className="col-5 left-side ms-3 lh-lg">
                      <span className="d-block">your lists</span>
                      <div className="d-block"> Create a List</div>
                    </div>
                    <div className="col-7 ms-0">
                      <ul>
                        <li className="list-header">your account</li>
                        <li>your account</li>
                        <li>your orders</li>
                        <li>your addresses</li>
                        <li>your lists</li>
                        <li>your recommendations</li>
                        <li>your prime membership</li>
                        <li>your seller account</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Orders slice */}
            <div className="orders-slice px-2 pt-2 pb-1">
              <span className="text-capitalize">orders</span>
            </div>

            {/* Cart slice */}
            <div className="cart-slice d-flex flex-row position relative p-1 ">
              <NavLink to="ShoppingCart" className="text-decoration-none">
                <div className="cart-img d-flex justify-content-center">
                  <img src="/assets/imgs/icons82-shopping-cart-64.png"></img>
                  <span className="cart-items position-absolute d-block ms-2">
                    {cartLength}
                  </span>
                </div>
              </NavLink>
              <div className="text-capitalize d-flex align-self-end">cart</div>
            </div>
          </div>
        </div>
        {/*  ** ** ** ** ## ##  Bottom strip ## ## ** **  ** ** ** */}
      </nav>
    </div>
  );
};
