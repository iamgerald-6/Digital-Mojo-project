import React,{useState} from "react";
import { Route, Routes } from "react-router-dom";
// import All from './pages/All.jsx';
// import Navbar from './components/Navbar'
// import AsideBar from "./components/AsideBar.jsx";
import {TutorialsPage} from './pages/TutorialsPage.jsx';
import {CatalogPage} from "./pages/CatalogPage.jsx";
import { TemplatesPage } from "./pages/TemplatesPage.jsx";
import { RecentPages } from "./pages/RecentPages.jsx";
import { InspirationPage } from "./pages/InspirationPage.jsx";
import { IntoCoursesPages } from "./pages/IntoCoursesPages.jsx";
import { IntoCourse2page } from "./pages/IntoCourse2page.jsx";
import {WalletPage} from "./pages/WalletPage.jsx";
// import { ProfilePage } from "./pages/ProfilePage.jsx";
import { ChatPage } from "./pages/ChatPage.jsx";
import { ChatTutorialsPage } from "./pages/ChatTutorialsPage.jsx";
import { ChatCatalogPage } from "./pages/ChatCatalogPage.jsx";
import { ChatTemplatePag } from "./pages/ChatTemplatePag.jsx";
import { GeneralPage } from "./pages/GeneralPage.jsx";
import { EditProfilePage } from "./pages/EditProfilePage.jsx";
import { AddressPage } from "./pages/AddressPage.jsx";
import { PasswordPage } from "./pages/PasswordPage.jsx";
import { SocialPages } from "./pages/SocialPages.jsx";

import { CreateDesignPage } from "./pages/CreateDesignPage.jsx";
import { DesignFormPages } from "./pages/DesignFormPages.jsx";
import { InspirePage } from "./pages/InspirePage.jsx";
import { ReviewPage } from "./pages/ReviewPage.jsx";
import { CompletePage } from "./pages/CompletePage.jsx";
import { TrackDesignPage } from "./pages/TrackDesignPage.jsx";
import { EventPage } from "./pages/EventPage.jsx";
import { MessagePage } from "./pages/MessagePage.jsx";
import { ExplorePage } from "./pages/ExplorePage.jsx";
import { BrandPage } from "./pages/BrandPage.jsx";
import { IntoTemplate } from "./components/IntoTemplate.jsx";
import { AddDesign } from "./components/AddDesign.jsx";
import { IntoCatalog } from "./components/IntoCatalog.jsx";
import IntoCatalog2 from "./components/IntoCatalog2.jsx";
import {Generate}  from "./components/Generate.jsx";
// import { Calender } from "./components/Calender.jsx";
// import {ModalTemp} from './components/ModalTemp.jsx';

// import All from "./pages/All.jsx";

const LazyAll = React.lazy(()=> import('./pages/All.jsx'))
// const LazyExplore = React.lazy(()=> import('./pages/ExplorePage.jsx'))

// const data = [
//   {
//   id:'10',
//   title:'Tutorials',
//   description: 'this is the tutorial items',
//   items:[
    
//       {id:'10001',title:'How to create a facebook post',image:'assets/Tut1.png'},
//       {id:'10002',title:'How to create a linkedin post',image:'assets/Tut2.png'},
//       {id:'10003',title:'How to post on facebook',image:'assets/Tut3.png'},
//       {id:'10004',title:'How to post on facebook',image:'assets/Tut4.png'}
    
//   ]
// },

// {
//   id:'11',
//   title:'Templates',
//   description: 'this is the Templates items',
//   items:[
    
//       {id:'10005',title:'Black Friday',image:'assets/Tut1.png'},
//       {id:'10006',title:'Black Friday',image:'assets/Tut2.png'},
//       {id:'10007',title:'Creative agency design',image:'assets/Tut3.png'},
//       {id:'10008',title:'Marketing agency design',image:'assets/Tut4.png'}
    
//   ]
// },
//  {
//   id:'12',
//   title:'Catalog',
//   description: 'this is the Catalog items',
//   items:[
    
//       {id:'10009',title:'Business branding',image:'assets/Cat1.png'},
//       {id:'100010',title:'social media branding',image:'assets/Cat2.png'},
//       {id:'100011',title:'web design',image:'assets/Cat3.png'},
//       {id:'100012',title:'social media post',image:'assets/Cat4.png'}
    
//   ]
// },

// {
//   id:'13',
//   title:'Recent Courses',
//   description: 'this is the courses items',
//   items:[
    
//       {id:'100013',title:'Beginner cyber security 101',image:'assets/Cat1.png'},
//       {id:'100014',title:'social media branding',image:'assets/Cat2.png'},
//       {id:'100015',title:'web design',image:'assets/Cat3.png'} ,
//       {id:'100016',title:'social media post',image:'assets/Cat4.png'}
    
//   ],
// },

// {
//   id:'14',
//   title:'Inspiration',
//   description: 'this is the inspiration items',
//   items:[
    
//       {id:'100013',title:'Business branding',image:'assets/Cat1.png'},
//       {id:'100014',title:'social media branding',image:'assets/Cat2.png'},
//       {id:'100015',title:'web design',image:'assets/Cat3.png'} ,
//       {id:'100016',title:'social media post',image:'assets/Cat4.png'}
    
//   ],
// },
// ]

// const [modal, setModal] =useState(false);

// const openModal =()=>{
//   setModal(prev => !prev);
// }
function App() {

  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
     
      {/* <AsideBar/> */}
      <Routes>
       
        {/* <Route path='/' element ={<All data={data}/>}/>  */}
          
        <Route path='tutorials' element={<TutorialsPage/>}/>
       
        <Route path='templates' element={<TemplatesPage/>}/>
       
        
        <Route path='courses' element ={<RecentPages/>}/>
        <Route path='wallet' element={<WalletPage/>}/>
        <Route path ='catalog' element={<CatalogPage/>}/>
        <Route path ='Inspiration' element={<InspirationPage/>}/>
        <Route path='intocourse' element ={<IntoCoursesPages/>}/>
        <Route path='intocourse2' element ={<IntoCourse2page/>}/>
        <Route path='intotemp' element ={<IntoTemplate/>}/>
        <Route path='intoCatalog' element={<IntoCatalog/>}/>
        <Route path='intocatalog2' element={<IntoCatalog2/>}/>
        

        <Route path ='/' element={<React.Suspense fallback='Loading...'>
          <LazyAll/>
        </React.Suspense>}/>
        
        <Route path= 'explore' element={<ExplorePage/>}/>
        {/* <Route path='calender' element={<Calender/>}/> */}
        <Route path ='addDesign' element={<AddDesign/>}/>
        <Route path ='createDesign' element={<CreateDesignPage/>}/>
        <Route path ='designForm' element ={< DesignFormPages/>}/>
        <Route path='inspire' element ={<InspirePage/>}/>
        <Route path='review&submit' element={<ReviewPage/>}/>
        <Route path ='complete' element ={<CompletePage/>}/>
        <Route path = 'trackDesign' element ={<TrackDesignPage/>}/>
        <Route path = 'events' element ={<EventPage/>}/>
        <Route path ='message' element ={<MessagePage/>}/>
        <Route path='generate' element={<Generate/>}/>

        
        
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
        <Route path='brand' element ={<BrandPage/>}/>
        
      </Routes>
      {/* <ModalTemp isOpen={isModalOpen} onClose={closeModal} content={modalContent} /> */}
    </>
  );
}

export default App;
