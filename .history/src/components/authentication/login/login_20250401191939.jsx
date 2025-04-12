import "./login.css";
import authImage from "../../../assets/images/authImage.png";
import logoName from "../../../assets/images/logoName.svg";
import email from "../../../assets/images/email.svg";
import password from "../../../assets/images/password.svg";
import cancelledEyes from "../../../assets/images/cancelledEyes.svg";
import CustomSvg from "../../customSvg/CustomSvg";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
// import { toast } from "react-toastify";
import { ErrorMessage, Field, Formik, Form } from "formik";
import CustomErrorMsg from "../CustomErrorMsg/CustomErrorMsg";
import { IoMdEye } from "react-icons/io";
import CustomLoading1 from "../../loading/CustomLoading1";

function Login() {
  const initialsValues = {
    email: "",
    password: "",
  };

  // const [isPending, setIsPending] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("enter your email address"),
    password: yup.string().min(5).required("please enter password"),
  });

  const togglePasswordVisiblity = () => setPasswordVisible((prev) => !prev);

  // const handleSubmission = (values) => {
  //   sendingData(values);
  // };

  // const sendingData = async (values) => {
  //   setIsPending(true);

  //   return await onRequestApi({
  //     requestInfo: {
  //       url: "users/login",
  //       method: "post",
  //       data: values,
  //     },
  //     successCallBack: loginSuccess,
  //     failureCallback: loginFailure,
  //   });
  // };

  // const loginSuccess = ({ result }) => {
  //   try {
  //     setIsPending(false);
  //     toast.success(result.message);

  //     const { data, accessToken } = result;
  //     const { details } = data;
  //     const { user_id } = details;
  //     localStorage.setItem("user_id", user_id);
  //     localStorage.setItem("accessToken", accessToken);

  //     dispatch(setUserDetails({ details, accessToken }));

  //     // navigate("/dashboard");

  //     return;
  //   } catch (error) {
  //     return loginFailure({ errorMsg: "Something went wrong! Try again!" });
  //   }
  // };

  // const loginFailure = ({ errorMsg }) => {
  //   setIsPending(false);
  //   toast.error(errorMsg);

  //   return;
  // };

  return (
    <div className="d-flex m-4 m-lg-0">
      {/* <div className=''> */}
      <div className="p-5 pt-5 d-flex flex-column  text-center col-lg-5 col-12">
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
          initialValues={initialsValues}
          validationSchema={loginValidationSchema}
          onSubmit={() => {

          }}
        >
          {() => (
            <Form>
              <div className="mb-4 w-100">
                <div
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
                />
              </div>









              <div className="w-100 mb-4">
                <div
                  className="bg-f3 d-flex align-items-center justify-content-between my-4 fw-500 fs-16 p-3 text-start"
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
                    style={{ width: "20vw", minWidth: "200px" }}
                    className="bg-f3 txt-73 fs-17 fw-500"
                  />
                  <div
                    style={{ width: "7%" }}
                    className="clickable d-flex align-items-center justify-content-end"
                    onClick={togglePasswordVisiblity}
                  >
                    {passwordVisible ? (
                      <IoMdEye size={20} color="black" />
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
                />
              </div>










              <div className="w-100 d-flex align-items-center justify-content-center w-100">
                <Link
                  to="/recover-account-email"
                  className="txt-00 text-decoration-none align-self-end fs-16 fw-400"
                >
                  Forgot password?
                </Link>
              </div>


              <button
                type="submit"
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
              {/* <CustomLoading1 loadingTxt={"loggin in..."} /> */}
            </Form>
          )}
        </Formik>

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
