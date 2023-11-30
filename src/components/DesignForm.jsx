import React from 'react'
import {PiPlusBold} from 'react-icons/pi';
import {Link} from 'react-router-dom';
import MagicPen from '../assets/magicpen.png';
import AddCircle from '../assets/add-circle-black.svg';

export const DesignForm = () => {
  return (
    <>
         <div className='mt-28 flex justify-center '>
            <div className='  text-center  '>
                 <h3 className='text-4xl font-sfMedium'>Design Details.</h3>
                 <p className='mt-3 text-center text-lg font-sfRegular text-secondary-100'>Describe your design, add content and contacts, add inspiration from designs<br/>you love add brand colors and more 
                </p>
            </div>
        </div>
        <div className='mt-16 flex justify-center'>
        <div className='  w-[70vw] flex  justify-center '>
            <form className=''>
                <div>
                    <h3 className='text-xl font-sfRegular'>1. Describe your design or explain the purpose of your design. </h3>
                    <div className='mt-3 '>
                            <input className='bg-light-200 px-5 py-1 w-[42vw] h-[23vh] rounded-[5px] ' type='text' maxLength={80}/>
                    </div>
                </div>

            <div className='mt-5 '>
                <div className='flex justify-between'>
                     <h3 className='text-xl font-sfRegular'>2. Design content. </h3>
                     <Link to='' className='flex text-base font-sfRegular text-primary-500 mt-0.5 '><img className='w-[20px] h-[20px] mt-0.5 me-1' src={MagicPen} alt='Pen'/>Generate content</Link>
                </div>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-light-200 px-5 py-1 w-[42vw] h-[13vh] rounded-[5px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-xl font-sfRegular'>3. Target audience. </h3>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-light-200 px-5 py-1 w-[42vw] h-[7vh] rounded-[5px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-xl font-sfRegular'>4. Text on design. </h3>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-light-200 px-5 py-1 w-[42vw] h-[7vh] rounded-[5px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-xl font-sfRegular'>5. Reference links. </h3>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-light-200 px-5 py-1 w-[42vw] h-[7vh] rounded-[5px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='mt-5'>
                <h3 className='text-xl font-sfRegular text-dark-100'>6. Feature Images. </h3>
                <div className='mt-3 '>
                        <div className='flex justify-center items-center flex-col  bg-light-200 px-5 py-1 w-[42vw] h-[23vh] rounded-[5px] ' >
                            <Link className=''><img src={AddCircle} alt=''/>
                            </Link>
                            <h3 className=' mt-3 text-sm text-secondary-100 font-sfRegular'>Upload image</h3>
                        </div>   
                </div>
            </div>
            <div className='flex justify-end mt-10 mb-10 '>
                  <Link to='/inspire' className='bg-dark-100 text-light-200 rounded-lg border px-7 py-2'>Continue</Link>
            </div>
            </form>
            
        </div>
        </div>

    </>
  )
}
