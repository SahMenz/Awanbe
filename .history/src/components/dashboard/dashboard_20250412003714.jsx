import { BsMenuButtonWide } from "react-icons/bs";
import DashboardNav from "./dashboardNav/dashboardNav";
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
      </div>
      <div style={{ position: "sticky", top: "600px", left: "610px" }}>
        <DashboardPanel />
        <div style={{ borderRadius: "100px", backgroundColor:"#000", height:"fit-content", padding:"20px" }}>
        <BsMenuButtonWide
          size={40}
          color="#A04D07"
          className="d-flex d-lg-none"
          style={{
            minWidth: "40px",
          }}
        />
      </div>
      </div>
      <div className="d-flex">
        <VenueScreen />
        {/* <OverviewScreen /> */}
      </div>
    </div>
  );
}

export default Dashboard;
