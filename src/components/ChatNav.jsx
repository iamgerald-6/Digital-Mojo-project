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

        <nav className='flex justify-end mt-10'>
                    <ul className='flex  xl:w-[78vw]  lg:w-[78vw] xl:justify-between  lg:justify-between justify-start w-[100vw] lg:gap-6 gap-4 py-2 overflow-x-scroll'>
                        <li className='sm:block hidden'><NavLink style={chatNavStyle} to='/chat' className='md:text-base sm:text-sm text-xs px-3 py-1 font-family '>
                            My Courses
                        </NavLink></li>
                        <li className='sm:hidden block'><NavLink style={chatNavStyle} to='/chat' className='md:text-base sm:text-sm text-base px-3 py-1 font-family '>
                            Courses
                        </NavLink></li>
                        <li className='xl:mx-3 sm:block hidden' ><NavLink style={chatNavStyle} className=' px-4 py-1 font-family 'to='/chatTutorials'>
                            Recent tutorials
                        </NavLink></li>
                        <li className='xl:mx-3 sm:hidden block' ><NavLink style={chatNavStyle} className=' px-4 py-1 font-family 'to='/chatTutorials'>
                            Tutorials
                        </NavLink></li>
                        <li className='xl:mx-3 sm:block hidden'><NavLink style={chatNavStyle} to='/chatCatalog' className='font-family px-4 py-1'>
                            Saved catalogs
                        </NavLink></li>
                        <li className='xl:mx-3 sm:hidden block'><NavLink style={chatNavStyle} to='/chatCatalog' className='font-family px-4 py-1'>
                            Catalogs
                        </NavLink></li>
                        <li className='xl:mx-3 sm:block hidden'><NavLink style={chatNavStyle} to='/chatTemplate' className= 'font-family px-4 py-1'>Saved template</NavLink></li>
                        <li className='xl:mx-3 sm:hidden block'><NavLink style={chatNavStyle} to='/chatTemplate' className= 'font-family px-4 py-1'>Template</NavLink></li>
                    </ul>
                    
        </nav>

    </>
  )
}
