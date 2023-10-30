import React from 'react'

export const Social = () => {
  return (
    <>
        <div className='lg:w-[61vw] md:w-[80vw] sm:w-[100vw] bg-secondary-400 h-[85vh] rounded-lg mb-5 mt-8 ps-10 sm:ms-6'>
                <form className='flex flex-col me-10 mt-5'>
                  
                    <label htmlFor='twitter' className='font-semibold'>Twitter</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-2 w-[55vw]'
                      id='twitter'
                      type='text'
                      placeholder='Enter Socials'
                      name='twitter'
                      required maxLength={15}
                      minLength={3} />
                  </div>
                  
                  
                    <label htmlFor='facebook' className='mt-10 font-semibold'>Facebook</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='facebook'
                      type='text' name='facebook'
                      placeholder='Enter Socials'
                      required maxLength={15}
                      minLength={3}/>
                  </div>

                  <label htmlFor='linkedin' className='mt-10 font-semibold'>Linkedin</label>
                  <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='linkedin'
                      type='text' name='linkedin'
                      placeholder='Enter Socials'
                      required maxLength={15}
                      minLength={3}/>
                  </div>

                  <label htmlFor='instagram' className='mt-10 font-semibold'>Instagram</label>
                  <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='instagram'
                      type='text' name='instagram'
                      placeholder='Enter Socials'
                      required maxLength={15}
                      minLength={3}/>
                  </div>
                  <div className='flex sm:justify-end sm:h-[9vh] sm:mt-10 mt-6'>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-xl border px-5 py-2'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
    
    
    </>
  )
}
