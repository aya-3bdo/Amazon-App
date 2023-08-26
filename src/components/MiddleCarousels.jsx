import React from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "/src/styling/MiddleCarousels.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function MiddleCarousels() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 650,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    pauseOnFocus: true,
  };

  return (
    <div className="middle-carousels-container container-xl">
      {/*  First Carousel */}
      <div className="first-carousel slider-container px-1 position-relative">
        <div className="slider-title pt-1">
          Shop top picks in sports
          <span className="ms-3">explore more</span>
        </div>
        <span className="left-arrow">
          <MdOutlineKeyboardArrowLeft />
        </span>
        <span className="right-arrow">
          <MdOutlineKeyboardArrowRight />
        </span>
        <Slider {...settings} className="py-4">
          <img src="/src/assets/imgs/4four-carousel-1.jpg" />
          <img src="/src/assets/imgs/4four-carousel-2.jpg" />
          <img src="/src/assets/imgs/4four-carousel-3.jpg" />
          <img src="/src/assets/imgs/4four-carousel-4.jpg" />
          <img src="/src/assets/imgs/4four-carousel-5.jpg" />
          <img src="/src/assets/imgs/4four-carousel-6.jpg" />
          <img src="/src/assets/imgs/4four-carousel-7.jpg" />
          <img src="/src/assets/imgs/4four-carousel-8.jpg" />
          <img src="/src/assets/imgs/4four-carousel-9.jpg" />
          <img src="/src/assets/imgs/4four-carousel-10.jpg" />
        </Slider>
      </div>

      {/* Second Carousel */}
      <div className="second-carousel slider-container px-1 position-relative mt-3 ">
        <div className="slider-title mb-1 pt-1 ">
          Shop the Budget Store
          <span className="ms-3">shop all deals</span>
        </div>
        <span className="left-arrow">
          <MdOutlineKeyboardArrowLeft />
        </span>
        <span className="right-arrow">
          <MdOutlineKeyboardArrowRight />
        </span>
        <Slider {...settings} className=" py-1 ">
          <img src="/src/assets/imgs/3thir-carousel-1.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-2.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-3.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-4.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-5.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-6.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-7.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-8.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-9.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-10.jpg" />
          <img src="/src/assets/imgs/3thir-carousel-11.jpg" />
        </Slider>
      </div>
      {/*  Third Carousel */}

      <div className="third-carousel slider-container px-1 position-relative my-3">
        <div className="slider-title mb-1 pt-1 ">
          Shop Today's Deals
          <span className="ms-3">shop all deals</span>
        </div>
        <span className="left-arrow">
          <MdOutlineKeyboardArrowLeft />
        </span>
        <span className="right-arrow">
          <MdOutlineKeyboardArrowRight />
        </span>
        <Slider {...settings} className="py-2 ">
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-1.jpg" />
            <div className="describtion">
              <span className="me-1">Up to 15% off</span>
              <strong> Deal</strong>
              <span>Save on ATA Fans</span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-2.jpg" />
            <div className="describtion">
              <span className="me-1"> Up to 13% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>
                Fine - Prestige facial tissue 550 sheets x 3layers pack of 6
                sterilized tissue
              </span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-3.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>Save on Joyroom T03s Promotions</span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-4.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong> <span>Adidas Football Shoes</span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-5.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong> <span>buy now and save</span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-6.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>
                Kids Swim Glasses,Anti-Fog No Leakage UV Wide Vision Swimming
              </span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-7.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>Save on El Lighting, Ladders & more </span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-8.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong> <span>JBL Tune510 headphones Black </span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-9.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>Mintra School Backpack For Unisex</span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-10.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>
                Multipurpose Travel Backpack, Large Capacity Gym Duffle Bag,
              </span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-11.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong>{" "}
              <span>SPEAKER ZERO Wired/Wireless ZR-4700</span>
            </div>
          </div>
          <div className="img-container">
            <img src="/src/assets/imgs/4th-carousel-12.jpg" />
            <div className="describtion">
              <span className="me-1"> up to 15% off </span>{" "}
              <strong> Deal</strong> <span>Save on Casio Watches</span>
            </div>
          </div>
        </Slider>
      </div>

      {/* divider */}
      <div className="middleContainer-divider">
        <div className="Top-divider"></div>
        <p>See personalized recommendations</p>
        <Link className="button">
          <span>
          sign in
          </span>
        </Link>
        <p>
          new customer? <Link>Start here</Link>
        </p>
        <div className="Bottom-divider"></div>

      </div>
    </div>
  );
}
