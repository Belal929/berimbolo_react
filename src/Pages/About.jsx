import React from 'react'
import Fact from '../Component/Fact'
import Ab from '../Component/Ab'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

export default function About() {
    return (
        <div>
            <Navbar/>
            {/*! Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <h1 className="text-white mb-3 animated slideInDown">About Us</h1>
                </div>
            </div>
            {/*! Page Header End */}
            <Fact/>
            <Ab/>
            <Footer/>

        </div>
    )
}
