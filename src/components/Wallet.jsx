import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Credit from '../assets/Credit.svg';
import DollarsSign from '../assets/Dollars.svg';
import {BiCreditCard} from 'react-icons/bi';
import Star from '../assets/Star.svg';
import Ellipse3 from '../assets/Ellipse3.svg';
import Ellipse2 from '../assets/Ellipse2.svg';
import Ellipse4 from '../assets/Ellipse4.svg'
import { Modal } from './Modal';
import { OtpModal } from './OtpModal';

export const Wallet = () => {

  const [progress, setProgress] =useState(0);
  const [showModal, setShowModal] =useState(false);

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () =>{
    setShowModal(false);
  }
  
  // const [showSecondModal, setShowSecondModal] = useState(false);

  const handleChange = () => {
    if(progress < 100){
        setProgress(progress + 15)
    } 
  }
  
  
  return (
    <>
      <section className='lg:flex  mt-9 mx-10 bg-light-200 px-5 rounded-[30px] py-5'>
       <div className='lg:flex  lg:gap-9'>
        <div className='border w-[53vw] h-[40vh] py-5 bg-success-400 relative rounded-md'>
          <div className='flex ms-7'>
              <img src={Credit} alt='Credit'/>
              <div className='ms-4 mt-2'>
                <h2 className='text-sm'>Credits Usage</h2>
                <h3 className='font-semibold font-family text-lg'>500 of 2000</h3>
              </div>
          </div>
          <div className='mt-12 ms-7'>
              <h3 className='font-semibold text-xs'>Credit available</h3>
              <div className='flex h-3.5'>
                <div className='w-[25vw] border rounded-md bg-white mt-2 '>
                  <div className='progress-fill rounded-md'style={{width: `${progress}%`}}></div>
                  
                </div>
                <div className='progress-label ms-4'>{progress}%</div>
              </div>
              
              
              <button   onClick={openModal} className='mt-5 px-5 py-1  bg-white text-success-100 rounded-lg'>Top up </button>
          </div>
          <div className=' absolute top-0 end-0'>
              <img className='w-[17vw]'src={DollarsSign} alt='Dollars'/>
          </div>
        </div>


        <div className='border w-[35vw] h-[39vh] bg-dark-100 rounded-lg relative'>
            <div className='mt-5 ms-5'>
              <h3 className='text-light-300 text-sm'>Credit balance</h3>
              <h1 className='text-light-200 font-family text-4xl mt-4'>500</h1>
            </div>
            <div className='mt-24 ms-3'>
              <Link className='text-light-300 '><h6 className='flex text-sm underline'><BiCreditCard className='text-light-300 me-1 border-b' size={15}/>Update wallet</h6></Link>
            </div>
            <img className=' absolute  top-6 start-80' src={Star} alt=''/>
            <img className=' absolute rounded-md top-0 end-0' src={Ellipse3} alt=''/>
            <img className=' absolute rounded-md bottom-0 end-0' src={Ellipse2} alt=''/>
            <img className=' absolute bottom-0 end-0' src={Ellipse4} alt=''/>
        </div>
      </div>
      </section>

      <section className='flex justify-center items-center bg-light-200 mt-7 h-[70vh] mx-10 rounded-[14px]'>
        <div className=''>
          <h4 className='text-secondary-100 font-sfRegular text-lg'>There are no transactions here</h4> 

            {/* <div className='ms-14 pt-6'>
              <h4 className='mt-2 text-lg font-family font-bold'>Credit spend history</h4>
              <h6 className='pb-12 mt-4  text-md'>Track your credit spend and credit purchase.</h6>
            </div>
            <table className="  text-center  ">
                <thead className=''>
                  <tr className=' '>
                    <td className='  font-bold' >Month</td>
                    <td className=' font-bold'>State</td>
                    <td className=' font-bold'>Amount</td>
                    <td className=' font-bold'><Link className=' underline text-blue-900'>Download all</Link></td>
                  </tr>
                  </thead>

                  <tbody className='border-t'>

                      <tr className=''>
                        <td>
                          <input type='checkbox' className=' mt-2'/>
                          <span className='ms-1 bg-light'>Jan</span>
                        </td>
                        <td className=' mt-4'>Spend</td>
                        <td className=' '><span className='text-danger-200 px-1 rounded-md bg-danger-100'>-200</span></td>
                        <td className=''><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' '>                    
                        <td>
                          <input type='checkbox' className='  mt-4'/>
                          <span className='ms-1 bg-light'>Feb</span>
                          </td>
                        <td className=''>Spend</td>
                        <td className='mt-5  text-danger'><span className='text-danger-200 px-1 rounded-md bg-danger-100'>-200</span></td>
                        <td className=''><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' bg-light'> 
                        <td>                   
                          <input type='checkbox' className=' mt-5'/>
                          <span className='ms-1 bg-light'>Mar</span>
                        </td>
                        <td className='' >Purchase</td>
                        <td className=''><span className='text-success-100 px-1 rounded-md bg-success-400'>+200</span></td>
                        <td className='' ><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' bg-light'> 
                        <td>                   
                          <input type='checkbox' className=' mt-5'/>
                          <span className='ms-1 bg-light'>Apr</span>
                        </td> 
                        <td className='' >Spend</td>
                        <td className='text-danger'><span className='text-danger-200 px-1 rounded-md bg-danger-100'>-200</span></td>
                        <td className='' ><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' bg-light'> 
                        <td>               
                          <input type='checkbox' className=' mt-5'/>
                          <span className='ms-1 bg-light'>May</span>
                        </td>   
                        <td className='' >Purchase</td>
                        <td className=' text-success'><span className='text-success-100 px-1 rounded-md bg-success-400'>+200</span></td>
                        <td className='' ><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' bg-light'>
                        <td>                   
                          <input type='checkbox' className=' mt-5'/>
                          <span className='ms-1 bg-light'>Jun</span>
                        </td> 
                        <td className='' >Spend</td>
                        <td className=' text-danger'><span className='text-danger-200 px-1 rounded-md bg-danger-100'>-200</span></td>
                        <td className='' ><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' bg-light'>
                        <td>
                         <input type='checkbox' className=' mt-5'/>
                         <span className='ms-1 bg-light'>Jul</span>
                        </td>
                        <td className=''>Spend</td>
                        <td className='text-danger'><span className='text-danger-200 px-1 rounded-md bg-danger-100'>-200</span></td>
                        <td className='' ><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>

                      <tr className=' bg-light'>
                        <td>
                           <input type='checkbox' className=' mt-5'/>
                           <span className='ms-1 bg-light'>Aug</span>
                        </td>
                        <td className='' >Spend</td>
                        <td className=' bg-light text-danger'><span className='text-danger-200 px-1 rounded-md bg-danger-100'>-200</span></td>
                        <td className=' bg-light' ><Link className=' underline text-blue-900'>Download invoice</Link></td>
                      </tr>
                      
                    </tbody>

            </table> */}


        </div>
        <Modal showModal={showModal} setShowModal={closeModal}/>
        {/* <OtpModal showModal={showSecondModal} setShowModal={setShowSecondModal} /> */}
      </section>


           

               
                    
                          
                         
                       
                          
                

              
            
            
              
               
         

        


    </>
  )
}

  {/* // <div className='flex w-[78vw] border float-right'>
  //               <div className='border bg-success-400 my-4 w-[40vw] col-end-3 ms-2 relative'>
                  
  //                   <img src={Credit} alt='Credit'/>
  //                   <div className='flex-column ms-2'>
  //                       <h6 className='mt-2'>Credit Usage</h6>
  //                       <h5>500 of 2000</h5>
  //                       <h6>Credit available</h6>
  //                     </div>
  //                     <div className='progress-bar border border-1 border-light mt-2'>
  //                       <div className='progress-fill' style={{width: `${progress}%`}}></div>
  //                     </div>
  //                     <div className='progress-label ms-2'>{progress}%</div>
                    
  //                     <button onClick={handleChange} className=' '> Top up</button>
  //                     <div className=' absolute top-0 end-0'>
  //                       <img className=''src={DollarsSign} alt='Dollars'/>
  //                     </div>
  //               </div>  */}



  {/* //                 // <div className='col-lg-4 wallet-container-2  mt-5 bg-dark rounded-4 position-relative'>
  //                 //       <div className='mt-3'>
  //                 //         <h6 className='my-4 text-light'>Credit balance</h6>
  //                 //         <h1 className='  mt-3 mb-5 text-light'>500</h1>
  //                 //       </div>
                        
  //                 //       <div className='bg-dark-100'>
  //                 //           <Link className='text-light'><h6><ins><BiCreditCard className='wallet-icon-underline'/></ins>Update wallet</h6></Link>
  //                 //       </div>

  //                 //       <div className='hidden'>
  //                 //         <img className=' position-star' src={Star} alt=''/>
  //                 //       </div>
  //                 //       <div className='hidden '>
  //                 //         <img className=' position-image2 rounded-end-4 wallet-image' src={Ellipse3} alt=''/>
  //                 //       </div>
  //                 //       <div className='hidden '>
  //                 //         <img className=' position-image rounded-end-4 wallet-image' src={Ellipse2} alt=''/>
  //                 //       </div>
  //                 //       <div className='hidden '>
  //                 //         <img className=' position-image1 rounded-end-4 wallet-image' src={Ellipse4} alt=''/>
  //                 //       </div>

  //                 // </div>
         */}