import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Layout from './Components/Layout/Layout.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import JobDescription from './Components/JobDescriptions/JobDescription.jsx';
import AllJobs from './Components/AllJobs/AllJobs.jsx';
import Footer from './Components/Footer/Footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>
  },
  {
    path: "/jobDetails",
    element: <JobDetails><h3 className='h-fit w-fit text-2xl font-semibold'>Job Details</h3></JobDetails>,
    children: [
      {
        path: '/jobDetails',
        element: <JobDescription></JobDescription>,
        loader: () => fetch('jobs.json')
      },
    ]
  },
  {
    path: "/jobs",
    element: <JobDetails><h3 className='h-fit w-fit text-2xl font-semibold'>Applied Jobs</h3></JobDetails>,
    children: [
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch('jobs.json')
      },
      {
        path: "/jobs",
        element: <Footer></Footer>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
