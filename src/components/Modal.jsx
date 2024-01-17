import Close from '../assets/close-circle.svg';
import { useState } from 'react';
import { OtpModal } from './OtpModal';
import {Link} from 'react-router-dom';
import { EnterAmountModal } from './EnterAmountModal';

export const Modal = ({showModal, setShowModal}) => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [showAmountModal, setShowAmountModal] = useState(false)

    const handleOtpModalOpen = () => {
        setShowOtpModal(true);
      };

      const handleEnterAmount =() =>{
        setShowAmountModal(true);
      }

    //   const handleCloseModals = () => {
    // setShowModal(false);
    // setShowOtpModal(false);
  return (
    <>
        {showModal ? 
        <div className="w-[100%] h-[200vh] bg-[rgba(0,0,0,0.4)] fixed flex  items-center justify-center">
            <div className='bg-light-200 w-[100%] h-[160vh] rounded-s-[50px]  rounded-e-[50px] flex justify-center relative pb-7'>
                <div className='flex-col text-center mt-16'>
                    <div className='flex-col'>
                        <h3 className='font-sfMedium text-2xl'>Select amount</h3>
                        <p className='text-secondary-100 font-sfRegular'>Select or enter amount of credit you want to purchase</p>
                    </div>
                    <div className='flex gap-3 mt-10'>
                        <div className=' px-16 cursor-pointer bg-secondary-400 py-12 border border-secondary-700 rounded-[16px] ' onClick={handleOtpModalOpen}>
                            
                            <span className=' font-sfMedium'>$100</span>
                            <p className='font-sfRegular text-secondary-100'>Get 500 credit for $100</p>
                            
                        </div>
                        <div className='px-16 cursor-pointer bg-secondary-400 py-12 border border-secondary-700 rounded-[16px]' onClick={handleOtpModalOpen}>
                            <span className=' font-sfMedium'>$200</span>
                            <p className=' font-sfRegular text-secondary-100'>Get 1000 credit for $200</p>
                        </div>
                        <div className='px-16 cursor-pointer bg-dark-100 py-12 border border-secondary-700 rounded-[16px]' onClick={handleOtpModalOpen}>
                            <span className='text-light-200 font-sfMedium'>$300</span>
                            <p className='text-light-200 font-sfRegular '>Get 1500 credit for $300</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                    <div className=' mt-5 border border-secondary-700 bg-secondary-400 py-12 w-[21vw] rounded-[16px]' onClick={handleEnterAmount}>
                            <h3 className='font-sfMedium'>Enter Amount</h3>
                            
                            <input type='number' className='text-center outline-none bg-secondary-400 font-sfRegular placeholder-secondary-100' placeholder="Need more credits?"/>
                            
                    </div>
                    </div>
                    
                    <img onClick={()=>setShowModal(prev =>!prev)} aria-label='Close Modal' className='cursor-pointer absolute w-[30px] h-[30px] top-5 end-10' src={Close} alt='close-icon'/>
                </div>
            </div>
        </div> : null
}
{showOtpModal && <OtpModal showModal={showOtpModal} setShowModal={setShowOtpModal} />}
{showAmountModal && <EnterAmountModal showModal={showAmountModal} setShowModal={setShowAmountModal}/>}
    </>
  )
}
