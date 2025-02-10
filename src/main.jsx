import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './assets/Root/Roots.jsx';
import Home from './assets/component/Shared/Home.jsx';
import OderManagement from './assets/component/Shared/OderManagement.jsx';
import AddQuestionnaire from './assets/component/Shared/AddQuestionnaire.jsx';
import MakeAdmin from './assets/component/Shared/MakeAdmin.jsx';
import ManaageSubscription from './assets/component/Shared/ManaageSubscription.jsx';
import Settings from './assets/component/Shared/Settings.jsx';
import Profile from './assets/component/Shared/Profile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots/>,
    children: [
      {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "/profile",
        element:<Profile/> ,
      },
      {
        path: "/odermanagement",
        element:<OderManagement/> ,
      },
      {
        path: "/addquestionnaire",
        element:<AddQuestionnaire/> ,
      },
      {
        path: "/makeadmin",
        element:<MakeAdmin/> ,
      },
      {
        path: "/managesubscription",
        element:<ManaageSubscription/> ,
      },
      {
        path: "/setting",
        element:<Settings/> ,
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
