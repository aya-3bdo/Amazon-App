import React from "react";
import "../styling/real-products.css";
import RatingStars from "./RatingStars";
import { LiaStar, LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { addToCart} from "../logic/Cart-slice";
import { useEffect, useState } from "react";
import axios from "axios";



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
    background: 'hsl(0, 39%, 43%)',
  width: '40%',
	fontSize: '0.3rem',
  paddingInline: '6px',
 }

 
  

  const [items, setItems] = useState([]);
  const getItems = async () => {
    const { data } = await axios.get(" http://localhost:3001/products");
    setItems(data);
  };

  useEffect(() => {
    getItems();
  }, []);

  const dispatch = useDispatch();

  const {cartItems} = useSelector((state) => state.shoppingCart);
  
   function styleTotalPrice(cost) {
     let addCommas = cost.toLocaleString();
      return addCommas;
 }



  return (
    <>
      <div id="RealProducts" className="RealProducts">
        <div className="RealProducts-fir-row container">
          {items.length > 0 ? (
            <div className="row">
              {items.map((item) => (
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
                        {styleTotalPrice(item.price)}
                        <span>00</span>
                        {cartItems.length > 0 ? (
                          cartItems.some((val) => val.id === item.id) ? (
                            <span
                              style={styleAddedBtn}
                              className= 'btn'
                              onClick={() => {
                                dispatch(addToCart(item));
                              }}
                            >
                              Added to cart
                            </span>
                          ) : (
                            <span
                              className="btn"
                              onClick={() => {
                                dispatch(addToCart(item));
                                // totalItemsPrice;
                              }}
                            >
                              Add to cart
                            </span>
                          )
                        ) : (
                          <span
                            className="btn"
                            onClick={() => {
                              dispatch(addToCart(item));
                                // totalItemsPrice;

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
            <div>....Loading</div>
          )}
        </div>
      </div>
    </>
  );
};

