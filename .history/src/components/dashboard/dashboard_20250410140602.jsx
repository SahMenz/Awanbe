import DashboardNav from "./dashboardNav/dashboardNav";
import DashboardPanel from "./dashboardPanel/dashboardPanel";
import OverviewScreen from "./DashboardScreens/OverviewScreen";

function Dashboard() {
  return (
    <div className="bg-f5 d-flex flex-column container-adjustment">
      <div>
        <DashboardNav />
      </div>
      <div className="d-flex">
        <DashboardPanel /> <OverviewScreen />
      </div>
    </div>
  );
}

export default Dashboard;
