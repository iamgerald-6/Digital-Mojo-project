import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Inspiration2 } from '../components/Inspiration2.jsx';
import {LoadMore} from '../components/LoadMore.jsx';

export const InspirationPage = () => {
  return (
    <>
        <NavPage name='Inspiration' paragraph='A place to get more inspired and get more creative' elementId='props-filter'/>
        <Inspiration2/>
        <LoadMore/>
    </>
  )
}
