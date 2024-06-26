import React from 'react'
import ReactDOM from 'react-dom/client' 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx'; 
import Statistics from './components/Header/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        loader: ()=> fetch('data/jobs.json'),
        element: <AppliedJobs></AppliedJobs> 
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/job/:id',
        loader: () => fetch("data/jobs.json"),
        element: <JobDetails></JobDetails>
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
