import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Chat } from '../components/Chat.jsx'
import { Password } from '../components/Password.jsx'
import { ProfileNav } from '../components/ProfileNav.jsx'
import Navbar from '../components/Navbar.jsx'
import { EditProfileHead } from '../components/EditProfileHead.jsx'
import Footer from '../components/Footer.jsx'

export const PasswordPage = () => {
  return (
    <>
        <Navbar/>
        <EditProfileHead/>
        <div className='flex sm:flex-row flex-col justify-start'>
          <ProfileNav/>
          <Password/>
        </div>
        <Footer/>


    </>
  )
}
