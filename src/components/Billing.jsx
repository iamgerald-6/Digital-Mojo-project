import React from 'react'

export const Billing = () => {
  return (
    <>
        <div className='lg:w-[61vw] md:w-[80vw] sm:w-[100vw] bg-secondary-400 sm:h-[78vh] h-[80vh] rounded-lg mt-8 ps-10 sm:ms-6'>
                <form className='flex flex-col me-10 mt-5'>
                  
                    <label htmlFor='card-holder' className='font-semibold'>Cardholder Name</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-2 w-[55vw]'
                      id='card-holder'
                      type='text'
                      placeholder='Enter Name'
                      name='card-holder'
                      required maxLength={40}
                      minLength={3} />
                  </div>
                  
                  
                    <label htmlFor='card-number' className='mt-10 font-semibold'>Card Number</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-2 w-[55vw]'
                      id='card-number'
                      type='text' name='card-number'
                      placeholder='XXXX-XXXX-XXXX-XXXX'
                      required maxLength={20}
                      minLength={8}/>
                  </div>
                <div className='flex sm:flex-row flex-col mt-10'>
                    <div>
                        <label htmlFor='expire' className='mt-10 font-semibold'>Expiration Date</label>
                        <div className='mt-2'>
                            <input className='rounded-md ps-3 py-2 sm:w-[10vw] w-[20vw]'
                            id='expire'
                            type='text' name='expire'
                            placeholder='MM/YY'
                            required maxLength={5}
                            minLength={5}/>
                        </div>
                    </div>

                    <div className='sm:ms-10 sm:mt-0 mt-5'>
                        <label htmlFor='cvv' className='mt-10 font-semibold'>CVV</label>
                        <div className='mt-2'>
                            <input className='rounded-md ps-3 py-2 sm:w-[6vw] w-[15vw]'
                            id='cv'
                            type='text' 
                            name='cvv'
                            placeholder='123'
                            required maxLength={3}
                            minLength={3}/>
                        </div>
                     </div>

                  </div>
                  <div className='flex sm:justify-end sm:h-[9vh] sm:mt-24 mt-5'>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-xl border px-5 py-2'>Add card</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
    
    
    
    </>
  )
}
