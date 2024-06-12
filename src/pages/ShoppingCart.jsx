import React, { useState } from "react";
import "../styling/shopping-cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeQty, deleteItem } from "../logic/Cart-slice";

const ShoppingCart = () => {
  $(function () {
    $("li.option").on("click", function () {
      if ($(this).text() == "10+") {
        $(this).parents("ul.options-list").css("display", "none");
        $(this)
          .parents("ul.options-list")
          .siblings("div.inputText")
          .css("display", "none");
        $(this)
          .parents("ul.options-list")
          .parents("div.select-menu")
          .siblings("span#update")
          .show();
        $(this).parents("ul.options-list").siblings("div.enterQty").show();
      }
    }),
      $("div.cart-container").on("click", function () {
        if ($("ul.options-list").hasClass("show") == true) {
          $("ul.options-list").removeClass("show");
        }
      });
  });


  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.shoppingCart);

  const [inputValue, setInputValue] = useState(0);

  function getItemsAmount() {
    let total = 0;
    cartItems.forEach((ele) => {
      total += +ele.quantity;
    });
    return total;
  }

  function totalItemsPrice() {
    let total = 0;
    cartItems.forEach((ele) => {
      return (total += ele.quantity * +ele.price);
    });

    if (Number.isInteger(total) == false) {
      return parseFloat(total).toFixed(3);
      // return parseFloat(styleTotalPrice(total)).toFixed(3);
    } else {
      return total;
    }
  }

  getItemsAmount();
  totalItemsPrice();

  function styleTotalPrice(cost) {
    let addCommas = cost.toLocaleString();
    return addCommas;
  }

  function showSelectedVal(e) {
    let selectedVal =
      (e.target.parentElement.previousElementSibling.previousElementSibling.children[1].value =
        e.target.innerText);
    return selectedVal;
  }

  return (
    <>
      <div className="cart-container">
        <div className="shopping-cart-container m-0 p-1 pe-0 pb-0">
          {cartItems.length < 1 ? (
            <div className="empty-shopping-cart fir-slice">
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
            </div>
          ) : (
            <>
              <div className="full-shopping-cart fir-slice">
                <div className="sh-title-container">
                  <h2>shopping cart</h2>
                </div>
                {cartItems.map((item) => (
                  <div id="cartItem" key={item.id}>
                    <div className="sh-cart-content d-flex position-relative">
                      <div className="sh-left-content">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="sh-right-content  ">
                        <h5 className="item-title">{item.description}</h5>
                        <span className="item-price d-block">
                          EGP {styleTotalPrice(item.price)}
                        </span>
                        <span className="item-stock status d-block">
                          In stock
                        </span>
                        <div className="cart-buttons d-flex ">
                          <div className="select-menu">
                            <form>
                              <div className="custom-select-menu">
                                <div
                                  className="inputText"
                                  value={cartItems[item]}
                                  onClick={(e) =>
                                    e.target.nextElementSibling.nextElementSibling.classList.toggle(
                                      "show"
                                    )
                                  }
                                >
                                  <span id="qty">Qty:</span>
                                  <input
                                    className="text"
                                    type="text"
                                    value={item.quantity}
                                    readOnly
                                  />
                                  <span className="select-btn">
                                    <i className="fa-solid fa-angle-up"></i>
                                  </span>
                                </div>
                                <div className="enterQty">
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      setInputValue(Number(e.target.value) || 0)
                                    }
                                  />
                                </div>
                                <ul className="options-list">
                                  <li
                                    className="delete-option"
                                    onClick={() => {
                                      dispatch(deleteItem(item));
                                      getItemsAmount();
                                    }}
                                  >
                                    0 (Delete)
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);
                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    1
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    2
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    3
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    4
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    5
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    6
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    7
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    8
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      dispatch(
                                        changeQty({
                                          newVal: +e.target.innerText,
                                          item,
                                        })
                                      );
                                      getItemsAmount();
                                      totalItemsPrice();
                                      showSelectedVal(e);

                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    9
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      e.target.parentElement.classList.remove(
                                        "show"
                                      );
                                    }}
                                  >
                                    10+
                                  </li>
                                </ul>
                              </div>
                            </form>
                          </div>
                          <span
                            id="update"
                            onClick={() => {
                              dispatch(
                                changeQty({
                                  newVal: Number(inputValue) || 0,
                                  item,
                                })
                              );
                              getItemsAmount();
                              totalItemsPrice();
                            }}
                          >
                            <Link>update</Link>
                          </span>
                          <span className="separator">|</span>
                          <span
                            onClick={() => {
                              dispatch(deleteItem(item));
                              totalItemsPrice();
                            }}
                          >
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
                  </div>
                ))}
                <div className="subtotal">
                  <p>
                    Subtotal
                    <span>({getItemsAmount()} item):</span>
                    <span> EGP </span>
                    <span>{totalItemsPrice().toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* ----------------------   Cart Divider    ------------------------- */}
        {cartItems.length > 0 && (
          <div className="right-popup">
            <div className="d-flex">
              <span>
                <i class="fa-solid fa-circle-check"></i>
              </span>
              <div className="text">
                <span>Your order qualifies for FREE Shipping </span>
                <span> Choose this option at checkout.</span>
                <Link> see details</Link>
              </div>
            </div>

            <div className="side-subtotal">
              subtotal
              <span> ({getItemsAmount()} item): </span>
              <span> EGP {totalItemsPrice().toLocaleString()}</span>
              <span>proceed to buy</span>
            </div>
          </div>
        )}

        <div className="cart-divider"></div>
        <p className="last-content">
          The price and availability of items at amazon.eg are subject to
          change. The Cart is a temporary place to store a list of your items
          and reflects each item's most recent price. Do you have a gift card or
          promotional
        </p>
      </div>
    </>
  );
};

export default ShoppingCart;
