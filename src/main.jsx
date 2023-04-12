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
import AppliedJobs from './assets/components/AppliedJobs/AppliedJobs';
import PageNotFound from './assets/components/PageNotFound/PageNotFound';
import Chart from './assets/components/Chart/Chart';

const router=createBrowserRouter([
  {
    path:"*",
    element:<PageNotFound></PageNotFound>
  },
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
        loader: ({params}) => fetch('/json/jobs.json')
      },
      {
        path:"/appliedjobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: ({params})=> params
      },
      {
        path:"/statistics",
        element: <Chart></Chart>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
