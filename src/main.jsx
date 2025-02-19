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
import PrivateRoute from './assets/Root/PrivateRoute.jsx';
// import VerificationRoute from './assets/Root/VerificationRoute.jsx';
import SetNewPasswordRoute from './assets/Root/SetNewPasswordRoute.jsx';
import VerificationRoute from './assets/Root/VerificationRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
      },
      {
        path: "/odermanagement",
        element: <PrivateRoute><OderManagement /></PrivateRoute>,
      },
      {
        path: "/addquestionnaire",
        element: <PrivateRoute><AddQuestionnaire /></PrivateRoute>,
      },
      {
        path: "/makeadmin",
        element: <PrivateRoute><MakeAdmin /></PrivateRoute>,
      },
      {
        path: "/managesubscription",
        element: <PrivateRoute><ManaageSubscription /></PrivateRoute>,
      },
      {
        path: "/setting",
        element: <PrivateRoute><Settings /></PrivateRoute>,
      },
      {
        path: "/oderDetails",
        element: <PrivateRoute><OderDetails /></PrivateRoute>
      },
      {
        path: "/notification",
        element: <PrivateRoute><Notification /></PrivateRoute>
      },
      {
        path: "/question/:id",
        element: <PrivateRoute><Question /></PrivateRoute>
      },
      {
        path: "/subscription",
        element: <PrivateRoute><Subscription /></PrivateRoute>
      },
      {
        path: "/createSubcription",
        element: <PrivateRoute><CreateSubscription /></PrivateRoute>
      },
      {
        path: "/editSubcription",
        element: <PrivateRoute><EditSubscription /></PrivateRoute>
      },
      {
        path: "/coupon-code",
        element: <PrivateRoute><CuponCode /></PrivateRoute>
      },
      {
        path: "/AddCoupon",
        element: <PrivateRoute><AddCupon /></PrivateRoute>
      },
      {
        path: "/editCupon",
        element: <PrivateRoute><EditCupon /></PrivateRoute>
      },
      {
        path: "/termsCondition",
        element: <PrivateRoute><TermCondition /></PrivateRoute>
      },
      {
        path: "/porivacyPolicy",
        element: <PrivateRoute><Privacy /></PrivateRoute>
      },
      {
        path: "/adminProfile",
        element: <PrivateRoute><AdminProfile /></PrivateRoute>
      },
      {
        path: "/viewPage/:id",
        element: <PrivateRoute><ViewPage /></PrivateRoute>
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
    element: <VerificationRoute><Verification /></VerificationRoute>
  },
  {
    path: "/setNewPassoword",
    element: <SetNewPasswordRoute><SetNewPassword /></SetNewPasswordRoute>
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
