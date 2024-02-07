import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Chat } from '../components/Chat.jsx'
import { ChatNav } from '../components/ChatNav.jsx'
import { ChatTemplate } from '../components/ChatTemplate.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'


export const ChatTemplatePag = () => {
  return (
    <>
         <Navbar/>
         <Chat name='Elton Enterprise limited'/>
        <section className='flex justify-center mt-10'>
             <div className='bg-light-200   w-[100vw] min-h-[65vh] md:mx-10 sm:mx-5  mb-5 rounded-2xl px-2 '>
                    <ChatNav/>
                    <ChatTemplate hTag='Marketing agency'/>
                    <ChatTemplate hTag='Marketing agency'/>
                    <div className='flex justify-center py-10'>
                      <button className='border py-2 px-9 bg-dark-100 text-light-200 rounded-lg'>Load more</button>
                    </div>
             </div>
             
             
        </section>
        <Footer/>
    
    </>
  )
}
