import React from 'react'
import { NavPage } from '../components/NavPage'
import { Chat } from '../components/Chat'
import { ProfileNav } from '../components/ProfileNav'
import { General } from '../components/General'

export const GeneralPage = () => {
  return (
    <>
        <NavPage element='props-search' elementId='props-filter' name='Profile' paragraph='Personalize and secure your account details and  security'/>
        <Chat buttons='props-button' details='props-details' name='Customize and secure your account'/>
        <div className='flex sm:flex-row flex-col justify-start'>
          <ProfileNav/>
          <General/>
        </div>
        
    </>
  )
}
