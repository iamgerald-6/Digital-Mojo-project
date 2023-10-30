import React from 'react'
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Template1 from '../assets/tutorials1.png';
import Template2 from '../assets/tutorials2.png';
import Template3 from '../assets/tutorials3.png';
import Template4 from '../assets/tutorials4.png';
import TemplateProfile from '../assets/TemplateProfile.svg';


export const ChatTemplate = (props) => {
  return (
    <>
        <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3 mt-3'>
                <div className=''>
                    <img className='sm:w-[49vw] w-[100vw]' src={Template1} alt='TutorialPic1'/>
                    <h6 className='flex justify-between mt-1'>Black friday sale<span className='ms-1 text-secondary-100 flex gap-1'><LiaInfoCircleSolid className='text-secondary-100 mt-1'/>PSD</span></h6>
                    <div className='flex'><img className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2'>Jodesign</span></div>
                </div>
                
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Template2} alt='TutorialPic2'/>
                    <h6 className='flex justify-between mt-1'>Black friday sale<span className='flex gap-1 ms-1 text-secondary-100'><LiaInfoCircleSolid className='mt-1'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] ' src={Template3} alt='TutorialPic3'/>
                    <h6 className='flex justify-between mt-1'>Creative agency design<span className='ms-1 text-secondary-100 flex gap-1'><LiaInfoCircleSolid className='text-secondary-100 mt-1'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Template4} alt='TutorialPic4'/>
                    <h6 className='flex justify-between mt-1'>{props.hTag}<span className='flex gap-1 text-secondary-100 '><LiaInfoCircleSolid className='mt-1 text-secondary-100'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  text-secondary-100 ms-2'>Jodesign</span></div>
                </div>

            </div>
    
    </>
  )
}
