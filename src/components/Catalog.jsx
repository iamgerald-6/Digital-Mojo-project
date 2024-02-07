import React from 'react';
import Cat1 from '../assets/Cat1.png'
import Cat2 from '../assets/Cat2.png'
import Cat3 from '../assets/Cat3.png'
import Cat4 from '../assets/Cat4.png'
import { Link } from 'react-router-dom';

 const Catalog = (props) => {
  return (
    <>
        <div className='flex md:mx-10 sm:mx-5 mx-2 sm:mt-8 '>
                <div className='w-[100vw] justify-between  flex'>
                    <h3 className='md:mt-3 sm:mt-16 mt-8 text-xl font-sfBold'>{props.name}</h3>
                    <Link  to='#' className='md:mt-3 sm:mt-16 mt-8 text-blue-700 underline font-sfMedium'>{props.title}</Link>
                </div>
        </div>

            <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3  md:mx-10 sm:mx-5   myOverflow  scroll-snap'>
                <Link to='/intoCatalog' className=''>
                    <img className ='sm:w-[49vw] w-[100vw] mt-2'src={Cat1} alt='TutorialPic1'/>
                    <h6 className='sm:mt-3 mt-1 sm:ms-0 ms-1 font-sfMedium sm:text-base sm:text-center text-xs'>Business branding</h6>
                </Link>

                <Link to='/intoCatalog'className=' '>
                    <img className ='sm:w-[49vw] w-[100vw] mt-2' src={Cat2} alt='TutorialPic2'/>
                    <h6 className='sm:mt-3 mt-1 sm:ms-0 ms-1 sm:text-center font-sfMedium sm:text-base text-xs'>Social media branding</h6>
                     
                </Link>

                <Link to='/intoCatalog' className=''>
                    <img className ='sm:w-[49vw] w-[100vw] mt-2' src={Cat3} alt='TutorialPic3'/>
                    <h6 className='sm:mt-3 mt-1 sm:ms-0 ms-1 sm:text-center font-sfMedium sm:text-base text-xs'>Web design</h6>
                     
                </Link>

                <Link to='/intoCatalog'  className=''>
                    <img className ='sm:w-[49vw] w-[100vw]  mt-2' src={Cat4} alt='TutorialPic4'/>
                    <h6 className=' sm:mt-3 mt-1 sm:ms-0 ms-1 sm:text-center font-sfMedium sm:text-base text-xs'>Social media post</h6>
                </Link>

            </div>
            
        
    
    </>
  )
}


export default Catalog