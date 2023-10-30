import React from 'react'
import { NavPage } from '../components/NavPage.jsx';
import { Chat } from '../components/Chat.jsx';
import { ChatNav } from '../components/ChatNav.jsx';


import { ItemsChat } from '../components/ItemsChat.jsx';

export const ChatPage = () => {
  return (
    <>
            <NavPage element='props-search' elementId='props-filter' name='Profile' paragraph='Personalize and secure your account details and  security'/>
            <Chat name='Elton Enterprise limited'/>
            <section className='flex md:justify-center justify-start mt-10'>
                <div className='bg-secondary-400  xl:w-[78vw] lg:w-[78vw] w-[100vw]  lg:ms-64 rounded-lg px-5 '>
                    <ChatNav/>
                    {/* <div className=' flex flex-col justify-center'> */}
                    <ItemsChat  elementId='props-certified' paragraph='props-paragraph'/>
                    <ItemsChat  elementId='props-certified' paragraph='props-paragraph'/>
                    <div className='flex justify-center py-10 '>
                        <button className='border py-3 px-5 bg-dark-100 text-light-200 rounded-md'>Load more</button>
                    </div>
                    {/* </div> */}
                </div>
            </section>

    </>
  )
}
