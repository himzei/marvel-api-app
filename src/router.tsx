import { createBrowserRouter } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import Characters from "./routes/Characters";
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
      {
        path: "/characters",
        element: <Characters />,
      },
      {
        path: "/characters/:id",
        element: <CharacterDetail />,
      },
    ],
  },
]);

export default router;
