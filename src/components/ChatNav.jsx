import React from 'react';
import { NavLink } from 'react-router-dom';

export const ChatNav = () => {

    const chatNavStyle = ({isActive}) => {
        return{
        background: isActive ? '#E9E9E9' : 'none',
        // width: isActive ? '50px' : '',
       
        borderRadius: isActive ? '48px' : ''
        }
    }
  return (
    <>

        <nav className='flex  mt-4'>
                    <ul className='flex justify-start  lg:gap-6 md:gap-4 sm:gap-3 py-2 myOverflow'>
                        <li className='md:block hidden'><NavLink style={chatNavStyle} to='/chat' className='md:text-lg sm:text-sm text-xs px-4 py-2 font-sfRegular '>
                            My Courses
                        </NavLink></li>
                        <li className='md:hidden block'><NavLink style={chatNavStyle} to='/chat' className='md:text-lg  px-4 py-2 font-sfRegular '>
                            Courses
                        </NavLink></li>
                        <li className='xl:mx-3 md:block hidden' ><NavLink style={chatNavStyle} className=' md:text-lg px-4 py-2 font-sfRegular  'to='/chatTutorials'>
                            Recent tutorials
                        </NavLink></li>
                        <li className='xl:mx-3 md:hidden block' ><NavLink style={chatNavStyle} className='md:text-lg px-4 py-2 font-sfRegular  'to='/chatTutorials'>
                            Tutorials
                        </NavLink></li>
                        <li className='xl:mx-3 md:block hidden'><NavLink style={chatNavStyle} to='/chatCatalog' className='md:text-lg font-sfRegular  px-4 py-2'>
                            Saved catalogs
                        </NavLink></li>
                        <li className='xl:mx-3 md:hidden block'><NavLink style={chatNavStyle} to='/chatCatalog' className='md:text-lg font-sfRegular  px-4 py-2'>
                            Catalogs
                        </NavLink></li>
                        <li className='xl:mx-3 md:block hidden'><NavLink style={chatNavStyle} to='/chatTemplate' className= 'md:text-lg font-sfRegular  px-4 py-2'>Saved template</NavLink></li>
                        <li className='xl:mx-3 md:hidden block'><NavLink style={chatNavStyle} to='/chatTemplate' className= 'md:text-lg font-sfRegular  px-4 py-2'>Template</NavLink></li>
                    </ul>
                    
        </nav>

    </>
  )
}
