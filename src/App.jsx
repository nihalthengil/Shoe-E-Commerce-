import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./SignUp&LogIn/LogIn";
import SignUp from "./SignUp&LogIn/SignUp";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import NewArrival from "./Component/Category/NewArrival";
import Details from "./Component/Category/Details";
import ContextProvider from "./Context/Context";
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Cart/Checkout";
import Brand from "./Component/Category/Brand";
function App() {
  return (
    <div>
      <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/products" element={<NewArrival/>} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/brand/:brand" element={<Brand/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
