import React from 'react'

export const Password = () => {
  return (
    <>
            <div className='lg:w-[61vw] md:w-[80vw] sm:w-[100vw] bg-secondary-400 h-[78vh] rounded-lg mt-8 ps-10 sm:ms-6'>
                <form className='flex flex-col me-10 mt-5'>
                  
                    <label htmlFor='password' className='font-semibold'>Old password</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-2 w-[55vw]'
                      id='password'
                      type='password'
                      placeholder='Enter password'
                      name='password'
                      required maxLength={15}
                      minLength={8} />
                  </div>
                  
                  
                    <label htmlFor='new-password' className='mt-14 font-semibold'>New Password</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='new-password'
                      type='password' name='password'
                      placeholder='Enter password'
                      required maxLength={15}
                      minLength={8}/>
                  </div>

                  <label htmlFor='con-password' className='mt-10 font-semibold'>Confirm Password</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='con-password'
                      type='password' name='password'
                      placeholder='Enter password'
                      required maxLength={15}
                      minLength={8}/>
                  </div>
                  <div className='flex sm:justify-end sm:h-[9vh] mt-20'>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-xl border px-5 py-2'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
    
    </>
  )
}
