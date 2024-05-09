import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/public/account/Login";
import Register from "../pages/public/account/Register";
import Dashboard from "../pages/private/dashboard";
import Root from "./Root";

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
      // {
      //   path: "/user",
      //   element: <User />,
      // },
      // {
      //   path: "/category",
      //   element: <Category />,
      // },
      // {
      //   path: "/category/categoryInv",
      //   element: <CategoryInvoice />,
      // },
      // {
      //   path: "/invoice",
      //   element: <Invoice />,
      // },
      // {
      //   path: "/bids",
      //   element: <Bids />,
      // },
      // {
      //   path: "/tickets",
      //   element: <Ticket />,
      // },
      // {
      //   path: "/reports",
      //   element: <Report />,
      // },
      // {
      //   path: "/myProfile",
      //   element: <MyProfile />,
      // },
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
