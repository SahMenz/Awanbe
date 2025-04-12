import { BsMenuButtonWide } from "react-icons/bs";
import DashboardNav from "./dashboardNav/dashboardNav";
import Offcanvas from "react-bootstrap/Offcanvas";
import DashboardPanel from "./dashboardPanel/dashboardPanel";
import OverviewScreen from "./DashboardScreens/OverviewScreen";
import VenueScreen from "./DashboardScreens/venueScreen";
import { useState } from "react";
import { Routes } from "react-router-dom";

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div
      className="bg-f5 d-flex flex-column container-adjustment"
      style={{ position: "relative" }}
    >
      <div>
        <DashboardNav />
        <div className="d-flex">
          <div className="d-sm-block d-none">
            <DashboardPanel />
          </div>

          <Routes path="/dahboard" element={<OverviewScreen/>} />
          <Routes path="/dahboard/venue" element={<OverviewScreen/>} />

          {/* <VenueScreen /> */}
          {/* <OverviewScreen /> */}
        </div>
      </div>
      <div
        onClick={handleShow}
        style={{
          borderRadius: "100px",
          backgroundColor: "#000",
          height: "fit-content",
          width: "fit-content",
          padding: "20px",
          position: "sticky",
          bottom: "20px",
          left: "450px",
        }}
        className="d-sm-none cursor"
      >
        <BsMenuButtonWide
          size={40}
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
            <DashboardPanel />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Dashboard;
