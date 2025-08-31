import React from "react";
import DashBoard from "./Component/DashBoard";
import OrderPage from "./Component/OrderPage";
import Products from "./Component/Products";
import Users from "./Component/Users";

import { useState } from "react";
import SideBar from "./Component/SideBar";

const Admin = () => {
  const [page, setPage] = useState("users");
  return (
    <div className="flex ml-[200px]">


      <div className="w-1/6 text-white  fixed left-0 top-0 ">
        <SideBar setPage={setPage} />
      </div>


      <div className="w-full  px-6 pt-8">
        {page === "dashboard" && <DashBoard />}
        {page === "order" && <OrderPage />}
        {page === "products" && <Products />}
        {page === "users" && <Users />}
      </div>
    </div>
  );
};

export default Admin;
