import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {BsFilter} from 'react-icons/bs'

export const SecondNav = () => {
        const secondNavStyle = ({isActive}) => {
            return{
            background: isActive ? '#E9E9E9' : 'none',

            // width: isActive ? '50px' : '',
            color:  isActive ? '#060508' : '',
            borderRadius: isActive ? '48px' : ''

            }
        }

        
  return (
    <>
        
        <nav className='flex mt-14  items-center '>
            <ul className='flex  w-[100vw] sm:justify-center sm:gap-8 gap-6 overflow-x-scroll'>
                <li className='  py-2'><NavLink style={secondNavStyle} to='/' className=' font-sfSemiBold text-dark-100 px-5 py-2 font-semibold'>
                    Discover
                </NavLink></li>
                <li className='md:mx-1 mx-0 py-2' ><NavLink style={secondNavStyle} className='font-sfSemiBold text-dark-100 px-5 py-2' to='/tutorials'>
                    Tutorials
                </NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink style={secondNavStyle} to='/courses' className='font-sfSemiBold text-dark-100  px-5 py-2'>
                    Courses
                </NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink style={secondNavStyle} to='/catalog' className='font-sfSemiBold text-dark-100 px-5 py-2 '>Catalog</NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink style={secondNavStyle} to ='/templates' className='font-sfSemiBold text-dark-100  px-5 py-2 '>Template</NavLink></li>
                <li className='md:mx-1 mx-0 py-2'><NavLink  style={secondNavStyle} to='/inspiration' className='font-sfSemiBold text-dark-100  px-5 py-2' >Inspiration</NavLink></li>
                <li className=' mx-0 py-1 '><h3 to='/inspiration' className='font-sfMedium text-dark-100 flex  border border-dark-100 rounded-2xl px-3 py-1 ' ><BsFilter size={22} className=' mt-0.5 me-3'/>Filter</h3></li>
            </ul>
            
        </nav>
        
       
    
    </>
  )
}


