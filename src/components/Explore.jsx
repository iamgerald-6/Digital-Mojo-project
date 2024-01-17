import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import CreateDesign from '../assets/CreateDesign.png';
import SearchIcon from '../assets/search-icon.png';
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


export const Explore = () => {
    // const secondNavStyle = ({isActive}) => {
    //     return{
    //     background: isActive ? '#E9E9E9' : 'none',
    //     // width: isActive ? '50px' : '',
    //     color:  isActive ? '#060508' : '',
    //     borderRadius: isActive ? '48px' : ''

    //     }}
  return (
    <>
        <div className='flex justify-between mt-16 bg-light-200 mx-12  rounded-[53px]'>
            <div className='ps-12 pt-16 '>
                <h1 className='text-5xl font-sfSemiBold '>Bring your design ideas<br/> to life</h1>
                <h5 className=' text-secondary-100 mt-6 font-sfRegular text-lg'>Do you have an idea, a content calender or a single design like<br/> a social media post etc ?</h5>
                <div className='flex gap-4 mt-10'>
                    <Link to='/createDesign' className='border rounded-[74px] px-3 py-2 bg-dark-100 text-light-200 text-base font-sfRegular'>Create design</Link>
                    <Link to='/events' className='border rounded-[74px] px-3 py-2 hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 text-base font-sfRegular'>Content calender</Link>
                </div>
            </div>
           
            <div>
                <img className='w-[45vw] h-[63vh]' src={CreateDesign} alt=''/>
            </div>
        </div>


        <div className='flex flex-col items-center justify-center mt-24'>
           <div className='text-center'>
              <h2 className='text-dark-100 font-sfMedium text-4xl'>Find design inspiration</h2>
              <p className='text-secondary-100 text-base mt-4 text-center font-sfRegular'>Get design inspiration to guide and find the best designs for your brand<br/> or company</p>
            </div>
            <div className=' w-[60vw] h-[12vh] rounded-xl mt-5 bg-light-200 relative'>
              <img className='w-[24px] h-[24px] absolute xl:top-7 lg:top-6 left-6' src={SearchIcon} alt='search'/>
              <input className='w-[55vw] h-[12vh] rounded-[23px] pt-1 ps-16 text-secondary-100 text-lg placeholder-secondary-100 font-sfRegular outline-white' type='search'placeholder='Search' />
            </div>
            <div className='flex mt-10 text-light-200 text-sm'>
              <h4 className='me-6 pt-1 text-secondary-100 font-sfRegular '>Trending searches</h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 text-secondary-100 px-4 py-1 rounded-[56px] cursor-pointer font-sfRegular'>Instagram post</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100 text-secondary-100 px-4 py-1 rounded-[56px] cursor-pointer font-sfRegular'>Facebook post</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100  text-secondary-100 px-4 py-1 rounded-[56px] cursor-pointer font-sfRegular'>Business branding</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100  text-secondary-100 px-4 py-1 rounded-[56px] cursor-pointer font-sfRegular'>Branding</motion.h4>
              <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-5 border border-secondary-100  text-secondary-100 px-4 py-1 rounded-[56px] cursor-pointer font-sfRegular'>Logo</motion.h4>
            </div>

          
        </div>

        <nav className='flex mt-16  items-center '>
            <ul className='flex  w-[100vw] sm:justify-center sm:gap-5 gap-6 overflow-x-scroll'>
                <li className='py-2'><NavLink to='#' className='text-dark-100 px-1 py-2 font-sfMedium text-base'>
                    Discover
                </NavLink></li>
                <li className='py-2' ><NavLink  className='text-dark-100 font-sfMedium px-1 py-2 text-base' to='#'>
                    Mobile
                </NavLink></li>
                <li className='py-2'><NavLink  to='#' className='text-dark-100 font-sfMedium px-1 py-2 text-base' >Instagram</NavLink></li>
                <li className='py-2'><NavLink  to='#' className='text-dark-100 font-semibold px-1 py-2 text-base'>
                    Illustration
                </NavLink></li>
                <li className='py-2'><NavLink to='#' className='text-dark-100 font-sfMedium px-1 py-2 text-base'>Instagram</NavLink></li>
                <li className='py-2'><NavLink to ='#' className='text-dark-100 font-sfMedium px-1 py-2 text-base'>Product design</NavLink></li>
                <li className='py-2'><NavLink  to='#' className='text-dark-100 font-sfMedium px-1 py-2 text-base' >Brand</NavLink></li>
                <li className='py-2'><NavLink  to='#' className='text-dark-100 font-sfMedium px-1 py-2 text-base' >Animations</NavLink></li>
             
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
        <div className='grid grid-cols-4 gap-4 mt-4 mx-10'>

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
        <div className='mt-14 flex justify-center mb-20 '>
            <div className=' border border-dark-100 px-12 rounded-md py-2 text-center hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 text-lg font-sfRegular'>
                <button>Load more</button>
            </div>
        </div>
   </>
  )
}
