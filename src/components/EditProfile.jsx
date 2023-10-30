import React from 'react';
import ProfileUpdate from '../assets/Profileupdate.svg'

export const EditProfile = () => {
  return (
    <>
         <div className='lg:w-[61vw] md:w-[80vw] sm:w-[100vw] bg-secondary-400 h-[116vh] rounded-lg mt-8 mb-5 ps-10 sm:ms-6'>
                <div className='flex mt-6'>
                   <img src={ProfileUpdate} alt=''/> 
                   <div className='ms-5 mt-6'>
                    <button className='px-4 py-2 rounded-lg border'>Upload new photo</button>
                    <button className='ms-3 px-4 py-2 rounded-lg border bg-secondary-600 text-light-200'>Delete</button>
                   </div>
                </div>
                <form className='flex flex-col me-10 mt-7'>
                  
                    <label htmlFor='name' className='font-semibold'>Legal name</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-2 w-[55vw]'
                      id='name'
                      type='text'
                      placeholder='Enter Name'
                      name='name'
                      required maxLength={15}
                      minLength={2} />
                      <h3 className='mt-1 text-sm text-secondary-100'>We like to create transparency between customer and provider.</h3>
                  </div>
                  
                  
                    <label htmlFor='company' className='mt-10 font-semibold'>Company name</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='company'
                      type='text' 
                      name='company'
                      placeholder='Enter Company name'
                      required maxLength={20}
                      minLength={2}/>
                  </div>

                  <label htmlFor='company website' className='mt-10 font-semibold'>Company website</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='company website'
                      type='text' 
                      name='company website'
                      placeholder='Enter Company website'
                      required maxLength={20}
                      minLength={2}/>
                       <h3 className='mt-1 text-sm text-secondary-100'>Helps designers understand the tone of your brand and business.</h3>
                  </div>

                  <label htmlFor='location' className='mt-10 font-semibold'>Location</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
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
