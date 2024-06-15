import {useRoutes } from "react-router-dom"
import Layout from "../Pages/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
import ServiceId from "../components/Services/ServiceId";


const AppRouter = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home/> },{path:"/about",element:<About/>},{path:"/services",element: <ServicesPage/>,children:[{path:":id",element:""}]},{path:"/serviceId",element:<ServiceId/>}],
    },
  ]);
  return routes;
};
export default AppRouter;