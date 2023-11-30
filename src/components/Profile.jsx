// import React from 'react'
// import {Link} from 'react-router-dom';
// import {FaGreaterThan} from 'react-icons/fa';
// import profileCreative from '../assets/profileCreative.svg';
// import Design from '../assets/Design.svg';
// import Piggie from '../assets/Piggie.svg';
// import LinkedIn from '../assets/courselinkedin.svg'; 
// import Instagram from '../assets/recentcourse2.png';
// import Facebook from '../assets/recentcourse3.png';
// import TopStream from '../assets/TopStream.svg';
// import Temp from '../assets/TemplateProfile.svg';
// import Stream from '../assets/Stream.svg';




// export const Profile = () => {
//   return (
//     <>
        
            
//                 <div className='flex xl:justify-end lg:justify-end '>
//                     < div className='xl:w-[78vw] lg:w-[78vw] mt-7 relative'>
                        

                        
//                         <div className='flex border w-[49vw]'>
//                             <div className='border w-[26vw] rounded-s-lg bg-primary-500'>
//                                 <h5 className='text-light ms-3 mt-10 text-light-200 font-family '>Bring your best ideas to life</h5>
//                                 <Link to='/createDesign' className=' ms-3 mt-4 rounded-2xl w-[13vw] py-2 px-4 text-sm flex justify-between text-primary bg-light-200 text-primary-500'>Create design<span className='px-1 ms-4 bg-primary rounded-full  bg-primary-500'><FaGreaterThan className=' text-light-200   mt-1 'size={13}/></span></Link>
//                             </div>
//                             <img className='i'src={profileCreative} alt=''/>
//                         </div>
                        

//                         <div className=' flex mt-3 gap-4 border w-[49vw]'>
//                             <Link><img className='img-fluid'src={Design} alt=''/></Link>
//                             <Link><img className='img-fluid'src={Piggie} alt=''/></Link>
                        
//                         </div>
                

            
//                         <div className='flex flex-col mt-3 xl:w-[49vw] lg:w-[78vw] rounded-lg mb-3  bg-secondary-300 relative'>
//                             <div className='mt-4 ms-3'>
//                                 <h4 className='text-xl font-bold font-family'>Recent Courses</h4>
//                                 <p className='text-secondary-100'>Get started on all our recent courses</p>
//                             </div>
//                             <div className='flex gap-3 overflow-x-scroll mt-3 '>
//                                 <img src={LinkedIn} alt='Linkedin'/>
//                                 <img src={Instagram} alt='Linkedin'/>
//                                 <img src={Facebook} alt='Facebook'/>
//                             </div>
//                             <div className='absolute top-5 right-5 bg-primary-500 px-1 py-1 rounded-full'><FaGreaterThan className=' text-light-200 px-1' size={15} /></div>
//                         </div>

//                         <div className='ms-5 mt-1 border rounded-lg w-[25vw] px-3 absolute top-0 right-7 bg-secondary-300'>
//                                 <div className='flex justify-between '>
//                                     <div className='mt-5'>
//                                         <h1 className='text-xl font-family font-semibold'>In-stream Events</h1>
//                                         <h4>All in-stream events</h4>
//                                     </div>
//                                     <button className='text-primary-500 underline'>View all</button>
//                                 </div>
//                                 <h3 className='font-family font-semibold text-base underline mt-7'>Top In-streams</h3>
//                                 <div><img src={TopStream} alt='Stream'/></div>
//                                 <div>
//                                     <h6 className='font-semibold mt-2'>How to grow your brand with design</h6>
//                                     <p className='text-secondary-100 mt-2 tracking-tighter'>This in-stream is made to educate brand owners and start-ups on how design
//                                         can be an anchor to building a solid self promoting
//                                     </p>
//                                     <div className='flex'><img className='  pt-3 'src={Temp} alt=''/><span className='mt-3  text-secondary-100 ms-2 text-sm'>Host: James Elton</span></div>
//                                 </div>
//                                 <div><h3 className='underline font-family mt-4'>Ongoing streams</h3></div>


//                                 <div className='overflow-y-scroll h-[60vh] '>
//                                     <div className='flex mt-3 px-1 bg-light-200'>
//                                         <img src={Stream} alt='stream'/>
//                                         <div className='ms-3'>
//                                             <h4 className='text-sm font-semibold mt-3'>What is your branding</h4>
//                                             <p className=' mt-3 text-sm text-secondary-100 tracking-tighter'>Taking you through branding and how to brand your business</p>
//                                             <div className='flex'>
//                                                 <img className='  pt-3 'src={Temp} alt=''/>
//                                                 <span className='mt-3  text-secondary-100 ms-2 text-sm '>Host: James Elton</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='flex px-1 mt-2 bg-light-200'>
//                                         <img src={Stream} alt='stream'/>
//                                         <div className='ms-3'>
//                                             <h4 className='text-sm font-semibold mt-3'>What is your branding</h4>
//                                             <p className=' mt-3 text-sm text-secondary-100 tracking-tighter'>Taking you through branding and how to brand your business</p>
//                                             <div className='flex'>
//                                                 <img className='  pt-3 'src={Temp} alt=''/>
//                                                 <span className='mt-3  text-secondary-100 ms-2 text-sm '>Host: James Elton</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='flex mt-2 px-1 bg-light-200'>
//                                         <img src={Stream} alt='stream'/>
//                                         <div className='ms-3'>
//                                             <h4 className='text-sm font-semibold mt-3'>What is your branding</h4>
//                                             <p className=' mt-3 text-sm text-secondary-100 tracking-tighter'>Taking you through branding and how to brand your business</p>
//                                             <div className='flex'>
//                                                 <img className='  pt-3 'src={Temp} alt=''/>
//                                                 <span className='mt-3  text-secondary-100 ms-2 text-sm '>Host: James Elton</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='flex mt-2 px-1 bg-light-200'>
//                                         <img src={Stream} alt='stream'/>
//                                         <div className='ms-3'>
//                                             <h4 className='text-sm font-semibold mt-3'>What is your branding</h4>
//                                             <p className=' mt-3 text-sm text-secondary-100 tracking-tighter'>Taking you through branding and how to brand your business</p>
//                                             <div className='flex'>
//                                                 <img className='  pt-3 'src={Temp} alt=''/>
//                                                 <span className='mt-3  text-secondary-100 ms-2 text-sm '>Host: James Elton</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className='flex px-1 mt-2 bg-light-200'>
//                                         <img src={Stream} alt='stream'/>
//                                         <div className='ms-3'>
//                                             <h4 className='text-sm font-semibold mt-3'>What is your branding</h4>
//                                             <p className=' mt-3 text-sm text-secondary-100 tracking-tighter'>Taking you through branding and how to brand your business</p>
//                                             <div className='flex'>
//                                                 <img className='  pt-3 'src={Temp} alt=''/>
//                                                 <span className='mt-3  text-secondary-100 ms-2 text-sm '>Host: James Elton</span>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> 
                        
//                     </div>
//                 </div>
                    
       
    
//     </>
//   )
// }
