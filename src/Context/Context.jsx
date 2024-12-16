import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(()=>{
    return localStorage.getItem("userId")||""

  });
  const [username, setUserName] = useState(()=>{
    return localStorage.getItem("username")||""

  });
  const [Cart, SetCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get("http://localhost:3000/products");
        setProducts(data.data);
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
        const data = await axios.get(`http://localhost:3000/users/${userId}`);        
        SetCart(data.data.cart);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        Cart,
        SetCart,
        userId,
        setUserId,
        username,
        setUserName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default ContextProvider;
