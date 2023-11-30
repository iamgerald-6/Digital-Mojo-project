import React, { useState } from 'react';
import Minus from "../assets/minus-cirlce.svg";
import Add from "../assets/add-circle.svg";
import {motion} from 'framer-motion'

export const Accordion = (props) => {

    const [drop, setDrop] = useState(false)
    const handleDrop = ()=>{
        setDrop(!drop)
    }
  return (
    <>
             <h3 className='rounded-[11px] py-5 text-xl font-sfRegular flex text-dark-100 px-4 w-[53vw] justify-between bg-purp-400'>
                 {props.name}
                <span className='mt-1'>
                    <motion.img 
                    whileHover={{scale:1.1}}
                    onClick={handleDrop} className={`cursor-pointer transition-all duration-500 ease-out `}    src={drop ? Minus : Add} alt={drop ? 'minus' : 'add'}/>
                </span>
            </h3>
            <motion.p 
                initial={{opacity:0, y:-30}}
                animate={{opacity:drop ? 1:0 , y : drop ? 0:-30}}
                transition={{duration:0.6, type:'spring', stiffness:'120'}}
                className={` ${drop ? 'block' : 'hidden'}  mt-5 text-secondary-100 font-sfRegular whitespace-pre-line`}>
                    {props.paragraph}
            </motion.p>
    
    </>
  )
}

// 