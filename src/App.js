import { Route, Routes } from "react-router-dom";
import Login from "./pages/user_signup_login/Login";
import AdminSignUp from "./pages/admin_signup/AdminSignUp";
import SignUp from "./pages/user_signup_login/SignUp";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="App">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* private routes */}
        <Route path="/admin-signup" element={<AdminSignUp />} />
      </Routes>
    </div>
  );
};

export default App;
