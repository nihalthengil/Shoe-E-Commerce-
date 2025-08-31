import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [adminlogin, setAdminlogin] = useState(() => {
    return sessionStorage.getItem("adminlogin") || null;
  });
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get("http://localhost:3000/users");
        setUsers(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("error");
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get("http://localhost:3000/orders");
        setOrders(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("error");
      }
    };
    fetchdata();
  }, []);
  return (
    <AdminContext.Provider
      value={{
        users,
        setUsers,
        orders,
        setOrders,
        loading,
        setLoading,
        error,
        setError,
        adminlogin,
        setAdminlogin,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
