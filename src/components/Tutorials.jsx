import React from 'react'
import Tutorials1 from '../assets/tutorials1.png';
import Tutorials2 from '../assets/tutorials2.png';
import Tutorials3 from '../assets/tutorials3.png';
import Tutorials4 from '../assets/tutorials4.png';
import { Link } from 'react-router-dom';

const Tutorials = (props) => {
  return (
    <>
        <div className='flex xl:justify-end lg:justify-end mt-5'>
            <div className='xl:w-[78vw] lg:w-[78vw] w-[100vw] justify-between  flex xl:justify-between lg:justify-between'>
                <h3 className='mt-3 text-xl font-bold'>{props.name}</h3>
                <Link  to='#' className='mt-3 text-blue-700 underline'>{props.title}</Link>
            </div>
        </div> 
        <div className='grid lg:grid-cols-5 md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3 mt-3 '>

             
                <div className=' xl:col-end-3 lg:col-end-3'>
                        <img className='sm:w-[49vw] w-[100vw]' src={Tutorials1} alt='TutorialPic1'/>
                        <h6 className='font-bold xl:text-lg lg:text-md  mt-1 '>How to create a facebook post</h6>   
                </div>
                    <div >
                        <img className='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6'src={Tutorials2} alt='TutorialPic2'/>
                        <h6 className='font-bold xl:text-lg lg:text-md tracking-wide'>How to create a linkedin post</h6>
                        
                    </div>
             
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tutorials3} alt='TutorialPic3'/>
                    <h6 className='font-bold xl:text-lg lg:text-md xl:-tracking-normal lg:tracking-tighter'>Creating engaging instagram posts</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tutorials4} alt='TutorialPic4'/>
                    <h6 className='font-bold xl:text-lg lg:text-md'>How to create a facebook post</h6>
                </div>

            </div>
            
        
    </>
  )
}



export default Tutorials