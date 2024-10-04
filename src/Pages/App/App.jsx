import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Myaccount from "../Myaccount";
import Myorder from "../Myorder";
import Myorders from "../Myorders";
import Notfound from "../Notfound";
import Signin from "../Signin";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/myaccount",
      element: <Myaccount />,
    },
    {
      path: "/myorder",
      element: <Myorder />,
    },
    {
      path: "/myorders",
      element: <Myorders />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
  return routes;
};
const App = () => {
  return (
    <div className="bg-red-400">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
