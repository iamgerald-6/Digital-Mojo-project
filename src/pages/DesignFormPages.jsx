import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { DesignForm } from '../components/DesignForm.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export const DesignFormPages = () => {
  return (
    <>
        <Navbar/>
        <DesignForm/>
        <Footer/>
    </>
  )
}
