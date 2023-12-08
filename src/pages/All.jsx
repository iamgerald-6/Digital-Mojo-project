/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar.jsx';
import {SecondNav}  from '../components/SecondNav.jsx';
import { Cover } from '../components/Cover.jsx';
import Footer from '../components/Footer.jsx';
import ItemsDisplayContainer from '../components/items_display_container.jsx';
// import { Outlet } from 'react-router-dom';

 const All = ({data}) => {

     const renderedData = data.map((category) => {
          return (<ItemsDisplayContainer key={category.id} category={category} items={category.items}/>);
     });
  return (
   <>
         
        <Navbar/>
        <Cover/>
        <SecondNav/>
        {renderedData}
        <Footer/>
        
   </>
  )
}




export default All