import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./User/Component/Navbar";
import Home from "./User/Component/Home";
import SignUp from "./User/SignUp&LogIn/SignUp";
import LogIn from "./User/SignUp&LogIn/LogIn";
import NewArrival from "./User/Component/Category/NewArrival";
import Details from "./User/Component/Category/Details";
import Brand from "./User/Component/Category/Brand";
import Cart from "./User/Component/Cart/Cart";
import Checkout from "./User/Component/Cart/Checkout";
import ContextProvider from "./Context/Context";
import Admin from "./Admin/Admin";
import AdminContextProvider from "./Context/AdminContext";
import User from "./User/User";
import ProtectAdmin from "./Admin/ProtectAdmin";

function App() {
  return (
    <div>
      <ContextProvider>
        <AdminContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<User />}>
                <Route index element={<Home />} />
                <Route path="/products" element={<NewArrival />} />
                <Route path="/details/:id" element={<Details />} />
                <Route path="/brand/:brand" element={<Brand />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
              </Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route
                path="/admin"
                element={
                  <ProtectAdmin>
                    <Admin />
                  </ProtectAdmin>
                }
              />
            </Routes>
          </BrowserRouter>
        </AdminContextProvider>
      </ContextProvider>
    </div>
  );
}

export default App;
