import React from 'react';
import {NavLink} from 'react-router-dom'

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
        
        <nav className='flex xl:justify-end lg:justify-end'>
            <ul className='flex xl:w-[78vw] lg:w-[78vw] w-[100vw] sm:justify-center sm:gap-16 gap-6 overflow-x-scroll'>
                <li className=''><NavLink style={secondNavStyle} to='/' className='text-secondary-100 px-4   '>
                    All
                </NavLink></li>
                <li className='md:mx-3 mx-0' ><NavLink style={secondNavStyle} className='text-secondary-100 ' to='/tutorials'>
                    Tutorials
                </NavLink></li>
                <li className='md:mx-3 mx-0'><NavLink to='/courses' className='text-secondary-100 '>
                    Courses
                </NavLink></li>
                <li className='md:mx-3 mx-0'><NavLink to='/catalog' className='text-secondary-100  '>Catalog</NavLink></li>
                <li className='md:mx-3 mx-0'><NavLink to ='/templates' className='text-secondary-100  '>Template</NavLink></li>
                <li className='md:mx-3 mx-0'><NavLink to='/inspiration' className='text-secondary-100  ' >Inspiration</NavLink></li>
            </ul>
            
        </nav>
        <hr className='xl:w-[78vw] lg:w-[78vw] xl:float-right lg:float-right mt-3'></hr>
    
    </>
  )
}


