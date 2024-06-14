import { Route, Router, Routes, useRoutes } from "react-router-dom"
import Layout from "../Pages/Layout";

// const AppRouter = () => {
//  const routes = () => {
//  let routes = useRoutes([
//     { path: "/", element: <Component1 /> },
//     { path: "component2", element: <Component2 /> },
//     ]);
//   return routes
//  }
//     return (
//       <div>
//         <Router>
//           <routes/>
//         </Router>
//         {/* <Routes>
//           <Route path="/" element={<Layout />} ></Route>
//         </Routes> */}

//       </div>
//     );
// }

// export default AppRouter;


const AppRouter = () => {
  let routes = useRoutes([{ path: "/", element: <Layout /> }]);
  return routes;
};
export default AppRouter;