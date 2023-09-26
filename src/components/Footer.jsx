import React from "react";
import "../styling/footer.css";
import { Link, NavLink } from "react-router-dom";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer-container d-flex flex-column">
      <section className="fir-section">
        <div className="first-row text-center">
          <Link id="backToTop">Back to top</Link>
        </div>
        <div className="container mx-auto">
          <div className="second-row row pt-3 mx-auto mt-3">
            <div className="col-3">
              <ul className="list">
                <li>Get to Know Us</li>
                <li>
                  <Link>about amazon</Link>
                </li>
                <li>
                  <Link>careers</Link>
                </li>
                <li>
                  <Link>amazon scienence</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list">
                <li>Shop with Us</li>
                <li>
                  <Link>your account</Link>
                </li>
                <li>
                  <Link>your orders</Link>
                </li>
                <li>
                  <Link>your address</Link>
                </li>
                <li>
                  <Link>your list</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list">
                <li>Make Money with Us</li>
                <li>
                  <Link>protect and build your brand</Link>
                </li>
                <li>
                  <Link>advertise your products</Link>
                </li>
                <li>
                  <Link>sell on amazon</Link>
                </li>
                <li>
                  <Link>fulfillment by amazon</Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="list">
                <li>Let Us Help You</li>
                <li>
                  <Link>help</Link>
                </li>
                <li>
                  <Link>shipping & delivery</Link>
                </li>
                <li>
                  <Link>returns & replacements</Link>
                </li>
                <li>
                  <Link>amazon app download</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Footer-divider"></div>
        <div className="third-row mx-auto d-flex justify-content-center align-items-center">
          <Link className=" position-relative">
            <div className="nav-logo-base me-5"></div>
          </Link>
          <div className="lang-country-container ms-5 d-flex mb-3">
            <div className="select-lang  me-2">
              <div className=" footer-lang-slice position-relative p-2 ps-1 me-1 d-flex flex-row flex-nowrap align-items-end ">
                      <span id="dropDown-arrow"></span>

                <div id="globe-lang">
                  <BsGlobe />
                </div>
                <span className="ms-2 text-capitalize  d-block lang">
                  english
                </span>
                <div className="dropdown ms-0 d-flex vertical-align-bottom position-relative">
                  <button
                    className="btn  dropdown-toggle d-flex "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></button>
                  <div id="top-arrow">
                    <MdOutlineArrowDropUp />
                  </div>
                  <ul
                    className="dropdown-menu m-0 p-0 "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="position-relative">
                      <input
                        type="radio"
                        id="Ar"
                        name="lang"
                        value="arabic-ar"
                      />
                      <span className="check-circle mx-2"></span>
                      <label htmlFor="ar">
                        العربية - <span className="text-uppercase">ar</span>
                      </label>
                    </li>
                    <div className="dropdown-divider mx-auto"> </div>

                    <li>
                      <input
                        type="radio"
                        id="En"
                        name="lang"
                        value="english-en"
                      />
                      <span className="check-circle mx-2"></span>
                      <label htmlFor="en">
                        English -<span className="text-uppercase"> en</span>
                      </label>
                    </li>
                    <NavLink
                      className="text-decoration-none ms-4 ps-2"
                      href="#"
                    >
                      learn more
                    </NavLink>
                    <div className="dropdown-divider mx-auto"> </div>
                    <li className="d-block mx-3">
                      <img
                        src="/src/assets/imgs/icons8-egypt-48.png"
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
            </div>
            <div className="footer-country ms-1   d-flex align-items-center justify-content-start">
              <Link>
                <span className="footer-Egy-flag me-2"></span>
                <span>Egypt</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className=" second-section">
        <div className="container mx-auto pt-4">
          <div className="row">
            <Link className="col-2">
              <span className="first-link">
                <span className="d-block">Amazon</span>
                Advertising</span>
              <span>Find, attract, and engage customers</span>
            </Link>
            <Link className="col-2">
              <span>Sell on Amazon.ae </span>
              <span>Sell globally, start with UAE </span>
            </Link>
            <Link className="col-2">
              <span>Sell on Amazon.sa</span>
              <span>Sell globally, start with Saudi Arabia </span>
            </Link>
            <Link className="col-2">
              <span>Amazon Web Services</span>
              <span>Scalable Cloud Computing Services</span>
            </Link>
            <Link className="col-2">
              <span>Goodreads</span>
              <span>Book reviews & recommendations</span>
            </Link>
          </div>
        </div>

        <div className="container mx-auto my-3">
          <div className="row mb-3">
            <Link className="col-2">
              <span className="d-block">Audible</span>
              <span> Download Audio Books</span>
            </Link>
            <Link className="col-2">
              <span>IMDb</span>
              <span>Movies, TV & Celebrities</span>
            </Link>
            <Link className="col-2">
              <span>Alexa</span>
              <span>Actionable Analytics for the Web</span>
            </Link>
            <Link className="col-2">
              <span>Shopbop</span>
              <span>Designer Fashion Brands</span>
            </Link>
          </div>

          <div className="last-div text-center">
            <span className="me-2 pe-1">Conditions of Use & Sale</span>
            <span className="me-2 pe-1">
              Privacy Notice
            </span>
             <span> Interest-Based Ads</span>
           <span id="copyright" className="d-block"> ©1996&#727;2023, Amazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
