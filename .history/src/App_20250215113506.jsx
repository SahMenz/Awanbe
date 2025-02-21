import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";
import RecoverAccount from "./components/authentication/recoverAccount/recoverAccount";
import RecoverAccountDetails from "./components/authentication/recoverAccount/RecoverAccountDetails";
import Home from "./components/home/home";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          {/* MAIN ROUTE */}

          <Route path="/" element={<Home />} />

          {/* AUTH ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/recover-account-email" element={<RecoverAccountEmail />} />
          <Route path="/recover-account-details" element={<RecoverAccountDetails />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
