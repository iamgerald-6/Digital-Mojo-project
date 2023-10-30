import React from 'react'
import { NavPage } from '../components/NavPage.jsx';
import RecentCourses from '../components/RecentCourses.jsx';
import { LoadMore } from '../components/LoadMore.jsx';

export const RecentPages = () => {
  return (
    <>
        <NavPage name='Courses' paragraph='Browse all our free and paid courses'/>
        <RecentCourses name='Recent Courses' elementId='props-certified'/>
        <RecentCourses name='Paid courses' certified='Certified course'/>
        <RecentCourses name='Free courses' certified='Non-Certified'/>
        <LoadMore/>
    </>
  )
}
