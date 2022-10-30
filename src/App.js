import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Manufacturer from "./components/Manufacturer";
import Supplier from "./components/Supplier";
import Customer from "./components/Customer";
import Login from "./components/CommonComponents/Login";
import Register from "./components/CommonComponents/Register";
import ForgetPassword from "./components/CommonComponents/ForgetPassword";
import ResetPassword from "./components/CommonComponents/ResetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manufacturer" element={<Manufacturer />} />
      <Route path="/supplier" element={<Supplier />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
