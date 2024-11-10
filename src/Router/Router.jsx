import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Manage from "../Layout/Manage";
import FormHeader from "../Layout/FormHeader";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Service from "../Pages/ServicePage/Service";
import CheckOut from "../Pages/CheckOut/CheckOut";
import NewService from "../Pages/NewService/NewService";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CarManage from "../Pages/CarManage/CarManage";
import CarDetails from "../Pages/CarDetails/CarDetails";

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
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/newservice",
        element: <NewService />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <FormHeader />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Manage />,
    children: [
      {
        path: "carmanage",
        element: <CarManage />,
      },
      {
        path: "cardetails",
        element: <CarDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;

