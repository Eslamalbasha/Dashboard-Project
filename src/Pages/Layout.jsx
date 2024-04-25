import HomePage from "../component/Home/Nav/HomePage";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
};

export default Layout;
