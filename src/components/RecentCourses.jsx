import React from 'react';
import RecentCourse1 from '../assets/recentcourse1.png';
import RecentCourse2 from '../assets/recentcourse2.png';
import RecentCourse3 from '../assets/recentcourse3.png';
import RecentCourse4 from '../assets/recentcourse4.png';
import {LuCrown} from 'react-icons/lu'
import { Link } from 'react-router-dom';

 const RecentCourses = (props) => {
  return (
    <>
             <div id={props.container}className='flex xl:justify-end lg:justify-end mt-3'>
                <div className='xl:w-[78vw] lg:w-[78vw] w-[100vw] justify-between  flex xl:justify-between lg:justify-between'>
                    <h3 className='md:mt-3 sm:mt-16 mt-16 text-xl font-bold'>{props.name}</h3>
                    <Link  to='#' className='md:mt-3 sm:mt-16 mt-16 text-blue-700 underline'>{props.title}</Link>
                </div>
             </div> 


                 <div className='grid lg:grid-cols-5 md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3  sm:mt-3'>
                    <div id={props.grid} className='xl:col-end-3 lg:col-end-3'>
                        <img className ='sm:w-[49vw] w-[100vw] md:mt-0 mt-6 sm:mt-3' src={RecentCourse1} alt='TutorialPic1'/>
                        <div id={props.elementId} className='bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[37vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0 '><LuCrown className='mt-1'/><span className='ms-2'>Certified course</span></div>
                        <h6 className='sm:mt-2  xl:text-lg lg:text-md md:text-md font-bold tracking-tight'>Beginner cyber security 101</h6>
                        <p id={props.paragraph} className='sm:mt-2 xl:text-sm lg:text-sm md:text-xs'> Taking you through the basics of cyber security</p>
                    </div>

                    <div className=' '>
                        <img className ='sm:w-[49vw] w-[100vw] md:mt-0 sm:mt-3 mt-7 ' src={RecentCourse2} alt='TutorialPic2'/>
                        <div id={props.elementId}className=' bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[37vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0'><LuCrown className='mt-1'/><span className='ms-2'>{props.certified}</span></div>
                        <h6 className='sm:mt-2 xl:text-lg lg:text-md md:text-md font-bold'>Instagram growth</h6>
                        <p id={props.paragraph} className='sm:mt-2 xl:text-sm lg:text-sm md:text-xs  text-sm '>Learn how to grow your instagram from 0-10,000 followers and more.</p>
                    </div>

                    <div className=''>
                        <img className ='sm:w-[49vw] w-[100vw] md:mt-0 sm:mt-3 mt-7 ' src={RecentCourse3} alt='TutorialPic3'/>
                        <div id={props.elementId}className='bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[37vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0'><LuCrown className='mt-1'/><span className='ms-2'>Certified course</span></div>
                        <h6 className='sm:mt-2 font-bold xl:text-md lg:text-md md:text-md'><Link to ='/intocourse' className='course-text-edit'>Facebook marketing</Link></h6>
                        <p id={props.paragraph} className='sm:mt-2 xl:text-sm lg:text-sm md:text-xs  text-sm '>Learn home to utilize the facebook marketing to sell products and services</p>
                    </div>

                    <div className=''>
                        <img className ='sm:w-[49vw] w-[100vw] md:mt-0 sm:mt-3 mt-7 ' src={RecentCourse4} alt='TutorialPic4'/>
                        <div id={props.elementId}className='bg-light-100 xl:w-[13vw] lg:w-[16vw] md:w-[19vw] sm:w-[23vw] w-[37vw] rounded-md flex sm:mt-1 sm:ms-2 md:px-0'><LuCrown className='mt-1'/><span className='ms-2'>Certified course</span></div>
                        <h6 className=' sm:mt-2 xl:text-lg lg:text-md md:text-md font-bold'>Social media marketing</h6>
                        <p id={props.paragraph} className='sm:mt-2 xl:text-sm lg:text-sm md:text-xs  text-sm '> Learn how to utilize the power of social media in marketing</p>
                    </div>

                 </div>
            
             
    
    
    </>
  )
}





export default RecentCourses