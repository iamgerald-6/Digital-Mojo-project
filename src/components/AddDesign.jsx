import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Calender from "../assets/calendar.svg";
import Clock from "../assets/clock.svg";
import AddCircle from '../assets/add-circle-black.svg';
import { Link } from 'react-router-dom';
import ArrowDown from '../assets/arrow-circle-right.svg';

export const AddDesign = () => {
  return (
    <>

        <Navbar/>
        <div className='flex justify-center bg-light-200 mt-3 h-[180vh] px-6 py-12 mx-10 mb-3 rounded-[18px]'>
            <div className='flex-col  w-[35vw] '>
                <h3 className='font-sfMedium text-2xl text-center'>Add design</h3>
                <p className='text-secondary-100 font-sfRegular text-center'>Add a design you will like to be added to your content calender</p>
           
            <div className='mt-20 text-start flex gap-3 font-sfRegular'>
                <button className='bg-dark-100 text-light-200 px-4 py-3 flex rounded-[5px]'><img className='me-2' src={Calender} alt='calender-icon'/>Select date</button>
                <button className='bg-dark-100 text-light-200 px-4 py-3 flex rounded-[5px]'><img className='me-2' src={Clock} alt='clock-icon'/>Select time</button>
            </div>
            <form className=''>
                <div>
                    <h3 className='text-lg font-sfRegular mt-7'>Design type </h3>
                    <div className='mt-3 '>
                            <div className='bg-secondary-400 px-5 py-1 w-[35vw] h-[13vh] font-sfRegular text-secondary-100 rounded-[10px] flex justify-between items-center '>Select design type
                            <img className='w-[24px] h-[24px]' src={ArrowDown} alt=''/>
                            </div>
                    </div>
                </div>

            <div className='mt-7 '>
                <div className='flex justify-between'>
                     <h3 className='text-lg font-sfRegular'>Header copy </h3>
                    
                </div>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-secondary-400 px-5 py-1 w-[35vw] h-[7vh] rounded-[10px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='mt-7'>
                <h3 className='text-lg font-sfRegular'>Body copy </h3>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-secondary-400 px-5 py-1 w-[35vw] h-[17vh] rounded-[10px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='mt-7'>
                <h3 className='text-lg font-sfRegular text-dark-100'>Upload reference image </h3>
                <div className='mt-3 '>
                        <div className='flex justify-center items-center flex-col  bg-secondary-400 px-5 py-1 w-[35vw] h-[23vh] rounded-[10px] ' >
                            <Link className=''><img src={AddCircle} alt=''/>
                            </Link>
                            <h3 className=' mt-3 text-sm text-secondary-100 font-sfRegular'>Upload image</h3>
                        </div>   
                </div>
            </div>

            <div className='mt-7'>
                <h3 className='text-lg font-sfRegular'>Reference links</h3>
                <div className='mt-3 rounded-[5px]'>
                        <input className='bg-secondary-400 px-5 py-1 w-[35vw] h-[7vh] rounded-[10px]' type='text' maxLength={80}/>
                </div>
            </div>

            <div className='flex justify-center mt-10 mb-10 gap-2'>
                  <Link to='/events' className='border border-dark-100 text-dark-100 rounded-[8px] px-7 py-2'>Discard</Link>
                  <Link to='/events' className='bg-dark-100 text-light-200 rounded-[8px] border px-7 py-2'>Save as draft</Link>
            </div>
            </form>
            </div>
        </div>
        <Footer/>
    
    
    </>
  )
}
