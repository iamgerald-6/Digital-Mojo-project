import React from 'react'
import { NavPage } from '../components/NavPage'
import { Message } from '../components/Message'
import { ChatBox } from '../components/ChatBox'

export const MessagePage = () => {
  return (
    <>
            <NavPage elementId='props-filter' margin='props-margin'/>

            <div className='flex sm:flex-row flex-col justify-start'>
            <Message/>
            <ChatBox/>
            </div>
    
    
    </>
  )
}
