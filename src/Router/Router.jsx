import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginMain from "../Layout/LoginMain";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Service from "../Pages/ServicePage/Service";
import Shop from "../Pages/Shop/Shop";
import CheckOut from "../Pages/CheckOut/CheckOut";
import NewService from "../Pages/NewService/NewService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/CheckOut",
        element: <CheckOut/>,
      },
      {
        path: "/NewService",
        element: <NewService/>,
      },
    ],
  },
  {
    path: "/",
    element: <LoginMain />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
