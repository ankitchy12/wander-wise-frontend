import React from 'react'
import Footer from '../components/common/landingComponent/Footer'
import { Outlet } from 'react-router-dom'
import AppNavbar from '../components/common/AppNavbar'

const AppLayout = () => {
  return (
    <div>
      <AppNavbar />
      <Outlet />
      <Footer />
      
    </div>
  )
}

export default AppLayout
