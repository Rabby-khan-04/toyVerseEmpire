import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Page/Home/Home/Home";
import Blog from "../Page/Blog/Blog";
import AllToys from "../Page/AllToys/AllToys";
import MyToys from "../Page/MyToys/MyToys";
import AddNewToys from "../Page/AddNewToys/AddNewToys";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Spinner from "../components/Spinner/Spinner";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../Page/ToyDetails/ToyDetails";
import EditToys from "../Page/EditToys/EditToys";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "toys",
        element: <AllToys />,
      },
      {
        path: "my-toys",
        element: (
          <PrivateRoutes>
            <MyToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-new-toy",
        element: (
          <PrivateRoutes>
            <AddNewToys />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "toy-details/:id",
        element: (
          <PrivateRoutes>
            <ToyDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/toy/${params.id}`),
      },
      {
        path: "edit-toys/:id",
        element: (
          <PrivateRoutes>
            <EditToys />
          </PrivateRoutes>
        ),
        loader: ({ params }) => fetch(`http://localhost:3000/toy/${params.id}`),
      },
    ],
  },
]);
