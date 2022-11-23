import { createBrowserRouter } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";
import NotFound from "./components/NotFound";
import Root from "./components/Root";
import CharactersList from "./routes/CharactersList";
import ComicsList from "./routes/ComicsList";
import Detail from "./routes/Detail";
import EventsDetail from "./routes/EventsDetail";
import EventsList from "./routes/EventsList";
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
        element: <CharactersList />,
      },
      {
        path: "/characters/:id",
        element: <CharacterDetail />,
      },
      {
        path: "/comics",
        element: <ComicsList />,
      },
      {
        path: "/events",
        element: <EventsList />,
      },
      {
        path: "/events/:id",
        element: <EventsDetail />,
      },
    ],
  },
]);

export default router;
