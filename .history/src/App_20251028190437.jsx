import { BiBell, BiCart, BiHeart, BiSearch, BiLogOut } from "react-icons/bi"; // Added BiLogOut
import { CgProfile } from "react-icons/cg";
import profile from "../../../assets/images/profile.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { logout } from "../../../redux/slices/authSlice"; // Import the logout action

function DashboardNav({ title }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --- REDUX STATE ACCESS ---
  // Get profile image from the userProfile slice
  const profileImage = useSelector((state) => state.userProfile.profileImage);

  // --- LOGOUT HANDLER ---
  const handleLogout = () => {
    // 1. Dispatch the Redux logout action
    dispatch(logout());
    // 2. Navigate to the initial/login page
    navigate("/login"); 
  };

  // Component for the profile picture (used in both desktop and offcanvas)
  const ProfilePicture = () => (
    <div 
      className="cursor" 
      style={{ 
        width: "40px", 
        height: "40px", 
        borderRadius: "50%", 
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {profileImage ? (
        <img
          src={profileImage}
          alt="Profile"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        // Fallback to CgProfile icon if no image is set in Redux
        <CgProfile size={40} color="#000000" /> 
      )}
    </div>
  );

  return (
    <div
      className="bg-ff mb-4 p-3 d-flex align-items-center justify-content-between"
      style={{ borderRadius: "16px" }}
    >
      <div className="fw-500 fs-43 txt-a0">{title}</div> {/* Use the title prop */}
      <div className="d-md-flex d-none align-items-center justify-content-between">
        <div
          className="me-4"
          style={{
            borderRadius: "30px",
            padding: "15px 25px",
            border: "1px solid #737373",
          }}
        >
          <BiSearch size={20} color="#737373" className="me-1" />
          <input placeholder="Search" />
        </div>
        <div className="d-flex align-items-center">
          <BiCart size={18} color="black" className="cursor" />
          <BiHeart size={18} color="black" className="cursor ms-4" />
          <BiBell size={18} color="black" className="cursor mx-4" />
          <ProfilePicture />
          
          {/* LOGOUT BUTTON for Desktop */}
          <button
            onClick={handleLogout}
            className="ms-4 btn d-flex align-items-center"
            style={{ border: 'none', background: 'transparent', padding: '0', color: '#A04D07' }}
            title="Logout"
          >
            <BiLogOut size={24} />
          </button>

        </div>
      </div>
      <div
        onClick={handleShow}
        className=" d-md-none"
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className=""
        style={{ backgroundColor: "#fff" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column align-items-center gap-4">
            <div
              className="me-4"
              style={{
                borderRadius: "30px",
                padding: "15px 25px",
                border: "1px solid #737373",
              }}
            >
              <BiSearch size={20} color="#737373" className="me-1" />
              <input placeholder="Search" />
            </div>
            <div className="d-flex align-items-center mb-4">
              <BiCart size={18} color="black" className="cursor" />
              <BiHeart size={18} color="black" className="cursor ms-4" />
              <BiBell size={18} color="black" className="cursor mx-4" />
              <ProfilePicture />
            </div>

            {/* LOGOUT BUTTON for Mobile (Offcanvas) */}
            <button
              onClick={() => { handleClose(); handleLogout(); }} // Close offcanvas then log out
              className="btn fw-600 fs-18 py-2 w-75"
              style={{
                borderRadius: "50px",
                backgroundColor: "#A04D07",
                color: "white",
              }}
            >
              <BiLogOut size={20} className="me-2" />
              Logout
            </button>
            
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );







// import { useRef } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/authentication/login/login";
// import SignUp from "./components/authentication/signUp/signUp";
// import Home from "./components/home/home";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import RecoverAccountEmail from "./components/authentication/recoverAccount/recoverAccountEmail";
// import RecoverAccountDetails from "./components/authentication/recoverAccount/recoverAccountDetails";
// import RecoveredAccount from "./components/authentication/recoverAccount/recoveredAccount";
// import ScrollToTop from "./components/scroll/ScrollToTop";
// import Dashboard from "./components/dashboard/dashboard";
// import AllEvents from "./components/dashboard/DashboardScreens/eventScreen/allEvents";
// // 
// function App() {
//   return (
//     <div>
//       <HashRouter>
//         <ScrollToTop />
//         <Routes>
//           {/* MAIN ROUTE */}

//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* AUTH ROUTE */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signUp" element={<SignUp />} />
//           <Route
//             path="/recover-account-email"
//             element={<RecoverAccountEmail />}
//           />
//           <Route
//             path="/recover-account-details"
//             element={<RecoverAccountDetails />}
//           />
//           <Route path="/recovered-account" element={<RecoveredAccount />} />

//           {/* DASHBOARD ROUTE */}
//           <Route
//             path="/dashboard/*"
//             element={
//               // <ProtectedRoute>
//               <Dashboard />
//               // </ProtectedRoute>
//             }
//           />


//           <Route
//             path="/dashboard/events/all"
//             element={<AllEvents />}
//           />
//         </Routes>
//       </HashRouter>
//     </div>
//   );
// }

// export default App;
