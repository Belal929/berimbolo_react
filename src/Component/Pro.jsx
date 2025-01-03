import React from 'react'
import proj1 from '../img/Projects-1.avif'
import proj2 from '../img/Projects-2.jpg'
import proj3 from '../img/Projects-3.webp'
import proj4 from '../img/Projects-4.jpg'
import proj5 from '../img/Projects-5.jpg'
import proj6 from '../img/Projects-6.jpg'
function Pro() {
  return (
<div>
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="display-5 mb-5">Our Projects</h1>
    </div>
    <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
      <div className="col-12 text-center">
        <ul className="list-inline mb-5" id="portfolio-flters">
          <li className="mx-2 active" data-filter="*">All Projects</li>
        </ul>
      </div>
    </div>
    <div className="row g-4 portfolio-container">
      <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
        <div className="portfolio-inner">
          <img className="imgg img-fluid w-100" src={proj1} alt style={{maxHeight: 250}} />
          <div className="text-center p-4">
            <h3 className="text-dark mb-2">Business Security</h3>
            <h5 className="lh-base mb-0">
              Ensuring protection and peace of mind always.
            </h5>
          </div>
          <div className="portfolio-text text-center bg-white p-4">
            <h3 className="text-dark mb-2">Business Security</h3>
            <h5 className="lh-base mb-3">
              Ensuring protection and peace of mind always.
            </h5>
            <div className="d-flex justify-content-center">
              <a className="btn btn-square btn-danger rounded-circle mx-1" href="img/Projects-1.avif" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
              <a className="btn btn-square btn-danger rounded-circle mx-1" href><i className="fa fa-link" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
        <div className="portfolio-inner">
          <img className="imgg img-fluid w-100" src={proj2} alt />
          <div className="text-center p-4">
            <h3 className="text-dark mb-2">Fire Detection</h3>
            <h5 className="lh-base mb-0">
              Ensure safety with reliable Fire Detection.
            </h5>
          </div>
          <div className="portfolio-text text-center bg-white p-4">
            <h3 className="text-dark mb-2">Fire Detection</h3>
            <h5 className="lh-base mb-3">
              Ensure safety with reliable Fire Detection.
            </h5>
            <div className="d-flex justify-content-center">
              <a className="btn btn-square btn-danger rounded-circle mx-1" href="img/Projects-2.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
              <a className="btn btn-square btn-danger rounded-circle mx-1" href><i className="fa fa-link" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
        <div className="portfolio-inner">
          <img className="imgg img-fluid w-100" src={proj3} alt />
          <div className="text-center p-4">
            <h3 className="text-dark mb-2">Access Control</h3>
            <h5 className="lh-base mb-0">
              Secure access control with advanced Access.
            </h5>
          </div>
          <div className="portfolio-text text-center bg-white p-4">
            <h3 className="text-dark mb-2">Access Control</h3>
            <h5 className="lh-base mb-3">
              Secure access control with advanced Access.
            </h5>
            <div className="d-flex justify-content-center">
              <a className="btn btn-square btn-danger rounded-circle mx-1" href="img/Projects-3.webp" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
              <a className="btn btn-square btn-danger rounded-circle mx-1" href><i className="fa fa-link" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
        <div className="portfolio-inner">
          <img className="imgg img-fluid w-100" src={proj4} alt />
          <div className="text-center p-4">
            <h3 className="text-dark mb-2">Alarm Systems</h3>
            <h5 className="lh-base mb-0">
              Ensure safety with reliable Alarm Systems.
            </h5>
          </div>
          <div className="portfolio-text text-center bg-white p-4">
            <h3 className="text-dark mb-2">Alarm Systems</h3>
            <h5 className="lh-base mb-3">
              Ensure safety with reliable Alarm Systems.
            </h5>
            <div className="d-flex justify-content-center">
              <a className="btn btn-square btn-danger rounded-circle mx-1" href="img/Projects-4.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
              <a className="btn btn-square btn-danger rounded-circle mx-1" href><i className="fa fa-link" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
        <div className="portfolio-inner">
          <img className="imgg img-fluid w-100" src={proj5} alt />
          <div className="text-center p-4">
            <h3 className="text-dark mb-2">CCTV &amp; Video</h3>
            <h5 className="lh-base mb-0">
              Smart CCTV Security Systems That Fits Your Business
            </h5>
          </div>
          <div className="portfolio-text text-center bg-white p-4">
            <h3 className="text-dark mb-2">CCTV &amp; Video</h3>
            <h5 className="lh-base mb-3">
              Smart CCTV Security Systems That Fits Your Business
            </h5>
            <div className="d-flex justify-content-center">
              <a className="btn btn-square btn-danger rounded-circle mx-1" href="img/Projects-5.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
              <a className="btn btn-square btn-danger rounded-circle mx-1" href><i className="fa fa-link" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
        <div className="portfolio-inner">
          <img className="imgg img-fluid w-100" src={proj6} alt />
          <div className="text-center p-4">
            <h3 className="text-dark mb-2">Smart Home</h3>
            <h5 className="lh-base mb-0">
              Protecting families with advanced technology.
            </h5>
          </div>
          <div className="portfolio-text text-center bg-white p-4">
            <h3 className="text-dark mb-2">Smart Home</h3>
            <h5 className="lh-base mb-3">
              Protecting families with advanced technology.
            </h5>
            <div className="d-flex justify-content-center">
              <a className="btn btn-square btn-danger rounded-circle mx-1" href="img/Projects-6.jpg" data-lightbox="portfolio"><i className="fa fa-eye" /></a>
              <a className="btn btn-square btn-danger rounded-circle mx-1" href><i className="fa fa-link" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Pro