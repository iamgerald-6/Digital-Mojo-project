import Close from '../assets/close-circle.svg';
import AddCircle from '../assets/add-circle-black.svg';
import {Link} from 'react-router-dom'

export const CalenderModal = ({showCalenderModal, setShowCalenderModal}) => {
  return (
    <>
        { showCalenderModal ?
        <div className="w-[100%] h-[200vh] bg-[rgba(0,0,0,0.4)] fixed flex  items-center justify-center">
            <div className='bg-light-200 w-[100%] h-[170vh] rounded-s-[50px] rounded-e-[50px] flex justify-center relative pb-7'>
                <div className='flex-col text-center mt-10'>
                    <div className=' justify-center'>
                        <h3 className='font-sfMedium text-2xl'>Content calender</h3>
                       <p className='font-sfRegular text-secondary-100'>Upload content calender attach a comment and submit</p>
                    </div>
                <div className='mt-5'>
                    <h3 className='text-lg font-sfRegular text-dark-100'>1. Upload (PPT/PDF) </h3>
                    <div className='mt-3 '>
                            <div className='flex justify-center items-center flex-col  bg-secondary-400 px-5 py-1 w-[30vw] h-[18vh] rounded-[10px] ' >
                                <Link className=''><img src={AddCircle} alt=''/>
                                </Link>
                                <h3 className=' mt-3 text-sm text-secondary-100 font-sfRegular'>Upload PPT/PDF </h3>
                            </div>   
                    </div>
                </div>
                    <div className='flex-col gap-3 mt-4 text-start'>
                       <h3 className='font font-sfMedium text-lg text-start'>2. comment</h3>
                       <input className='font-sfRegular text-secondary-100 border w-[30vw] px-3 h-[18vh] mt-2 rounded-[5px] border-secondary-700 bg-secondary-400' type='text'/>
                    </div>
                    <div className=' flex justify-end'>
                        <button  className="rounded-[5px] font-sfMedium py-5 px-16 border bg-dark-100  text-light-200 mt-7">
                        Continue
                        </button>
                    </div>
                      <img onClick={()=>setShowCalenderModal(prev =>!prev)} aria-label='Close Modal' className='cursor-pointer absolute w-[30px] h-[30px] top-5 end-10' src={Close} alt='close-icon'/>
                      
                </div>
            </div>
        </div> : null

        }
    
    

  

    
    
    
    </>
  )
}
