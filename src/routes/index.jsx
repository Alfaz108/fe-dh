import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "../pages/public/account/Login";
import Register from "../pages/public/account/Register";
import Dashboard from "../pages/private/dashboard";
import Root from "./Root";
import User from "../pages/private/user";
import MyComponent from "../temp/practiceTable/Component";
import Category from "../pages/private/category";
import Invoice from "../pages/private/invoice";
import Bids from "../pages/private/bids";
import Ticket from "../pages/private/tickets";
import Report from "../pages/private/reports";
import Profile from "../pages/private/profile/Profile";

export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Root />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/invoice",
        element: <Invoice />,
      },
      {
        path: "/bids",
        element: <Bids />,
      },
      {
        path: "/tickets",
        element: <Ticket />,
      },
      {
        path: "/reports",
        element: <Report />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);
