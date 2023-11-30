import React from 'react';
// import { FiSearch } from 'react-icons/fi';
import AddCircle from '../assets/add-Whitecircle.svg';
import SearchIcon from '../assets/search-icon.png'
import {PiPlusBold} from 'react-icons/pi';
import Create from '../assets/Create1.svg';
import Create2 from '../assets/CreateDesign2.svg';
import Create3 from '../assets/CreateDesign3.svg';
import Create7 from '../assets/CreateDesign7.svg';
import Create4 from '../assets/CreateDesign4.svg';
import Create5 from '../assets/CreateDesign5.svg';
import Create6 from '../assets/CreateDesign6.svg';
import Create9 from '../assets/CreateDesign9.svg';
import { Link } from 'react-router-dom';

export const Inspire = () => {
  return (
    <>
         <div className='mt-14 flex justify-center '>
            <div className='  text-center '>
                    <h3 className=' tracking-wide text-4xl font-sfMedium  '>Inspire our design</h3>
                    <p className='mt-3 text-center text-lg font-sfRegular text-secondary-100'>Help designers better understand and give you the best results by sharing designs you love and
                    <br/> also what  you love about those designs,
                    <span className='text-black'>example (brand colors, Imagery, layout Etc)</span>
                    </p>
                    <form  className='flex ms-12 mt-10 w-[45vw] rounded-[10px] px-5 bg-light-200 relative '>
                          <img className='w-[25px] h-[23px] absolute xl:top-6 left-2' src={SearchIcon} alt='search'/>
                          <input  className='w-[45vw] py-5 px-5 bg-light-200 text-lg outline-light-200 placeholder-secondary-100' type='search' placeholder='Search for design inspiration' />
                    </form>
            </div>
        </div>
        

        <div className='grid grid-cols-4 gap-2 mt-20 mx-10'>

            <div className=' relative'>
                <Link ><img className='w-[22vw]' src={Create5} alt=''/></Link>
                <Link className='absolute top-3 right-5'><img src={AddCircle} alt=''/></Link>
            </div>

            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create4} alt=''/></Link>
                <Link className='absolute  top-3 right-5'><img src={AddCircle} alt=''/></Link>
            </div>

            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create6} alt=''/></Link>
                <Link className='absolute top-3 right-5 '><img src={AddCircle} alt=''/></Link>
            </div>

            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create9} alt=''/></Link>
                <Link className='absolute  top-3 right-5'><img src={AddCircle} alt=''/></Link>
            </div>
        </div>

        <div className='grid grid-cols-4 gap-2 mt-4 me-5 relative mx-10'>
                <div className='z-10 flex justify-end bg-secondary-400 border w-[94vw] absolute bottom-3 right-0'>
                    <p className='font-bold text-xs mt-4 me-4'>1/10 selected</p>
                    <Link to='/review&submit' className='bg-dark-100 text-light-200 rounded-lg border px-7 py-3'>Done</Link>
               </div>
            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create3} alt=''/></Link>
                <Link className='absolute top-3 right-5 '><img src={AddCircle} alt=''/></Link>
            </div>

            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create7} alt=''/></Link>
                <Link className='absolute top-3 right-5 '><img src={AddCircle} alt=''/></Link>
            </div>

            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create2} alt=''/></Link>
                <Link className='absolute top-3 right-5 '><img src={AddCircle} alt=''/></Link>
            </div>

            <div className='relative'>
                <Link><img className='w-[22vw]' src={Create} alt=''/></Link>
                <Link className='absolute top-3 right-5 '><img src={AddCircle} alt=''/></Link>
                
            </div>
            
        </div>
        

    
    </>
  )
}
