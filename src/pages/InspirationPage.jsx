import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Inspiration2 } from '../components/Inspiration2.jsx';
import {LoadMore} from '../components/LoadMore.jsx';
import Navbar from '../components/Navbar.jsx';
import { Cover } from '../components/Cover.jsx';
import { SecondNav } from '../components/SecondNav.jsx';
import Footer from '../components/Footer.jsx';

export const InspirationPage = () => {
  return (
    <>
        <Navbar/>
        <Cover/>
        <SecondNav/>
        <Inspiration2/>
        <LoadMore/>
        <Footer/>
    </>
  )
}
