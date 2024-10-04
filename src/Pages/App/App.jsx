import { useRoutes, BrowserRouter } from "react-router-dom";

import Home from "../Home";
import Myaccount from "../Myaccount";
import Myorder from "../Myorder";
import Myorders from "../Myorders";
import Notfound from "../Notfound";
import Signin from "../Signin";
import Navbar from "../../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <Myaccount />,
    },
    {
      path: "/my-order",
      element: <Myorder />,
    },
    {
      path: "/my-orders",
      element: <Myorders />,
    },
    {
      path: "/sign-in",
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
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
