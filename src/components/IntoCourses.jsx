import React from 'react'
import Facebook from '../assets/Facebook2.png';
// import { LuCrown } from 'react-icons/lu';
import {LiaInfoCircleSolid} from 'react-icons/lia';
import CreativeMarket from '../assets/creative market.svg';
import Linkedin from '../assets/courselinkedin.svg';
import Instagram from '../assets/Insta.svg';
import Vector from '../assets/vector lady.svg';
import {Link} from 'react-router-dom';
import Polygon from '../assets/Polygon 1.svg';

export const IntoCourses = () => {
  return (
    <>
            
                <div className=' mx-10 mt-6 '>
                    <img className='w-[95vw] h-[87vh] relative' src={Facebook} alt='Facebook'/>
                </div>

                
                <button className='flex bg-dark-100 absolute top-[310px] left-[600px] py-3 px-6 rounded-[100px] z-20'>
                    <img className='me-4 ps-2 ri' src={Polygon} /><span className='text-light-200 font-sfMedium text-2xl'>Play video</span>
                </button>
                    


                <div className='flex bg-light-200 mt-5 mx-10 rounded-[18px] px-4 py-3 justify-between'>
                  <div className='ms-10 '>
                        <div className='mt-8 '>
                            <h1 className='text-4xl font-sfMedium'>How to create a facebook post</h1>
                            <p className=" text-base font-sfRegular text-secondary-100 mt-2">This tutorial will teach you how to create make a facebook post and promote/market it. </p>
                        </div>

                        <div  className='mt-12 pb-7'>
                            <h1 className='text-2xl font-sfRegular'>Steps mentioned in this tutorial.</h1>
                            <ul className='mt-4 list-decimal ms-5 font-sfRegular text-secondary-100 text-lg'>
                                <li className=''>Click create a post.</li>
                                <li className='mt-4'>Add a write up about post.</li>
                                <li className='mt-4'>Attach image or video if any.</li>
                                <li className='mt-4'>Add hashtags to promote to the right audience.</li>
                                <li className='mt-4'>Click on publish post.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='me-10 '>
                        <div className=' px-5 py-3 bg-secondary-400 mt-8 rounded-[18px]'>
                         <h3 className='flex justify-between mb-4 font-sfMedium text-lg'>Downloadable file <span className='ms-1 text-secondary-100 flex gap-1 me-3 font-sfMedium text-base'><LiaInfoCircleSolid className='text-secondary-100 mt-1 font-sfMedium rotate-180'/>PSD</span></h3>
                         <img className='' src={CreativeMarket} alt='agencyImage'/>
                         <div className='flex justify-center'>
                            <button className='bg-dark-100 rounded-[123px] text-light-200 px-4 py-1 mt-3  text-center font-sfRegular text-lg'>Download</button>
                         </div>
                         
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
