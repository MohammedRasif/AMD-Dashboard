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
import Congratulation from './assets/component/Shared/Congratulation.jsx';
import OderDetails from './assets/component/Shared/OderDetails.jsx';
import Question from './assets/component/Shared/Question.jsx';
import CuponCode from './assets/component/Shared/CuponCode.jsx';
import CreateSubscription from './assets/component/Shared/CreateSubscription.jsx';
import Subscription from './assets/component/Shared/Subscription.jsx';
import EditSubscription from './assets/component/Shared/EditSubscription.jsx';
import AddCupon from './assets/component/Shared/AddCupon.jsx';
import TermCondition from './assets/component/Shared/TermCondition.jsx';
import Privacy from './assets/component/Shared/Privacy.jsx';
import Notification from './assets/component/Shared/Notification.jsx';
import AdminProfile from './assets/component/Shared/AdminProfile.jsx';
import ViewPage from './assets/component/Shared/ViewPage.jsx';
import EditCupon from './assets/component/Shared/EditCupon.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/odermanagement",
        element: <OderManagement />,
      },
      {
        path: "/addquestionnaire",
        element: <AddQuestionnaire />,
      },
      {
        path: "/makeadmin",
        element: <MakeAdmin />,
      },
      {
        path: "/managesubscription",
        element: <ManaageSubscription />,
      },
      {
        path: "/setting",
        element: <Settings />,
      },
      {
        path: "/oderDetails",
        element: <OderDetails />
      },
      {
        path: "/notification",
        element: <Notification />
      },
      {
        path: "/question",
        element: <Question />
      },
      {
        path: "/subscription",
        element: <Subscription />
      },
      {
        path: "/createSubcription",
        element: <CreateSubscription />
      },
      {
        path: "/editSubcription",
        element: <EditSubscription />
      },
      {
        path: "/coupon-code",
        element: <CuponCode />
      },
      {
        path: "/AddCoupon",
        element: <AddCupon />
      },
      {
        path: "/editCupon",
        element: <EditCupon />
      },
      {
        path: "/termsCondition",
        element: <TermCondition />
      },
      {
        path: "/porivacyPolicy",
        element: <Privacy />
      },
      {
        path: "/adminProfile",
        element: <AdminProfile />
      },
      {
        path: "/viewPage/:id",
        element: <ViewPage />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/forgetPassword",
    element: <ForgetPassword />
  },
  {
    path: "/verification",
    element: <Verification />
  },
  {
    path: "/setNewPassoword",
    element: <SetNewPassword />
  },
  {
    path: "/congratulation",
    element: <Congratulation />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>

  </StrictMode>,
)
