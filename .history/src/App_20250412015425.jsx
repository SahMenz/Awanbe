import { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";
import Home from "./components/home/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import RecoverAccountEmail from "./components/authentication/recoverAccount/recoverAccountEmail";
import RecoverAccountDetails from "./components/authentication/recoverAccount/recoverAccountDetails";
import RecoveredAccount from "./components/authentication/recoverAccount/recoveredAccount";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* MAIN ROUTE */}

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* AUTH ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/recover-account-email"
            element={<RecoverAccountEmail />}
          />
          <Route
            path="/recover-account-details"
            element={<RecoverAccountDetails />}
          />
          <Route path="/recovered-account" element={<RecoveredAccount />} />

          {/* DASHBOARD ROUTE */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
