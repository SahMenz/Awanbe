import CustomSvg from "../../customSvg/CustomSvg";
import overview from "../../../assets/images/overview.svg";
import venues from "../../../assets/images/venues.svg";
import vendors from "../../../assets/images/vendors.svg";
import budget from "../../../assets/images/budget.svg";
import events from "../../../assets/images/events.svg";
import logoName from "../../../assets/images/logoName.png";
import iniviteCard from "../../../assets/images/inviteCard.svg";
import logout from "../../../assets/images/logout.svg";
import settings from "../../../assets/images/settings.svg";

function DashboardPanel() {
  return (
    <div>
      <div className="bg-ff" style={{ width: "fit-content" }}>
        {/* <div style={{width:"130px"}}> */}
          <img src={logoName}/>
        {/* </div> */}
        <div>
          <div className="d-flex align-items-center">
            <img src={overview} /> <div className="ms-2">Overview</div>
          </div>
          <div className="d-flex align-items-center">
            <img src={venues} /> <div className="ms-2">Venues</div>
          </div>
          <div className="d-flex align-items-center">
            <img src={vendors} /> <div className="ms-2">Vendors</div>
          </div>
          <div className="d-flex align-items-center">
            <img src={iniviteCard} /> <div className="ms-2">Invite cards</div>
          </div>
          <div className="d-flex align-items-center">
            <img src={budget} /> <div className="ms-2">Budget Plan</div>
          </div>
          <div className="d-flex align-items-center">
            <img src={events} /> <div className="ms-2">Events</div>
          </div>
        </div>
      </div>
      <div className="bg-ff" style={{ width: "fit-content" }}>
        <div className="d-flex align-items-center">
          <img src={settings} /> <div className="ms-2">Settings</div>
        </div>
        <div className="d-flex align-items-center">
          <img src={logout} /> <div className="ms-2 txt-eb">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPanel;
