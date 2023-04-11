import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './assets/components/Navbar/Navbar';
import Home from './assets/components/Home/Home';
import Details from './assets/components/Details/Details';

const router=createBrowserRouter([
  {
    path:"/",
    element: <Navbar></Navbar>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/details/:id",
        element:<Details></Details>,
        loader: ({params}) => fetch(`json/jobs.json`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
