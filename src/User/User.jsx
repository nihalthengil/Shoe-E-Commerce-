import React from "react";
import Navbar from "./Component/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Component/Footer";

const User = () => {
  const location = useLocation();
  const path = ["/signup", "/login"];
  const HideNavbar = path.includes(location.pathname);
  return (
    <div>
      {!HideNavbar && <Navbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default User;
