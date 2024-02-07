import React, { useState } from 'react'
import { NavPage } from '../components/NavPage.jsx';
import { Chat } from '../components/Chat.jsx';
import { ChatNav } from '../components/ChatNav.jsx';


import { ItemsChat } from '../components/ItemsChat.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';


export const ChatPage = () => {
  return (
    <>
            <Navbar/>
            <Chat name='Elton Enterprise limited'/>
            <section className='flex justify-center  mt-7'>
                <div className='bg-light-200   w-[100vw] min-h-[65vh] md:mx-10 sm:mx-5  mb-5 rounded-2xl px-2 '>
                    <ChatNav/>
                    {/* <div className=' flex flex-col justify-center'> */}
                    <ItemsChat  elementId='props-certified' paragraph='props-paragraph'/>
                    <ItemsChat  elementId='props-certified' paragraph='props-paragraph'/>
                    <div className='flex justify-center py-10 '>
                        <button className='border py-2 px-9 bg-dark-100 text-light-200 rounded-lg font-sfMedium'>Load more</button>
                    </div>
                    {/* </div> */}
                </div>
            </section>
            <Footer/>
    </>
  )
}
