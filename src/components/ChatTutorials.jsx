import React from 'react';
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';

export const ChatTutorials = () => {
  return (
    <>
            <div className='grid  md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3   mt-7'>
             
              
             <div className=''>
                     <img className='sm:w-[49vw] w-[100vw]' src={Tut1} alt='TutorialPic1'/>
                     <h6 className='font-sfMedium text-lg mt-1'>How to create a facebook post</h6>   
             </div>
                 <div >
                     <img className='sm:w-[49vw] w-[100vw]'src={Tut2} alt='TutorialPic2'/>
                     <h6 className='font-sfMedium  text-lg mt-1 tracking-wide'>How to create a linkedin post</h6>
                      
                 </div>
 
                 <div className=''>
                     <img className ='sm:w-[49vw] w-[100vw]' src={Tut5} alt='TutorialPic3'/>
                     <h6 className='font-sfMedium  text-lg mt-1'>Creating engaging instagram posts</h6>
                      
                 </div>
 
                 <div className=''>
                     <img className =' sm:w-[49vw] w-[100vw]' src={Tut4} alt='TutorialPic4'/>
                     <h6 className='font-sfMedium  text-lg mt-1'>How to create a facebook post</h6>
                 </div>
 
             </div>
    
    
    </>
  )
}
