import React from 'react';
import Cat1 from '../assets/Cat1.png';
import Cat2 from '../assets/Cat2.png';
import Cat3 from '../assets/Cat3.png';
import Cat4 from '../assets/Cat4.png';

export const ChatCatalog = () => {
  return (
    <>
             <div className='grid md:grid-cols-4 sm:grid-cols-2 sm:grid-flow-row  grid-flow-col auto-cols-[50%] gap-2.5 sm:gap-3 lg:mt-3 md:mx-10 sm:mx-5   myOverflow  scroll-snap mt-7'>
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]'src={Cat1} alt='TutorialPic1'/>
                    <h6 className='mt-1 text-center sm:text-lg text-sm font-sfMedium'>Business branding</h6>
                </div>

                <div >
                    <img className ='sm:w-[49vw] w-[100vw]' src={Cat2} alt='TutorialPic2'/>
                    <h6 className='mt-1 text-center sm:text-lg text-sm font-sfMedium'>Social media branding</h6>
                     
                </div>

                <div className=''>
                    <img className =' sm:w-[49vw] w-[100vw]' src={Cat3} alt='TutorialPic3'/>
                    <h6 className='mt-1 text-center sm:text-lg text-sm font-sfMedium'>Web design</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Cat4} alt='TutorialPic4'/>
                    <h6 className=' mt-1 text-center sm:text-lg text-sm font-sfMedium'>Social media post</h6>
                </div>

            </div>
    
    </>
  )
}
