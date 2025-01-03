import React from 'react'
import term1 from '../img/Testimonial-1.webp'
import term2 from '../img/Testimonial-2.avif'
import term3 from '../img/Testimonial-3.webp'
function Term() {
  return (
    <div>
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h1 className="display-5 mb-5">Testimonial</h1>
    </div>
    <div className="row g-4">
      {/*! Testimonial 1 */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="card text-center shadow-sm">
          <img src={term1} className="card-img-top rounded-circle mx-auto mt-4" alt="Ola Bahaa" style={{width: 100, height: 100}} />
          <div className="card-body">
            <p className="card-text fs-5">
              Exceptional service! Their security systems are top-notch,
              providing peace of mind. Quick response and 24/7 support make
              them the best choice for safeguarding your property.
            </p>
            <h4 className="card-title">Sara Ali</h4>
            <span className="text-dark">Profession</span>
          </div>
        </div>
      </div>
      {/*! Testimonial 2 */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
        <div className="card text-center shadow-sm">
          <img src={term2} className="card-img-top rounded-circle mx-auto mt-4" alt="Nour Kareem" style={{width: 100, height: 100}} />
          <div className="card-body">
            <p className="card-text fs-5">
              Outstanding security solutions! Their expertise and
              round-the-clock support ensure our peace of mind. Trustworthy,
              efficient, and effective in protecting our business assets.
            </p>
            <h4 className="card-title">Joon Kareem</h4>
            <span className="text-dark">Profession</span>
          </div>
        </div>
      </div>
      {/*! Testimonial 3 */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="card text-center shadow-sm">
          <img src={term3} className="card-img-top rounded-circle mx-auto mt-4" alt="Ahmed Sadek" style={{width: 100, height: 70}} />
          <div className="card-body">
            <p className="card-text fs-5">
              Highly recommend their security services! Professional team,
              cutting-edge technology, and reliable support. Enhanced our
              safety measures significantly. Top-notch security solutions
              for any business.
            </p>
            <h4 className="card-title">Selim Belal</h4>
            <span className="text-dark">Profession</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Term