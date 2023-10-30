import React from 'react'
import {Link} from 'react-router-dom';
import {FaGreaterThan} from 'react-icons/fa';
import profileCreative from '../assets/profileCreative.svg';
import Design from '../assets/Design.svg';
import Piggie from '../assets/Piggie.svg';




export const Profile = () => {
  return (
    <>
        <div className='container-lg'>
            <div className='row'>
                <div className='col-md-8 mt-4'>
                    <div className='d-flex justify-content-between rounded-start bg-primary rounded-end-4 border border-1'>
                        <div className='bg-primary rounded-start'>
                            <h5 className='text-light ms-3 mt-4'>Bring your best ideas to life</h5>
                            <Link className=' ms-3 mt-4 btn btn-light rounded-4 text-primary'>Create design<span className='ps-1 ms-4 bg-primary rounded-circle text-light'><FaGreaterThan className='pe-1 pb-1'size={17}/></span></Link>
                        </div>
                        <img className='img-fluid'src={profileCreative} alt=''/>
                    </div>
                </div>
            </div>
            <div className='row '>
                    <div className='col-lg-4 mt-3'>
                        <img className='img-fluid'src={Design} alt=''/>
                    </div>
                    <div className='col-lg-4 mt-3 ms-2'>
                        <Link><img className='img-fluid'src={Piggie} alt=''/></Link>
                    </div>
            </div>
            <div className='row'>
                    <div className='col-md-8 mt-4 bg-light rounded-4'>
                        <div className='mt-4'>
                            <h4>Recent Courses</h4>
                            <p>Get started on all our recent courses</p>
                        </div>
                        <div>
                            <SwipingImag/>
                        </div>
                        
                    </div>
            </div>
        </div>
    
    </>
  )
}
