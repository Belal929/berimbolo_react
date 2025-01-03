import React from 'react'
import about from '../img/about.jpg'
import icon4 from '../img/icon/icon-4.png'
import icon5 from '../img/icon/icon-5.png'
function Ab() {
  return (
    <div>
<div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
  <div className="container about px-lg-0">
    <div className="row g-0 mx-lg-0">
      <div className="col-lg-6 ps-lg-0" style={{minHeight: 400}}>
        <div className="position-relative h-100">
          <img className="position-absolute img-fluid w-100 h-100" src={about} style={{objectFit: 'cover', borderRadius: '5%'}} alt="about" />
        </div>
      </div>
      <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
        <div className="p-lg-5 pe-lg-0">
          <h1 className="display-5 mb-4">About Us</h1>
          <p className="mb-4 pb-2" style={{color: '#383131c7', fontSize: 'larger'}}>
            Our company is an Egyptian joint stock company, one of the
            companies specialized in guarding and securing facilities from
            within. We are authorized to practice security and guarding by
            the Ministry of Interior and all concerned authorities within
            the Arab Republic of Egypt.
          </p>
          <div className="row g-4 mb-4 pb-3">
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center">
                <div className="btn-square bg-white rounded-circle" style={{width: 64, height: 64}}>
                  <img className="img-fluid" src={icon4} alt="Icon" />
                </div>
                <div className="ms-4">
                  <h2 className="mb-1" data-toggle="counter-up">1020</h2>
                  <p className="fw-medium text-dark mb-0">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center">
                <div className="btn-square bg-white rounded-circle" style={{width: 64, height: 64}}>
                  <img className="img-fluid" src={icon5} alt="Icon" />
                </div>
                <div className="ms-4">
                  <h2 className="mb-1" data-toggle="counter-up">1028</h2>
                  <p className="fw-medium text-dark mb-0">Projects Done</p>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="btn btn-danger rounded-pill py-3 px-5">Explore More</a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Ab