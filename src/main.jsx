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
import Login from './assets/component/Login/Login.jsx';
import ForgetPassword from './assets/component/Shared/ForgetPassword.jsx';
import Verification from './assets/component/Shared/Verification.jsx';
import SetNewPassword from './assets/component/Shared/SetNewPassoword.jsx';
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
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/forgetPassword",
        element:<ForgetPassword/>
      },
      {
        path:"/verification",
        element:<Verification/>
      },
      {
        path:"/setNewPassoword",
        element:<SetNewPassword/>
      }
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
