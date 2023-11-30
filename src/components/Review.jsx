import React from 'react';
// import {PiPlusBold} from 'react-icons/pi';
import {Link} from 'react-router-dom'
import Featured1 from '../assets/featured1.svg';
import Featured2 from '../assets/featured2.svg';
import Featured3 from '../assets/featured3.svg';
import Featured4 from '../assets/featured4.svg';
import Featured5 from '../assets/featured5.svg';


export const Review = () => {
  return (
    <>

<div className='mt-20 flex justify-center '>
            <div className='  text-center  '>
                 <h3 className=' text-4xl font-sfMedium '>Review and submit</h3>
                 <p className='mt-3 text-center text-lg font-sfRegular text-secondary-100'>Take a last look at your content and submit to get your idea designed
                </p>
            </div>
        </div>
        <div className='mt-20 flex justify-center'>
        <div className='  '>
            <form>
                <div className='bg-light-200 rounded-lg px-5 py-2 w-[76vw] h-[26vh]'>
                <h3 className='mt-3 font-sfMedium text-2xl'>Design type </h3>
                <div className='mt-3'>
                        <input className='bg-light-200 px-5 py-2 w-[66vw] h-[13vh] ' type='text' maxLength={80}/>
                        <button className='ms-6 underline underline-offset-4 text-lg font-sfRegular'>Change</button>
                </div>
                </div>

            <div className='mt-5 bg-light-200 rounded-lg px-5 py-2 w-[76vw] h-[38vh]'>
                <h3 className='mt-3 font-sfMedium text-2xl'>Describe your design. </h3>
                <div className='mt-3'>
                        <input className='bg-light-200 px-5 py-2 w-[66vw] h-[18vh] ' type='text' maxLength={80}/>
                </div>
                <button className='mt-4 underline underline-offset-4 text-lg font-sfRegular'>Edit</button>
            </div>

            <div className='mt-5 bg-light-200 rounded-lg px-5 py-2 w-[76vw] h-[38vh]'>
                <h3 className='mt-3 font-sfMedium text-2xl'>Target audience. </h3>
                <div className='mt-3'>
                        <input className='bg-light-200 px-5 py-2 w-[66vw] h-[18vh] ' type='text' maxLength={80}/>
                </div>
                <button className='mt-4 underline underline-offset-4 text-lg font-sfRegular'>Edit</button>
            </div>

            <div className='mt-5 bg-light-200 rounded-lg px-5 py-2 w-[76vw] h-[38vh]'>
                <h3 className='mt-3 font-sfMedium text-2xl'>Text on design. </h3>
                <div className='mt-3'>
                        <input className='bg-light-200 px-5 py-2 w-[66vw] h-[18vh] ' type='text' maxLength={80}/>
                </div>
                <button className='mt-4 underline underline-offset-4 text-lg font-sfRegular'>Edit</button>
            </div>

            <div className='mt-5 bg-light-200 rounded-lg px-5 py-2 w-[76vw] h-[38vh]'>
                <h3 className='mt-3 font-sfMedium text-2xl'>Reference Link. </h3>
                <div className='mt-3'>
                        <input className='bg-light-200 px-5 py-2 w-[66vw] h-[18vh] ' type='text' maxLength={80}/>
                </div>
                <button className='mt-4 underline underline-offset-4 text-lg font-sfRegular'>Edit</button>
            </div>


            <div className='bg-light-200 mt-4 rounded-lg  px-10 w-[76vw] h-[45vh]'>
            <h3 className='font-sfMedium text-2xl'>Feature Images. </h3>
            <div className='grid grid-cols-5 gap-4'>
                
                <div className='col-end-2 relative'>
                    <Link ><img src={Featured1} alt=''/></Link>
                    
               </div>

                <div className='relative'>
                    <Link><img src={Featured2} alt=''/></Link>
                    
                </div>

                <div className='relative'>
                    <Link><img src={Featured3} alt=''/></Link>
                    
                </div>

                <div className='relative'>
                    <Link><img src={Featured4} alt=''/></Link>
                    
                </div>

                <div className='relative'>
                    <Link><img src={Featured5} alt=''/></Link>
                    
                </div>
                
                </div>
                <button className='mt-4 ms-5 underline underline-offset-4 text-lg font-sfRegular'>Edit</button>
            </div>
            <Link to='/complete' className='flex justify-center mb-4 bg-dark-100 me-7 border rounded-[8px] mt-5 font-sfRegular'>
            <button  className= ' mb-3 me-14 mt-4 text-light-200  px-7 py-2 text-lg'>Create Design</button>
            </Link>
            </form>
            
        </div>
        </div>
    
    
    </>
  )
}
