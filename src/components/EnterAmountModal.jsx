import Close from '../assets/close-circle.svg';

export const EnterAmountModal = ({showModal,setShowModal}) => {
  return (
    <>
        {showModal ? 
        <div className="w-[100%] h-[200vh] bg-[rgba(0,0,0,0.4)] fixed flex  items-center justify-center">
            <div className='bg-light-200 w-[100%] h-[160vh] rounded-s-[50px] rounded-e-[50px] flex justify-center relative pb-7'>
                <div className='flex-col text-center mt-16'>
                    <div className=' justify-center'>
                        <h3 className='font-sfMedium text-2xl'>Enter Amount</h3>
                       <p className='font-sfRegular text-secondary-100'>Enter the amount of credits to purchase.Ex(500 credits=$100)</p>
                    </div>
                    <div className='flex-col gap-3 mt-6'>
                       <h3 className='font font-sfMedium text-lg text-start'>Credit</h3>
                       <input className='font-sfRegular text-secondary-100 border w-[31vw] h-[12vh] px-3 mt-2 rounded-[5px] border-secondary-700 bg-secondary-400' type='text'/>
                    </div>
                    <div className='flex-col gap-3 mt-6 text-start'>
                       <h3 className='font font-sfMedium text-lg text-start'>Amount to pay</h3>
                       <input className='font-sfRegular text-secondary-100 border w-[31vw] px-3 h-[12vh] mt-2 rounded-[5px] border-secondary-700 bg-secondary-400' type='text'/>
                    </div>
                    <button  className="rounded-[5px] font-sfMedium py-5 px-16 bg-dark-100 w-[31vw] text-light-200 mt-7">
                      Pay with paystack
                    </button>
                      <img onClick={()=>setShowModal(prev =>!prev)} aria-label='Close Modal' className='cursor-pointer absolute w-[30px] h-[30px] top-5 end-10' src={Close} alt='close-icon'/>
                    
                </div>
            </div>
        </div> : null
}
    
    
    
    </>
  )
}
