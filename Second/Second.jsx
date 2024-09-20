import React from 'react';
import './Second.css'; 

export default function H_imgPart() {
  return (
    <div>
      <div className="container">
        {/* Slider */}
        <div className="row mb-5">
          <div className="col">
            <h2 className="recent-title" style={{ color: "#2f2f2f" }}>Recent Blog</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 H_img">
            <div className="overlay-container">
              <img
                src="https://victorthemes.com/themes/seese/wp-content/uploads/2017/04/cate-2.jpg"
                alt="Blog Post"
                className="img-fluid"
                style={{ borderRadius: "20px" }}
              />
              <div className="overlay-text">
                <p>Outdoor [10]</p>
                <p>illusration</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 H_img">
            <div className="overlay-container">
              <img
                src="https://victorthemes.com/themes/seese/wp-content/uploads/2017/04/cate-1.jpg"
                alt="Blog Post"
                className="img-fluid"
                style={{ borderRadius: "20px" }}
              />
              <div className="overlay-text">  
              <p>Outdoor [10]</p>
                <p>illusration</p></div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 H_img">
            <div className="overlay-container">
              <img
                src="https://victorthemes.com/themes/seese/wp-content/uploads/2017/04/cate-4.jpg"
                alt="Blog Post"
                className="img-fluid"
                style={{ borderRadius: "20px" }}
              />
              <div className="overlay-text">  
              <p>Outdoor [10]</p>
                <p>illusration</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
