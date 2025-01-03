import React from 'react'
import Navbar from '../Component/Navbar'
import Carousel from '../Component/Carousel'
import Fact from '../Component/Fact'
import Ab from '../Component/Ab'
import Serv from '../Component/Serv'
import Feat from '../Component/Feat'
import Pro from '../Component/Pro'
import Term from '../Component/Term'
import Footer from '../Component/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Fact/>
      <Ab/>
      <Serv/>
      <Feat/>
      <Pro/>
      <Term/>
      <Footer/>
    </div>
  )
}

export default Home