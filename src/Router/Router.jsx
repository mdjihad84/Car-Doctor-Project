import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginMain from "../Layout/LoginMain";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Service from "../Pages/ServicePage/Service";
import CheckOut from "../Pages/CheckOut/CheckOut";
import NewService from "../Pages/NewService/NewService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CarManage from "../Pages/CarManage/CarManage";
import CarDetails from "../Pages/CarDetails/CarDetails";
import ManageHeader from "../Layout/ManageHeader";

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
        path: "/CheckOut",
        element: <CheckOut/>,
      },
      {
        path: "/NewService",
        element: <NewService/>,
      },
      {
        path: "/CarManage",
        element: <CarManage/>,
      },
      {
        path: "/CarDetails",
        element: <CarDetails/>,
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
      {
        path: "ErrorPage",
        element: <ErrorPage/>,
      },
    ],
  },
  {
    path: "/",
    element: <ManageHeader />,
    children: [
      {
        path: "/CarDetails",
        element: <CarDetails/>,
      },
      {
        path: "/CarManage",
        element: <CarManage />,
      },
    ],
  },
]);

export default router;
