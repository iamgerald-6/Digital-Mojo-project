import React from 'react'
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const Tutorials = (props) => {
  return (
    <>
        <div className='mt-2'>
            <div className='w-[100%] justify-between  flex px-10'>
                <h3 className='mt-3 text-xl  font-sfBold'>{props.name}</h3>
                <Link  to='#' className='mt-3 text-blue-700 underline font-sfMedium'>{props.title}</Link>
            </div>
        </div> 
        <div className='grid lg:grid-cols-4  md:gap-4 sm:grid-cols-2  sm:gap-3 mt-3 mx-10'>

             
                <motion.div 
                    whileHover={{zIndex:0, scale:1.04, boxShadow:'3px 3px 3px 3px rgba(30,0,0,0.2)', borderRadius:'20px'}}
                    transition={{type:'spring', stiffness:130, delay: 0.1}}
                className='cursor-pointer'>
                        <img className=' w-[100vw]' src={Tut1} alt='TutorialPic1'/>
                        <h6 className=' text-base text-center mt-1 font-sfMedium '>How to create a facebook post</h6>   
                </motion.div>
                    <motion.div
                    className='cursor-pointer'
                     whileHover={{scale:1.04, boxShadow:'3px 3px 3px 3px rgba(30,0,0,0.2)', borderRadius:'20px'}}
                     transition={{type:'spring', stiffness:130, delay: 0.1}}
                    >
                        <img className=' w-[100vw] sm:mt-0 mt-6'src={Tut2} alt='TutorialPic2'/>
                        <h6 className='font-sfMedium text-base text-center tracking-wide mt-1'>How to create a linkedin post</h6>
                        
                    </motion.div>
             
                <motion.div 
                
                 whileHover={{scale:1.04, boxShadow:'3px 3px 3px 3px rgba(30,0,0,0.2)', borderRadius:'20px'}}
                 transition={{type:'spring', stiffness:130, delay: 0.1}}
                className='cursor-pointer'>
                    <img className =' w-[100vw] sm:mt-0 mt-6' src={Tut5} alt='TutorialPic3'/>
                    <h6 className='font-sfMedium text-base text-center mt-1'>Creating engaging instagram posts</h6>
                     
                </motion.div>

                <motion.div 
                 whileHover={{scale:1.04, boxShadow:'3px 3px 3px 3px rgba(30,0,0,0.2)', borderRadius:'20px'}}
                 transition={{type:'spring', stiffness:130, delay: 0.1}}
                className='cursor-pointer'>
                    <img className =' w-[100vw] sm:mt-0 mt-6' src={Tut4} alt='TutorialPic4'/>
                    <h6 className='font-sfMedium text-base text-center mt-1'>How to create a facebook post</h6>
                </motion.div>

            </div>
            
        
    </>
  )
}



export default Tutorials