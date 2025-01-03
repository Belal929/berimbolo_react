import React from 'react'
import icon3 from '../img/icon/icon-3.png'
import icon10 from '../img/icon/icon-10.png'
import icon11 from '../img/icon/icon-11.png'
import icon12 from '../img/icon/icon-12.png'
import Featimg from '../img/feature.jpg'

function Feat() {
  return (
    <div>
<div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
  <div className="container feature px-lg-0">
    <div className="row g-0 mx-lg-0">
      <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.5s">
        <div className="p-lg-5 ps-lg-0">
          <h1 className="display-5 mb-5">Why Choose Us</h1>
          <p className="mb-4 pb-2" style={{color: '#383131c7', fontSize: 'larger'}}>
            Rely on our Trusted Security, Quality Services, Smart Systems,
            and 24/7 Support for unmatched protection &amp; peace of mind.
          </p>
          <div className="row g-4">
            <div className="col-6">
              <div className="d-flex align-items-center">
                <div className="btn-square bg-white rounded-circle" style={{width: 70, height: 70}}>
                  <img className="img-fluid" src={icon10} alt="Icon" />
                </div>
                <div className="ms-4">
                  <p className="text-dark mb-2">Trusted</p>
                  <h5 className="mb-0">Security</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <div className="btn-square bg-white rounded-circle" style={{width: 70, height: 70}}>
                  <img className="img-fluid" src={icon11} alt="Icon" />
                </div>
                <div className="ms-4">
                  <p className="text-dark mb-2">Quality</p>
                  <h5 className="mb-0">Services</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <div className="btn-square bg-white rounded-circle" style={{width: 70, height: 70}}>
                  <img className="img-fluid" src={icon12} alt="Icon" />
                </div>
                <div className="ms-4">
                  <p className="text-dark mb-2">Smart</p>
                  <h5 className="mb-0">Systems</h5>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex align-items-center">
                <div className="btn-square bg-white rounded-circle" style={{width: 70, height: 70}}>
                  <img className="img-fluid" src={icon3} alt="Icon" />
                </div>
                <div className="ms-4">
                  <p className="text-dark mb-2">24/7 Hours</p>
                  <h5 className="mb-0">Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 pe-lg-0" style={{minHeight: 400}}>
        <div className="position-relative h-100">
          <img className="position-absolute img-fluid w-100 h-100" src={Featimg} style={{objectFit: 'cover'}} alt />
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Feat