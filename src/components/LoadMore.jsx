import React from 'react'
import { Link } from 'react-router-dom'

export const LoadMore = () => {
  return (
    <>
        <div className='flex justify-center w-[100%] mt-12 py-3'>
            <Link className='px-10 py-3 rounded-[8px] border border-dark-100 hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 text-dark-100 font-sfMedium'>Load more</Link>
        </div>

    </>
  )
}
