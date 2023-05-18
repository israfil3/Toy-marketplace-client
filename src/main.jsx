import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Header from './Header/Header.jsx';
import AllToys from './Components/AllToys/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
    {
      path:"/",
      element:<Header></Header>
    },
    {
      path:"home",
      element:<Header></Header>
    },
    {
      path:"blog",
      element:<Blog></Blog>
    },
    {
      path:"alltoyes",
      element:<AllToys></AllToys>      
    }
  

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
