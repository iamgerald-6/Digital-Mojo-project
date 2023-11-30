import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import Tutorials from '../components/Tutorials.jsx'
import { LoadMore } from '../components/LoadMore.jsx'
import { SecondNav } from '../components/SecondNav.jsx'
import Navbar from '../components/Navbar.jsx'
import { Cover } from '../components/Cover.jsx'
import Footer from '../components/Footer.jsx'

export const TutorialsPage = () => {
  return (
    <>
            <Navbar />
            <Cover/>
            <SecondNav/>
            <Tutorials/>
            <Tutorials/>
            <Tutorials/>
            <LoadMore/>
            <Footer/>


    </>
  )
}

