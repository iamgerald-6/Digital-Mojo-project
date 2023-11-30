import React from 'react';
import ProfilePic from '../assets/ProfilePicture.svg';
import { Link } from 'react-router-dom';

export const Chat = (props) => {

    

  return (
    <>
        <section className='flex mt-5 '>
            <div className='flex justify-center w-[100%]'>
                
                <div className='flex'>
                    <img src={ProfilePic} alt='Profile'/>
                    <div className='mt-8 ms-7'>
                        <h1 className=' text-3xl font-semibold font-sfMedium'>Elton John</h1>
                        <h4 className='text-secondary-100 mt-1 font-sfRegular'>{props.name}</h4>
                        <h5 id={props.details} className='text-secondary-100 mt-1 font-sfRegular'>Ghana</h5>
                        <div id={props.buttons} className='md:flex gap-2  mt-5 sm:hidden  hidden'>
                            <button className='bg-dark-100 text-light-200 tr  px-6 py-2 rounded-lg mb-2 font-sfMedium'>Upgrade to Agency</button>
                            <Link  to='/general' className='hover:bg-dark-100 hover:text-light-200 bg-light-200 text-center transition ease-out duration-500 border px-6 py-2 rounded-lg mb-2 font-sfMedium' >Edit profile</Link>
                        </div>
                    </div>
                   
                </div>
               

                

            </div>
        </section>

    </>
  )
}
