import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import LogIn from "./SignUp&LogIn/LogIn";
import SignUp from "./SignUp&LogIn/SignUp";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

function App() {
  return (<div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BrowserRouter>

  </div>
)}

export default App;
