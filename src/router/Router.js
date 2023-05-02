import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../components/Rootlayout";

import Cards from "../components/Cards";

import Info from "../pages/Info";
import Calmain from "../pages/Calmain";
import Complete from "../pages/Complete";
import Cancel from "../pages/Cancel";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
  },
  {
    path: "Cards",
    element: <Cards />,
  },
  {
    path: "/:path",
    element: <Calmain />,
  },
  {
    path: "Info/:detail",
    element: <Info />,
  },
  {
    path:"Complete/:duration",
    element:<Complete/>
  },
  {
    path:"Cancel",
    element:<Cancel/>
  },
  
]);
export default Router;
