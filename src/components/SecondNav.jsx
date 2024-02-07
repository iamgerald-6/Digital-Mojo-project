import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {BsFilter} from 'react-icons/bs'

export const SecondNav = () => {
        const secondNavStyle = ({isActive}) => {
            return{
            background: isActive ? '#E9E9E9' : ' none',
            
            // width: isActive ? '50px' : '',
            color:  isActive ? '#060508' : '',
            borderRadius: isActive ? '48px' : ''

            }
        }

        
  return (
    <>
        
        <nav className='flex mt-10  items-center '>
            <ul className='flex  w-[100vw] sm:justify-center sm:gap-4 gap-6 myOverflow text-secondary-100'>
                <li className='py-2'><NavLink style={secondNavStyle} to='/' className=' font-sfSemiBold text-secondary-100 px-4 py-2 font-semibold hoverNav'>
                    Discover
                </NavLink></li>
                <li className='md:mx-0.5 mx-0 py-2' ><NavLink style={secondNavStyle} className='font-sfSemiBold text-secondary-100 px-3 py-2 hoverNav' to='/tutorials'>
                    Tutorials
                </NavLink></li>
                <li className='md:mx-0.5 mx-0 py-2'><NavLink style={secondNavStyle} to='/courses' className='font-sfSemiBold text-secondary-100  px-3 py-2 hoverNav'>
                    Courses
                </NavLink></li>
                <li className='md:mx-0.5 mx-0 py-2'><NavLink style={secondNavStyle} to='/catalog' className='font-sfSemiBold text-secondary-100 px-3 py-2 hoverNav'>Catalog</NavLink></li>
                <li className='md:mx-0.5 mx-0 py-2'><NavLink style={secondNavStyle} to ='/templates' className='font-sfSemiBold text-secondary-100  px-3 py-2 hoverNav'>Template</NavLink></li>
                <li className='md:mx-0.5 mx-0 py-2'><NavLink  style={secondNavStyle} to='/inspiration' className='font-sfSemiBold text-secondary-100  px-3 py-2 hoverNav' >Inspiration</NavLink></li>
                <li className=' mx-0 py-1 '><h3 to='/inspiration' className='font-sfMedium text-dark-100 flex  border border-dark-100 rounded-2xl px-3 py-1 hoverNav' ><BsFilter size={22} className=' mt-0.5 me-3'/>Filter</h3></li>
            </ul>
            
        </nav>
        
       
    
    </>
  )
}


