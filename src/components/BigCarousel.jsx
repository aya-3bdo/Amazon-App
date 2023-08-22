import React from "react";
import "../styling/bigCarousel.css";

export default function BigCarousel() {
  return (
      <div className="BgCarousel px-0 mx-auto">
        {/* Big Carousel */}
        <div
          id="carousel-control"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img
                src="/src/assets/imgs/1fir-Carousel_1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item active">
              <img
                src="/src/assets/imgs/1fir-Carousel_2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/src/assets/imgs/1fir-Carousel_3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/src/assets/imgs/1fir-Carousel_4.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="/src/assets/imgs/1fir-Carousel_5.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel-control"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel-control"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    
  );
}
