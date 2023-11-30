import React from 'react';
import Inspiration1 from '../assets/Inspiration1.svg';
import Inspiration22 from '../assets/Inspiration22.svg';
import Inspiration3 from '../assets/Inspiration3.svg';
import Inspiration4 from '../assets/Inspiration4.svg';
import Inspiration5 from '../assets/Inspiration5.svg';
import Inspiration6 from '../assets/Inspiration6.svg';
import Inspiration7 from '../assets/Inspiration7.svg';
import Inspiration8 from '../assets/Inspiration8.svg';
import Inspiration9 from '../assets/Inspiration9.svg';



export const Inspiration2 = () => {
  return (
    <>
            
               <div className='flex sm:flex-row flex-col justify-center gap-4  mx-10 mt-5'>
                    <div className=''>
                        <img className='lg:w-[30vw] md:w-[36vw] sm:w-[50vw] w-[100vw] mt-4' src={Inspiration1} alt='Inspiration'/>
                    </div>
                    
                        <div className=''>
                            <img className='lg:w-[30vw] md:w-[36vw] sm:w-[50vw] w-[100vw] mt-4' src={Inspiration22} alt='Inspiration'/>
                        </div>
                        <div className=''>
                            <img className='lg:w-[30vw] md:w-[36vw] sm:w-[50vw] w-[100vw] mt-4' src={Inspiration3} alt='Inspiration'/>
                        </div>
                    
                </div> 
                <div className='grid lg:grid-cols-4 md:grid-cols-4 md:gap-3 sm:grid-cols-2 mx-10'>
                    <div className=''>
                            <img className='sm:w-[49vw] w-[100vw] mt-4' src={Inspiration4} alt='Inspiration'/>
                    </div>

                    <div className='col-lg-3'>
                            <img className='sm:w-[49vw] w-[100vw] mt-4' src={Inspiration5} alt='Inspiration'/>
                    </div>

                    <div className='col-lg-3'>
                            <img className='sm:w-[49vw] w-[100vw] mt-4' src={Inspiration6} alt='Inspiration'/>
                    </div>

                    <div className='col-lg-3'>
                            <img className='sm:w-[49vw] w-[100vw] mt-4' src={Inspiration7} alt='Inspiration'/>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col mx-10 gap-4 '>
                    <div className=' '>
                         <img className='mt-4 lg:w-[49vw] md:w-[53vw] w-[100vw]' src={Inspiration8} alt='Inspiration'/>
                    </div>

                    <div className=''>
                         <img className='lg:w-[49vw] md:w-[46vw] w-[100vw] mt-4 mb-5' src={Inspiration9} alt='Inspiration'/>
                    </div>
                </div>


           
    
    
    
    </>
  )
}
