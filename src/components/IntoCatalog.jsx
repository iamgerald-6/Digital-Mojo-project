import Navbar from "./Navbar"
import CoverPic from '../assets/coverPic.png';
import SearchIcon from '../assets/search-icon.png'
import WhiteImport from '../assets/import-white.svg';
import {motion} from 'framer-motion'
import Footer from "./Footer";
import IntoCat1 from '../assets/IntoCat 1.png';
import IntoCat2 from '../assets/IntoCat 2.png';
import IntoCat3 from '../assets/IntoCat 3.png';
import IntoCat4 from '../assets/IntoCat 4.png';
import IntoCat5 from '../assets/IntoCat 5.png';
import IntoCat6 from '../assets/IntoCat 6.png';
import IntoCat7 from '../assets/IntoCat 7.png';
import IntoCat8 from '../assets/IntoCat 8.png';
import IntoCat9 from '../assets/IntoCat 9.png';
import IntoCat10 from '../assets/IntoCat 10.png';
import IntoCat11 from '../assets/IntoCat 11.png';
import IntoCat12 from '../assets/IntoCat 12.png';
import TemProfile from '../assets/tempProfile.png';
import { useState } from "react";
import IntoCatalog2 from './IntoCatalog2'
import { Link } from "react-router-dom";

export const IntoCatalog = () => {
    const backImage ={
        backgroundImage: `url(${CoverPic})`,
        height: "76vh",
        
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }

      

      
      
      return (
        <>
            
            <Navbar/>
            
            <div style={backImage} className='flex flex-col justify-center items-center'>
              {/* <img src={CoverPic}/> */}
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay : 0.6 , duration: 2}}
                className='text-center'>
                  
                  <h2 className='text-light-200 text-4xl font-sfMedium'>Web design</h2>
                  <p className='mt-4 text-base font-sfLight text-light-200 tracking-wide   '>
                    A catalog of web designs for inspiration for your next design project
                    
                  </p>
                </motion.div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay : 0.6 , duration: 2}}
                className=' w-[57vw] h-[12vh] rounded-xl mt-5 bg-light-200 relative'>
                  <img className='w-[24px] h-[22px] absolute xl:top-7 lg:top-6 left-6' src={SearchIcon} alt='search'/>
                  <input className='w-[57vw] h-[12vh] outline-transparent rounded-[23px] pt-0.5 ps-16 text-secondary-100 placeholder-secondary-100 text-lg' type='search'placeholder='Search' />
                </motion.div>
                <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay : 0.6 , duration: 2}}
                className='flex mt-12 text-light-200 text-sm'>
                  <h4 className='me-3 pt-1 font-sfRegular '>Trending searches:</h4>
                  <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Instagram post</motion.h4>
                  <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Facebook post</motion.h4>
                  <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Business branding</motion.h4>
                  <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Branding</motion.h4>
                  <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border px-4 py-1 rounded-full cursor-pointer font-sfRegular'>Logo</motion.h4>
                </motion.div>
                
            </div>
            <div className='mx-10'>
                <div className="flex justify-end mt-12 me-10">
                <button className="bg-dark-100 text-light-200 flex px-4 py-3 rounded-[8px]">Download all <img className='ms-3' src={WhiteImport} alt='import-icon'/></button>
                </div>

                <div className='grid  md:grid-cols-4 md:gap-8 sm:grid-cols-2  sm:gap-3 mx-10 mt-7'>
                    <Link to='/intocatalog2'  className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat1} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link>

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat2} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat3} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat4} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >
                </div>


                <div className='grid  md:grid-cols-4 md:gap-8 sm:grid-cols-2  sm:gap-3 mx-10 mt-7'>
                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat5} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat6} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat7} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat8} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >
                </div>

                <div className='grid  md:grid-cols-4 md:gap-8 sm:grid-cols-2  sm:gap-3 mx-10 mt-7 mb-12'>
                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat9} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat10} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat11} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >

                    <Link to='/intocatalog2' className='cursor-pointer '>
                        <img className='sm:w-[49vw] w-[100vw]' src={IntoCat12} alt='TutorialPic1'/>
                        <div className='flex'><img className=' ms-2 pt-3 w-[30px] h-[40px] 'src={TemProfile} alt=''/><span className='mt-3  ms-2 font-family text-dark-100 '>Lena Ablah</span></div>
                    </Link >
                </div>
              
            
            </div>
            <Footer/>
            
            
            

  </>
      )
}
