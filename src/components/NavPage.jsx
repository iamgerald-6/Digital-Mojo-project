import React, { useState } from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';
import ProfileOne from '../assets/profile1.png';
import {TbFilterSearch} from 'react-icons/tb';
import { ResponsiveSidebar } from './ResponsiveSidebar';
// import { Link } from 'react-router-dom';

export const NavPage = (props) => {

// const [drop, setDrop] = useState(false)

//   const handleDrop = () => {
//     setDrop(!drop)
//   }
  return (
    <>
        <nav className="flex xl:justify-end lg:justify-end relative">
            <div className="flex xl:w-[78vw]  lg:w-[78vw] xl:justify-between  lg:justify-between justify-between w-[100vw]">
                <div className='mt-4'>
                    <h4 className="sm:mb-2 mt-1 text-2xl font-bold">{props.name}</h4>
                    <h6 className='sm:text-base text-xs'>{props.paragraph}</h6>
                    <div className='flex'>
                        <form id={props.element} className='flex mt-3 w-[30vw] rounded-md px-5 bg-secondary-300 py-2'>
                          <FiSearch className='mt-2  text-secondary-100 me-3'size={19}/>
                          <input  className='w-[26vw] bg-secondary-300' type='search' placeholder='Search' />
                        </form>
                        <div id={props.elementId} className='mt-5 ms-3 flex  w-[13vw]'>
                          <TbFilterSearch size='20' className='ms-1'/> 
                          <span className='ms-2'>Sort by: All</span>
                        </div>

                    </div>
                </div>
              
                <ul id={props.margin} className='flex items-start mt-4 gap-5 '>
                  <li className='lg:flex hidden mt-2'><FiBell className='mt-1 me-3' size={19}/>notifications</li>
                  <div className='lg:flex items-center lg:bg-secondary-400 gap-7 lg:rounded-md lg:me-2 lg:ps-1'>
                    <li className='lg:flex hidden'>500 Credit</li>
                    <li className='lg:flex'><span className='lg:mt-2.5 hidden  lg:block lg:me-3'>Elton</span><img  className='' src={ProfileOne} alt='profile'/></li>
                  </div>
                  <ResponsiveSidebar/>
                 </ul>
                
            </div>
            
            
        </nav>
        {/* <ul className={`${drop ? 'sm:block md:block block' : 'sm:hidden md:hidden hidden'} mt-2  absolute top-10 h-[23vh] right-5 w-[46vw] shadow-lg z-50`}>
                  <div className='flex mt-2 border-b-2'>
                    <li className='me-4 font-semibold text-lg'>Elton</li>
                    <li className=' font-semibold text-lg'>500 Credit</li>
                    </div>
                    <li className='mt-2 ms-2'>Notifications</li>
                    <li className='mt-2 mb-2 ms-2'><Link>Edit Profile</Link></li>
          </ul> */}
        

    </>
  )
}
