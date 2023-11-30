import React from 'react'
import { Link } from 'react-router-dom'

export const Event = () => {
  return (
    <>
             <div className='lg:w-[19vw] lg:pe-6 sm:w-[17vw] w-[100vw] sm:gap-0 gap-4 bg-secondary-400 xl:ms-72 lg:ms-64  mt-8 md:ps-6 sm:h-[116vh] h-[15vh] rounded-lg flex flex-row sm:flex-col overflow-x-scroll sm:overflow-hidden'>
                <div className='md:mt-5 lg:mt-5  xl:mt-5 sm:mt-5 mt-3 border rounded-lg text-sm text-secondary-100 bg-dark-100'>
                    <div className='flex justify-between mx-3 my-2 text-xs '>
                        <h3 className='text-light-200'>Instagram poster</h3>
                        <p className='text-secondary-100'>...</p>
                    </div>
                    <div className='flex justify-between mx-3 mt-4 mb-2'>
                        <h4 className='text-light-200'>Status:</h4>
                        <h4 className='text-secondary-100'>Progress</h4>
                    </div>
                    <div className='flex justify-between mx-3 mb-2 mt-1'>
                        <h4 className='text-light-200'>Designer:</h4>
                        <h4 className='text-secondary-100'>Jodesign</h4>
                    </div>
                    <div className='flex justify-between mx-3  mb-2 mt-1'>
                        <h4 className='text-light-200'>Progress:</h4>
                        <h4 className='text-secondary-100'>Awaiting review</h4>
                    </div>
                    <div className=' text-black text-sm mx-3 mb-2 text-center py-1 border rounded-md bg-light-200'>
                        <Link to='/message' >Chat designer</Link>
                    </div>
                    
                </div>

                <div className='md:mt-5 lg:mt-3  xl:mt-3 sm:mt-5 mt-3  rounded-lg text-sm text-secondary-100 bg-light-200'>
                    <div className='flex justify-between mx-3 my-2 text-xs '>
                        <h3 className='text-dark-100'>Instagram poster</h3>
                        <p className='text-dark-100'>...</p>
                    </div>
                    <div className='flex justify-between mx-3 mt-4 mb-2'>
                        <h4 className='text-secondary-100'>Status:</h4>
                        <h4 className='text-dark-100'>Progress</h4>
                    </div>
                    <div className='flex justify-between mx-3 mb-2 mt-1'>
                        <h4 className='text-secondary-100'>Designer:</h4>
                        <h4 className='text-dark-100'>Jodesign</h4>
                    </div>
                    <div className='flex justify-between mx-3  mb-2 mt-1'>
                        <h4 className='text-secondary-100'>Progress:</h4>
                        <h4 className='text-dark-100'>Awaiting review</h4>
                    </div>
                    <div className=' text-light-200 text-sm mx-3 mb-2 text-center py-1 border rounded-md bg-dark-100'>
                        <Link to='/message'>Chat designer</Link>
                    </div>
                    
                </div>

                <div className='md:mt-5 lg:mt-3  xl:mt-3 sm:mt-5 mt-3  rounded-lg text-sm text-secondary-100 bg-light-200'>
                    <div className='flex justify-between mx-3 my-2 text-xs '>
                        <h3 className='text-dark-100'>Instagram poster</h3>
                        <p className='text-dark-100'>...</p>
                    </div>
                    <div className='flex justify-between mx-3 mt-4 mb-2'>
                        <h4 className='text-secondary-100'>Status:</h4>
                        <h4 className='text-dark-100'>Progress</h4>
                    </div>
                    <div className='flex justify-between mx-3 mb-2 mt-1'>
                        <h4 className='text-secondary-100'>Designer:</h4>
                        <h4 className='text-dark-100'>Jodesign</h4>
                    </div>
                    <div className='flex justify-between mx-3  mb-2 mt-1'>
                        <h4 className='text-secondary-100'>Progress:</h4>
                        <h4 className='text-dark-100'>Awaiting review</h4>
                    </div>
                    <div className=' text-light-200 text-sm mx-3 mb-2 text-center py-1 border rounded-md bg-dark-100'>
                            <Link to='/message'>Chat designer</Link>
                    </div>
                    
                </div>

                 <div className='md:mt-5 lg:mt-3  xl:mt-3 sm:mt-5 mt-3  rounded-lg text-sm text-secondary-100 bg-light-200'>
                    <div className='flex justify-between mx-3 my-2 text-xs '>
                        <h3 className='text-dark-100'>Instagram poster</h3>
                        <p className='text-dark-100'>...</p>
                    </div>
                    <div className='flex justify-between mx-3 mt-4 mb-2'>
                        <h4 className='text-secondary-100'>Status:</h4>
                        <h4 className='text-dark-100'>Progress</h4>
                    </div>
                    <div className='flex justify-between mx-3 mb-2 mt-1'>
                        <h4 className='text-secondary-100'>Designer:</h4>
                        <h4 className='text-dark-100'>Jodesign</h4>
                    </div>
                    <div className='flex justify-between mx-3  mb-2 mt-1'>
                        <h4 className='text-secondary-100'>Progress:</h4>
                        <h4 className='text-dark-100'>Awaiting review</h4>
                    </div>
                    <div className=' text-light-200 text-sm mx-3 mb-2 text-center py-1 border rounded-md bg-dark-100'>
                            <Link to='/message'>Chat designer</Link>
                    </div>
                    
                </div>
                
            
            </div>
    
    
    </>
  )
}
