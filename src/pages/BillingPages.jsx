import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Chat } from '../components/Chat.jsx'
import { ProfileNav } from '../components/ProfileNav.jsx'
import { Billing } from '../components/Billing.jsx'

export const BillingPages = () => {
  return (
    <>

<NavPage element='props-search' elementId='props-filter' name='Profile' paragraph='Personalize and secure your account details and  security'/>
<Chat buttons='props-button' details='props-details' name='Customize and secure your account'/>
<div className='flex sm:flex-row flex-col justify-start'>
    <ProfileNav/>
    <Billing/>

</div>
    
    
    
    </>
  )
}
