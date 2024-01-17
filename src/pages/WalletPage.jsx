import React from 'react';

import { Wallet } from '../components/Wallet.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const WalletPage = () => {
  // const [modal, setModal] =useState(false)
  return (
    <>
        <Navbar/>
        <Wallet />
        <Footer/>
    </>
  )
}
