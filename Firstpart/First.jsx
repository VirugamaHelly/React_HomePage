import React from 'react';


export default function Last() {
  return (
    <div className="container">
      <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-12">
                <img
                  src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/banner-bg-1.jpg"
                  className="d-block w-100 img-fluid"
                  alt="Slider Image 1"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
            <div className="col-12">
                <img
                  src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/banner-bg-2.jpg"
                  className="d-block w-100 img-fluid"
                  alt="Slider Image 2"
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
            <div className="col-12">
                <img
                  src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/banner-bg-3.jpg"
                  className="d-block w-100 img-fluid"
                  alt="Slider Image 3"
                />
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
