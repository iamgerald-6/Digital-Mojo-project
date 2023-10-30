import React from 'react'
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Template1 from '../assets/tutorials1.png';
import Template2 from '../assets/tutorials2.png';
import Template3 from '../assets/tutorials3.png';
import Template4 from '../assets/tutorials4.png';
import TemplateProfile from '../assets/TemplateProfile.svg';
import { Link } from 'react-router-dom';

export const Templates = (props) => {
  return (
    <>
            <div className='flex xl:justify-end lg:justify-end mt-4'>
                <div className='xl:w-[78vw] lg:w-[78vw] w-[100vw] justify-between  flex xl:justify-between lg:justify-between'>
                    <h3 className='md:mt-3 sm:mt-16 mt-16 text-xl font-bold'>{props.name}</h3>
                    <Link  to='#' className='md:mt-3 sm:mt-16 mt-16 text-blue-700 underline'>{props.title}</Link>
                </div>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 gap-4 sm:grid-cols-2 sm:gap-3 mt-3'>
                <div className=' xl:col-end-3 lg:col-end-3'>
                    <img className='sm:w-[49vw] w-[100vw]' src={Template1} alt='TutorialPic1'/>
                    <h6 className='flex justify-between font-bold xl:text-base md:text-sm lg:text-sm mt-1'>Black friday sale<span className='ms-1 text-secondary-100 flex gap-1'><LiaInfoCircleSolid className='text-secondary-100 mt-1'/>PSD</span></h6>
                    <div className='flex'><img className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2'>Jodesign</span></div>
                </div>
                
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Template2} alt='TutorialPic2'/>
                    <h6 className='flex justify-between font-bold xl:text-base md:text-sm lg:text-sm mt-1'>Black friday sale<span className='flex gap-1 ms-1 text-secondary-100'><LiaInfoCircleSolid className='mt-1'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className =' sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Template3} alt='TutorialPic3'/>
                    <h6 className='flex justify-between font-bold xl:text-base md:text-sm lg:text-sm mt-1 '>Creative agency design<span className='ms-1 text-secondary-100 flex gap-1'><LiaInfoCircleSolid className='text-secondary-100 mt-1'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Template4} alt='TutorialPic4'/>
                    <h6 className='flex font-bold lg:tracking-tight xl:text-base md:text-sm justify-between lg:text-sm mt-1'>{props.hTag}<span className='flex gap-1 text-secondary-100 '><LiaInfoCircleSolid className='mt-1 text-secondary-100'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  text-secondary-100 ms-2'>Jodesign</span></div>
                </div>

            </div>
            
       
    
    
    
    </>
  )
}
