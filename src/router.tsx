import { createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import Detail from "./routes/Detail";
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
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default router;
