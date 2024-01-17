import { useState } from 'react';
import { Link } from 'react-router-dom'
import { CalenderModal } from './CalenderModal';
import ArrowDown from '../assets/arrow-down.svg';

export const Calender = () => {

  const [showCalenderModal, setShowCalenderModal] =useState(false);

  const openCalenderModal = () => {
    setShowCalenderModal(prev => !prev)
  }

const [value, setValue] =useState('');
  const option =[
    {month:'January 2023'},
    {month:'February 2023'},
    {month:'March 2023'},
    {month:'April 2023'},
    {month:'May 2023'},
    {month:'June 2023'},
    {month:'July 2023'},
    {month:'August 2023'},
    {month:'September 2023'},
    {month:'October 2023'},
    {month:'November 2023'},
    {month:'December 2023'}
  ]
  function handleSelect(e){
    setValue(e.target.value)
  }

  return (

    <> 
    <CalenderModal showCalenderModal={showCalenderModal} setShowCalenderModal={setShowCalenderModal}/>
     <div className='h-[100vh]'>
     
             <div className='bg-light-200 mx-10 flex justify-between px-6 py-5 mt-5 rounded-[18px]' >
                <div className=''>
                  <h3 className='text-xl font-sfMedium'>Content Calender</h3>
                  <p className='text-secondary-100 font-sfRegular mt-1.5'>Create your content calender today</p>
                </div>
                <div className='flex'>
                  <h3 className='text-secondary-100 font-sfRegular mt-4 me-2'>Already have a drafted content calender</h3>
                  <button onClick={openCalenderModal} className='bg-primary-500 font-sfRegular px-4 py-3 text-light-200 rounded-[10px]'>Upload calender</button>
                </div>
             </div>
             
              <div className='bg-light-200 rounded-[18px] px-6 py-5 mt-3 flex justify-between mx-10'>
                <div className='bg-secondary-400 px-4 py-3 rounded-[8px] font-sfMedium flex'>
                  <select className='flex bg-secondary-400 select-box' value={value} onChange={handleSelect}>
                  
                    {option.map(option => (
                      <option className='text-center mt-1 py-2' value={option.value}>{option.month}</option>

                    ))}
                    
                  </select>
                  <img className='w-[24px] h-[24px] ms-3 z-10' src={ArrowDown} alt='arrow-icon'/>
                </div>
                <div>
                  <button className='border border-dark-100 font-sfRegular px-8 py-3 rounded-[10px] me-3' ><Link to='/addDesign'>Add new</Link></button>
                  <button className=' font-sfRegular px-7 py-3 rounded-[10px] bg-dark-100 text-light-200' ><Link>Submit calender</Link></button>
                </div>
                
              </div>

              <div className='bg-light-200 h-[65vh] mt-0.5 mx-10 rounded-[18px]'>
              <div className=' flex items-center text-2xl justify-center font-sfMedium text-secondary-100 pt-20 '>
                <h3>No Event Added</h3>
              </div>
              </div>
              
          </div>
         
          
          
    </>
  )
}
