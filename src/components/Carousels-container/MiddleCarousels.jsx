import React from "react";
import Slider from "react-slick";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import "../../styling/MiddleCarousels.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { ThirdCarouselSlider } from "./ThirdCarouselSlider";
import { RealProducts } from "../RealProducts";

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
    <div className="middle-carousels-container">
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

      {/* Real Products slice*/}
      <RealProducts />
      
     {/* Third Carousel */}
     <ThirdCarouselSlider />
      
      {/* divider */}
      <div className="middleContainer-divider">
        <div className="Top-divider"></div>
        <p>See personalized recommendations</p>
        <Link to='/signin' className="button">
          <span>
          sign in
          </span>
        </Link>
        <p>
          new customer? <Link to="/createAccount">Start here</Link>
        </p>
        <div className="Bottom-divider"></div>

      </div>
    </div>
  );
}
