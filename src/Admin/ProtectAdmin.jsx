import React, { useContext } from "react";
import { AdminContext } from "../Context/AdminContext";
import { Navigate } from "react-router-dom";


const ProtectAdmin = ({ children }) => {
  const { adminlogin, setAdminlogin } = useContext(AdminContext);
    if (!adminlogin){
        return <Navigate to="/login" replace={true}/>
    }
  return children;
};

export default ProtectAdmin;
