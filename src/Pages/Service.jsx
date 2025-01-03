import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Serv from '../Component/Serv'
function Service() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
        </div>
      </div>
      <Serv />
      <Footer/>
    </div>
  )
}

export default Service