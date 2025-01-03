import React from 'react'
import Feat from '../Component/Feat'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

function Feature() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Feature</h1>
        </div>
      </div>
        <Feat/>
        <Footer/>
    </div>
  )
}

export default Feature