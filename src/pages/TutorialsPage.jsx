import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import Tutorials from '../components/Tutorials.jsx'
import { LoadMore } from '../components/LoadMore.jsx'

export const TutorialsPage = () => {
  return (
    <>
            <NavPage name='Tutorial'paragraph='Browse through our helpful tutorial' elementId='props-filter'/>
            <Tutorials/>
            <Tutorials/>
            <Tutorials/>
            <LoadMore/>


    </>
  )
}

