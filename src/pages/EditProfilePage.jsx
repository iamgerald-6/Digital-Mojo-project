import React from 'react'
import { NavPage } from '../components/NavPage.jsx'
import { Chat } from '../components/Chat.jsx'
import { ProfileNav } from '../components/ProfileNav.jsx'
import { EditProfile } from '../components/EditProfile.jsx'
import Navbar from '../components/Navbar.jsx'
import { EditProfileHead } from '../components/EditProfileHead.jsx'
import Footer from '../components/Footer.jsx'

export const EditProfilePage = () => {
  return (
    <>
        <Navbar/>
        <EditProfileHead/>
        <div className='flex sm:flex-row flex-col justify-start'>
            <ProfileNav/>
            <EditProfile/>
        </div>
        <Footer/>
    
    </>
  )
}
