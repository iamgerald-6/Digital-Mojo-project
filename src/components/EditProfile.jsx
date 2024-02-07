import React from 'react';
import ProfileUpdate from '../assets/Profileupdate.svg'

export const EditProfile = () => {
  return (
    <>
         <div className='lg:w-[69vw] md:w-[80vw] sm:w-[100vw] bg-light-200 sm:min-h-[100vh] h-full rounded-lg mt-5 mb-5 ps-5 sm:ps-10 sm:mx-4 md:me-11 py-4'>
                <div className='flex mt-6'>
                   <img src={ProfileUpdate} alt=''/> 
                   <div className='ms-5 mt-6 sm:flex sm:flex-row flex flex-col '>
                    <button className='px-5 py-2 rounded-[15px] border font-sfMedium sm:text-lg'>Upload new photo</button>
                    <button className='sm:ms-3 px-5 py-2 sm:mt-0 mt-1 rounded-[15px] border bg-secondary-600 text-light-200 font-sfMedium sm:text-lg'>Delete</button>
                   </div>
                </div>
                <form className='flex flex-col me-10 mt-7'>
                  
                    <label htmlFor='name' className='font-sfRegular text-xl'>Legal name</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-[9px] ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='name'
                      type='text'
                      placeholder='Enter Name'
                      
                      name='name'
                      required maxLength={15}
                      minLength={2} />
                      <h3 className='mt-1 sm:text-sm text-xs text-secondary-100 font-sfRegular'>We like to create transparency between customer and provider.</h3>
                  </div>
                  
                  
                    <label htmlFor='company' className='mt-10 font-sfRegular text-xl'>Company name</label>
                    <div className='mt-2'>
                      <input className='rounded-[9px] ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='company'
                      type='text' 
                      name='company'
                      placeholder='Enter Company name'
                      required maxLength={20}
                      minLength={2}/>
                  </div>
                  <div className='flex justify-between'>
                    <label htmlFor='company website' className='mt-10 font-sfRegular text-xl'>Company website</label>
                    <label htmlFor='company website' className='mt-11 font-sfRegular me-4 text-base text-secondary-100'>Optional</label>
                  </div>
                    <div className='mt-2'>
                      <input className='rounded-[9px] ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='company website'
                      type='text' 
                      name='company website'
                      placeholder='Enter Company website'
                      maxLength={20}
                      minLength={2}/>
                       <h3 className='mt-1 sm:text-sm text-xs text-secondary-100 font-sfRegular'>Helps designers understand the tone of your brand and business.</h3>
                  </div>

                  <label htmlFor='location' className='mt-10 font-sfRegular text-xl'>Location</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='location'
                      type='text' 
                      name='location'
                      placeholder='Enter location'
                      required maxLength={20}
                      minLength={3}/>
                  </div>

                  <div className='flex sm:justify-end sm:h-[9vh]  sm:mt-10 mt-4  '>
                    <div className>
                       <button className='bg-dark-100 text-light-200 rounded-xl border px-5 py-2'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>

    </>
  )
}
