import { BsMenuButtonWide } from "react-icons/bs";
import DashboardNav from "./dashboardNav/dashboardNav";
import Offcanvas from "react-bootstrap/Offcanvas";
import DashboardPanel from "./dashboardPanel/dashboardPanel";
// import OverviewScreen from "./DashboardScreens/OverviewScreen";
import VenueScreen from "./DashboardScreens/venueScreen";

function Dashboard() {
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

          <VenueScreen />
          {/* <OverviewScreen /> */}
        </div>
      </div>
      <div
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
        className="d-sm-none"
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
        placement="end"
        className=""
        style={{ backgroundColor: "#fff" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>

        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Dashboard;
