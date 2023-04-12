import "./App.css";
import Footer from "./components/Footer";
import ForgetPassword from "./components/validations/ForgetPassword";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Signin from "./components/validations/Signin";
import Signup from "./components/validations/Signup";
import ResetPassword from "./components/validations/ResetPassword";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset/users/:id/reset/:token" element={<ResetPassword />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
