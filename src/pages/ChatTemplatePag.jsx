import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Chat } from '../components/Chat.jsx'
import { ChatNav } from '../components/ChatNav.jsx'
import { ChatTemplate } from '../components/chatTemplate.jsx'


export const ChatTemplatePag = () => {
  return (
    <>
         <NavPage element='props-search' elementId='props-filter' name='Profile' paragraph='Personalize and secure your account details and  security'/>
         <Chat name='Elton Enterprise limited'/>
        <section className='flex justify-center mt-10'>
             <div className='bg-secondary-400 xl:w-[78vw]  lg:w-[78vw] lg:ms-64 w-[100vw] rounded-lg px-5  '>
                    <ChatNav/>
                    <ChatTemplate/>
                    <ChatTemplate/>
                    <div className='flex justify-center py-10'>
                      <button className='border py-3 px-5 bg-dark-100 text-light-200 rounded-md'>Load more</button>
                    </div>
             </div>
             
        </section>
    
    
    </>
  )
}
