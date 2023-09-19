import React from 'react';
import '../../styling/firstCarousels.css';
export default function FirstCarousels() {
  return (

    <div className='FirstCarousels '>
	{/* first carousel slice */}

        <div className="firstProductsCarousel container ">
          <div className="row d-flex align-content-start mb-3">
            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3">
                <p className="card-text">
                  Security cameras | starting from 350EGP
                </p>
                <div className = "img-container">
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
            </div>

            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3 ">
                <p className="card-text pb-3 ">Headphones | below 650EGP</p>
                <div className = "img-container">
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
            </div>
            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3">
                <p className="card-text pb-3 ">Mens clothes | up to 50% off</p>
                <div className = "img-container">
               
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
            </div>
            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3">
                <p className="card-text">
                  Kitchen essentioals | up to 15% off
                </p>
                <div className = "img-container">
              
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
        </div>

        {/* Second carousel slice */}

        <div className="secondProductsCarousel container">
          <div className="row">
            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3 position-relative">
                <p className="card-text  ">
                  enjoy Amazon prime | 0% interests on installments*
                </p>
                <div id='complex'  className="img-container ">
                  <div className="row1 d-flex">
                    <div className="fir-description me-1">
                      <img
                        src="/src/assets/imgs/2sec-cols6-row2-Ele5-4.jpg"
                        className="card-img-top img-fluid "
                        alt="..."
                      />
                      <p>(Starting 12 april) Extra 20% off*</p>
                    </div>
                    <div className="sec-description">
                      <img
                        src="/src/assets/imgs/2sec-cols6-row2-Ele5-2.jpg"
                        className="card-img-top img-fluid "
                        alt="..."
                      />
                      <p>
                        Extra 20% off & 0% installments*
                      </p>
                    </div>
                  </div>
                  <div className="row2 d-flex ">
                    <div className="third-description me-1">
                      <img
                        src="/src/assets/imgs/2sec-cols6-row2-Ele5-3.jpg"
                        className="card-img-top img-fluid "
                        alt="..."
                      />
                      <p>0% interest up to 12 months*</p>
                    </div>

                    <div className="fourth-description">
                      <img
                        src="/src/assets/imgs/2sec-cols6-row2-Ele5-1.jpg"
                        className="card-img-top img-fluid "
                        alt="..."
                      />
                      <p>Amazon prime</p>
                    </div>
                </div>
                </div>
                
                <div className="pt-2 ">
                  <a href="#"> see more</a>
                </div>

              </div>
            </div>

            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3 ">
                <p className="card-text">
                  Musical Instruments | Wide selection
              </p>
              <div className="img-container">

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
            </div>

            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3 ">
                <p className="card-text">
                  Travel Luggage | Wide Selection
              </p>
              <div className='img-container '>
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
            </div>
            <div className="col-3 px-0 mx-2">
              <div className="card px-3 pb-3 ">
              <p className="card-text">Makeup | New arrivals</p>
              <div className='img-container '>
              
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
    </div>
    
        
    
  )
}
