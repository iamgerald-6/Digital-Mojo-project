import React from 'react';
import ProfilePic from '../assets/ProfilePicture.svg';

export const EditProfileHead = () => {
  return ( 
  <>
    <section className='flex mt-10 mx-16 bg-light-200 rounded-xl '>
      <div className='flex justify-start w-[100%]'>
        
        <div className='flex'>
            <img className='py-2 px-2' src={ProfilePic} alt='Profile'/>
            <div className='mt-8 ms-7'>
                <h1 className=' text-3xl  font-sfMedium'>Elton John</h1>
                <h4 className='text-secondary-100 mt-1 text-lg font-sfRegular '>Customize and secure your account</h4>
              
            </div>
           
        </div>
       

        

      </div>
    </section>
</>
  )
}
