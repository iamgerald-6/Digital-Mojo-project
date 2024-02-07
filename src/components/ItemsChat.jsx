import React from 'react';

import Course1 from '../assets/Course1.png';
import Course2 from '../assets/Course2.png';
import Course3 from '../assets/Course3.png';
import Course4 from '../assets/Course4.png';
import {LuCrown} from 'react-icons/lu'
import { Link } from 'react-router-dom';

export const ItemsChat = (props) => {
  return (
    <>
             


                 <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3 md:mx-10 sm:mx-5   myOverflow  scroll-snap   mt-5'>
                    <div  className=''>
                        <img className ='sm:w-[49vw] w-[100vw] 'src={Course1} alt='TutorialPic1'/>
                        <div id={props.elementId} className='  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className='mt-1  sm:text-base text-sm text-center font-semibold'>Beginner cyber security 101</h6>
                        
                    </div>

                    <div className=' '>
                        <img className =' sm:w-[49vw] w-[100vw]' src={Course2} alt='TutorialPic2'/>
                        <div id={props.elementId}className='  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>{props.certified}</span></div>
                        <h6 className='mt-1 sm:text-base text-sm text-center font-semibold'>Instagram growth</h6>
                        <p id={props.paragraph} className='mt-2 text-sm '>Learn how to grow your instagram from 0-10,000 followers and more.</p>
                    </div>

                    <div className=''>
                        <img className ='sm:w-[49vw] w-[100vw] ' src={Course3} alt='TutorialPic3'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className='mt-1 font-semibold sm:text-base text-sm '><Link to ='/intocourse' className='course-text-edit'>Facebook marketing</Link></h6>
                        <p id={props.paragraph} className='mt-2  text-sm'>Learn home to utilize the facebook marketing to sell products and services</p>
                    </div>

                    <div className=''>
                        <img className ='sm:w-[49vw] w-[100vw] ' src={Course4} alt='TutorialPic4'/>
                        <div id={props.elementId}className='certified-container  mt-2 ms-2'><LuCrown className=''/><span className='ms-2'>Certified course</span></div>
                        <h6 className=' mt-1 sm:text-base text-sm text-center font-semibold'>Social media marketing</h6>
                        <p id={props.paragraph} className='mt-2 text-sm'> Learn how to utilize the power of social media in marketing</p>
                    </div>
                    

                 </div>
                 
    
    </>
  )
}
