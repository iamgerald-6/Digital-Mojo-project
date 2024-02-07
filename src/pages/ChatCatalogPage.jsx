
import { Chat } from '../components/Chat.jsx'
import { ChatNav } from '../components/ChatNav.jsx'
import { ChatCatalog } from '../components/ChatCatalog.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

export const ChatCatalogPage = () => {
  return (
    <>
         <Navbar/>
        <Chat name='Elton Enterprise limited'/>
        <section className='flex justify-center mt-10'>
            <div className='bg-light-200  min-h-[65vh] w-[100vw] md:mx-10 sm:mx-5 mb-5 rounded-2xl px-2'>
                <ChatNav/>
                <ChatCatalog/>
                <ChatCatalog/>
                <div className='flex justify-center py-10 '>
                     <button className='border py-2 px-9 bg-dark-100 text-light-200 rounded-lg font-sfMedium'>Load more</button>
                </div>
            </div>
            
        </section>
        <Footer/>
    </>
  )
}
