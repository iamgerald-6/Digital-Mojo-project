import React from 'react'

import { Templates } from '../components/Templates.jsx'
import { LoadMore } from '../components/LoadMore.jsx'
import Navbar from '../components/Navbar.jsx'
import { SecondNav } from '../components/SecondNav.jsx'
import { Cover } from '../components/Cover.jsx'
import Footer from '../components/Footer.jsx'

export const TemplatesPage = () => {
  return (
    <>
        <Navbar/>
        <Cover/>
        <SecondNav/>
        <Templates hTag='Marketing agency'/>
        <Templates hTag='Marketing agency'/>
        <Templates hTag='Marketing agency'/>
        <LoadMore hTag='Marketing agency'/>
        <Footer/>

    
    </>
  )
}
