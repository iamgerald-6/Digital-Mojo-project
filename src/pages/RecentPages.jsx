import React from 'react'
import { NavPage } from '../components/NavPage.jsx';
import RecentCourses from '../components/RecentCourses.jsx';
import { LoadMore } from '../components/LoadMore.jsx';
import Navbar from '../components/Navbar.jsx';
import { Cover } from '../components/Cover.jsx';
import { SecondNav } from '../components/SecondNav.jsx';
import Footer from '../components/Footer.jsx';

export const RecentPages = () => {
  return (
    <>
        <Navbar/>
        <Cover/>
        <SecondNav/>
        <RecentCourses name='Recent Courses' elementId='props-certified'/>
        <RecentCourses name='Paid courses' certified='Certified course'/>
        <RecentCourses name='Free courses' certified='Non-Certified'/>
        <LoadMore/>
        <Footer/>
    </>
  )
}
