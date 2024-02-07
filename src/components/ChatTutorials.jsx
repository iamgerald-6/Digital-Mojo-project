import React from 'react';
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';

export const ChatTutorials = () => {
  return (
    <>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3 md:mx-10 sm:mx-5   myOverflow  scroll-snap  mt-7'>
             
              
             <div className=''>
                     <img className='sm:w-[49vw] w-[100vw]' src={Tut1} alt='TutorialPic1'/>
                     <h6 className='font-sfMedium sm:text-base text-sm mt-1'>How to create a facebook post</h6>   
             </div>
                 <div >
                     <img className='sm:w-[49vw] w-[100vw]'src={Tut2} alt='TutorialPic2'/>
                     <h6 className='font-sfMedium  sm:text-base text-sm mt-1 tracking-wide'>How to create a linkedin post</h6>
                      
                 </div>
 
                 <div className=''>
                     <img className ='sm:w-[49vw] w-[100vw]' src={Tut5} alt='TutorialPic3'/>
                     <h6 className='font-sfMedium  sm:text-base text-sm mt-1'>Creating engaging instagram posts</h6>
                      
                 </div>
 
                 <div className=''>
                     <img className =' sm:w-[49vw] w-[100vw]' src={Tut4} alt='TutorialPic4'/>
                     <h6 className='font-sfMedium  sm:text-base text-sm mt-1'>How to create a facebook post</h6>
                 </div>
 
             </div>
    
    
    </>
  )
}
