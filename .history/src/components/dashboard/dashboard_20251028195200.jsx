import { BsMenuButtonWide } from "react-icons/bs";
import DashboardNav from "./dashboardNav/dashboardNav";
import Offcanvas from "react-bootstrap/Offcanvas";
import DashboardPanel from "./dashboardPanel/dashboardPanel";
import OverviewScreen from "./DashboardScreens/OverviewScreen";
import VenueScreen from "./DashboardScreens/venueScreen";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import VendorScreen from "./DashboardScreens/vendorScreen";
import EventScreen from "./DashboardScreens/eventScreen/eventScreen";
import Settings from "./DashboardScreens/settings/settings";
import { useSelector } from "react-redux"; // Import useSelector

function Dashboard() {
  const [show, setShow] = useState(false);
  // Get activeNav from Redux state instead of local state
  const activeNav = useSelector((state) => state.dashboard.activeNav);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false); // This is the function we need to pass

  return (
    <div
      className="bg-f5 d-flex flex-column container-adjustment"
      style={{ position: "relative" }}
    >
      <div>
        {/* Pass activeNav from Redux */}
        <DashboardNav title={activeNav} /> 
        <div className="d-flex">
          <div className="d-sm-block d-none">
            {/* activeNav is read from Redux inside DashboardPanel, no need for prop */}
            <DashboardPanel /> 
          </div>
          <Routes>
            <Route path="/" element={<OverviewScreen />} />
            <Route path="/venues" element={<VenueScreen />} />
            <Route path="/vendors" element={<VendorScreen />} />
            <Route path="/events/*" element={<EventScreen />} />
            <Route path="/settings" element={<Settings />} />
            {/* <Route path="/Vendors" element={<VenueDetails />} /> */}
          </Routes>
        </div>
      </div>
      <div
        onClick={handleShow}
        style={{
          borderRadius: "100px",
          backgroundColor: "#000",
          height: "35px",
          width: "35px",
          padding: "20px",
          position: "sticky",
          bottom: "20px",
          left: "450px",
        }}
        className="d-sm-none cursor d-flex align-items-center justify-content-center"
      >
        <BsMenuButtonWide
          size={20}
          color="#A04D07"
          style={{
            minWidth: "40px",
          }}
        />
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ backgroundColor: "#fff" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {/* NEW: Pass handleClose as onCloseMobileMenu to close the canvas on nav click */}
            <DashboardPanel onCloseMobileMenu={handleClose} /> 
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Dashboard;











// import { BsMenuButtonWide } from "react-icons/bs";
// import DashboardNav from "./dashboardNav/dashboardNav";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import DashboardPanel from "./dashboardPanel/dashboardPanel";
// import OverviewScreen from "./DashboardScreens/OverviewScreen";
// import VenueScreen from "./DashboardScreens/venueScreen";
// import { useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import VendorScreen from "./DashboardScreens/vendorScreen";
// // import VenueDetails from "./DashboardScreens/venueDetails";
// import EventScreen from "./DashboardScreens/eventScreen/eventScreen";
// import Settings from "./DashboardScreens/settings/settings";

// function Dashboard() {
//   const [show, setShow] = useState(false);
//   const [activeNav, setActiveNav] = useState("Overview");

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const handleNavChange = (newActiveNav) => {
//     setActiveNav(newActiveNav);
//   };

//   return (
//     <div
//       className="bg-f5 d-flex flex-column container-adjustment"
//       style={{ position: "relative" }}
//     >
//       <div>
//         <DashboardNav title={activeNav} />
//         <div className="d-flex">
//           <div className="d-sm-block d-none">
//             <DashboardPanel onNavChange={handleNavChange} activeNav={activeNav} />
//           </div>
//           <Routes>
//             <Route path="/" element={<OverviewScreen />} />
//             <Route path="/venues" element={<VenueScreen />} />
//             <Route path="/vendors" element={<VendorScreen />} />
//             <Route path="/events/*" element={<EventScreen />} />
//             <Route path="/settings" element={<Settings />} />
//             {/* <Route path="/Vendors" element={<VenueDetails />} /> */}
//           </Routes>
//         </div>
//       </div>
//       <div
//         onClick={handleShow}
//         style={{
//           borderRadius: "100px",
//           backgroundColor: "#000",
//           height: "35px",
//           width: "35px",
//           padding: "20px",
//           position: "sticky",
//           bottom: "20px",
//           left: "450px",
//         }}
//         className="d-sm-none cursor d-flex align-items-center justify-content-center"
//       >
//         <BsMenuButtonWide
//           size={20}
//           color="#A04D07"
//           style={{
//             minWidth: "40px",
//           }}
//         />
//       </div>
//       <Offcanvas
//         show={show}
//         onHide={handleClose}
//         placement="start"
//         style={{ backgroundColor: "#fff" }}
//       >
//         <Offcanvas.Header closeButton></Offcanvas.Header>
//         <Offcanvas.Body>
//           <div>
//             <DashboardPanel onNavChange={handleNavChange} activeNav={activeNav} /> {/* Pass setter and current value */}
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// }

// export default Dashboard;