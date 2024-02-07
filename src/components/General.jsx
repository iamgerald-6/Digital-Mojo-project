import React from 'react'

export const General = () => {
  return (
    <>
        <div className='lg:w-[75vw] md:w-[80vw] sm:w-[100vw] bg-light-200 py-3 sm:min-h-[80vh] min-h-[70vh] rounded-lg sm:mt-5  sm:ps-10 ps-5 sm:mx-4 md:me-11 mt-2'>
                <form className='flex flex-col lg:me-10 mt-5'>
                  
                    <label htmlFor='username ' className='font-sfRegular text-xl'>Username</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-4 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100 font-sfRegular'
                      id='username'
                      type='text'
                      placeholder='Enter Username'
                      name='username'
                      required maxLength={15}
                      minLength={4} />
                  </div>
                  
                  
                    <label htmlFor='email' className='mt-10 font-sfRegular text-xl'>Email</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-4 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100 font-sfRegular'
                      id='email'
                      type='email' name='email'
                      placeholder='Enter Email'
                      autoComplete='email'
                      required maxLength={20}
                      minLength={6}/>
                  </div>
                  <div className='flex sm:justify-end  sm:mt-36 mt-10 '>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-[15px] text-lg border px-5 py-2 font-sfMedium'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
        
    
    </>
  )
}
