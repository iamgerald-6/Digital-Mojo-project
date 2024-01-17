
import { NavPage } from '../components/NavPage'
// import { Event } from '../components/Event.jsx'
import { Calender } from '../components/Calender'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const EventPage = () => {
  return (
    <>
        <Navbar/>
        <Calender/>
        
        {/* <div className='flex sm:flex-row flex-col justify-start'> */}
            {/* <Event/> */}
            
        {/* </div> */}
        
        <Footer/>
    </>
  )
}
