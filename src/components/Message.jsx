import React from 'react';
import {BiFilter} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';

export const Message = () => {
  return (
    <>
        <div className='lg:w-[22vw] lg:pe-6 sm:w-[17vw] w-[100vw] sm:gap-0 gap-4 bg-light-100 xl:ms-72 lg:ms-64  mt-8 md:ps-6 sm:h-[116vh] h-[15vh] rounded-lg flex flex-row sm:flex-col overflow-x-scroll sm:overflow-hidden'>
            <div className='flex justify-between'>
                <h3 className='mt-4 font-family text-sm'>Message</h3>
                <BiFilter size={23} className='mt-4'/>
            </div>
            <div className='mt-4 bg-light-200 flex px-3 py-2 rounded-md'>
                <FiSearch className='mt-1 me-2'/><input type='search' placeholder='search'/>
            </div>


        </div>
    
    </>
  )
}
