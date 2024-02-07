import React from 'react';
import ProfilePic from '../assets/ProfilePicture.svg';

export const EditProfileHead = () => {
  return ( 
  <>
    <section className='flex mt-10 md:mx-11 sm:mx-2 bg-light-200 sm:rounded-xl '>
      <div className='flex sm:justify-start w-[100%]'>
        
        <div className='flex'>
            <img className='py-2 px-2 sm:w-auto sm:h-auto w-[130px] h-[130px]' src={ProfilePic} alt='Profile'/>
            <div className='mt-8 sm:ms-7 ms-3'>
                <h1 className=' sm:text-3xl text-2xl font-sfMedium'>Elton John</h1>
                <h4 className='text-secondary-100 mt-1 sm:text-lg  font-sfRegular '>Customize and secure your account</h4>
              
            </div>
           
        </div>
       

        

      </div>
    </section>
</>
  )
}
