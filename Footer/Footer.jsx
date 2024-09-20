import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="First_part">
          <div class="container">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-3">
                <div className="text">
                  <img src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/icon_img_1.png" alt="" />
                  <p style={{ color: "white" }}>FAST DELIVERY</p>
                  <p>Same day delivery as soon as possible</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="text-2">
                  <img src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/icon_img_2.png" alt="icon_img" />
                  <p style={{ color: "white" }}>SPECIAL DISCOUNT</p>
                  <p>Get attractive offers day by day</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="text">
                  <img src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/icon_img_3.png" alt="icon_img" />
                  <p style={{ color: "white" }}>SECURE CHECKOUT</p>
                  <p>Fully secured SSL checkout technology</p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-3">
                <div className="text-2">
                  <img src="https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/icon_img_4.png" alt="icon_img" />
                  <p style={{ color: "white" }}>MONEY RETURNS</p>
                  <p>100% Money back guarntee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Last part */}
      <div className="Last">

        <div className="row">
          <div className="container">
            <div className="blog">
              <p>BLOG  /  ABOUT US  /  ORDER TRACKING  /  CONTACT  /  FAQ’S</p>
            </div>
            <div className="pera">
              <p> Proudly powered by WordPress and Seese.</p>
            </div>
            <div className="Last_pera">
              <p>This is a demo store for testing purposes — no orders shall be fulfilled.<span>Dismiss</span></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
