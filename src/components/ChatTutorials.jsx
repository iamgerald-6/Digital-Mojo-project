import React from 'react';
import Tutorials1 from '../assets/tutorials1.png';
import Tutorials2 from '../assets/tutorials2.png';
import Tutorials3 from '../assets/tutorials3.png';
import Tutorials4 from '../assets/tutorials4.png';

export const ChatTutorials = () => {
  return (
    <>
            <div className='grid  md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3   mt-3'>
             
              
             <div className=''>
                     <img className='sm:w-[49vw] w-[100vw]' src={Tutorials1} alt='TutorialPic1'/>
                     <h6 className='font-bold text-lg'>How to create a facebook post</h6>   
             </div>
                 <div >
                     <img className='sm:w-[49vw] w-[100vw]'src={Tutorials2} alt='TutorialPic2'/>
                     <h6 className='font-bold text-lg tracking-wide'>How to create a linkedin post</h6>
                      
                 </div>
 
                 <div className=''>
                     <img className ='sm:w-[49vw] w-[100vw]' src={Tutorials3} alt='TutorialPic3'/>
                     <h6 className='font-bold text-lg'>Creating engaging instagram posts</h6>
                      
                 </div>
 
                 <div className=''>
                     <img className =' sm:w-[49vw] w-[100vw]' src={Tutorials4} alt='TutorialPic4'/>
                     <h6 className='font-bold text-lg'>How to create a facebook post</h6>
                 </div>
 
             </div>
    
    
    </>
  )
}
