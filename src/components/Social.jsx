import React from 'react'

export const Social = () => {
  return (
    <>
        <div className='lg:w-[69vw] md:w-[80vw] sm:w-[100vw] bg-light-200 h-[95vh] rounded-lg mb-5 mt-5 me-16 ps-10 sm:ms-6'>
                <form className='flex flex-col me-10 mt-5'>
                  
                    <label htmlFor='twitter' className='font-sfRegular text-xl'>Twitter</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-3 w-[62vw] bg-secondary-400'
                      id='twitter'
                      type='text'
                      placeholder='Enter Socials'
                      name='twitter'
                      required maxLength={15}
                      minLength={3} />
                  </div>
                  
                  
                    <label htmlFor='facebook' className='mt-10 font-sfRegular text-xl'>Facebook</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 w-[62vw] bg-secondary-400'
                      id='facebook'
                      type='text' name='facebook'
                      placeholder='Enter Socials'
                      required maxLength={15}
                      minLength={3}/>
                  </div>

                  <label htmlFor='linkedin' className='mt-10 font-sfRegular text-xl'>Linkedin</label>
                  <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 w-[62vw] bg-secondary-400'
                      id='linkedin'
                      type='text' name='linkedin'
                      placeholder='Enter Socials'
                      required maxLength={15}
                      minLength={3}/>
                  </div>

                  <label htmlFor='instagram' className='mt-10 font-sfRegular text-xl'>Instagram</label>
                  <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 w-[62vw] bg-secondary-400'
                      id='instagram'
                      type='text' name='instagram'
                      placeholder='Enter Socials'
                      required maxLength={15}
                      minLength={3}/>
                  </div>
                  <div className='flex sm:justify-end sm:h-[9vh] sm:mt-10 mt-6'>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-[15px] px-5 py-2 font-sfMedium'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
    
    
    </>
  )
}
