import React from "react";
import { Routes, Route } from "react-router-dom";
import All from './pages/All.jsx';
// import Navbar from './components/Navbar'
import AsideBar from "./components/AsideBar.jsx";
import {TutorialsPage} from './pages/TutorialsPage.jsx';
import {CatalogPage} from "./pages/CatalogPage.jsx";
import { TemplatesPage } from "./pages/TemplatesPage.jsx";
import { RecentPages } from "./pages/RecentPages.jsx";
import { InspirationPage } from "./pages/InspirationPage.jsx";
import { IntoCoursesPages } from "./pages/IntoCoursesPages.jsx";
import {WalletPage} from "./pages/WalletPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { ChatPage } from "./pages/ChatPage.jsx";
import { ChatTutorialsPage } from "./pages/ChatTutorialsPage.jsx";
import { ChatCatalogPage } from "./pages/ChatCatalogPage.jsx";
import { ChatTemplatePag } from "./pages/ChatTemplatePag.jsx";
import { GeneralPage } from "./pages/GeneralPage.jsx";
import { EditProfilePage } from "./pages/EditProfilePage.jsx";
import { AddressPage } from "./pages/AddressPage.jsx";
import { PasswordPage } from "./pages/PasswordPage.jsx";
import { SocialPages } from "./pages/SocialPages.jsx";
import { BillingPages } from "./pages/BillingPages.jsx";
// import { SecondNav } from "./components/SecondNav.jsx";

function App() {
  return (
    <>
      
      <AsideBar/>
      <Routes>
        <Route path="/" element={<All />}/>
        <Route path='tutorials' element={<TutorialsPage/>}/>
        <Route path='templates' element={<TemplatesPage/>}/>
        <Route path='courses' element ={<RecentPages/>}/>
        <Route path='wallet' element={<WalletPage/>}/>
        <Route path ='catalog' element={<CatalogPage/>}/>
        <Route path ='Inspiration' element={<InspirationPage/>}/>
        <Route path='explore' element={<ProfilePage/>}/>
        <Route path='intocourse' element ={<IntoCoursesPages/>}/>
        
        
        <Route path ='chat' element={<ChatPage/>}/>
        <Route path ='chatPage' element={<ChatPage/>}/>
        <Route path ='chatTutorials' element={<ChatTutorialsPage/>}/>
        <Route path ='chatCatalog' element={<ChatCatalogPage/>}/>
        <Route path ='chatTemplate' element={<ChatTemplatePag/>}/>
        <Route path ='general' element={<GeneralPage/>}/>
        <Route path = 'profile' element={<EditProfilePage/>}/>
        <Route path = 'address' element={<AddressPage/>}/>
        <Route path ='password' element={<PasswordPage/>}/>
        <Route path='social' element={<SocialPages/>}/>
        <Route path='billing' element={<BillingPages/>}/>
      </Routes>
    
    </>
  );
}

export default App;
