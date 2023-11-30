import React from 'react'
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';
import TemplateProfile from '../assets/TemplateProfile.svg';


export const ChatTemplate = (props) => {
  return (
    <>
        <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3 mt-7'>
                <div className=''>
                    <img className='sm:w-[49vw] w-[100vw]' src={Tut1} alt='TutorialPic1'/>
                    <h6 className='flex justify-between text-lg font-sfMedium  mt-1'>Black friday sale<span className='ms-1 text-secondary-100 flex gap-1'><LiaInfoCircleSolid className='text-secondary-100 mt-1 rotate-180'/>PSD</span></h6>
                    <div className='flex'><img className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-4  ms-2 text-secondary-100  text-base font-sfRegular'>Jodesign</span></div>
                </div>
                
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Tut2} alt='TutorialPic2'/>
                    <h6 className='flex justify-between text-lg font-sfMedium  mt-1'>Black friday sale<span className='flex gap-1 ms-1 text-secondary-100'><LiaInfoCircleSolid className='mt-1 rotate-180'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-4 text-secondary-100  ms-2 text-base font-sfRegular'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] ' src={Tut5} alt='TutorialPic3'/>
                    <h6 className='flex justify-between text-lg font-sfMedium  mt-1'>Creative agency design<span className='ms-1 text-secondary-100 flex gap-1'><LiaInfoCircleSolid className='text-secondary-100 mt-1 rotate-180'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-4 text-secondary-100  ms-2 text-base font-sfRegular'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Tut4} alt='TutorialPic4'/>
                    <h6 className='flex justify-between text-lg font-sfMedium  mt-1'>{props.hTag}<span className='flex gap-1 text-secondary-100 font-sfMedium '><LiaInfoCircleSolid  className='mt-1 text-secondary-100 rotate-180'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-4  text-secondary-100 ms-2 text-base font-sfRegular'>Jodesign</span></div>
                </div>

            </div>
    
    </>
  )
}
