import NavigationMenu from "../components/NavigationMenu/NavigationMenu";
import Footer from "../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Layout = () => {
  
//   const [x,setx] = useState()
//   const imgRef = useRef();
//   const { pathname } = useLocation();


// console.log(pathname);
//   useEffect(() => {
//     window.onload = () => {
//       imgRef.current.style.display = "flex";
//     };
//     setTimeout(() => {
//       imgRef.current.style.display = "none";
//     }, 1000);
//   }, [pathname]);

//   useEffect(() => {
//     window.onload = () => {
//       imgRef.current.style.display = "flex";
//     };
//     setTimeout(() => {
//       imgRef.current.style.display = "none";
//     }, 1000);
//   }, []);

  return (
    <div>
      {/* <img
        ref={imgRef}
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: 1111,
          display: "none",
        }}
        src="https://i.pinimg.com/originals/ce/d2/d0/ced2d0cc1832708a6a1ee95df0e285a1.gif"
        alt=""
      /> */}
      <NavigationMenu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
