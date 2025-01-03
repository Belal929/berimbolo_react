import React from 'react'
import carousel from '../img/home-page.jpg'
function Carousel() {
  return (
    <div>
<div className="container-fluid p-0">
  <div className="position-relative">
    <img className="w-100 img-fluid" src={carousel} alt="Carousel Image" />
    <div className="carousel-content">
      {/*! Responsive Heading */}
      <h1 style={{color: '#501873df'}}>Best CCTV &amp; Security</h1>
      {/*! Responsive Text */}
      <p>
        Advanced technology &amp; monitoring agents work together to protect you
        from break-ins and hazards.
      </p>
      {/*! Responsive Buttons */}
      <div className="d-flex flex-column flex-md-row justify-content-center">
        <a href="#" className="btn btn-danger rounded-pill py-2 px-4 py-md-3 px-md-5 mb-2 mb-md-0 me-md-3">
          Read More
        </a>
        <a href="#" className="btn btn-danger rounded-pill py-2 px-4 py-md-3 px-md-5">
          Free Quote
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Carousel