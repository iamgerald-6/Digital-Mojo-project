import React from 'react';


export const Address = () => {
  return (
    <>
             <div className='lg:w-[61vw] md:w-[80vw] sm:w-[100vw] bg-secondary-400 h-[86vh] mb-4 rounded-lg mt-8 ps-10 sm:ms-6'>
        
                <form className='flex flex-col me-10 mt-7'>
                  
                    <label htmlFor='address' className='font-semibold'>Address</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-2 w-[55vw]'
                      id='address'
                      type='text'
                      placeholder='Enter Address'
                      name='address'
                      required maxLength={30}
                      minLength={2} />
                      
                  </div>
                  
                  
                    <label htmlFor='city' className='mt-10 font-semibold'>City</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='city'
                      type='text' 
                      name='city'
                      placeholder='Enter City'
                      required maxLength={20}
                      minLength={2}/>
                  </div>

                  <label htmlFor='state' className='mt-10 font-semibold'>State/Region</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='state'
                      type='text' 
                      name='state'
                      placeholder='Enter State/Region'
                      required maxLength={20}
                      minLength={2}/>
                       
                  </div>

                  <label htmlFor='zip' className='mt-10 font-semibold'>Zip code</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='zip'
                      type='text' 
                      name='zip'
                      placeholder='Enter ZipCode'
                      required maxLength={20}
                      minLength={2}/>
                  </div>

                  <div className='flex sm:justify-end sm:h-[9vh] sm:mt-7 mt-6  '>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-xl border px-5 py-2'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>

    
    </>
  )
}
