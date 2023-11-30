import React from 'react';
import { NavPage } from '../components/NavPage.jsx';
import Catalog from '../components/Catalog.jsx';
import { LoadMore } from '../components/LoadMore.jsx';
import Navbar from '../components/Navbar.jsx';
import { Cover } from '../components/Cover.jsx';
import { SecondNav } from '../components/SecondNav.jsx';
import Footer from '../components/Footer.jsx';

export const CatalogPage = () => {
  return (
    <>
        <Navbar/>
        <Cover/>
        <SecondNav/>
        <Catalog />
        <Catalog />
        <Catalog />
        <LoadMore/>
        <Footer/>

    </>
  )
}
