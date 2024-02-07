
import Gallery from '../assets/gallery-export.svg';

export const Brand = () => {
  return (
    <>
        <div className='lg:w-[69vw] md:w-[80vw] sm:w-[100vw] bg-light-200 sm:min-h-[83vh] h-full rounded-lg mt-5 md:me-11 sm:mx-4 sm:ps-10 ps-5 py-4'>
                <form className='flex flex-col me-10 mt-5'>
                  
                    <label htmlFor='brandName ' className='font-sfRegular text-xl'>Brand name</label>
                    <div className='mt-2'>
                      <input
                      className='rounded-md ps-3 py-4 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100 font-sfRegular'
                      id='brandName'
                      type='text'
                      placeholder='Enter Brand name'
                      name='brandName'
                      required maxLength={15}
                      minLength={4} />
                  </div>
                  
                  <label htmlFor='logo' className='mt-10 font-sfRegular md:text-xl '>Brand logo</label>
                    <div className='mt-2  sm:w-[24vw] w-[50vw] '>
                        <div className='bg-secondary-100 py-2 px-3 text-light-200 flex rounded-[7px] font-sfMedium sm:text-sm '><img className='me-3' src={Gallery} alt='icon'/>Upload logo</div>
                  </div>



                    <label htmlFor='brandColor' className='mt-10 font-sfRegular text-xl'>Brand color code</label>
                    <div className='mt-2'>
                      <input className='rounded-md ps-3 py-4 sm:w-[62vw] w-[85vw] bg-secondary-400 placeholder-secondary-100 font-sfRegular'
                      id='brandColor'
                      type='text' name='brandColor'
                      placeholder='Enter color code'
                      
                      required maxLength={20}
                      minLength={6}/>
                       <h3 className='mt-1 text-sm text-secondary-100 font-sfRegular '>Paste the hex code and separate with (,) Ex.(#000000,#ffffff)</h3>
                  </div>
                  <div className='flex sm:justify-end sm:h-[9vh] sm:mt-10 mt-10'>
                    <div className=''>
                       <button className='bg-dark-100 text-light-200 rounded-[15px] text-lg border px-5 py-2 font-sfMedium'>Save changes</button>
                    </div>
                  </div>
                  
                </form>
                  

            </div>
    
    </>
  )
}
