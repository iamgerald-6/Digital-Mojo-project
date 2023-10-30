import React from 'react';
import Catalog1 from '../assets/Catalog.png'
import Catalog2 from '../assets/Catalog2.png'
import Catalog3 from '../assets/Catalog3.png'
import Catalog4 from '../assets/Catalog4.png'
import { Link } from 'react-router-dom';

 const Inspiration = (props) => {
  return (
    <>
        <div className='flex xl:justify-end lg:justify-end mt-8'>
                <div className='xl:w-[78vw] lg:w-[78vw] w-[100vw] justify-between  flex xl:justify-between lg:justify-between'>
                    <h3 className='md:mt-3 sm:mt-16 mt-16 font-bold text-xl'>Inspiration</h3>
                    <Link  to='#' className='md:mt-3 sm:mt-16 mt-16 text-blue-700 underline'>see all</Link>
                </div>
        </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2  sm:gap-3 mt-6'>
                <div className='xl:col-end-3 lg:col-end-3'>
                    <img className =' sm:w-[49vw] w-[100vw]'src={Catalog1} alt='TutorialPic1'/>
                    <h6 className='mt-3 mb-5 font-bold text-lg text-center'>Business branding</h6>
                    
                </div>
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Catalog2} alt='TutorialPic2'/>
                    <h6 className='mt-3 text-center font-bold text-lg'>Social media branding</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Catalog3} alt='TutorialPic3'/>
                    <h6 className='mt-3 text-center font-bold text-lg'>web design</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Catalog4} alt='TutorialPic4'/>
                    <h6 className=' mt-3 text-center font-bold text-lg'>social media post</h6>
                </div>
            

            </div>
            <div className='mb-5'>
                <p className='text-white'>p</p>
            </div>
            
            
        
    
    </>
  )
}


export default Inspiration