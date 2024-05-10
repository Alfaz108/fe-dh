import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/public/account/Login";
import Register from "../pages/public/account/Register";
import Dashboard from "../pages/private/dashboard";
import Root from "./Root";
import Border from "../pages/border";
import Bazar from "../pages/bazar";
import Deposit from "../pages/deposit";
import Meal from "../pages/meal";
import Summary from "../pages/summary";

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
        path: "/border",
        element: <Border/>,
      },
      {
        path: "/bazar",
        element: <Bazar/>,
      },
      {
        path: "/deposit",
        element: <Deposit/>,
      },
      {
        path: "/meal",
        element: <Meal />,
      },
      {
        path: "/summary",
        element: <Summary />,
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
