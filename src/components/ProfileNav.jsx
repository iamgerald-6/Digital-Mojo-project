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
        
            <div className='lg:w-[13vw] sm:w-[17vw] w-[100vw] sm:gap-0 gap-4 bg-secondary-400 xl:ms-72 lg:ms-64  mt-8 md:ps-6 sm:h-[79vh] h-[15vh] rounded-lg flex flex-row sm:flex-col overflow-x-scroll sm:overflow-hidden'>
                <h3 className='md:mt-5 lg:mt-5 xl:mt-5 sm:mt-5 mt-3  text-secondary-100'><NavLink style={navStyle} to='/general'>General</NavLink></h3>
                <h3 className='mt-3 text-secondary-100'><NavLink style={navStyle} to='/profile'>Profile</NavLink></h3>
                <h3 className='mt-3 text-secondary-100'><NavLink style={navStyle} to='/address'>Address</NavLink></h3>
                <h3 className='mt-3 text-secondary-100'><NavLink style={navStyle} to='/password'>Passwords</NavLink></h3>
                <h3 className='mt-3 sm:block hidden  text-secondary-100'>
                  <NavLink style={navStyle} to='/social'>Social Profile</NavLink></h3>
                  <h3 className='mt-3 sm:hidden block   text-secondary-100'>
                    <NavLink style={navStyle}  to='/social'>Socials</NavLink></h3>
                  
                
                <h3 className='mt-3 mt  text-secondary-100'><NavLink style={navStyle} to='/billing'>Billing</NavLink></h3>
              
                <h3 className='xl:mt-48  sm:block hidden lg:mt-32 sm:mt-36  md:mt-36 text-danger-300 mt-3 md:tracking-normal tracking-tighter'>
                  <NavLink >Delete account</NavLink></h3>
                <h3 className='xl:mt-48 sm:hidden block mobile-show lg:mt-40 sm:mt-48 lg:text-sm md:mt-48 text-danger-300 mt-3 md:tracking-normal tracking-tighter'>
                    <NavLink>Delete</NavLink></h3> 
            
            </div>
            
        
    
    
    </>
  )
}
