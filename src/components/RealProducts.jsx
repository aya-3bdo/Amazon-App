import React from "react";
import "../styling/real-products.css";
import RatingStars from "./RatingStars";
import { LiaStar, LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useGetAllProductsQuery } from "../logic/cartItemsApi";
import {
  getProducts,
  getShoppingCartItems,
  addShoppingCartItem,
} from "../logic/Cart-slice";

export const RealProducts = () => {
  const customIcons = [
    // *********** 2.5   ===>  0
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarHalfAltSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],

    //  ********  3     ===>  1
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],

    //  ******** 3.5      ===>  2
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarHalfAltSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],
    //  ********  4      ===>  3
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStar size={17} />,
      },
    ],
    //  ******** 4.5     ===>  4
    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarHalfAltSolid size={17} />,
      },
    ],

    //  ********  5      ===>  5

    [
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
      {
        icon: <LiaStarSolid size={17} />,
      },
    ],
  ];

  const styleAddedBtn = {
    background: "hsl(0, 39%, 43%)",
    width: "40%",
    fontSize: "0.3rem",
    paddingInline: "6px",
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getShoppingCartItems());
  }, [dispatch]);

  const { shCartItems } = useSelector((state) => state.shoppingCart);

  const {
    data: allProducts = [],
    isSuccess: allProducts_isSuccesss,
  } = useGetAllProductsQuery();

 //  Handle dispatching Add Item action
 const handleDispatchAddItem = (item) => {
	 
    dispatch(
      addShoppingCartItem({
        ...item
      })
    )
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        window.alert(
          `Something went wrong, ${rejectedValueOrSerializedError}.`
        );
      });
  };

  return (
    <>
      <div id="RealProducts" className="RealProducts">
        <div className="RealProducts-fir-row container">
          {allProducts_isSuccesss && allProducts.length > 0 ? (
            <div className="row">
              {allProducts?.map((item) => (
                <div key={item.id} className="col-3">
                  <div className="card">
                    <img src={item.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6 className="card-title">{item.title}</h6>
                      <p className="card-text">
                        <span> {item.description}</span>{" "}
                      </p>
                      <p>
                        <RatingStars
                          customIcons={customIcons[item.ratingOrder]}
                          initialValue={item.initialValue}
                          readonly={true}
                          allowFraction={true}
                        />
                      </p>
                      <div className="price">
                        {" "}
                        <span>EGP</span>
                        {item.price?.toLocaleString()}
                        <span>00</span>
                        {allProducts_isSuccesss && shCartItems?.length > 0 ? (
                          shCartItems?.some((val) => val.id === item.id) ? (
                            <span
                              style={styleAddedBtn}
                              className="btn"
                              onClick={() => {
                                handleDispatchAddItem(item);
                              }}
                            >
                              Added to cart
                            </span>
                          ) : (
                            <span
                              className="btn"
                              onClick={() => {
                                handleDispatchAddItem(item);
                              }}
                            >
                              Add to cart
                            </span>
                          )
                        ) : (
                          <span
                            className="btn"
                            onClick={() => {
                              handleDispatchAddItem(item);
                            }}
                          >
                            Add to cart
                          </span>
                        )}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="loading ">
              <div className="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
