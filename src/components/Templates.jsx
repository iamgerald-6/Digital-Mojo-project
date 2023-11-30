import React, { useState } from 'react'
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';
import TemplateProfile from '../assets/TemplateProfile.svg';
import { Link } from 'react-router-dom';
import { IntoTemplate } from './IntoTemplate';

export const Templates = (props) => {
    const [open, setOpen] = useState(false)
    const handleOpen =()=>{
        setOpen(!open)
    }
  return (
    <>
            <div className='flex  mt-5 mx-10 relative'>
                <div className=' w-[100vw] justify-between  flex '>
                    <h3 className='md:mt-3 sm:mt-16 mt-16 text-xl font-sfBold'>{props.name}</h3>
                    <Link  to='/intotemp' className='md:mt-3 sm:mt-16 mt-16 text-blue-700 font-sfMedium underline'>{props.title}</Link>
                </div>
            </div>
            <div className='grid  md:grid-cols-4 gap-4 sm:grid-cols-2 sm:gap-3 mt-3 mx-10'>
                <div onClick={handleOpen} className='cursor-pointer '>
                    <img className='sm:w-[49vw] w-[100vw]' src={Tut1} alt='TutorialPic1'/>
                    <h6 className='flex justify-between font-sfMedium  xl:text-base md:text-sm lg:text-sm mt-1 '>Black friday sale<span className='ms-1 text-secondary-100 flex gap-1 me-3 font-sfMedium'><LiaInfoCircleSolid className='text-secondary-100 mt-1 font-sfMedium'/>PSD</span></h6>
                    <div className='flex'><img className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2 font-sfMedium text-secondary-100 '>Jodesign</span></div>
                </div>
                
                <div onClick={handleOpen} className='cursor-pointer '>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tut2} alt='TutorialPic2'/>
                    <h6 className='flex justify-between  xl:text-base md:text-sm lg:text-sm mt-1 font-sfMedium'>Black friday sale<span className='flex gap-1 ms-1 text-secondary-100 me-3 font-sfMedium'><LiaInfoCircleSolid className='mt-1 font-sfMedium'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2 font-sfMedium'>Jodesign</span></div>
                </div>

                <div onClick={handleOpen} className='cursor-pointer '>
                    <img className =' sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tut5} alt='TutorialPic3'/>
                    <h6 className='flex justify-between font-sfMedium xl:text-base md:text-sm lg:text-sm mt-1 '>Creative agency design<span className='ms-1 text-secondary-100 flex gap-1 me-3'><LiaInfoCircleSolid className='text-secondary-100 mt-1'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2 font-sfMedium'>Jodesign</span></div>
                </div>

                <div onClick={handleOpen} className='cursor-pointer '>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tut4} alt='TutorialPic4'/>
                    <h6 className='flex font-sfMedium lg:tracking-tight xl:text-base md:text-sm justify-between lg:text-sm mt-1'>{props.hTag}<span className='flex gap-1 text-secondary-100 me-3 '><LiaInfoCircleSolid className='mt-1 text-secondary-100'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  text-secondary-100 ms-2 font-sfMedium'>Jodesign</span></div>
                </div>

            </div>
            <div className={`${open ? 'block ': 'hidden' } absolute z-50 top-36 `}>
            <IntoTemplate/>
            
            </div>
            
       
    
    
    
    </>
  )
}
