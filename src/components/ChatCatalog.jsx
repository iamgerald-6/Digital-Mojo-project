import React from 'react';
import Cat1 from '../assets/Cat1.png';
import Cat2 from '../assets/Cat2.png';
import Cat3 from '../assets/Cat3.png';
import Cat4 from '../assets/Cat4.png';

export const ChatCatalog = () => {
  return (
    <>
             <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3  mt-7'>
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]'src={Cat1} alt='TutorialPic1'/>
                    <h6 className='mt-1 text-center text-lg font-sfMedium'>Business branding</h6>
                </div>

                <div >
                    <img className ='sm:w-[49vw] w-[100vw]' src={Cat2} alt='TutorialPic2'/>
                    <h6 className='mt-1 text-center text-lg font-sfMedium'>Social media branding</h6>
                     
                </div>

                <div className=''>
                    <img className =' sm:w-[49vw] w-[100vw]' src={Cat3} alt='TutorialPic3'/>
                    <h6 className='mt-1 text-center text-lg font-sfMedium'>web design</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Cat4} alt='TutorialPic4'/>
                    <h6 className=' mt-1 text-center text-lg font-sfMedium'>social media post</h6>
                </div>

            </div>
    
    </>
  )
}
