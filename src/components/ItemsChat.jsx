import React from 'react';

import RecentCourse1 from '../assets/recentcourse1.png';
import RecentCourse2 from '../assets/recentcourse2.png';
import RecentCourse3 from '../assets/recentcourse3.png';
import RecentCourse4 from '../assets/recentcourse4.png';
import {LuCrown} from 'react-icons/lu'
import { Link } from 'react-router-dom';

export const ItemsChat = (props) => {
  return (
    <>
             


                 <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3   mt-3'>
                    <div  className=''>
                        <img className ='sm:w-[49vw] w-[100vw] 'src={RecentCourse1} alt='TutorialPic1'/>
                        <div id={props.elementId} className='  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className='mt-2  text-lg font-semibold'>Beginner cyber security 101</h6>
                        <p id={props.paragraph} className='mt-2 text-sm'> Taking you through the basics of cyber security</p>
                    </div>

                    <div className=' '>
                        <img className =' sm:w-[49vw] w-[100vw]' src={RecentCourse2} alt='TutorialPic2'/>
                        <div id={props.elementId}className='  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>{props.certified}</span></div>
                        <h6 className='mt-2 text-lg font-semibold'>Instagram growth</h6>
                        <p id={props.paragraph} className='mt-2 text-sm '>Learn how to grow your instagram from 0-10,000 followers and more.</p>
                    </div>

                    <div className=''>
                        <img className ='sm:w-[49vw] w-[100vw] ' src={RecentCourse3} alt='TutorialPic3'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className='mt-2 font-semibold text-lg'><Link to ='/intocourse' className='course-text-edit'>Facebook marketing</Link></h6>
                        <p id={props.paragraph} className='mt-2  text-sm'>Learn home to utilize the facebook marketing to sell products and services</p>
                    </div>

                    <div className=''>
                        <img className ='sm:w-[49vw] w-[100vw] ' src={RecentCourse4} alt='TutorialPic4'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className=' mt-2 text-lg font-semibold'>Social media marketing</h6>
                        <p id={props.paragraph} className='mt-2 text-sm'> Learn how to utilize the power of social media in marketing</p>
                    </div>
                    

                 </div>
                 
    
    </>
  )
}
