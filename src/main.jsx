import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './assets/Root/Roots.jsx';
import Home from './assets/component/Shared/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
