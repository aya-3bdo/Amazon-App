import { useEffect, useState } from "react";
import "../styling/shopping-cart.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProducts,
  deleteShoppingCartItem,
  updateShoppingCartItemQty,
  getShoppingCartItems,
} from "../logic/Cart-slice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { shCartItems = [] } = useSelector((state) => state.shoppingCart);

  function totalItemsPrice() {
    let cartTotal = 0;
    shCartItems?.forEach((ele) => {
      return (cartTotal += ele.total);
    });

    if (Number.isInteger(cartTotal) == false) {
      return parseFloat(cartTotal).toFixed(3);
    } else {
      return cartTotal;
    }
  }

  function getItemsAmount() {
    let total = 0;
    shCartItems?.forEach((ele) => {
      total += +ele.quantity;
    });
    return total;
  }

  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    dispatch(getShoppingCartItems());
    dispatch(getProducts());
  }, [dispatch]);

  // Handle Select Value Changing synchronously.
  const handleSelectValue = (event) => {
    event.target.parentElement.previousElementSibling.previousElementSibling.children[1].value =
      event.target.innerText;
  };

  // Handle Showing update input to add items quantity above 10.
  const handleUpdateInput = (e) => {
    const liTarget = e.target;

    liTarget.parentElement.previousElementSibling.style.display = "none";
    liTarget.parentElement.previousElementSibling.previousElementSibling.style.display =
      "none";
    liTarget.parentElement.previousElementSibling.children[0].parentElement.style.display =
      "block";
    liTarget.parentElement.parentElement.parentElement.parentElement.nextElementSibling.style.display =
      "block";
  };

  getItemsAmount();
  totalItemsPrice();

  const handleHidingOptionList = (e) => {
    let inputList = document.querySelectorAll(".inputText");
    let optionList = document.querySelectorAll(".options-list");
    let notTheTarget = e.target.classList.contains("inputText") == false;
    [...inputList]?.forEach((input) => {
      if (notTheTarget && input.tagName == "DIV") {
        [...optionList]?.forEach((list) => {
          if (list.classList.contains("show") === true) {
            list.classList.remove("show");
          }
        });
      }
    });
  };

  //  Handle dispatching updateQty action.
  const HandleDispatchQtyUpdate = (e, item) => {
    dispatch(
      updateShoppingCartItemQty({
        newVal: e.target.innerText,
        item,
      })
    )
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        window.alert(
          `${rejectedValueOrSerializedError}. Please, try again later.`
        );
      });
  };

  // Handle update Quantity Button.
  const handleUpdateQtyBTN = (item) => {
    dispatch(
      updateShoppingCartItemQty({
        newVal: Number(inputValue) || +item.quantity,
        item,
      })
    )
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        window.alert(
          `${rejectedValueOrSerializedError}. Please, try again later.`
        );
      });
  };

  //  Handle dispatching Delete action
  const handleDispatchDeleteItem = (item) => {
    dispatch(deleteShoppingCartItem(item.id))
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        window.alert(
          `Something went wrong, ${rejectedValueOrSerializedError}.`
        );
      });
  };

  return (
    <>
      <div
        className="cart-container"
        onClick={(e) => {
          handleHidingOptionList(e);
        }}
      >
        <div className="shopping-cart-container m-0 p-1 pe-0 pb-0">
          {shCartItems?.length < 1 ? (
            <div className="empty-shopping-cart fir-slice">
              <img src="/assets/imgs/Shopping-cart.svg" />
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
                {shCartItems?.map((item) => (
                  <div id="cartItem" key={item.id}>
                    <div className="sh-cart-content d-flex position-relative">
                      <div className="sh-left-content">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="sh-right-content  ">
                        <h5 className="item-title">{item.description}</h5>
                        <span className="item-price d-block">
                          EGP {item.price?.toLocaleString()}
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
                                    disabled
                                  />
                                  <span className="select-btn">
                                    <i className="fa-solid fa-angle-up"></i>
                                  </span>
                                </div>
                                <div className="enterQty">
                                  <input
                                    type="text"
                                    onChange={(e) =>
                                      setInputValue(e.target.value) ||
                                      item.quantity
                                    }
                                  />
                                </div>
                                <ul className={`options-list`} id={item.id}>
                                  <li
                                    className="delete-option"
                                    onClick={() => {
                                      handleDispatchDeleteItem(item);
                                      getItemsAmount();
                                    }}
                                  >
                                    0 (Delete)
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    1
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    2
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    3
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    4
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    5
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    6
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    7
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
                                    }}
                                  >
                                    8
                                  </li>
                                  <li
                                    className="option"
                                    onClick={(e) => {
                                      handleSelectValue(e);
                                      HandleDispatchQtyUpdate(e, item);
                                      getItemsAmount();
                                      totalItemsPrice();
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
                                      handleUpdateInput(e);
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
                              handleUpdateQtyBTN(item);
                              getItemsAmount();
                              totalItemsPrice();
                            }}
                          >
                            <Link>update</Link>
                          </span>
                          <span className="separator">|</span>
                          <span
                            onClick={() => {
                              handleDispatchDeleteItem(item);
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
          </div>

          <span>proceed to buy</span>
        </div>

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
