import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/home/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Header from './Header/Header.jsx';
import AllToys from './Components/AllToys/AllToys.jsx';
import Sing from './Components/singtag/Sing.jsx';
import Login from './Components/login/Login.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';
import SingleToy from './Components/singleToy/SingleToy.jsx';
import PrivateRoute from '../PrivateRoute.jsx';
import AddToy from './Components/addData/AddToy.jsx';
import MyToy from './Components/mytoy/MyToy.jsx';
import Error from './error/Error.jsx';

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
      path: '/*',
      element: <Error></Error>
    },
    {
      path:"blog",
      element:<Blog></Blog>
    },
    {
      path:"/alltoyes",
      element:<AllToys></AllToys>      
    },
    {
         path:"singup",
         element:<Sing></Sing>
    },
    {
      path:"login",
      element:<Login></Login>
    },{
      path:"logIN",
      element:<Login></Login>
    },
    {
      path:"newToy/:id",
      element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
      loader:({params})=> fetch(`https://myservar-israfil3.vercel.app/superman/${params.id}`)
    },
    {
      path:"addtoy",
      element:<AddToy></AddToy>
    },
    {
      path:"mytoy",
      element:<MyToy></MyToy>
    }
 

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
       <React.StrictMode>
         <RouterProvider router={router} />
       </React.StrictMode>,
 </AuthProvider>
)
