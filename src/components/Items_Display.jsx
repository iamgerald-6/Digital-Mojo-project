// import { Link } from 'react-router-dom';
// import {motion} from 'framer-motion'

// const Items_Display = ({category, items}) => {

//     const renderedItems = items.map((item) =>{

//         return (<motion.div key={item.id} 
//             whileHover={{zIndex:0, scale:1.04, boxShadow:'3px 3px 3px 3px rgba(30,0,0,0.2)', borderRadius:'20px'}}
//             transition={{type:'spring', stiffness:130, delay: 0.1}}
//         className='cursor-pointer'>
//                 <img className=' w-[100vw]' src={item.image} alt='TutorialPic1'/>
//                 <h6 className=' text-base text-center mt-1 font-sfMedium '>{item.title}</h6>   
//         </motion.div>);
//     });

//   return (
//     <>
//         <div className='mt-5'>
//             <div className='w-[100%] justify-between  flex px-10'>
//                 <h3 className='mt-3 text-xl  font-sfBold'>{category.title}</h3>
//                 <Link  to='#' className='mt-3 text-blue-700 underline font-sfMedium'>See All</Link>
//             </div>
//         </div> 
//         <div className='grid lg:grid-cols-4  md:gap-4 sm:grid-cols-2  sm:gap-3 mt-3 mx-10'>
//             {renderedItems}
//         </div>
//     </>
//   )
// }



// export default Items_Display;