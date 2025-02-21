import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";
import RecoverAccount from "./components/authentication/recoverAccount/recoverAccount";
import RecoverAccount2 from "./components/authentication/recoverAccount/recoverAccount2";
import Home from "./components/home/home";


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <RecoverAccount /> */}
      {/* <RecoverAccount2   /> */}
      <Home />
    </div>
  );
}

export default App;
