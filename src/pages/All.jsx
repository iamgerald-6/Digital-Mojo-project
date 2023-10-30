import React from 'react'
import Tutorials from '../components/Tutorials.jsx';
import Navbar from '../components/Navbar.jsx';
import {SecondNav}  from '../components/SecondNav.jsx';
import RecentCourses from '../components/RecentCourses.jsx';
import  {Templates}  from '../components/Templates.jsx';
import  Catalog  from '../components/Catalog.jsx';
import Inspiration from '../components/Inspiration.jsx';

 const All = () => {
  return (
   <>
         
        <Navbar/>
        <SecondNav/>
        <Tutorials name ='Tutorials' title='See all' />
        <RecentCourses elementId='props-certified' name='Recent Courses' title='See all'/>
        <Templates name='Templates' title='See all' hTag='Marketing agency design'/>
        <Catalog name='Catalog' title ='See all'/>
        <Inspiration/>
   </>
  )
}




export default All