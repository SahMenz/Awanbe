import "./login.css";
import authImage from "../../../assets/images/authImage.png";
import logoName from "../../../assets/images/logoName.svg";
import email from "../../../assets/images/email.svg";
import password from "../../../assets/images/password.svg";
import cancelledEyes from "../../../assets/images/cancelledEyes.svg";
import CustomSvg from "../../customSvg/CustomSvg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex m-4 m-lg-0">
      {/* <div className=''> */}
      <div className="p-5 pt-5 d-flex flex-column  text-center col-lg-5 col-8 justify-content-center">
        <div>
          <img src={logoName} />
          <div className="fw-700 fs-43 my-5">Let’s Get the Party Started!</div>
          <div className="d-flex align-items-center justify-content-center">
            <button className="me-4">
              <CustomSvg name="google" />
            </button>
            <button className="ms-4">
              <CustomSvg name="apple" />
            </button>
          </div>
          <div className="fs-19 fw-700 txt-73 py-5">Or</div>
        </div>
        <div
          className=" text-start d-flex align-items-center bg-f3 fw-500 fs-16 p-3"
          style={{ borderRadius: "25px", minWidth: "280px" }}
        >
          <img
            src={email}
            style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{ width: "20vw", minWidth: "200px" }}
            className="bg-f3 txt-73 fs-17 fw-500"
          />
        </div>
        <div
          className="bg-f3 d-flex align-items-center justify-content-between my-4 fw-500 fs-16 p-3 text-start"
          style={{ borderRadius: "25px", minWidth: "300px" }}
        >
          <img
            src={password}
            style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
          />
          <input
            type="email"
            placeholder="Password"
            style={{ width: "20vw", minWidth: "200px" }}
            className="bg-f3 txt-73 fs-17 fw-500"
          />
          <img src={cancelledEyes} style={{ backgroundColor: "#f3f3f3" }} />
        </div>
        <Link
          to="/recover-account-email"
          className="txt-00 text-decoration-none align-self-end fs-16 fw-400"
        >
          Forgot password?
        </Link>
        <button
          className="mt-5 mb-3 fw-600 fs-23 py-3"
          style={{
            minWidth: "300px",
            borderRadius: "50px",
            backgroundColor: "#A04D07",
            color: "white",
          }}
        >
          Sign in{" "}
        </button>
        <div className="fs-16 fw-400">
          Don’t have an Account?{" "}
          <b>
            <Link to="/sign-up" className="text-decoration-none txt-00">
              Sign up
            </Link>
          </b>
        </div>
      </div>
      {/* </div> */}
      <img src={authImage} className="col-lg-7 d-none d-lg-flex" />
    </div>
  );
}

export default Login;
