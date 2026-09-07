import React, { useEffect } from 'react'
import Navbar from '../components/common/Navbar'
import Hero from '../components/common/landingComponent/Hero'
import Features from '../components/common/landingComponent/Features'
import FamousTrip from '../components/common/landingComponent/FamousTrips'
import OurMission from '../components/common/landingComponent/OurMission'
import Testimonials from '../components/common/landingComponent/Testimoinals'
import Footer from '../components/common/landingComponent/Footer'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  const { token } = useAuth();

  useEffect(() => { 

     if(token){
        navigate("/dashboard");
    }

  },[token])

   
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
