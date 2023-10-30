import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Templates } from '../components/Templates.jsx'
import { LoadMore } from '../components/LoadMore.jsx'

export const TemplatesPage = () => {
  return (
    <>
        <NavPage name='Templates' paragraph='Browse and download our design templates' elementId='props-filter'/>
        <Templates hTag='Marketing agency'/>
        <Templates hTag='Marketing agency'/>
        <Templates hTag='Marketing agency'/>
        <LoadMore hTag='Marketing agency'/>

    
    </>
  )
}
