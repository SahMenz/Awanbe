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

const settingsLink = {
  title: "Settings",
  path: "/dashboard/settings",
  src: settings,
};
const activeIconFilter =
  "invert(28%) sepia(82%) saturate(913%) hue-rotate(345deg) brightness(89%) contrast(92%)"; // Calculated to approximate #A04D07

function DashboardPanel({ onNavChange, activeNav: propActiveNav }) {
  const navigate = useNavigate();
  const navigateTo = (path, stateData) => navigate(path, { state: stateData });

  const { pathname } = useLocation();
  const [activeNav, setActiveNav] = useState(propActiveNav);

  const handleNavClick = (title, path) => {
    path && navigateTo(path);
    setActiveNav(title);
    onNavChange(title);
  };

  useEffect(() => {
    let newActiveNav = "Overview";
    const lowerPathname = pathname.toLowerCase();

    if (lowerPathname.includes(settingsLink.path)) {
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

    setActiveNav(newActiveNav);
    onNavChange(newActiveNav);
  }, [pathname, onNavChange]);

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
//   // {
//   //   title: "Settings",
//   //   path: "/dashboard/settings",
//   //   src: budget,
//   // },
// ];

// function DashboardPanel({ onNavChange, activeNav: propActiveNav }) {
//   const navigate = useNavigate();
//   const navigateTo = (path, stateData) => navigate(path, { state: stateData });

//   const { pathname } = useLocation();
//   const [activeNav, setActiveNav] = useState(propActiveNav);

//   useEffect(() => {
//     let newActiveNav = "Overview";
//     if (pathname.toLowerCase().includes("/dashboard/venues")) {
//       newActiveNav = "Venues";
//     } else if (pathname.toLowerCase().includes("/dashboard/invite")) {
//       newActiveNav = "Invite Card";
//     } else if (pathname.toLowerCase().includes("/dashboard/budget")) {
//       newActiveNav = "Budget Plan";
//     } else if (pathname.toLowerCase().includes("/dashboard/vendors")) {
//       newActiveNav = "Vendors";
//     } else if (pathname.toLowerCase().includes("/dashboard/events")) {
//       newActiveNav = "Events";
//     } else if (pathname.toLowerCase().includes("/dashboard/settings")) {
//       newActiveNav = "Settings";
//     }
//     setActiveNav(newActiveNav);
//     onNavChange(newActiveNav);
//   }, [pathname, onNavChange]);

//   const displayNavLinks = navLinks.map((nav, i) => {
//     const { title, src, path } = nav;
//     const isActive = activeNav === title;

//     const onNavClick = () => {
//       path && navigateTo(path);
//       setActiveNav(title); // Update local state
//       onNavChange(title); // Update state in Dashboard
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
//             filter: isActive
//               ? "invert(96%) sepia(93%) saturate(6000%) hue-rotate(26deg) brightness(96%) contrast(80%)"
//               : "",
//           }}
//         />
//         <div style={{ color: isActive ? "#A04D07" : "" }} className="ms-2">
//           {title}
//         </div>
//       </div>
//     );
//   });

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
//           <div className="d-flex align-items-center cursor p-3">
//             <img src={settings} />
//             <div className="ms-2">Setting</div>
//           </div>
//           <div className="d-flex align-items-center cursor p-3 ">
//             <img src={logout} /> <div className="ms-2 txt-eb1">Logout</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPanel;