import React from 'react';
import Home from './Components/home/Home';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
      <>
        <div>
           <Home></Home>
           <Outlet></Outlet>
           <Footer></Footer>
         </div>
      </>
  );
};

export default App;
