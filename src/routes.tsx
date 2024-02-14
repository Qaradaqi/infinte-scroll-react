import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
];
const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
