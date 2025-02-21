import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";


function App() {
  return (
    <div>
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
