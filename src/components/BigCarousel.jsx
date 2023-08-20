import React from 'react'
import "../styling/bigCarousel.css";

export default function BigCarousel() {
  return (
    <>
	
		  <div className="BgCarousel  position-relative px-0">
      {/* Big Carousel */}

      <div
        // id="carousel-control"
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

      {/* first carousel slice */}


      <div className="firstProductsCarousel container ">
        <div className="row d-flex align-content-start">
          <div className="col-3 px-0 mx-2">
            <div className="card px-3 pb-3">
              <p className="card-text pb-3">
                Security cameras | starting from 350EGP
              </p>
              <img
                src="/src/assets/imgs/2sec-cols-row1-1.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="pt-2">
                <a href="#"> see more</a>
              </div>
            </div>
          </div>

          <div className="col-3 px-0 mx-2">
            <div className="card px-3 pb-3 ">
              <p className="card-text pb-3 ">Headphones | below 650EGP</p>
              <img
                src="/src/assets/imgs/2sec-cols-row1-2.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="pt-2">
                <a href="#">see more</a>
              </div>
            </div>
          </div>
          <div className="col-3 px-0 mx-2">
            <div className="card px-3 pb-3">
              <p className="card-text pb-3 ">Mens clothes | up to 50% off</p>
              <img
                src="/src/assets/imgs/2sec-cols-row1-3.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="pt-2">
                <a href="#">see more</a>
              </div>
            </div>
          </div>
          <div className="col-3 px-0 mx-2">
            <div className="card px-3 pb-3">
              <p className="card-text pb-3">Kitchen essentioals | up to 15% off</p>
              <img
                src="/src/assets/imgs/2sec-cols-row1-4.jpg"
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="pt-2">
                <a href="#">see more</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second carousel slice */}

      <div className="secondProductsCarousel container">
        <div className="row">

          <div className="col-3 px-0 mx-2">
            <div className="card px-3 pb-3 ">
              <p className="card-text pb-3 ">
              enjoy Amazon prime | 0% interests on installments*
              </p>
              <div className="img-container ">

              <div className="row1 d-flex ">
                <img
                  src="/src/assets/imgs/2sec-cols6-row2-Ele5-1.jpg"
                  className="card-img-top img-fluid "
                  alt="..."
                />
                <img
                  src="/src/assets/imgs/2sec-cols6-row2-Ele5-2.jpg"
                  className="card-img-top img-fluid "
                  alt="..."
                />
              </div>
              <div className="row2 d-flex ">
                <img
                  src="/src/assets/imgs/2sec-cols6-row2-Ele5-3.jpg"
                  className="card-img-top img-fluid "
                  alt="..."
                />
                <img
                  src="/src/assets/imgs/2sec-cols6-row2-Ele5-4.jpg"
                  className="card-img-top img-fluid "
                  alt="..."
                />
                </div>
              </div>
                 <div className="pt-2">
              <a href="#"> see more</a>
            </div>
            </div>

           
          </div>

          



        <div className="col-3 px-0 mx-2">
          <div className="card px-3 pb-3 ">
            <p className="card-text pb-3">Musical Instruments | Wide selection</p>
            <img
              src="/src/assets/imgs/2sec-cols6-row2-Ele6.jpg"
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="pt-2">
              <a href="#">see more</a>
            </div>
          </div>
        </div>
        
        <div className="col-3 px-0 mx-2">
          <div className="card px-3 pb-3 ">
            <p className="card-text pb-3">Travel Luggage | Wide Selection</p>
            <img
              src="/src/assets/imgs/2sec-cols6-row2-Ele7.jpg"
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="pt-2">
              <a href="#">see more</a>
            </div>
          </div>
        </div>
        <div className="col-3 px-0 mx-2">
          <div className="card px-3 pb-3 ">
            <p className="card-text pb-3">Makeup | New arrivals</p>
            <img
              src="/src/assets/imgs/2sec-cols6-row2-Ele8.jpg"
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="pt-2">
              <a href="#">see more</a>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}
