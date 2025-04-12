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
import AboutUs from "./components/aboutUs/aboutUs";
import Dashboard from "./components/dashboard/dashboard";
// import Navigation from "./components/navigation/navigation";
// import Footer from "./components/footer/footer";
// import HowAwambeWorks from "./components/howAwambeWorks/howAwambeWorks";
// import OurSolutions from "./components/ourSolutions/ourSolutions";
// import { Route } from "react-router-dom";

function App() {
  // const aboutUsDiv = useRef(null);
  // const ourSolutionDiv = useRef(null);
  // const HowItWorksDiv = useRef(null);
  // const footerRef = useRef(null);

  // const scrollToAboutUs = () => {
  //   aboutUsDiv.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });

  //   return;
  // };

  // const scrollToHowItWorks = () => {
  //   HowItWorksDiv.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });

  //   return;
  // };

  // const scrollToOurSolution = () => {
  //   ourSolutionDiv.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });

  //   return;
  // };

  // const scrollToFooter = () => {
  //   footerRef.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });

  //   return;
  // };

  return (
    // <div>
    //   <div className="nav-container-bg bg-img p-lg-5 p-md-3 p-3 py-3">
    //     <div
    //       style={{
    //         borderRadius: "40px",
    //       }}
    //       className="fixed-top mb-5 my-3 mx-3 bg-000"
    //     >
    //       <Navigation
    //         scrollToAboutUs={scrollToAboutUs}
    //         scrollToOurSolution={scrollToOurSolution}
    //         scrollToOurWorks={scrollToHowItWorks}
    //         scrollToFooter={scrollToFooter}
    //       />
    //     </div>

    //     <div
    //       style={{ gap: "5px" }}
    //       className="d-flex my-5 py-5 flex-wrap align-items-start justify-content-between"
    //     >
    //       <div className="col-lg-6 col-md-12 col-12 mb-lg-0 mb-md-4 mb-4">
    //         <h1 className="m-0 p-0 mb-1 font-family-DmSans fw-700 txt-FFF txt-50">
    //           Building the future, One Beam at a Time.
    //         </h1>
    //         <p className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-16 mb-4">
    //           At KK Roland, we combine innovation, precision, and sustainable
    //           engineering to construct structures that shape tomorrow’s world
    //           with strength and reliability—one project, one beam, and one
    //           foundation at a time.
    //         </p>
    //       </div>

    //       <div className="col-lg-5 col-md-12 col-12 py-5">
    //         <div className="d-flex mb-5 align-items-center justify-content-end">
    //           <div
    //             style={{
    //               border: "1px solid #FFF",
    //               borderRadius: "20px",
    //             }}
    //             className="py-4 px-4"
    //           >
    //             <p className="m-0 p-0 mb-2 font-family-DmSans fw-600 txt-FFF txt-17">
    //               100+
    //             </p>
    //             <p className="m-0 p-0 mb-2 font-family-DmSans fw-400 txt-FFF txt-15">
    //               Satisfied Clients
    //             </p>
    //           </div>
    //         </div>

    //         <div
    //           style={{
    //             borderRadius: "15px",
    //             backgroundColor: "rgba(255, 255, 255, 0.20)",
    //           }}
    //           className="p-4"
    //         >
    //           <div className="mb-4">
    //             <h2 className="m-0 p-0 txt-FFF font-family-DmSans fw-600 txt-15">
    //               Crafting Skyscrapers, Bridging Communities
    //             </h2>
    //           </div>
    //           <div>
    //             <p className="m-0 p-0 txt-FFF font-family-DmSans fw-500 txt-14">
    //               We build towering structures and reliable infrastructure that
    //               connect communities, driven by precision, innovation, and
    //               lasting excellence.
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div ref={aboutUsDiv} className="p-lg-5 p-md-3 p-3">
    //     <AboutUs />
    //   </div>

    //   <div ref={scrollToHowItWorks} className="p-lg-5 p-md-3 p-3">
    //     <OurSolutions />
    //   </div>

    //   <div ref={scrollToHowItWorks} className="p-lg-5 p-md-3 p-3">
    //     <HowAwambeWorks />
    //   </div>

    //   <div ref={footerRef}>
    //     <Footer />
    //   </div>
    // </div>

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
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
