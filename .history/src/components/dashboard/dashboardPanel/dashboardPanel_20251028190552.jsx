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





// import logoNameB from "../../../assets/images/logoNameB.svg";
// import logout from "../../../assets/images/logout.svg";
// import settings from "../../../assets/images/settings.svg";
// import events from "../../../assets/images/events.svg";
// import invite from "../../../assets/images/inviteCard.svg";
// import budget from "../../../assets/images/budget.svg";
// import venues from "../../../assets/images/venues.svg";
// import vendors from "../../../assets/images/vendors.svg";
// import overview from "../../../assets/images/overview.svg";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const navLinks = [
//   {
//     title: "Overview",
//     path: "/dashboard",
//     src: overview,
//   },
//   {
//     title: "Venues",
//     path: "/dashboard/venues",
//     src: venues,
//   },
//   {
//     title: "Vendors",
//     path: "/dashboard/vendors",
//     src: vendors,
//   },
//   {
//     title: "Invite Card",
//     path: "/dashboard/invite",
//     src: invite,
//   },
//   {
//     title: "Budget Plan",
//     path: "/dashboard/budget",
//     src: budget,
//   },
//   {
//     title: "Events",
//     path: "/dashboard/events/all",
//     src: events,
//   },
// ];

// const settingsLink = {
//   title: "Settings",
//   path: "/dashboard/settings",
//   src: settings,
// };
// const activeIconFilter =
//   "invert(28%) sepia(82%) saturate(913%) hue-rotate(345deg) brightness(89%) contrast(92%)"; // Calculated to approximate #A04D07

// function DashboardPanel({ onNavChange, activeNav: propActiveNav }) {
//   const navigate = useNavigate();
//   const navigateTo = (path, stateData) => navigate(path, { state: stateData });

//   const { pathname } = useLocation();
//   const [activeNav, setActiveNav] = useState(propActiveNav);

//   const handleNavClick = (title, path) => {
//     path && navigateTo(path);
//     setActiveNav(title);
//     onNavChange(title);
//   };

//   useEffect(() => {
//     let newActiveNav = "Overview";
//     const lowerPathname = pathname.toLowerCase();

//     if (lowerPathname.includes(settingsLink.path)) {
//       newActiveNav = settingsLink.title;
//     } else if (lowerPathname.includes("/dashboard/venues")) {
//       newActiveNav = "Venues";
//     } else if (lowerPathname.includes("/dashboard/invite")) {
//       newActiveNav = "Invite Card";
//     } else if (lowerPathname.includes("/dashboard/budget")) {
//       newActiveNav = "Budget Plan";
//     } else if (lowerPathname.includes("/dashboard/vendors")) {
//       newActiveNav = "Vendors";
//     } else if (lowerPathname.includes("/dashboard/events")) {
//       newActiveNav = "Events";
//     } else if (lowerPathname === "/dashboard" || lowerPathname === "/dashboard/") {
//       newActiveNav = "Overview";
//     }

//     setActiveNav(newActiveNav);
//     onNavChange(newActiveNav);
//   }, [pathname, onNavChange]);

//   const displayNavLinks = navLinks.map((nav, i) => {
//     const { title, src, path } = nav;
//     const isActive = activeNav === title;

//     const onNavClick = () => {
//       handleNavClick(title, path);
//     };

//     return (
//       <div
//         key={i}
//         onClick={onNavClick}
//         style={{
//           borderLeft: isActive ? "2px #A04D07 solid" : undefined,
//           padding: "10px 15px",
//         }}
//         className="d-flex align-items-center cursor p-3"
//       >
//         <img
//           src={src}
//           alt={title}
//           style={{
//             filter: isActive ? activeIconFilter : "",
//           }}
//         />
//         <div style={{ color: isActive ? "#A04D07" : "" }} className="ms-2">
//           {title}
//         </div>
//       </div>
//     );
//   });
//   const isSettingsActive = activeNav === settingsLink.title;
//   const onSettingsClick = () => {
//     handleNavClick(settingsLink.title, settingsLink.path);
//   };

//   return (
//     <div>
//       <div>
//         <div
//           className="bg-ff d-flex align-items-center flex-column mb-5"
//           style={{
//             width: "fit-content",
//             borderRadius: "16px",
//             paddingBottom: "160px",
//           }}
//         >
//           <img
//             src={logoNameB}
//             style={{
//               width: "130px",
//               color: "#A04D07",
//               margin: "31px 0px 90px 0px",
//             }}
//             alt="Logo"
//           />
//           <div
//             className="gap-3 fw-500 fs-19 txt-73"
//             style={{ minWidth: "183px" }}
//           >
//             {displayNavLinks}
//           </div>
//         </div>
//         <div
//           className="bg-ff fw-500 fs-19"
//           style={{
//             width: "fit-content",
//             borderRadius: "16px",
//             minWidth: "183px",
//           }}
//         >
//           <div
//             onClick={onSettingsClick}
//             style={{
//               borderLeft: isSettingsActive ? "2px #A04D07 solid" : undefined,
//               padding: "10px 15px",
//               color: isSettingsActive ? "#A04D07" : "",
//             }}
//             className="d-flex align-items-center cursor p-3"
//           >
//             <img
//               src={settingsLink.src}
//               alt={settingsLink.title}
//               style={{
//                 filter: isSettingsActive ? activeIconFilter : "",
//               }}
//             />
//             <div style={{ color: isSettingsActive ? "#A04D07" : "" }} className="ms-2">
//               {settingsLink.title}
//             </div>
//           </div>
//           <div className="d-flex align-items-center cursor p-3 ">
//             <img src={logout} alt="Logout" /> <div className="ms-2 txt-eb1">Logout</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPanel;
