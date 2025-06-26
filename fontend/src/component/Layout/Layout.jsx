import { Outlet } from "react-router";
import NavBar from "./NavBar/NavBar";
import style from "./Layout.module.css";
import Footer from "./Footer/Footer";
const Layout = function () {
  return (
    <div className={style.layout}>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
