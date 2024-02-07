import React from 'react'
import { NavLink } from 'react-router-dom'

export const ProfileNav = () => {

  const navStyle= ({isActive})=>{
          return{
            color: isActive ? '#060508' : '',
            fontWeight: isActive ? '500' : ''
          }
  }

  
  return (
    <>
        
            <div className='lg:w-[26vw]  w-[100vw] sm:gap-0 gap-4 bg-light-200  md:ms-11 sm:ms-3 sm:ps-5   mt-5 lg:ps-8 md:ps-2 sm:h-[97%] h-[30%] rounded-lg flex flex-row sm:flex-col myOverflow lg:text-lg md:text-base font-sfRegular'>
                <h3 className='md:mt-4 lg:mt-4 xl:mt-5 sm:mt-5 mt-5   text-secondary-100'><NavLink style={navStyle}  to='/general'>General</NavLink></h3>
                <h3 className='mt-5 text-secondary-100'><NavLink style={navStyle}  to='/profile'>Profile</NavLink></h3>
                <h3 className='mt-5 text-secondary-100'><NavLink style={navStyle}  to='/address'>Address</NavLink></h3>
                <h3 className='mt-5 text-secondary-100'><NavLink style={navStyle} to='/password'>Passwords</NavLink></h3>
                <h3 className='mt-4 sm:block hidden  text-secondary-100'>
                  <NavLink style={navStyle} to='/social'>Social Profile</NavLink></h3>
                  <h3 className='mt-5 sm:hidden block   text-secondary-100'>
                    <NavLink style={navStyle}   to='/social'>Socials</NavLink></h3>
                  
                
                <h3 className='mt-3 mt sm:block hidden  text-secondary-100'><NavLink style={navStyle} to='/brand'>Brand details</NavLink></h3>
                <h3 className='mt-5 mb-5 sm:hidden block   text-secondary-100'>
                    <NavLink style={navStyle}   to='/brand'>Brand</NavLink></h3>
              
                <h3 className='xl:mt-52  sm:block hidden  sm:mt-48   text-danger-300 mt-3 md:tracking-normal md:text-sm tracking-tighter'>
                  <NavLink >Delete account</NavLink></h3>
                <h3 className='= sm:hidden block mobile-show lg:mt-40 sm:mt-48  text-danger-300 mt-5 md:tracking-normal tracking-tighter'>
                    <NavLink>Delete</NavLink></h3> 
            
            </div>
            
        
    
    
    </>
  )
}
