import React from 'react';
import ProfilePic from '../assets/ProfilePicture.svg';
import { Link } from 'react-router-dom';

export const Chat = (props) => {

    

  return (
    <>
        <section className='flex xl:justify-end lg:justify-end mt-20'>
            <div className='flex xl:w-[78vw]  lg:w-[78vw] xl:justify-between  lg:justify-between justify-between w-[100vw] '>
                
                <div className='flex'>
                    <img src={ProfilePic} alt='Profile'/>
                    <div className='mt-5 ms-3'>
                        <h1 className='font-family font-bold'>Elton John</h1>
                        <h4 className='text-secondary-100 mt-1'>{props.name}</h4>
                        <h5 id={props.details} className='text-secondary-100 mt-1'>Ghana</h5>
                    </div>
                </div>

                <div id={props.buttons} className='md:flex md:flex-col mt-5 lg:me-10 sm:hidden  hidden'>
                    <button className='hover:bg-dark-100 hover:text-light-200 transition ease-out duration-500 border px-4 py-2 rounded-lg mb-2'>Upgrade to Agency</button>
                    <Link  to='/general' className='hover:bg-dark-100 hover:text-light-200 text-center transition ease-out duration-500 border px-4 py-2 rounded-lg mb-2' >Edit profile</Link>
                </div>

            </div>
        </section>

    </>
  )
}
