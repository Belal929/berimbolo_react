import React from 'react'

function Footer() {
  return (
<div>
  <div className="container-fluid text-secondary footer py-5 wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor: '#1b1a1ab0'}}>
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-dark mb-4">Address</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />Mansoura, Egypt
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />+000 000 00000
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />berimbolo@gmail.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href><i className="fab fa-youtube" /></a>
            <a className="btn btn-square btn-outline-secondary rounded-circle me-2" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-dark mb-4">Services</h5>
          <a className="btn btn-link text-white" href>Monitoring and Detection</a>
          <a className="btn btn-link text-white" href>Network Management</a>
          <a className="btn btn-link text-white" href>Risk Assessment</a>
          <a className="btn btn-link text-white" href>Smart Home Security</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-dark mb-4">Quick Links</h5>
          <a className="btn btn-link text-white" href>About Us</a>
          <a className="btn btn-link text-white" href>Our Team</a>
          <a className="btn btn-link text-white" href>Our Services</a>
          <a className="btn btn-link text-white" href>Our Projects</a>
          <a className="btn btn-link text-white" href>Contact Us</a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-dark mb-4">Newsletter</h5>
          <p>Send us any time, we will text you.</p>
          <div className="position-relative w-100">
            <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
            <button type="button" className="btn btn-danger py-2 position-absolute top-0 end-0 mt-2 me-2">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer