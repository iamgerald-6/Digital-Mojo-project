import React, { useState } from 'react';
import {motion} from 'framer-motion';
import Minus from "../assets/minus-cirlce.svg";
import Add from "../assets/add-circle.svg";


export const Accordion2 = (props) => {

const [drop, setDrop] = useState(false)
    const handleDrop = ()=>{
        setDrop(!drop)
    }
  return (
    <>
             <h3 className='rounded-[11px] py-2 text-xl font-sfRegular flex text-dark-100 px-4 mx-5 justify-between bg-purp-400'>
                 {props.name}
                <span className='mt-1'>
                    <motion.img 
                    whileHover={{scale:1.1}}
                    onClick={handleDrop} className={`cursor-pointer transition-all duration-500 ease-out `}    src={drop ? Minus : Add} alt={drop ? 'minus' : 'add'}/>
                </span>
            </h3>
            <motion.ul 
                initial={{opacity:0, y:-30}}
                animate={{opacity:drop ? 1:0 , y : drop ? 0:-30}}
                transition={{duration:0.6, type:'spring', stiffness:'120'}}
               
                className={` ${drop ? 'block' : 'hidden'}  mt-5 text-secondary-100 font-sfRegular mx-7 list-decimal`}>
                    <li className='flex justify-between'>{props.paragraph1}<span>{props.time1}</span></li>
                    <li className='flex justify-between mt-4'>{props.paragraph2}<span>{props.time2}</span></li>
                    <li className='flex justify-between mt-4'>{props.paragraph3}<span>{props.time3}</span></li>
                    <li className='flex justify-between mt-4'>{props.paragraph4}<span>{props.time4}</span></li>
            </motion.ul>
    
    </>
  )
}
    
    


