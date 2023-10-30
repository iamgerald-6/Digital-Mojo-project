import React, { useState } from 'react';
import {AiOutlineMore, AiOutlineClose} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';

export const ResponsiveSidebar = () => {

    
    const [isOpen, setIsOpen] = useState(false);

    const SideNav = () => {
        setIsOpen(!isOpen)
    }

    const closeSidebar = () => {
        setIsOpen(false)
    }

  return (
    <>
        <div className='lg:hidden relative'>
            
        <div onClick={SideNav} className=''>
        {isOpen ? (
            <AiOutlineClose
              size={30}
              onClick={closeSidebar}
              className='cursor-pointer text-secondary-100 absolute top-3 right-3'
            />
          ) : (
            <AiOutlineMore size={35} className='text-secondary-100' />
          )}
        </div>
            

            <div className={`${isOpen ? ' block sm:block' : 'hidden sm:hidden'} h-[100%] border fixed w-100 top-0 right-0 rounded-lg bg-dark-100 overflow-x-hidden w-[50vw] overflow-y-scroll transition  ease-in-out duration-500 pt-6 shadow-xl`}>
              <AiOutlineClose
              size={30}
              onClick={closeSidebar}
              className='cursor-pointer text-secondary-100 absolute top-3 right-3'/>
                <ul className='mt-7 ms-5'>
                    <li className='text-secondary-100 mt-4 font-bold text-xl hover:text-opacity-40 transition ease-in-out duration-300 sm:w-[30vw] md:w-[25vw] w-[43vw] rounded-2xl  border px-3 py-1'><NavLink to='/explore'>Explore Design</NavLink></li>
                    <li className='text-secondary-100 mt-4 font-bold text-xl hover:text-opacity-40 transition border ease-in-out duration-300 sm:w-[30vw] md:w-[25vw]  w-[43vw] px-3 py-1 rounded-2xl '><NavLink to='/'>Resources</NavLink></li>
                    <li className='text-secondary-100 mt-4 font-bold text-xl hover:text-opacity-40 transition ease-in-out duration-300 sm:w-[30vw] w-[43vw] md:w-[25vw]  px-3 py-1 rounded-2xl '><NavLink to='/wallet'>Wallet</NavLink></li>
                    <li className='text-secondary-100 mt-4 font-bold text-xl hover:text-opacity-40 transition ease-in-out duration-300 sm:w-[30vw] w-[43vw] md:w-[25vw]  px-3 py-1 rounded-2xl '><NavLink to='/chat'>Chat</NavLink></li>
                    <li className='text-secondary-100 mt-4 font-bold text-xl hover:text-opacity-40 transition ease-in-out duration-300 sm:w-[30vw] w-[43vw] md:w-[25vw]  px-3 py-1 rounded-2xl '><NavLink to='/general'>Edit Profile</NavLink></li>
                </ul>
                
                <hr className='bg-secondary-100 mx-3 mt-20'></hr>
                <ul className='mt-3 ms-5'>
                    <li className='text-secondary-100 font-bold  text-xl hover:text-opacity-40 transition ease-in-out border border-secondary-100 rounded-lg duration-300 md:w-[30vw] sm:w-[35vw] w-[43vw] px-3 py-1'><Link>Upgrade to agency</Link></li>
                    <li className='text-secondary-100 mt-4 mb-4 font-bold  text-xl hover:text-opacity-40 transition ease-in-out duration-300 px-3 py-1 border border-secondary-100 rounded-lg md:w-[30vw] sm:w-[35vw] w-[39vw]'><Link>Upgrade now</Link></li>
                </ul>
                <hr className='bg-secondary-100 mx-3'></hr>
                <div className='flex flex-col justify-start mt-3 ms-5'>
                    <button className='text-secondary-100 font-bold text-xl text-start mt-2 hover:text-opacity-40 transition ease-in-out'>Settings</button>
                    <button className='text-secondary-100 font-bold text-xl text-start mt-5 mb-3 hover:text-opacity-40 transition ease-in-out'>Logout</button>
                </div>

            </div>
        </div>
    
    </>
  )
}
