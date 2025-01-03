import React from 'react'
import Navbar from '../Component/Navbar'
import Pro from '../Component/Pro'
import Footer from '../Component/Footer'

function Project() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">Project</h1>
        </div>
      </div>
        <Pro/>
        <Footer/>
    </div>
  )
}

export default Project