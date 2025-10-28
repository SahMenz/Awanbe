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
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      contentClassName="shadow-lg"
    >
      <Modal.Header
        style={{ border: "none" }}
        className="bg-02 txt-00 d-flex justify-content-between"
      >
        <Modal.Title id="">Filter</Modal.Title>
        <button
          type="button"
          style={{ borderRadius: "20px", padding: "3px" }}
          className="bg-a0" // Your custom CSS class
          onClick={props.onHide} // Calls the close function
          aria-label="Close"
        >
          <IoClose size={30} color="white" /> {/* Custom icon/style */}
        </button>
      </Modal.Header>
      <Modal.Body className="bg-f7 txt-a0">
        <div className="mt-4">
          <p className="txt-00 fs-23 fw-400">Event Type</p>
          <div className="gap-3 fs-16 fw-400 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <button className="items"
            >
              Wedding
            </button>
            <button
              className="items"
            >
              Political Events
            </button>
            <button
              className="items"
            >
              Anniversaries
            </button>
            <button
              className="items"
            >
              Beach Events
            </button>
            <button
              className="items"
            >
              Church Events
            </button>
            <button
              className="items"
            >
              Birthday Parties
            </button>
            <button
              className="items"
            >
              Special Club Events
            </button>
            <button
             className="items"
            >
              School Events
            </button>
            <button
              className="items"
            >
              Others
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Venue Type</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <button
              className="items"
            >
              Conference Centers
            </button>
            <button
              className="items"
            >
              Hotels & Resorts
            </button>
            <button
              className="items"
            >
              Coworking Spaces
            </button>
            <button
              className="items"
            >
              Auditoriums & Theaters
            </button>
            <button
              className="items"
            >
              Banquet Halls
            </button>
            <button
              className="items"
            >
              Ballrooms
            </button>
            <button
              className="items"
            >
              Lounge
            </button>
            <button
              className="items"
            >
              Gardens & Parks
            </button>
            <button
              className="items"
            >
              Beaches & Waterfront
            </button>
            <button
              className="items"
            >
              Museums & Art Galleries
            </button>
            <button
              className="items"
            >
              Convention Centers
            </button>
            <button
              className="items"
            >
              Others
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Venue Capacity</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <button
              className="items"
            >
              Up to 50
            </button>
            <button
              className="items"
            >
              50 - 100
            </button>
            <button
              className="items"
            >
              100 - 300
            </button>
            <button
              className="items"
            >
              300 - 500
            </button>
            <button
              className="items"
            >
              500 - 700
            </button>
            <button
              className="items"
            >
              700 - 1000
            </button>
            <button
              className="items"
            >
              1000 and Above
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Location</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <select
              id="country-select"
              className="txt-a0"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
                cursor: "pointer",
                // appearance: "none",
              }}
              value={selectedValue}
              onChange={handleChange}
            >
              {" "}
              {options.map((option) => (
                <option
                  className="txt-a0"
                  style={{ cursor: "pointer", border: "1px solid #a04d07" }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>

            <select
              id="state-select"
              className="txt-a0"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
                cursor: "pointer",
                // appearance: "none",
              }}
              value={selectedValueState}
              onChange={handleChangedState}
            >
              {" "}
              {StateOptions.map((StateOptions) => (
                <option
                  className="txt-a0"
                  style={{ cursor: "pointer", border: "1px solid #a04d07" }}
                  key={StateOptions.value}
                  value={StateOptions.value}
                >
                  {StateOptions.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Budget Price Plan</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <input
              type="number"
              placeholder="$ Minimum price"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
              }}
            />
            <input
              type="number"
              placeholder="$ Maximum price"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
              }}
            />
          </div>
        </div>
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
          <div className="d-flex align-items-center cursor p-3 ">
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
