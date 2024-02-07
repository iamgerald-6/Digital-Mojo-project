import React from 'react';


export const Address = () => {
  return (
    <>
             <div className='lg:w-[69vw] md:w-[80vw] sm:w-[100vw] bg-light-200 sm:min-h-[95vh] h-full py-4  rounded-lg mt-5 md:me-11 sm:mx-4 sm:ps-10  ps-5'>
        
                <form className='flex flex-col me-10 mt-7'>
                  
                    <label htmlFor='address' className='font-sfRegular text-xl'>Address</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400'
                      id='address'
                      type='text'
                      placeholder='Enter Address'
                      name='address'
                      required maxLength={30}
                      minLength={2} />
                      
                  </div>
                  
                  
                    <label htmlFor='city' className='mt-10 font-sfRegular text-xl'>City</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400'
                      id='city'
                      type='text' 
                      name='city'
                      placeholder='Enter City'
                      required maxLength={20}
                      minLength={2}/>
                  </div>

                  <label htmlFor='state' className='mt-10 font-sfRegular text-xl'>State/Region</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400'
                      id='state'
                      type='text' 
                      name='state'
                      placeholder='Enter State/Region'
                      required maxLength={20}
                      minLength={2}/>
                       
                  </div>

                  <label htmlFor='zip' className='mt-10 font-sfRegular text-xl'>Zip code</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-3 sm:w-[62vw] w-[85vw] bg-secondary-400'
                      id='zip'
                      type='text' 
                      name='zip'
                      placeholder='Enter ZipCode'
                      required maxLength={20}
                      minLength={2}/>
                  </div>

                  <div className='flex sm:justify-end sm:h-[9vh] sm:mt-7 mt-6  '>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-[15px] border px-5 py-2 font-sfMedium'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>

    
    </>
  )
}
