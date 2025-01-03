import React from 'react'
import icon3 from '../img/icon/icon-3.png'
import icon6 from '../img/icon/icon-6.png'
import icon7 from '../img/icon/icon-7.png'
import icon8 from '../img/icon/icon-7.png'
function Serv() {
  return (
<div>
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center">
        <h1 className="display-5 mb-5">Our Services</h1>
      </div>
      <div className="row g-0 service-row">
        <div className="col-md-6 col-lg-3 wow fadeIn d-flex align-items-stretch mb-4" data-wow-delay="0.1s">
          <div className="service-item border h-100 p-5 d-flex flex-column rounded">
            <div className="btn-square bg-light rounded-circle mb-4" style={{width: 70, height: 70}}>
              <img className="img-fluid" src={icon6} alt="Icon" />
            </div>
            <h4 className="mb-3">Commercial CCTV System</h4>
            <p className="mb-4">
              Upgrade security with Commercial CCTV System for effective
              surveillance solutions.
            </p>
            <div className="mt-auto">
              <a className="btn btn-danger" href>
                <i className="fa fa-arrow-right text-white me-3" />Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn d-flex align-items-stretch mb-4" data-wow-delay="0.3s">
          <div className="service-item border h-100 p-5 d-flex flex-column rounded">
            <div className="btn-square bg-light rounded-circle mb-4" style={{width: 70, height: 70}}>
              <img className="img-fluid" src={icon7} alt="Icon" />
            </div>
            <h4 className="mb-3">Finger Print Access</h4>
            <p className="mb-4">
              Secure access control with advanced Finger Print Access for
              businesses.
            </p>
            <div className="mt-auto">
              <a className="btn btn-danger" href>
                <i className="fa fa-arrow-right text-white me-3" />Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn d-flex align-items-stretch mb-4" data-wow-delay="0.5s">
          <div className="service-item border h-100 p-5 d-flex flex-column rounded">
            <div className="btn-square bg-light rounded-circle mb-4" style={{width: 70, height: 70}}>
              <img className="img-fluid" src={icon8} alt="Icon" />
            </div>
            <h4 className="mb-3">Fire Detection &amp; Safety</h4>
            <p className="mb-4">
              Ensure safety with reliable Fire Detection And Safety systems.
            </p>
            <div className="mt-auto">
              <a className="btn btn-danger" href>
                <i className="fa fa-arrow-right text-white me-3" />Read More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn d-flex align-items-stretch mb-4" data-wow-delay="0.7s">
          <div className="service-item border h-100 p-5 d-flex flex-column rounded">
            <div className="btn-square bg-light rounded-circle mb-4" style={{width: 70, height: 70}}>
              <img className="img-fluid" src={icon3} alt="Icon" />
            </div>
            <h4 className="mb-3">Smart Home Security</h4>
            <p className="mb-4">
              Elevate home protection with cutting-edge Smart Home Security
              solutions.
            </p>
            <div className="mt-auto">
              <a className="btn btn-danger" href>
                <i className="fa fa-arrow-right text-white me-3" />Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Serv