import { Agenda } from "../pages/Agenda.jsx";
import { User } from "../pages/User.jsx";
import { Homepage } from "../pages/Homepage.jsx";

const routerConfig = [
    {
      name: "Root",
      path: "/",
      element: <Homepage />,
    },
    {
      name: "Agenda",
      path: "/Agenda",
      element: <Agenda />,
    },
    {
      name: "Users",
      path: "/User/:slug",
      element: <User />,
    },
  ];

export default routerConfig;