// import React, { useState } from 'react'
// import {  NavLink } from 'react-router-dom';
// import {IoSettingsOutline} from 'react-icons/io5';
// import {TbLogout2} from 'react-icons/tb';
// import Resources from '../assets/document-favorite.png';
// import Message from '../assets/messages.png';
// import Wallet from '../assets/wallet.png';
// import Search from '../assets/search-normal.png';
// import Rocket from '../assets/Rocket.png';
// import SmallCloud from '../assets/smallCloud.png';
// import Cloud from '../assets/cloud.png';
// import '../styles/index.css'



// export default function AsideBar() {

// const navStylesLink = ({isActive}) => {
//     return {
//     background: isActive ? '#E9FF9D' : 'none',
//     borderRadius: isActive ? '48px' : 'none',
//     height: isActive ? '40px': '',
//     alignItems: isActive ? 'center' : 'none',
//     color: isActive ? '#060508' : '',
    
//     }
// };

// const [imageColor, setColor] = useState('black');
// const handleChange = () => {
//   setColor((prev) => { 
//     return prev === 'black' ? '#696961' : 'blue'
//   });
//   }

//   return (
//   <>
//     <div className='relative '>
    
//       <aside className=' bg-black absolute top-0 start-0 rounded-e-3xl w-[18vw] h-[135vh]  hidden'>
//           <div>
//             <h2 className='mt-10 text-primary-100 text-center text-2xl font-family'>DezignSntr</h2>
//           </div>
//           <ul className='flex flex-col mt-16 justify-center'>
//             <NavLink style={navStylesLink }  to='/explore' className='flex xl:ms-3 justify-start xl:w-[14vw] lg:w-[15vw] mt-6 text-secondary-100 '><img onClick={handleChange} style={{filter: 'brightness(1)', color: imageColor}} className='xl:ps-6 lg:ps-2 ' src={Search} alt='Search'/> <span className='xl:ps-3 lg:ps-1 lg:text-sm  xl:text-base lg:font-bold xl:font-normal '>Explore designs</span></NavLink>
//             <NavLink style={navStylesLink } to='/' className='mt-6 flex xl:ms-3 justify-start xl:w-[14vw] lg:w-[15vw] text-secondary-100'><img className=' xl:ps-6 lg:ps-2'src={Resources} alt='resources'/><span className='xl:ps-3 lg:ps-1 lg:text-sm   lg:font-bold xl:font-normal xl:text-base'>Resources</span></NavLink>
//             <NavLink style={navStylesLink } to='/wallet' className=' mt-6 xl:ms-3 flex justify-start xl:w-[14vw] lg:w-[15vw text-secondary-100'><img className=' xl:ps-6 lg:ps-2'src={Wallet} alt='Wallet'/><span className='xl:ps-3 lg:ps-1 lg:text-sm   lg:font-bold xl:font-normal xl:text-base'>Wallet</span></NavLink>
//             <NavLink style={navStylesLink } to='/chat' className='flex my-6 xl:ms-3 justify-start xl:w-[14vw] lg:w-[15vw text-secondary-100'><img className=' xl:ps-6 lg:ps-2'src={Message} alt='Message'/><span className='xl:ps-3 lg:ps-1 lg:text-sm   lg:font-bold xl:font-normal xl:text-base'>Chat</span></NavLink>
//           </ul>

//           <div>
//               <img className='absolute  bottom-56 z-10 xl:start-12 lg:start-5 'src={Rocket} alt='Rocket'/>
//               <img className='absolute  bottom-64 xl:start-5 lg:hidden xl:block z-10' src={SmallCloud} alt='SmallCloud'/>
//               <img className='absolute  bottom-72 xl:start-40 lg:hidden xl:block z-10'src={Cloud} alt='Cloud'/>

//           </div>
//           <div className='bg-primary-200 xl:w-[152px] lg:w-[152px] border border-orange-600 xl:h-[168px] lg:h-[168px] flex flex-col justify-end  xl:ms-8 rounded-lg absolute bottom-36 '>
//             <div className=' mb-6 '>
//                   <button className='hover:bg-dark-100 transition ease-out duration-500 hover:text-light-100 rounded-xl py-1.5 px-1.5 ms-3 mb-2 text-sm'>Upgrade to agency</button>
//                   <NavLink className='bg-dark-100 text-light-100 rounded-xl py-1.5 px-3 ms-5  text-sm'>Upgrade now</NavLink>
//             </div>
//           </div>
//           <div className='absolute bottom-7 xl:start-7 lg:start-1'>
//             <h6 className=' mt-3 flex gap-2 text-secondary-100'><IoSettingsOutline className='settings-icon-aside mb-1' size='20'/>Settings</h6>
//             <h6 className=' mt-6 flex gap-2  text-light-100'><TbLogout2 className='mb-1 logout-icon-aside text-light' size='20'/>Logout</h6>
//           </div>
//       </aside>
//     </div>
    
//   </>
//   )
// }
