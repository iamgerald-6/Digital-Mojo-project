import React from 'react'
import Facebook from '../assets/Facebook2.png';
import Polygon from '../assets/Polygon 1.svg';
import Crown from '../assets/crown.svg';
// import Minus from "../assets/minus-cirlce.svg";
// import Add from "../assets/add-circle.svg";
// import { delay, motion } from 'framer-motion';
import { Accordion } from './Accordion';

import Linkedin from '../assets/courselinkedin.svg';
import Instagram from '../assets/Insta.svg';
import Vector from '../assets/vector lady.svg';
import {Link} from 'react-router-dom';
import Downloadable from '../assets/import.svg';
import { Accordion2 } from './Accordion2';

export const IntoCourses2 = () => {

    
    

  return (
    <>

                <div className=' mx-10 mt-6 '>
                    <img className='w-[95vw] h-[87vh] relative' src={Facebook} alt='Facebook'/>
                </div>

                
                <button className='flex bg-dark-100 absolute top-[320px] left-[600px] py-3 px-6 rounded-[100px] z-20'>
                    <img className='me-4 ps-2 ri' src={Polygon} /><span className='text-light-200 font-sfMedium text-2xl'>Play video</span>
                </button>

                <div className='mx-10  flex mt-8 gap-4'>
                    <div>
                        <div className=' bg-light-200 w-[60vw] rounded-[18px] py-4 pb-6 px-6'>
                            <div className='flex justify-between'>
                                <h3 className='text-2xl font-family'>
                                    Facebook Marketing
                                </h3>

                                <div className='bg-light-100 xl:w-[14vw] lg:w-[16vw] flex md:w-[19vw] sm:w-[23vw] w-[37vw]  rounded-[8px] sm:mt-1 sm:ms-2 md:px-0'>
                                    <img src={Crown} alt='icon' className=' py-1 px-3'/>
                                    <span className='ms-1 py-1'>Certified course</span>
                                </div>
                                
                            
                            </div>
                            <p className='text-secondary-100'>#free</p>
                            </div>

                            <div className='mt-3 bg-light-200 rounded-[18px] py-12 px-7 w-[60vw] pb-14 '>
                                <h3 className='text-2xl font-sfRegular'>Course details</h3>
                                <p className='text-secondary-100 mt-2 font-sfRegular'>This course will teach you from beginner to advance how to market on Facebook effectively to drive traffic<br/> and get sales this course has been broken into 3 sections.</p>

                                <div className='mt-24'>
                                    <div >
                                       <Accordion  name={`Making and Engaging post`} paragraph={` In this section you will learn the basics of creating a post and a design to post how to create and\nattach images and videos to post for engagement, and bonus tips to creating captivating and\ninteresting post that your target audience will love `}/>
                                    </div>


                                    <div className='mt-10'>
                                       <Accordion name='Boosting or Ads Promotion' paragraph={` In this section you will learn the basics of creating a post and a design to post how to create and\nattach images and videos to post for engagement, and bonus tips to creating captivating and\ninteresting post that your target audience will love `}/>
                                    </div>


                                    <div className='mt-10'>
                                      <Accordion name='Features and shares' paragraph={` In this section you will learn the basics of creating a post and a design to post how to create and\nattach images and videos to post for engagement, and bonus tips to creating captivating and\ninteresting post that your target audience will love `}/>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                            
                        


                        <div className='bg-light-200 w-[36vw] rounded-[18px] py-4 pb-6'>
 
                            <div className='py-2'>
                                <h2 className=' px-5 text-2xl font-sfRegular'>Course content</h2>
                                <hr className='w-[100%] mt-3 border'/>
                            </div>
                            <div className='mt-6'>
                                    <div className=''>
                                       <Accordion2  name='Making and Engaging post' paragraph1='Creating a normal post' paragraph2='Post with image' paragraph3='Designing a post' paragraph4='Post with video' time1='5min' time2='5min' time3='5min' time4='5min'/>
                                    </div>


                                    <div className='mt-10'>
                                       <Accordion2 name='Boosting or Ads Promotion'  paragraph1='Creating a normal post' paragraph2='Post with image' paragraph3='Designing a post' paragraph4='Post with video' time1='5min' time2='5min' time3='5min' time4='5min'/>
                                    </div>


                                    <div className='mt-10 '>
                                      <Accordion2 name='Features and shares'  paragraph1='Creating a normal post' paragraph2='Post with image' paragraph3='Designing a post' paragraph4='Post with video' time1='5min' time2='5min' time3='5min' time4='5min'/> 
                                    </div>
                                    
                                </div>
                            <div>
                                <h3 className='text-xl font-sfMedium mx-5 mt-16'>Downloadable content</h3>
                                <hr className='w-[100%] mt-3 border'/>
                            </div>
                            <div className='mt-5'>
                                <li className='px-4 py-3 font-sfRegular text-lg  bg-secondary-400 flex justify-between mx-5 rounded-[9px] '> Design files<img src={Downloadable} alt='icon-import' className=''/></li>
                                <li className='px-4 py-3 font-sfRegular text-lg mt-2.5 bg-secondary-400 flex justify-between mx-5 rounded-[9px]'>Content calender<img src={Downloadable} alt='icon-import' className=''/></li>
                                <li className='px-4 py-3 font-sfRegular text-lg mt-2.5 bg-secondary-400 flex justify-between mx-5 rounded-[9px]'>Post calender<img src={Downloadable} alt='icon-import' className=''/></li>

                            </div>
                        </div>
                    </div>
                <div className='bg-light-200 mx-10 rounded-[18px] py-3 px-4 mt-5 mb-8'>
                        
                        <div className='flex justify-between mt-8 px-4'>
                             <h3 className='font-sfMedium text-lg'>Similar tutorials.</h3>
                             <h3 className='underline underline-offset-2 text-primary-500 font-sfRegular text-lg'>See all</h3>
                        </div>
                         <div className='grid md:grid-cols-3 md:gap-4 sm:grid-cols-2 sm:gap-3 mt-12 px-4 mb-7'>
                             
                             <div  className=''>
                                 <img className ='sm:w-[49vw] w-[100vw] 'src={Linkedin} alt='TutorialPic1'/>
                                 <h6 className='mt-2  text-lg text-center font-sfMedium'>How to create a Linkedin post</h6>
                             </div>
     
                             <div className=' '>
                                 <img className =' sm:w-[49vw] w-[100vw]' src={Instagram} alt='TutorialPic2'/>
                                 <h6 className='mt-2 text-lg text-center font-sfMedium'>How to make an instagram post</h6>
                             </div>
     
                             <div className=''>
                                 <img className ='sm:w-[49vw] w-[100vw] ' src={Vector} alt='TutorialPic3'/>
                                 <h6 className='mt-2 font-sfMedium text-center text-lg'><Link to ='#' className='course-text-edit'>Promoting your business</Link></h6>
                             </div>
                         </div>
                     
                             
                     </div>
                
                    
    
    
    </>
  )
}
