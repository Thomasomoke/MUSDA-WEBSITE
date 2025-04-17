import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Navbar'
import MinistriesSection from '../components/MinistriesSection'
import ServicesSection from '../components/ServicesSection'
import MapSection  from '../components/MapSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Hero/>
        <About/>
        <MinistriesSection/>
        <ServicesSection/>
        <MapSection />
        <Footer/>
    </div>
  )
}

export default Home