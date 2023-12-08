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
import All from "./pages/All.jsx";

// const LazyAll = React.lazy(()=> import('./pages/All.jsx'))
// const LazyExplore = React.lazy(()=> import('./pages/ExplorePage.jsx'))


// assuming data comes from database
const data = [
  {
    id: '10',
    title: 'Tutorials',
    description: 'this is the tutorials items',
    items: [
      {id: '100001', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100002', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100003', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100004', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100005', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100006', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
    ],
  },

  {
    id: '11',
    title: 'Inspiration',
    description: 'this is the tutorials items',
    items: [
      {id: '100007', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100008', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
    ],
  },

  {
    id: '12',
    title: 'Catalog',
    description: 'this is the tutorials items',
    items: [
      {id: '100009', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100010', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100011', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100012', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
    ],
  },

  {
    id: '13',
    title: 'Templates',
    description: 'this is the tutorials items',
    items: [
      {id: '100013', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100014', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100015', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100016', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100017', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100018', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100019', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100020', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
      {id: '100021', title: 'How to create a facebook post', image: 'assets/Tut1.png' },
    ],
  },
];

function App() {
  return (
    <>
      
      {/* <AsideBar/> */}
      <Routes>
       
        {/* <Route path='/' element ={<React.Suspense fallback='Loading....'> 
            <LazyAll/>
        </React.Suspense>}/> */}
        <Route path='/' element={<All data={data}/>}/>
        <Route path='tutorials' element={<TutorialsPage/>}/>
        <Route path='templates' element={<TemplatesPage/>}/>
        <Route path='courses' element ={<RecentPages/>}/>
        <Route path='wallet' element={<WalletPage/>}/>
        <Route path ='catalog' element={<CatalogPage/>}/>
        <Route path ='Inspiration' element={<InspirationPage/>}/>
        <Route path='intocourse' element ={<IntoCoursesPages/>}/>
        <Route path='intocourse2' element ={<IntoCourse2page/>}/>
        <Route path='intotemp' element ={<IntoTemplate/>}/>
        

        {/* <Route path ='explore' element={<React.Suspense fallback='Loading...'>
          <LazyExplore/>
        </React.Suspense>}/> */}
        <Route path= 'explore' element={<ExplorePage/>}/>
        <Route path ='createDesign' element={<CreateDesignPage/>}/>
        <Route path ='designForm' element ={< DesignFormPages/>}/>
        <Route path='inspire' element ={<InspirePage/>}/>
        <Route path='review&submit' element={<ReviewPage/>}/>
        <Route path ='complete' element ={<CompletePage/>}/>
        <Route path = 'trackDesign' element ={<TrackDesignPage/>}/>
        <Route path = 'events' element ={<EventPage/>}/>
        <Route path ='message' element ={<MessagePage/>}/>
        
        
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
    
    </>
  );
}

export default App;
