import React from 'react';
import ProfileOne from '../assets/profile1.png'
import { FiBell, FiSearch } from 'react-icons/fi';
import { ResponsiveSidebar } from './ResponsiveSidebar.jsx';

 const Navbar = () => {
  return (
    <>
      <header className='flex xl:justify-end lg:justify-end'>
        <nav className='flex xl:w-[78vw]  lg:w-[78vw] xl:justify-between  lg:justify-between justify-between w-[100vw] py-3.5'>
            
            <form className='flex  w-[30vw] rounded-md px-5 bg-secondary-300'>
            
             <FiSearch className='mt-3.5 text-secondary-100 me-3'size={19}/><input className='w-[26vw] bg-secondary-300' type='search' placeholder='Search' />
            </form>

            <ul className='flex items-center gap-6'>
                <li className='lg:flex hidden'><FiBell className='mt-1 me-3' size={19}/>notifications</li>
                <div className='lg:flex items-center lg:bg-secondary-400 gap-7 lg:rounded-md lg:me-2 lg:ps-1'>
                  <li className='lg:flex hidden lg:ps-3'>500 Credits</li>
                  <li className='lg:flex'><span className='lg:mt-2.5 hidden lg:block lg:me-3'>Elton</span><img className='' src={ProfileOne} alt='profile'/></li>
                </div>
                <ResponsiveSidebar/>
                
            </ul>
            
        </nav>
      </header>
    </>
  )
}




export default Navbar