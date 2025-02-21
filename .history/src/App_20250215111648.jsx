import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";
import RecoverAccount from "./components/authentication/recoverAccount/recoverAccount";
import RecoverAccount2 from "./components/authentication/recoverAccount/recoverAccount2";
import Home from "./components/home/home";
import { HashRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
              {/* MAIN ROUTE */}

          <Route path="/"
          element={<Home />}
          />


              {/* AUTH ROUTE */}

          <Route path="/login"
          element={<Login />}
          />
          <Route path="/sign-up"
          element={<SignUp />}
          />
          <Route path="/recover-account-email"
          element={<RecoverAccount />}
          />
          <Route path="/recover-account"
          element={<RecoverAccount2 />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
