import React from 'react';
import Cat1 from '../assets/Cat1.png'
import Cat2 from '../assets/Cat2.png'
import Cat3 from '../assets/Cat3.png'
import Cat4 from '../assets/Cat4.png'
import { Link } from 'react-router-dom';

 const Catalog = (props) => {
  return (
    <>
        <div className='flex mx-10 mt-8'>
                <div className='w-[100vw] justify-between  flex'>
                    <h3 className='md:mt-3 sm:mt-16 mt-16 text-xl font-sfBold'>{props.name}</h3>
                    <Link  to='#' className='md:mt-3 sm:mt-16 mt-16 text-blue-700 underline font-sfMedium'>{props.title}</Link>
                </div>
        </div>

            <div className='grid  md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3 mx-10 mt-3'>
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]'src={Cat1} alt='TutorialPic1'/>
                    <h6 className='mt-3 font-sfMedium text-base text-center'>Business branding</h6>
                </div>

                <div className=' '>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Cat2} alt='TutorialPic2'/>
                    <h6 className='mt-3 text-center font-sfMedium text-base'>Social media branding</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Cat3} alt='TutorialPic3'/>
                    <h6 className='mt-3 text-center font-sfMedium text-base'>web design</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Cat4} alt='TutorialPic4'/>
                    <h6 className=' mt-3 text-center font-sfMedium text-base'>social media post</h6>
                </div>

            </div>
            
        
    
    </>
  )
}


export default Catalog