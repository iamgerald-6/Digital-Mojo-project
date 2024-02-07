import React, { useRef } from 'react'
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Tutorials = (props) => {


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
        <div className='mt-5'>
            <div className='w-[100%] justify-between  flex md:px-10 sm:px-5 px-2 '>
                <h3 className='mt-3 text-xl  font-sfBold'>{props.name}</h3>
                <Link  to='#' className='mt-3 text-blue-700 underline font-sfMedium'>{props.title}</Link>
            </div>
        </div> 
        <motion.div 
        ref={containerRef}
        id='ContainerId' className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3  md:mx-10 sm:mx-5   myOverflow  scroll-snap'
        onWheel={handleWheelScroll}
        >
                <div 
                    
                className='cursor-pointer'>
                        <img className='sm:w-[49vw] w-[100vw] mt-2' src={Tut1} alt='TutorialPic1'/>
                        <h6 className=' sm:text-base sm:text-center mt-1 font-sfMedium text-xs text-start'>How to create a facebook post</h6>   
                </div>

                    <div
                    className='cursor-pointer'
                     
                    >
                        <img className='sm:w-[49vw] w-[100vw] mt-2'src={Tut2} alt='TutorialPic2'/>
                        <h6 className='font-sfMedium sm:text-base sm:text-center tracking-wide mt-1 text-xs text-start'>How to create a linkedin post</h6>
                        
                    </div>
             
                <div 
                className='cursor-pointer'>
                    <img className ='sm:w-[49vw] w-[100vw] mt-2' src={Tut5} alt='TutorialPic3'/>
                    <h6 className='font-sfMedium sm:text-base sm:text-center mt-1 text-xs text-start'>Creating engaging instagram posts</h6>
                     
                </div>

                <div 
                className='cursor-pointer'>
                    <img className ='sm:w-[49vw] w-[80vw] mt-2' src={Tut4} alt='TutorialPic4'/>
                    <h6 className='font-sfMedium sm:text-base sm:text-center mt-1 text-xs text-start'>How to create a facebook post</h6>
                </div>

            </motion.div>
            
        
    </>
  )
}



export default Tutorials