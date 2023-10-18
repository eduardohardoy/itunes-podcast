import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "../views/landing";
import Details from "../views/details";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    { path: "/podcast/:podcastId", element: <Details /> },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
