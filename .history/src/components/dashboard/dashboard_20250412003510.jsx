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
      </div>
      <div className="d-flex">
        <VenueScreen />
        {/* <OverviewScreen /> */}
      </div>
    </div>
  );
}

export default Dashboard;
