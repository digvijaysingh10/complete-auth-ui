import "./App.css";
import Footer from "./components/Footer";
import ForgetPassword from "./components/ForgetPassword";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset/:id/reset/:token" element={<ResetPassword />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
