import Close from '../assets/close-circle.svg';
import Tick from '../assets/tick-circle.svg'

export const SuccessModal = ({showModal, setShowModal}) => {
  return (
    <>

{showModal ? 
        <div className="w-[100%] h-[200vh] bg-[rgba(0,0,0,0.4)] fixed flex  items-center justify-center">
            <div className='bg-light-200 w-[100%] h-[160vh] rounded-s-[50px] rounded-e-[50px] flex justify-center relative pb-7'>
                <div className='flex-col text-center mt-36'>
                    <div className='flex justify-center'>
                        <img src={Tick} alt='tick-icon' className=''/>
                       
                    </div>
                    <div className='flex-col gap-3 mt-10'>
                       <h3 className='font font-sfMedium text-2xl'>Payment successful</h3>
                       <p className='font-sfRegular text-secondary-100'>Your payment was successful, your account has been credited with 500 credit</p>
                    </div>
                    <button  className="rounded-[5px] font-sfMedium py-6 px-16 bg-dark-100 text-light-200 mt-12">
                      Continue
                    </button>
                      <img onClick={()=>setShowModal(prev =>!prev)} aria-label='Close Modal' className='cursor-pointer absolute w-[30px] h-[30px] top-5 end-10' src={Close} alt='close-icon'/>
                    
                </div>
            </div>
        </div> : null
}

    </>
  )
}
    
