import logoNameB from "../../../assets/images/logoNameB.svg";
import logout from "../../../assets/images/logout.svg";
import settings from "../../../assets/images/settings.svg";
import events from "../../../assets/images/events.svg";
import invite from "../../../assets/images/inviteCard.svg";
import budget from "../../../assets/images/budget.svg";
import venues from "../../../assets/images/venues.svg";
import vendors from "../../../assets/images/vendors.svg";
import overview from "../../../assets/images/overview.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks
import { setActiveNav } from "../../../redux/slices/dashboardSlice"; // Import action
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

const navLinks = [
  {
    title: "Overview",
    path: "/dashboard",
    src: overview,
  },
  {
    title: "Venues",
    path: "/dashboard/venues",
    src: venues,
  },
  {
    title: "Vendors",
    path: "/dashboard/vendors",
    src: vendors,
  },
  {
    title: "Invite Card",
    path: "/dashboard/invite",
    src: invite,
  },
  {
    title: "Budget Plan",
    path: "/dashboard/budget",
    src: budget,
  },
  {
    title: "Events",
    path: "/dashboard/events/all",
    src: events,
  },
];

function MyVerticallyCenteredModal(props) {
  const options = [
    { label: "Country", value: "Country" },
    { label: "Nigeria", value: "Nigeria" },
    { label: "Niger", value: "Niger" },
    { label: "China", value: "China" },
  ];

  const StateOptions = [
    { label: "State", value: "State" },
    { label: "Cross river", value: "Cross river" },
    { label: "Lagos", value: "Lagos" },
    { label: "Bauchi", value: "Bauchi" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [selectedValueState, setSelectedValueState] = useState(
    options[0].value
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangedState = (event) => {
    setSelectedValueState(event.target.value);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      contentClassName="shadow-lg"
    >
      <Modal.Header
        style={{ border: "none" }}
        className="bg-02 txt-a0 fw-500 fs-16 d-flex justify-content-between"
      >
        <Modal.Title id="">ARE YOU SURE YOU WANT TO LOGOUT</Modal.Title>
        <button
          type="button"
          style={{ borderRadius: "20px", padding: "3px" }}
          className="bg-a0" // Your custom CSS class
          onClick={props.onHide} // Calls the close function
          aria-label="Close"
        >
          <IoClose size={30} color="white" />
        </button>
      </Modal.Header>
      <Modal.Body className="bg-f7 txt-a0">
        
      </Modal.Body>
    </Modal>
  );
}


const settingsLink = {
  title: "Settings",
  path: "/dashboard/settings",
  src: settings,
};
const activeIconFilter =
  "invert(28%) sepia(82%) saturate(913%) hue-rotate(345deg) brightness(89%) contrast(92%)"; // Calculated to approximate #A04D07

// Removed props: onNavChange, activeNav
function DashboardPanel() {
  const navigate = useNavigate();
  const navigateTo = (path, stateData) => navigate(path, { state: stateData });
  const [modalShow, setModalShow] = useState(false);

  const { pathname } = useLocation();
  // Get activeNav from Redux state
  const activeNav = useSelector((state) => state.dashboard.activeNav);
  // Get dispatch function
  const dispatch = useDispatch();

  const handleNavClick = (title, path) => {
    path && navigateTo(path);
    // Dispatch action to update Redux state
    dispatch(setActiveNav(title));
  };

  useEffect(() => {
    let newActiveNav = "Overview";
    const lowerPathname = pathname.toLowerCase();

    if (lowerPathname.includes(settingsLink.path.toLowerCase())) {
      newActiveNav = settingsLink.title;
    } else if (lowerPathname.includes("/dashboard/venues")) {
      newActiveNav = "Venues";
    } else if (lowerPathname.includes("/dashboard/invite")) {
      newActiveNav = "Invite Card";
    } else if (lowerPathname.includes("/dashboard/budget")) {
      newActiveNav = "Budget Plan";
    } else if (lowerPathname.includes("/dashboard/vendors")) {
      newActiveNav = "Vendors";
    } else if (lowerPathname.includes("/dashboard/events")) {
      newActiveNav = "Events";
    } else if (lowerPathname === "/dashboard" || lowerPathname === "/dashboard/") {
      newActiveNav = "Overview";
    }

    // Dispatch the determined active navigation title
    dispatch(setActiveNav(newActiveNav));
  }, [pathname, dispatch]); // Added dispatch to dependency array

  const displayNavLinks = navLinks.map((nav, i) => {
    const { title, src, path } = nav;
    const isActive = activeNav === title;

    const onNavClick = () => {
      handleNavClick(title, path);
    };

    return (
      <div
        key={i}
        onClick={onNavClick}
        style={{
          borderLeft: isActive ? "2px #A04D07 solid" : undefined,
          padding: "10px 15px",
        }}
        className="d-flex align-items-center cursor p-3"
      >
        <img
          src={src}
          alt={title}
          style={{
            filter: isActive ? activeIconFilter : "",
          }}
        />
        <div style={{ color: isActive ? "#A04D07" : "" }} className="ms-2">
          {title}
        </div>
      </div>
    );
  });
  const isSettingsActive = activeNav === settingsLink.title;
  const onSettingsClick = () => {
    handleNavClick(settingsLink.title, settingsLink.path);
  };

  return (
    <div>
      <div>
        <div
          className="bg-ff d-flex align-items-center flex-column mb-5"
          style={{
            width: "fit-content",
            borderRadius: "16px",
            paddingBottom: "160px",
          }}
        >
          <img
            src={logoNameB}
            style={{
              width: "130px",
              color: "#A04D07",
              margin: "31px 0px 90px 0px",
            }}
            alt="Logo"
          />
          <div
            className="gap-3 fw-500 fs-19 txt-73"
            style={{ minWidth: "183px" }}
          >
            {displayNavLinks}
          </div>
        </div>
        <div
          className="bg-ff fw-500 fs-19"
          style={{
            width: "fit-content",
            borderRadius: "16px",
            minWidth: "183px",
          }}
        >
          <div
            onClick={onSettingsClick}
            style={{
              borderLeft: isSettingsActive ? "2px #A04D07 solid" : undefined,
              padding: "10px 15px",
              color: isSettingsActive ? "#A04D07" : "",
            }}
            className="d-flex align-items-center cursor p-3"
          >
            <img
              src={settingsLink.src}
              alt={settingsLink.title}
              style={{
                filter: isSettingsActive ? activeIconFilter : "",
              }}
            />
            <div style={{ color: isSettingsActive ? "#A04D07" : "" }} className="ms-2">
              {settingsLink.title}
            </div>
          </div>
          <div onClick={() => setModalShow(true)} className="d-flex align-items-center cursor p-3 ">
            <img src={logout} alt="Logout" /> <div className="ms-2 txt-eb1">Logout</div>
          </div>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default DashboardPanel;








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
