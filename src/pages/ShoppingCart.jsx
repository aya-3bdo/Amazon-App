import React from "react";
import "../styling/shopping-cart.css";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <>
      <div className="cart-container">
        <div className="shopping-cart-container m-0 p-1 pe-0 pb-0">
          {/* <div className="empty-shopping-cart fir-slice">
        <img src="../../src/assets/imgs/Shopping-cart.svg" />
        <div className="right-content">
          <h5>Your Amazon cart is empty </h5>
          <Link>Shop today's deals </Link>
          <div className="mt-2">
            <span>
              {" "}
              <Link to="/signin">Sign in to your account</Link>
            </span>
            <span>
              <Link to="/createAccount">Sign up now</Link>
            </span>
          </div>
        </div>
          </div>  */}

          {/* ---------------   full Shopping Cart     ----------------- */}

          <div className="full-shopping-cart fir-slice">
            <div className="sh-title-container">
              <h2>shopping cart</h2>
            </div>
           

            <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct1.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>
              
   <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct7.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

            <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct2.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

              <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct2.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

              <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct2.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

              <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct2.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

              <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct2.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

              <div className="sh-cart-content d-flex position-relative">
              <div className="sh-left-content">
                <img src="/src/assets/imgs/realProduct2.jpg" alt="" />
              </div>
              <div className="sh-right-content  ">
                <h5 className="item-title">
                  iphone 14 pro max, New apple iphone, 256GB, space black
                </h5>
                <span className="item-price d-block">EGP 52.960</span>
                <span className="item-stock status d-block">In stock</span>
                <div className="cart-buttons d-flex ">
                  <div className="select-menu">
                    <form>
                      <label htmlFor="select-quntity">Qty: </label>
                      <select id="select-quntity">
                        <option value="delete">0 (Delete)</option>
                        <option selected value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                      </select>
                    </form>
                  </div>
                  <span className="separator">|</span>
                  <span>
                    <Link>delete</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>save for later</Link>
                  </span>
                  <span className="separator">|</span>

                  <span>
                    <Link>share</Link>
                  </span>
                </div>
              </div>
            </div>

            {/* ----------------------   Subtotal    ------------------------- */}
            <div className="subtotal">
                  <p>Subtotal
                    <span>(1 item):</span>
                    <span> EGP </span>
                    <span>
                    19,287.00
                  </span>
                  </p>
                </div>
          </div>

          
          
          {/* <div className="side-popup"></div> */}
        </div>

        {/* <div className="bottom-content"> */}

        <div className="cart-divider"></div>
        <p className="last-content">
          The price and availability of items at amazon.eg are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Do you have a gift card or
          promotional
        </p>

        {/*  -------------------  right pop up  ------------------ */}
        <div className="right-popup">
          <div className="d-flex">
            <span><i class="fa-solid fa-circle-check"></i></span>
            <div className="text">
            <span>Your order qualifies for FREE Shipping </span>
            <span> Choose this option at checkout.</span>
            <Link> see details</Link>
            </div>
            </div>
            
          <div className="side-subtotal">
            subtotal
            <span> (1 item): </span>
            <span> EGP 19,287.00</span>
          </div>
          <span>proceed to buy</span>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
