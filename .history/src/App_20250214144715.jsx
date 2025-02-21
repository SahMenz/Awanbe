import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";
import RecoverAccount from "./components/authentication/recoverAccount/recoverAccount";


function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <SignUp /> */}
      <RecoverAccount />
    </div>
  );
}

export default App;
