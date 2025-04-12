import DashboardNav from "./dashboardNav/dashboardNav";
import DashboardPanel from "./dashboardPanel/dashboardPanel";
import OverviewScreen from "./DashboardScreens/OverviewScreen";
import VenueScreen from "./DashboardScreens/venueScreen";

function Dashboard() {
  return (
    <div className="bg-f5 d-flex flex-column container-adjustment">
      <div>
        <DashboardNav />
      </div>
      <div className="d-flex">
        <DashboardPanel /> 
        <VenueScreen />
        {/* <OverviewScreen /> */}
      </div>
    </div>
  );
}

export default Dashboard;
