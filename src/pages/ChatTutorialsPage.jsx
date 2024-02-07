import React from 'react'
import { ChatNav } from '../components/ChatNav.jsx';
import { NavPage } from '../components/NavPage.jsx';
import { Chat } from '../components/Chat.jsx';
import { ChatTutorials } from '../components/ChatTutorials.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';


export const ChatTutorialsPage = () => {
  return (
    <>
        <Navbar/>
        <Chat name='Elton Enterprise limited'/>
        
        <section className='flex justify-center mt-8'>
        <div className='bg-light-200  w-[100vw] min-h-[65vh] md:mx-10  sm:mx-5  mb-5 rounded-2xl px-2'>
             <ChatNav/>
             <ChatTutorials/>
             <ChatTutorials/>
             
             <div className='flex justify-center py-10 '>
                <button className='border py-2 px-9 bg-dark-100 text-light-200 rounded-lg font-sfMedium '>Load more</button>
            </div>
        </div>
        
        </section>
        <Footer/>
    
    </>
  )
}
