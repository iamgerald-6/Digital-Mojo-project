import React from 'react';
import Success from '../assets/Success.svg';
import {Link,NavLink} from 'react-router-dom'
import SearchIcon from '../assets/search-icon.png';
// import CreateDesign from '../assets/CreateDesign.png';
// import SearchIcon from '../assets/search-icon.png';
import {BsFilter} from 'react-icons/bs';
import Create4 from '../assets/CreateDesign4.svg';
import Create5 from '../assets/CreateDesign5.svg';
import Create6 from '../assets/CreateDesign6.svg';
import Create9 from '../assets/CreateDesign9.svg';
import Create from '../assets/Create1.svg';
import Create2 from '../assets/CreateDesign2.svg';
import Create3 from '../assets/CreateDesign3.svg';
import Create7 from '../assets/CreateDesign7.svg';
import {motion} from 'framer-motion';

export const Complete = () => {
  const secondNavStyle = ({isActive}) => {
    return{
    background: isActive ? '#E9E9E9' : 'none',
    // width: isActive ? '50px' : '',
    color:  isActive ? '#060508' : '',
    borderRadius: isActive ? '48px' : ''

    }}
  return (
    <>
       <div className='items-center flex justify-center h-[85vh] '>
            <div className='  text-center mt-9'>
                <img className='w-[35vw] h-[55vh]' src={Success} alt='success'/>
                 <p className='  text-base text-secondary-100 mt-3 font-sfRegular'>Yay! your design has been submitted successfully would you like<br/> to track your design create another. </p>
                 <div className='mt-6 text-center text-base tracking-tighter '>
                    <Link to='/createDesign' className='text-light-200  px-14 py-3 rounded-[8px] me-4 bg-dark-100 text-base font-sfRegular '>Create another</Link>
                    <Link to='/trackDesign' className='text-black px-14 border rounded-[8px] py-3 text-base font-sfRegular hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 '> Track my design</Link>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center justify-center mt-32'>
           <div className='text-center'>
              <h2 className='text-dark-100 font-sfMedium text-4xl'>Find design inspiration</h2>
              <p className='text-secondary-100 text-base mt-4 text-center font-sfRegular'>Get design inspiration to guide and find the best designs for your brand<br/> or company</p>
            </div>
            <div className=' w-[55vw] h-[12vh] rounded-xl mt-5 bg-light-200 relative'>
              <img className='w-[24px] h-[24px] absolute xl:top-7 lg:top-6 left-6' src={SearchIcon} alt='search'/>
              <input className='w-[55vw] h-[12vh] rounded-[23px] pt-1 ps-16 text-secondary-100 text-lg placeholder-secondary-100 font-sfRegular' type='search'placeholder='Search' />
            </div>
            <div className='flex mt-10 text-light-200 text-sm'>
              <h4 className='me-3 pt-1 text-secondary-100 font-sfRegular'>Trending searches</h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 px-4 text-secondary-100 py-1 rounded-full font-sfRegular cursor-pointer'>Instagram post</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 px-4  text-secondary-100 py-1 rounded-full font-sfRegular cursor-pointer'>Facebook post</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 px-4 text-secondary-100 py-1 rounded-full font-sfRegular cursor-pointer'>Business branding</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 px-4 text-secondary-100 py-1 rounded-full font-sfRegular cursor-pointer'>Branding</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 px-4 text-secondary-100 py-1 rounded-full font-sfRegular cursor-pointer'>Logo</motion.h4>
            </div>

            <nav className='flex mt-14  items-center '>
            <ul className='flex  w-[100%] sm:justify-center sm:gap-8 gap-6 overflow-x-scroll'>
                <li className='  py-2'><NavLink to='#' className='text-dark-100 px-1 py-2 font-sfMedium'>
                    Discover
                </NavLink></li>
                <li className='md:mx-1 mx-0 py-2' ><NavLink  className='text-dark-100 px-1 py-2 font-sfMedium' to='#'>
                    Mobile
                </NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink to='#' className='text-dark-100 font-sfMedium px-1 py-2'>
                    Illustration
                </NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink to='#' className='text-dark-100 font-sfMedium px-1 py-2 '>Instagram</NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink to ='#' className='text-dark-100 font-sfMedium px-1 py-2 '>Product design</NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink   to='#' className='text-dark-100 font-sfMedium px-1 py-2' >Animations</NavLink></li>
                
            </ul>
            
        </nav>

        <div className='grid grid-cols-4 gap-4 mt-3 mx-10'>

            <div className=''>
                <Link ><img className='w-[23vw]' src={Create5} alt=''/></Link>
               
            </div>

            <div className='relative'>
                <Link><img className='w-[23vw]' src={Create4} alt=''/></Link>
                
            </div>

            <div className='relative'>
                <Link><img className='w-[23vw]' src={Create6} alt=''/></Link>
            
            </div>

            <div className='relative'>
                <Link><img className='w-[23vw]' src={Create9} alt=''/></Link>
                
            </div>

        </div>
        <div className='grid grid-cols-4 gap-4 mt-4 mx-10 mb-20'>

            <div className=''>
                <Link><img className='w-[23vw]' src={Create3} alt=''/></Link>
                
            </div>

            <div className=''>
                <Link><img className='w-[23vw]' src={Create7} alt=''/></Link>
                
            </div>

            <div className=''>
                <Link><img className='w-[23vw]' src={Create2} alt=''/></Link>
               
            </div>

            <div className=''>
                <Link><img className='w-[23vw]' src={Create} alt=''/></Link>
                
            </div>
        </div>

          
        </div>
    
    </>
  )
}
