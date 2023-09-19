import React from "react";
import { Link } from "react-router-dom";
import "../styling/real-products.css";
import RatingStars from "./RatingStars";
import { LiaStar, LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";

export const RealProducts = () => {
  const customIcons = [
    // *********** 2.5
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

    //  ********  3
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

    //  ******** 3.5
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
    //  ********  4
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
    //  ******** 4.5
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
    //  ********  5

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


  return (
    <div id="RealProducts" className="RealProducts">
      <div className="RealProducts-fir-row container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">iPhone 14 Pro Max</h6>
                <p className="card-text">
                  <span>
                    {" "}
                    New apple iphone 14 pro Max 256GB, space black, bluetooth,
                    wi-fi
                  </span>{" "}
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[2]}
                    initialValue={3.5}
                    readonly={true}
                    allowFraction={true}
                   
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  52,690 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                  </Link>
                </div>{" "}
                  
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Jack & Jones</h6>
                <p className="card-text">
                  <span>Mens Organic Basic Short-sleeves O-Neck T-Shirt</span>{" "}
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[5]}
                    initialValue={5}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  432 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct5.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">adidas</h6>
                <p className="card-text">
                  <span>fluidflue 2.0 shoes running shoes for men</span>
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[3]}
                    initialValue={4}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  3,599 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct6.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">Tommy Hilfiger</h6>
                <p className="card-text">
                  <span>
                    Watch for Men, Quartz Movement Analog Display. Blue silicon
                    strap
                  </span>
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[1]}
                    initialValue={3}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  4,409 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="RealProducts-sec-row container">
        <div className="row">
          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct7.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">calvin kelvin cK</h6>
                <p className="card-text">
                  <span>
                    calvin kelvin cK one for unisex, 100ml - eau de toilette
                  </span>
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[4]}
                    initialValue={4.5}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  960 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct8.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">LG vivace washing machine</h6>
                <p className="card-text">
                  <span>
                    LG vivace washing machine 9KG, with Ai dd technology, stone
                    silver-LG thinQ
                  </span>
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[0]}
                    initialValue={2.5}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  29,900 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct9.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">LG 42 litres microwave oven</h6>
                <p className="card-text">
                  <span>
                    microwave oven with Grill - mh8265dis"min, internationally
                    warranty
                  </span>
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[2]}
                    initialValue={3.5}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  7,198 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img
                src="/src/assets/imgs/realProduct10.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title">sony wh-ch517</h6>
                <p className="card-text">
                  <span>A wireless bluetooth on-ear mic for phone call,</span>
                </p>
                <p>
                  <RatingStars
                    customIcons={customIcons[3]}
                    initialValue={4}
                    readonly={true}
                    allowFraction={true}
                  />
                </p>
                <div className = "price">
                  {" "}
                  <span> EGP</span>  3,061 <span> 00 </span>
                <Link to="#" className="btn">
                  add to cart
                </Link>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
