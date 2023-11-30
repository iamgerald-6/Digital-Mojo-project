import React from 'react'
import Navbar from '../components/Navbar';
import { EditProfileHead } from '../components/EditProfileHead';
import { Brand } from '../components/Brand';
import {ProfileNav}  from '../components/ProfileNav';
import Footer from '../components/Footer';

export const BrandPage = () => {
  return (
    <>
        <Navbar/>
        <EditProfileHead/>
        <div className='flex sm:flex-row flex-col justify-start'>
            <ProfileNav/>
            <Brand/>
        </div>
        <Footer/>
    
    
    </>
  )
}
