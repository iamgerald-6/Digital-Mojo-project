import React from 'react';
import CoverPic from '../assets/coverPic.png';
import SearchIcon from '../assets/search-icon.png'
import {motion} from 'framer-motion'

export const Cover = () => {
  
  const backImage ={
    backgroundImage: `url(${CoverPic})`,
    height: "76vh",
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }
  
  return (
    <>
        <div style={backImage} className='flex flex-col justify-center items-center'>
          {/* <img src={CoverPic}/> */}
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay : 0.6 , duration: 2}}
            className='text-center'>
              
              <h2 className='text-light-200 text-4xl font-sfMedium'>Find resources</h2>
              <p className='mt-6 text-base font-sfLight text-light-200 tracking-wide   '>Our resources page has all you need from
                templates, courses, catalog <br/>of design, and design
                inspiration to boost your creativity
              </p>
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay : 0.6 , duration: 2}}
            className=' w-[57vw] h-[12vh] rounded-3xl mt-5 bg-light-200 relative'>
              <img className='w-[24px] h-[22px] absolute xl:top-7 lg:top-6 left-6' src={SearchIcon} alt='search'/>
              <input className='w-[57vw] h-[12vh] outline-transparent rounded-[23px] ps-16 text-secondary-100 placeholder-secondary-100 text-lg' type='search'placeholder='Search' />
            </motion.div>
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay : 0.6 , duration: 2}}
            className='flex mt-12 text-light-200'>
              <h4 className='me-6 pt-1 font-sfRegular'>Trending searches</h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-8 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Instagram post</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-8 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Facebook post</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-8 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Business branding</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-8 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Branding</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-8 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Logo</motion.h4>
            </motion.div>
          
        </div>
        <div>
          
          
        </div>
    </>
  )
}
