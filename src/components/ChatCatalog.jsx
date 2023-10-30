import React from 'react';
import Catalog1 from '../assets/Catalog.png';
import Catalog2 from '../assets/Catalog2.png';
import Catalog3 from '../assets/Catalog3.png';
import Catalog4 from '../assets/Catalog4.png';

export const ChatCatalog = () => {
  return (
    <>
             <div className='grid md:grid-cols-4 md:gap-4 sm:grid-cols-2  sm:gap-3  mt-5'>
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]'src={Catalog1} alt='TutorialPic1'/>
                    <h6 className='mt-3 text-center'>Business branding</h6>
                </div>

                <div >
                    <img className ='sm:w-[49vw] w-[100vw]' src={Catalog2} alt='TutorialPic2'/>
                    <h6 className='mt-3 text-center'>Social media branding</h6>
                     
                </div>

                <div className=''>
                    <img className =' sm:w-[49vw] w-[100vw]' src={Catalog3} alt='TutorialPic3'/>
                    <h6 className='mt-3 text-center'>web design</h6>
                     
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw]' src={Catalog4} alt='TutorialPic4'/>
                    <h6 className=' mt-3 text-center'>social media post</h6>
                </div>

            </div>
    
    </>
  )
}
