import React, { useContext } from "react";
import { AdminContext } from "../../Context/AdminContext";

const SideBar = ({ setPage }) => {
  const {setAdminlogin}=useContext(AdminContext)
  
  const Logout = ()=>{
    sessionStorage.removeItem("adminlogin")
    setAdminlogin(false)
  }
  return (
    <div className="bg-gray-300 text-black h-screen p-3 rounded-md mb-4 flex  flex-col justify-between">
      <div>

      <div className="hover:bg-gray-400 p-1 rounded-md text-center font-semibold text-lg">
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </div>
      <div className="hover:bg-gray-400 p-1 rounded-md text-center font-semibold text-lg">
        <button onClick={() => setPage("products")}>Products</button>
      </div>
      <div className="hover:bg-gray-400 p-1 rounded-md text-center font-semibold text-lg">
        <button onClick={() => setPage("users")}>Users</button>
      </div>
      <div className="hover:bg-gray-400 p-1 rounded-md text-center font-semibold text-lg">
        <button onClick={() => setPage("order")}>Order</button>
      </div>
      </div>
      <div className="hover:bg-gray-400 p-1 rounded-md text-center font-semibold text-lg">
        <button onClick={Logout}>LogOut</button>
      </div>

    </div>
  );
};

export default SideBar;
