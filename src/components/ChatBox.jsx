import React, { useState } from 'react';
import ChatProfile from '../assets/Chat profile.svg';
import {BsCameraVideo} from 'react-icons/bs';
import {IoCallOutline} from 'react-icons/io5';
import {PiPlusBold} from 'react-icons/pi';
import {AiOutlineCamera} from 'react-icons/ai';
import {BsImageFill} from 'react-icons/bs';
import {Link} from 'react-router-dom'

export const ChatBox = () => {

    const [open, setOpen] = useState(false);

    const handleChange = () => {
        setOpen(!open)
    }
  return (
    <>
         <div className='lg:w-[61vw] md:w-[80vw] sm:w-[100vw] text-center relative  bg-secondary-400 sm:h-[114vh] rounded-lg mt-8 me-3 sm:ms-3'>
                <div className='flex  border bg-dark-100 px-3  relative rounded-t-lg py-3'>
                    <img src={ChatProfile} alt='profile'/>
                    <h3 className='text-light-200 mt-3 ms-3'>Jodesign</h3>
                    <Link><IoCallOutline size={25} className='text-light-200 absolute top-5 right-4'/></Link>
                    <Link><BsCameraVideo size={25} className='text-light-200 absolute top-5 right-16'/></Link>
                </div>
             

             <div className='flex absolute bottom-0 border  bg-dark-100 w-[56vw] h-[10vh] rounded-b-lg' >
                 <Link onClick={handleChange} className=' bg-light-200 mt-5 mb-6 me-3  ms-1 rounded-full'><PiPlusBold/></Link>
                <input className='bg-dark-100 text-light-200 rounded-b-lg w-[50vw] '  type='text' placeholder='write message'/>
               
                
                

             </div>
             <div className={`${open ? 'block' : 'hidden'} absolute bottom-20 border mx-2 w-[54vw] py-3 rounded-lg  translate-y-2  translate-x-px transition ease-in-out duration-300`} >
                    <div className='flex text-primary-500 border-b mb-2 '>
                        <AiOutlineCamera className='mt-1 me-3' />
                        <h3>Camera</h3>
                    </div>
                    <div className='flex text-primary-500 mt-2'>
                        <BsImageFill className='mt-1 me-3'/>
                        <h3>Upload Image</h3>
                    </div>
                    
                </div>
            </div>
    
    </>
  )
}

