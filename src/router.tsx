import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
