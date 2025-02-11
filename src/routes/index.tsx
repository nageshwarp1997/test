import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import App from "../App";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";
import SomethingWentWrong from "../pages/error/SomethingWentWrong";
import NotFound from "../pages/error/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "error",
    element: <SomethingWentWrong />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
