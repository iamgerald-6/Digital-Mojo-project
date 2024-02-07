import React, { useRef, useState } from 'react'
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';
import TemplateProfile from '../assets/TemplateProfile.svg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { IntoTemplate } from './IntoTemplate';

export const Templates = (props) => {
    const containerRef = useRef(null);

    const handleWheelScroll = (e) => {
      const container = containerRef.current;
  
      // Adjust the scroll speed by changing the multiplier (e.g., e.deltaX * 0.5)
      const scrollAmount = e.deltaX * 0.1;
  
      motion(container, {
        left: container.scrollLeft + scrollAmount,
        transition: { duration: 1.5 }, // Adjust the duration as needed
      });
      
    };
   
  return (
    <>
            <div className='flex  sm:mt-8 md:mx-10 sm:mx-5  mx-2 relative'>
                <div className=' w-[100vw] justify-between  flex '>
                    <h3 className='md:mt-3 sm:mt-16 mt-8 text-xl font-sfBold'>{props.name}</h3>
                    <Link  to='templates' className='md:mt-3 sm:mt-16 mt-8 text-blue-700 font-sfMedium underline'>{props.title}</Link>
                </div>
            </div>
            
            <motion.div 
            ref={containerRef}
                id='ContainerId' className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3 md:mx-10 sm:mx-5   myOverflow  scroll-snap'
                onWheel={handleWheelScroll}>
                <Link to='/intotemp'  className='cursor-pointer '>
                    <img className='sm:w-[49vw] w-[100vw] mt-2' src={Tut1} alt='TutorialPic1'/>
                    <h6 className='flex justify-between font-sfMedium  xl:text-base sm:text-sm lg:text-sm text-xs mt-1 '>Black friday sale<span className='ms-1 text-secondary-100 flex gap-1 me-3 font-sfMedium'><LiaInfoCircleSolid className='text-secondary-100 sm:mt-1 mt-0.5 font-sfMedium'/>PSD</span></h6>
                    <div className='flex'><img className=' sm:ms-2 sm:pt-3 pt-2 'src={TemplateProfile} alt=''/><span className='mt-3  sm:text-base ms-2 font-sfMedium text-sm text-secondary-100 '>Jodesign</span></div>
                </Link>
                
                <Link to='/intotemp'  className='cursor-pointer '>
                    <img className ='sm:w-[49vw] w-[100vw] mt-2' src={Tut2} alt='TutorialPic2'/>
                    <h6 className='flex justify-between  xl:text-base sm:text-sm lg:text-sm text-xs mt-1 font-sfMedium'>Black friday sale<span className='flex gap-1 ms-1 text-secondary-100 me-3 font-sfMedium'><LiaInfoCircleSolid className='sm:mt-1 mt-0.5 font-sfMedium'/>PSD</span></h6>
                    <div className='flex'><img  className=' sm:ms-2 sm:pt-3 pt-2 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100 sm:text-base text-sm  ms-2 font-sfMedium'>Jodesign</span></div>
                </Link>

                <Link to='/intotemp'  className='cursor-pointer '>
                    <img className =' sm:w-[49vw] w-[100vw] mt-2' src={Tut5} alt='TutorialPic3'/>
                    <h6 className='sm:flex justify-between font-sfMedium xl:text-base sm:text-sm text-xs lg:text-sm mt-1  hidden '>Creative agency design<span className='ms-1 text-secondary-100 flex gap-1 me-3'><LiaInfoCircleSolid className='text-secondary-100 sm:mt-1 mt-0.5'/>PSD</span></h6>
                    <h6 className='sm:hidden flex justify-between font-sfMedium xl:text-base sm:text-sm text-xs lg:text-sm mt-1 '>Creative agency<span className='ms-1 text-secondary-100 flex gap-1 me-3'><LiaInfoCircleSolid className='text-secondary-100 sm:mt-1 mt-0.5'/>PSD</span></h6>
                    <div className='flex'><img  className=' sm:ms-2 sm:pt-3 pt-2  'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100 sm:text-base text-sm  ms-2 font-sfMedium'>Jodesign</span></div>
                </Link>

                <Link to='/intotemp'  className='cursor-pointer '>
                    <img className ='sm:w-[49vw] w-[100vw] mt-2' src={Tut4} alt='TutorialPic4'/>
                    <h6 className='sm:flex font-sfMedium lg:tracking-tight xl:text-base sm:text-sm text-xs justify-between lg:text-sm mt-1 hidden'>{props.hTag}<span className='flex gap-1 text-secondary-100 me-3 '><LiaInfoCircleSolid className='sm:mt-1 text-secondary-100 mt-0.5'/>PSD</span></h6>
                    <h6 className='flex sm:hidden font-sfMedium lg:tracking-tight xl:text-base sm:text-sm text-xs justify-between lg:text-sm mt-1'>Marketing agency<span className='flex gap-1 text-secondary-100 me-3 '><LiaInfoCircleSolid className='sm:mt-1 text-secondary-100 mt-0.5'/>PSD</span></h6>
                    <div className='flex'><img  className=' sm:ms-2 sm:pt-3 pt-2'src={TemplateProfile} alt=''/><span className='mt-3  text-secondary-100 ms-2 sm:text-base text-sm font-sfMedium'>Jodesign</span></div>
                </Link>

            </motion.div>
           
            
       
    
    
    
    </>
  )
}
