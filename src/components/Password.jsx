import React from 'react'

export const Password = () => {
  return (
    <>
            <div className='lg:w-[69vw] md:w-[80vw] sm:w-[100vw] bg-light-200 sm:min-h-[77vh] h-full rounded-lg mt-5 md:me-11 sm:mx-4 sm:ps-10 ps-5 py-3  '>
                <form className='flex flex-col me-10 mt-5'>
                  
                    <label htmlFor='password' className='font-sfRegular text-xl'>Old password</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='password'
                      type='password'
                      placeholder='Enter password'
                      name='password'
                      required maxLength={15}
                      minLength={8} />
                  </div>
                  
                  
                    <label htmlFor='new-password' className='mt-10 font-sfRegular text-xl'>New Password</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='new-password'
                      type='password' name='password'
                      placeholder='Enter password'
                      required maxLength={15}
                      minLength={8}/>
                  </div>

                  <label htmlFor='con-password' className='mt-10 font-sfRegular text-xl'>Confirm Password</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100'
                      id='con-password'
                      type='password' name='password'
                      placeholder='Enter password'
                      required maxLength={15}
                      minLength={8}/>
                  </div>
                  <div className='flex sm:justify-end sm:h-[9vh] mt-12'>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-[15px] border px-5 py-2 font-sfMedium'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
    
    </>
  )
}
