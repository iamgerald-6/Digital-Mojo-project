// import React, { useState } from 'react';
// import ProfileOne from '../assets/profile1.png'
// import { FiBell, FiSearch } from 'react-icons/fi';
// import { ResponsiveSidebar } from './ResponsiveSidebar.jsx';
import { useState } from 'react'
import {Link } from 'react-router-dom'
import {motion} from 'framer-motion'

 const Navbar = () => {

  const [fixed, setFixed] = useState(false)
  const ScrollNav = ()=>{
    if (window.scrollY >= 66){
      setFixed(true);
    } else {setFixed(false)
  }
}
 window.addEventListener("scroll", ScrollNav)
  
  
  return (
    <>
      <header className='flex flex-col w-[100%] '>
      <div className=' h-[1.5vh] w-[100%] bg-gradient-to-r  from-purp-100 via-purp-200 to-purp-300'>
                      
      </div>
        <motion.nav initial={{y:-100}} animate={{y:0}} transition={{delay:0.4, type:'spring', stiffness:400}} className={`${fixed ? 'fixed top-0 shadow-lg duration-500 transition ease-out' : ''} z-30 bg-light-200  items-center flex  px-10  h-[12vh]  justify-between w-[100%] `}  >
              
              <div >
                <Link to='/' className='text-2xl font-semibold font-family leading-8 text-dark-100'>DezignSntr</Link>
              </div>

              <ul className='flex gap-14 pt-1 '>
                <li ><Link to='/explore' className='text-base font-sfMedium hoverNav'>Explore designs</Link></li>
                <li><Link to='/' className=' font-sfMedium hoverNav'>Resources</Link></li>
                <li><Link to='#' className=' font-sfMedium hoverNav'>Events</Link></li>
                <li><Link to='#' className='font-sfMedium hoverNav'>My Designs</Link></li>
                <li><Link to='/chat' className=' font-sfMedium hoverNav'>Chat</Link></li>
               
              </ul>
              <div  className='flex  pt-1.5'>
                <ul className='me-3'>
                  <li className=' font-sfMedium cursor-pointer hoverNav mt-1'>Pricing
                      <ul className='z-20 hidden'>
                        <li className='z-50'>free</li>
                        <li className='z-50'>Standard</li>
                        <li className='z-50'>Gold</li>
                      </ul>
                  </li>
                </ul>
                
                <h4 className=' border-r border-l border-dark-100 me-4 px-2 font-sfMedium mt-1'>0 credit</h4>
              <div className=' bg-dark-100 rounded-[57px] px-4 py-1'>
                <Link className=' text-light-200 font-sfMedium  hoverNav '> Login</Link>
              </div>
        
              </div>
              
              
           
              
                
            
            
        </motion.nav>
      </header>
      
    </>
  )
}




export default Navbar