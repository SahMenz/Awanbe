import authImage from "../../../assets/images/authImage.png";
import logoName from "../../../assets/images/logoName.svg";
import email from "../../../assets/images/email.svg";
import password from "../../../assets/images/password.svg";
import profile from "../../../assets/images/profile.svg";
import CustomSvg from "../../customSvg/CustomSvg";
import { Form, Link, useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Formik } from "formik";
import CustomErrorMsg from "../../CustomErrorMsg/CustomErrorMsg";
import { IoMdEye } from "react-icons/io";
import { useState } from "react";
import { SchemaValidation } from "../SchemaValidation";

function SignUp() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisiblity = () => setPasswordVisible((prev) => !prev);
  const toggleConfirmPasswordVisiblity = () =>
    setConfirmPasswordVisible((prev) => !prev);

  const handleSignUpSubmission = (values) => {
    console.log("Submitted values:", values);
    navigate("/dashboard");
  };

  return (
    <div className="d-flex m-4 m-lg-0">
      {/* <div className=''> */}
      <div className="p-5 pt-5 d-flex flex-column  text-center col-12 col-lg-5">
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
        <Formik
          initialValues={initialValues}
          validationSchema={SchemaValidation}
          onSubmit={handleSignUpSubmission}
        >
          <Form className="d-flex flex-column">
            {/* <div
              className=" text-start d-flex align-items-center bg-f3 fw-500 fs-16 p-3"
              style={{ borderRadius: "25px", minWidth: "280px" }}
            >
              <img
                src={profile}
                style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
              />
              <Field
                type="text"
                name="firstname"
                placeholder="First Name"
                style={{ width: "20vw", minWidth: "200px" }}
                className="bg-f3 txt-73 fs-17 fw-500"
              />
            </div>
            <ErrorMessage
              name="firstname"
              render={(errorMsg) => (
                <CustomErrorMsg
                  isCentered={true}
                  withoutIcon={true}
                  errorMsg={errorMsg}
                />
              )}
            /> */}

            {/* <div
              className=" text-start d-flex align-items-center bg-f3 fw-500 fs-16 p-3"
              style={{ borderRadius: "25px", minWidth: "280px" }}
            >
              <img
                src={profile}
                style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
              />
              <Field
                type="text"
                name="lastname"
                placeholder="Last Name"
                style={{ width: "20vw", minWidth: "200px" }}
                className="bg-f3 txt-73 fs-17 fw-500"
              />
            </div>
            <ErrorMessage
              name="lastname"
              render={(errorMsg) => (
                <CustomErrorMsg
                  isCentered={true}
                  withoutIcon={true}
                  errorMsg={errorMsg}
                />
              )}
            /> */}

            {/* <div
              className=" text-start d-flex align-items-center bg-f3 fw-500 fs-16 p-3"
              style={{ borderRadius: "25px", minWidth: "280px" }}
            >
              <img
                src={email}
                style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
              />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                style={{ width: "20vw", minWidth: "200px" }}
                className="bg-f3 txt-73 fs-17 fw-500"
              />
            </div>
            <ErrorMessage
              name="email"
              render={(errorMsg) => (
                <CustomErrorMsg
                  isCentered={true}
                  withoutIcon={true}
                  errorMsg={errorMsg}
                />
              )}
            /> */}

            {/* <div
              className="bg-f3 d-flex align-items-center my-4 fw-500 fs-16 p-3 text-start"
              style={{ borderRadius: "25px", minWidth: "300px" }}
            >
              <img
                src={password}
                style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
              />
              <Field
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                style={{ width: "28vw", minWidth: "180px" }}
                className="bg-f3 txt-73 fs-17 fw-500 me-2"
              />

              <div
                style={{ width: "5%" }}
                className="clickable d-flex align-items-center   justify-self-end"
                onClick={togglePasswordVisiblity}
              >
                {passwordVisible ? (
                  <IoMdEye size={17} color="black" />
                ) : (
                  <CustomSvg name="cancelledEyes" />
                )}
              </div>
            </div>
            <ErrorMessage
              name="password"
              render={(errorMsg) => (
                <CustomErrorMsg
                  isCentered={true}
                  withoutIcon={true}
                  errorMsg={errorMsg}
                />
              )}
            /> */}

            {/* <div
              className="bg-f3 d-flex align-items-center my-4 fw-500 fs-16 p-3 text-start"
              style={{ borderRadius: "25px", minWidth: "300px" }}
            >
              <img
                src={password}
                style={{ backgroundColor: "#f3f3f3", marginRight: "8px" }}
              />
              <Field
                type={confirmPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                style={{ width: "28vw", minWidth: "180px" }}
                className="bg-f3 txt-73 fs-17 fw-500 me-2"
              />

              <div
                style={{ width: "5%" }}
                className="clickable d-flex align-items-center   justify-self-end"
                onClick={toggleConfirmPasswordVisiblity}
              >
                {passwordVisible ? (
                  <IoMdEye size={17} color="black" />
                ) : (
                  <CustomSvg name="cancelledEyes" />
                )}
              </div>
            </div>
            <ErrorMessage
              name="confirmPassword"
              render={(errorMsg) => (
                <CustomErrorMsg
                  isCentered={true}
                  withoutIcon={true}
                  errorMsg={errorMsg}
                />
              )}
            /> */}

            {/* <Link
              to="/recover-account-email"
              className="txt-00 text-decoration-none align-self-end fs-16 fw-400"
            >
              Forgot password?
            </Link> */}
            {/* <button
              type="submit"
              className="mt-5 mb-3 fw-600 fs-23 py-3"
              style={{
                minWidth: "300px",
                borderRadius: "50px",
                backgroundColor: "#A04D07",
                color: "white",
              }}
            >
              Sign up{" "}
            </button> */}
          </Form>
        </Formik>
        <div className="fs-16 fw-400">
          Already have an account?{" "}
          <b>
            <Link to="/login" className="text-decoration-none txt-00">
              Sign in
            </Link>
          </b>
        </div>
      </div>
      {/* </div> */}
      <img src={authImage} className="d-none d-lg-flex col-lg-7" />
    </div>
  );
}

export default SignUp;
