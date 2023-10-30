import React from 'react';
import { NavPage } from '../components/NavPage.jsx';
import Catalog from '../components/Catalog.jsx';
import { LoadMore } from '../components/LoadMore.jsx';

export const CatalogPage = () => {
  return (
    <>
        <NavPage name='Catalog' paragraph='View our carefully put together design catalog' elementId='props-filter'/>
        <Catalog />
        <Catalog />
        <Catalog />
        <LoadMore/>

    </>
  )
}
