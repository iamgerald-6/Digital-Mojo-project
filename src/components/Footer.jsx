import React from 'react';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>

        <footer className='flex justify-between bg-light-200 py-4 items-center mt-5'>
                <div className='ms-10'>
                    <Link to='/' className='text-3xl font-semibold font-family leading-8 text-dark-100'>DezignSntr</Link>
                </div>
                <ul className='flex gap-16 me-10 text-base underline underline-offset-4'>
                    <li className='font-sfMedium'><Link>Become a designer</Link></li>
                    <li className='font-sfMedium'><Link>Sign up as an agency</Link></li>
                    <li className='font-sfMedium'><Link>Instagram</Link></li>
                    <li className='font-sfMedium'><Link>linkedin</Link></li>
                    <li className='font-sfMedium'><Link>Behance</Link></li>
                    <li className='font-sfMedium'><Link>Dribble</Link></li>
                </ul>


        </footer>

  
    
    
    </>
  )
}

export default Footer