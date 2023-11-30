import React from 'react';
import TemProfile from '../assets/tempProfile.png';
import { IoIosArrowForward } from 'react-icons/io';
import AddSquare from '../assets/add-square.svg';
import ImportWhite from '../assets/import-white.svg';
import {Link, useParams } from 'react-router-dom';
import Tut1 from '../assets/Tut1.png';
import Tut2 from '../assets/Tut2.png';
import Tut5 from '../assets/Tut5.png';
import Tut4 from '../assets/Tut4.png';
import Documents from '../assets/document.svg';
import {motion} from 'framer-motion';
import Search from '../assets/search-norm.svg';
import TemplateProfile from '../assets/TemplateProfile.svg';
import {LiaInfoCircleSolid} from 'react-icons/lia';
import Navbar from './Navbar';
// import {v5 as uuidv5} from 'uuid';

export const IntoTemplate = () => {
    // const { TemplatesId } = useParams();

    // const Templates =[
    //     {id:'1', name:'Black Friday sale',img:'Tut1'},
    //     {id:'2', name:'Black Friday sale',img:'Tut2'},
    //     {id:'3', name:'Creative agency design',img:'Tut3'},
    //     {id:'4', name:'Market agency',img:'Tut4'}
    // ];
    // const currentTemplate = Templates.find((template) => template.id === TemplatesId);
    // if (!currentTemplate) {
    //     return <p>Template not found</p>; // Adjust this according to your UI/UX needs
    //   }
    
    //   // Filter similar searches based on the current template
    //   const similarSearches = Templates.filter((template) => template.name !== currentTemplate.name);
    
  return (
    <>
        
        
        <div className='relative h-[] w-[100%] bg-light-200 rounded-t-[21px]'>
            <div className='flex justify-between px-14 py-10'>
                <div className='flex '>
                    <img className='w-[72px] h-[72px]' src={TemProfile} alt=''/>
                    <div className='mt-3 ms-4'>
                        <h3>Lena Ablah</h3>
                        <small className='flex '>3k assets<IoIosArrowForward className='mt-1'/> </small>
                        
                    </div>
                   
                    
                </div>
                <div className='mt-3 flex  gap-5'>
                    <Link className='border rounded-[8px] px-4 py-3 flex w-[15vw] h-[8vh]'><span className='me-3'><img className='w-[24px] h-[24px] ' src={AddSquare} alt='square'/></span>Add to Collection</Link>
                    <Link className='text-light-200 rounded-[9px] bg-dark-100 w-[12vw] h-[8vh] flex ps-7 py-3'>Download <img className='ms-5 w-[24px] h-[24px]' src={ImportWhite} alt='import'/></Link>
                </div>

                
            </div>
            <div className='flex justify-center'>
                <img className='w-[33vw] h-[70vh]' src={Tut1} alt='Template1'/>
                
            </div>
            <div className='mx-5'>
                <h3>Free PSD black Friday super sale social media banner template</h3>
                <div className='flex'>
                     <img  src={Documents} alt='icon-document'/><span>File type:<span>PSD,JPG.</span></span>
                </div>
            </div>
            <div className='mx-5'>
                <h3 className=''>Related Tags</h3>
                <div className='flex'>
                    <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='  border flex px-4 py-1 rounded-[8px] cursor-pointer font-sfRegular'><span className='me-5'><img src={Search} alt='' /></span>Black Friday</motion.h4>
                    <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-4 border flex px-4 py-1 rounded-[8px] cursor-pointer font-sfRegular'><span className='me-5'><img src={Search} alt='' /></span>Black Friday post</motion.h4>
                    <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-4 border flex px-4 py-1 rounded-[8px] cursor-pointer font-sfRegular'><span className='me-5'><img src={Search} alt='' /></span>Black Friday Instagram</motion.h4>
                    <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-4 border flex px-4 py-1 rounded-[8px] cursor-pointer font-sfRegular'><span className='me-5'><img src={Search} alt='' /></span>Sales post</motion.h4>
                    <motion.h4 whileHover={{x:4}} transition={{type:'spring', stiffness:400}} className='ms-4 border flex px-4 py-1 rounded-[8px] cursor-pointer font-sfRegular'><span className='me-5'><img src={Search} alt='' /></span>Social media sales </motion.h4>
              </div>
            </div>
            <div className='flex  mt-5 mx-5 '>
                <h3 className='md:mt-3 sm:mt-16 mt-16 text-xl font-sfBold'>Similar searches</h3>
            </div>
            <div className='grid  md:grid-cols-4 gap-4 sm:grid-cols-2 sm:gap-3 mt-3 mx-10 pb-32'>
                <div className=' '>
                    {/* {similarSearches.map((search) => (
                            <div key={search.id}>
                              <img className='w-[100%] h-[auto]' src={TemplateProfile} alt='' />
                              <h6 className='flex justify-between font-sfMedium xl:text-base md:text-sm lg:text-sm mt-1'>
                                {search.name}
                                <span className='ms-1 text-secondary-100 flex gap-1 me-3 font-sfMedium'>
                                  <LiaInfoCircleSolid className='text-secondary-100 mt-1' />
                                  {search.img}
                                </span>
                              </h6>
                            </div>
                          ))} */}
                    
                    <img className='sm:w-[49vw] w-[100vw]' src={Tut1} alt='TutorialPic1'/> 
                     <h6 className='flex justify-between font-sfMedium  xl:text-base md:text-sm lg:text-sm mt-1 '>Black friday sale<span className='ms-1 text-secondary-100 flex gap-1 me-3 font-sfMedium'><LiaInfoCircleSolid className='text-secondary-100 mt-1 font-sfMedium'/>PSD</span></h6>
                    <div className='flex'><img className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  ms-2 font-sfMedium text-secondary-100 '>Jodesign</span></div> 
                </div>
                
                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tut2} alt='TutorialPic2'/>
                    <h6 className='flex justify-between  xl:text-base md:text-sm lg:text-sm mt-1 font-sfMedium'>Black friday sale<span className='flex gap-1 ms-1 text-secondary-100 me-3 font-sfMedium'><LiaInfoCircleSolid className='mt-1 font-sfMedium'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2 font-sfMedium'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className =' sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tut5} alt='TutorialPic3'/>
                    <h6 className='flex justify-between font-sfMedium xl:text-base md:text-sm lg:text-sm mt-1 '>Creative agency design<span className='ms-1 text-secondary-100 flex gap-1 me-3'><LiaInfoCircleSolid className='text-secondary-100 mt-1'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3 text-secondary-100  ms-2 font-sfMedium'>Jodesign</span></div>
                </div>

                <div className=''>
                    <img className ='sm:w-[49vw] w-[100vw] sm:mt-0 mt-6' src={Tut4} alt='TutorialPic4'/>
                    <h6 className='flex font-sfMedium lg:tracking-tight xl:text-base md:text-sm justify-between lg:text-sm mt-1'>Marketing agency<span className='flex gap-1 text-secondary-100 me-3 '><LiaInfoCircleSolid className='mt-1 text-secondary-100'/>PSD</span></h6>
                    <div className='flex'><img  className=' ms-2 pt-3 'src={TemplateProfile} alt=''/><span className='mt-3  text-secondary-100 ms-2 font-sfMedium'>Jodesign</span></div>
                </div>

            </div>
        </div>
    
    
    </>
  )
}
