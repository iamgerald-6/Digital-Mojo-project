import React from 'react';
import Cat1 from '../assets/Cat1.png'
import Cat2 from '../assets/Cat2.png'
import Cat3 from '../assets/Cat3.png'
import Cat4 from '../assets/Cat4.png'
import { Link } from 'react-router-dom';

 const Inspiration = (props) => {
  return (
    <>
        <div className='flex md:mx-10 sm:mx-5 mx-2 sm:mt-8'>
                <div className=' w-[100vw] justify-between  flex'>
                    <h3 className='md:mt-3 sm:mt-16 mt-8 font-sfBold text-xl'>Inspiration</h3>
                    <Link  to='#' className='md:mt-3 sm:mt-16 mt-8 text-blue-700 underline font-sfMedium'>see all</Link>
                </div>
        </div>

            <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3  md:mx-10 sm:mx-5  myOverflow  scroll-snap'>
                <div className=''>
                    <img className =' sm:w-[49vw] w-[100vw] sm:mt-1 mt-2'src={Cat1} alt='TutorialPic1'/>
                    <h6 className=' mb-5 sm:mt-3 mt-1 sm:ms-0 ms-1 font-sfMedium sm:text-base sm:text-center text-xs'>Business branding</h6>
                    
                </div>
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-1 mt-2' src={Cat2} alt='TutorialPic2'/>
                    <h6 className='sm:mt-3 mt-1 sm:ms-0 ms-1 font-sfMedium sm:text-base sm:text-center text-xs'>Social media branding</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-1 mt-2' src={Cat3} alt='TutorialPic3'/>
                    <h6 className='sm:mt-3 mt-1 sm:ms-0 ms-1 font-sfMedium sm:text-base sm:text-center text-xs'>web design</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-1 mt-2' src={Cat4} alt='TutorialPic4'/>
                    <h6 className=' sm:mt-3 mt-1 sm:ms-0 ms-1 font-sfMedium sm:text-base sm:text-center text-xs'>social media post</h6>
                </div>
            

            </div>
            <div className='mb-5'>
                <p className='text-white'>p</p>
            </div>
            
            
        
    
    </>
  )
}


export default Inspiration