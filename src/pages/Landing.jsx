import React from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/landingComponent/Hero'
import Features from '../components/common/landingComponent/Features'
import FamousTrip from '../components/common/landingComponent/FamousTrips'
import OurMission from '../components/common/landingComponent/OurMission'
import Testimonials from '../components/common/landingComponent/Testimoinals'
import Footer from '../components/common/landingComponent/Footer'

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <FamousTrip />
      <OurMission />
      <Testimonials />
      <Footer/>
    </div>
  )
}

export default Landing
