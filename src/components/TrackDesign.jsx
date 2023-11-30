import React from 'react'
import { Link } from 'react-router-dom';
import Track1 from '../assets/Track1.svg';
import Track2 from '../assets/Track2.svg';
import Track3 from '../assets/Track3.svg';
import Track4 from '../assets/Track4.svg';
import SearchIcon from '../assets/search-icon.png';
import {BsFilter} from 'react-icons/bs';


export const TrackDesign = () => {
  return (
    <>
        <div className='mt-20 flex justify-center '>
            <div className='  text-center '>
                    <h3 className=' tracking-wide text-4xl  font-sfMedium'>Track your design</h3>
                    <p className='mt-3 text-center text-secondary-100 text-lg font-sfMedium'>Record of all your design created
                    
                    </p>
                    <form  className='flex mt-8 w-[44vw]  ms-4 rounded-md px-5 bg-light-200 relative '>
                          <img className='w-[25px] h-[23px] absolute xl:top-6 left-2' src={SearchIcon} alt='search'/>
                          <input  className='w-[44vw] py-5 ps-5 bg-light-200 text-lg placeholder-secondary-100 font-sfRegular outline-light-200 text-secondary-100' type='search' placeholder='Search by year,design type, month' />
                    </form>
            </div>
        </div>

        <div className=' mt-10 mx-24'>
            <div className='flex justify-between'>
                <h3 className='mt-3 text-sm font-sfRegular  '>July 2023</h3>
                <h3 to='/inspiration' className='text-dark-100 flex font-semibold border border-dark-100 rounded-2xl px-3 py-1 me-5 ' ><BsFilter size={22} className=' mt-0.5 me-3'/>Filter</h3>

            </div>
        </div> 
        <div className='mx-24 grid lg:grid-cols-4 md:grid-cols-4 md:gap-1 sm:grid-cols-2  sm:gap-3 mt-3  mb-16'>

             
                <div className=''>
                        <img className='sm:w-[20vw] w-[100vw]' src={Track1} alt='TutorialPic1'/>
                        <h6 className='text-sm font-family xl:text-sm text-center lg:text-md  mb-5 mt-3'>7th Instagram post</h6>  
                        <Link to='/events' className='px-20 py-2 mt-5  ms-5 text-center rounded-md text-light-300 bg-dark-100 text-lg font-sfRegular'> Open drive</Link> 
                </div>
                    <div >
                        <img className='sm:w-[20vw] w-[100vw] sm:mt-0 mt-6'src={Track2} alt='TutorialPic2'/>
                        <h6 className=' font-family xl:text-sm text-center lg:text-md mb-5 mt-3'>8th Instagram post</h6>
                        <Link className='px-20 py-2 mt-5  ms-5 text-center rounded-md text-light-300 bg-dark-100 text-lg font-sfRegular '> Open drive</Link>
                        
                    </div>
             
                <div className=''>
                    <img className ='sm:w-[20vw] w-[100vw] sm:mt-0 mt-6' src={Track3} alt='TutorialPic3'/>
                    <h6 className='text-sm font-family xl:text-sm text-center  mt-3 mb-5'>9th Instagram post</h6>
                    <Link className='px-20 py-2 mt-5  ms-5 text-center rounded-md text-light-300 bg-dark-100 text-lg font-sfRegular'> Open drive</Link>
                </div>

                <div className=''>
                    <img className ='sm:w-[20vw] w-[100vw] sm:mt-0 mt-6' src={Track4} alt='TutorialPic4'/>
                    <h6 className='text-sm font-family xl:text-sm text-center lg:text-md mb-5 mt-3'>10th Instagram post</h6>
                    <Link className='px-20 py-2 mt-5  ms-5 text-center rounded-md text-light-300 bg-dark-100  text-lg font-sfRegular'> Open drive</Link>
                </div>

            </div>
    
    </>
  )
}
