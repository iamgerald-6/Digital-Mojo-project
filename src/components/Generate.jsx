import Navbar from "./Navbar";
import Footer from "./Footer";
import Send from '../assets/send.svg';

export const Generate = () => {
  return (
    <>

        <Navbar/>
        <div className='justify-center flex mt-10 h-[100vh]'>
            <div className="flex-col">
            <div className='flex-col text-center'>
                <h3 className='text-2xl font-sfMedium'>Generate content</h3>
                <p className="text-secondary-100 font-sfRegular">Generate content for your design with ease </p>
            </div>
            <div className="bg-light-200 border-b-2 border-secondary-400 w-[80vw] px-10 py-4 mt-8 rounded-t-[11px] font-sfRegular text-lg">
                <h3>Content: Christmas black friday</h3>
            </div>
            <div className="bg-light-200 w-[80vw] py-4 px-10 h-[50vh] rounded-b-[11px]">
                <div className='text-secondary-100 py-4 px-10 bg-secondary-700 w-[30vw] text-sm rounded-[8px] font-sfRegular'>
                    <p>Get anything you want at 50% off this black friday</p>
                </div>
                <div className='text-secondary-100 py-4 px-10 bg-secondary-700 w-[24vw] text-sm rounded-[8px] mt-2 font-sfRegular'>
                    <p>All purchases this black friday is 50% off</p>
                </div>
            </div>
            <div className="mt-6 font-sfRegular">
                <span className='bg-dark-100 text-light-200 px-7 py-3 rounded-[8px]'>Christmas black Fridays</span>
                <span className='bg-dark-100 text-light-200 px-7 py-3 rounded-[8px] ms-2'>Easter black Fridays</span>
                <span className='bg-dark-100 text-light-200 px-5 py-3 rounded-[8px] ms-2'>Day in my life</span>
            </div>

            <div className='mt-7 flex justify-between pe-8 w-[80vw] bg-light-200  rounded-[8px]'>
             <input className=" font-sfRegular py-7 px-8 w-[83vw] rounded-[8px] outline-none" placeholder="Describe what you need"/>
             <img src={Send} alt='send-icon'/>
            </div>
            </div>
        </div>
        <Footer/>
    
    </>
  )
}
