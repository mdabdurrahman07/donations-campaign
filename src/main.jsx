import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Mainroute from './Components/Mainroute/Mainroute';
import Donations from './Pages/Donations/Donations';
import Statistics from './Pages/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroute></Mainroute>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donations',
        element: <Donations></Donations>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>

   </RouterProvider>
  </React.StrictMode>,
)
