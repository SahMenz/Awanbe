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
        <div className="d-flex">
          <div className="d-lg-block d-none">
            <DashboardPanel />
          </div>

          <VenueScreen />
          {/* <OverviewScreen /> */}
        </div>
      </div>
      {/* <div style={{  }}> */}
        <div
          style={{
            borderRadius: "100px",
            backgroundColor: "#000",
            height: "fit-content",
            width: "fit-content",
            padding: "20px",position: "sticky", top: "0px", right: "110px"
          }}
        >
          <BsMenuButtonWide
            size={40}
            color="#A04D07"
            className="d-flex d-lg-none"
            style={{
              minWidth: "40px",
            }}
          />
        </div>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
