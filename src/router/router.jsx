import { Navigate, createBrowserRouter } from "react-router-dom";

import Home from "../sharedPage/Home/Home";
import Layout from "../layout/Layout";
import Booking from "../components/Booking/Booking";
import NavigationBar from "../sharedPage/NavigationBar/NavigationBar";
import LoginWithPrivateLayout from "../layout/LoginWithPrivateLayout/LoginWithPrivateLayout";
import CategoryDetails from "../components/CategoryDetails/CategoryDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/booking/:id",
        element: <Booking></Booking>,
        loader: ({ params }) =>
          fetch(
            `https://travel-guru-practice-server-site-sabbirjiinat.vercel.app/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginWithPrivateLayout></LoginWithPrivateLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/travel/category/:id"></Navigate>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/travel/category/:id",
        element: (
          <PrivateRoute>
            <CategoryDetails></CategoryDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://travel-guru-practice-server-site-sabbirjiinat.vercel.app/travel/category/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
