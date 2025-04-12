import overview from "../../../assets/images/overview.svg";
import venues from "../../../assets/images/venues.svg";
import vendors from "../../../assets/images/vendors.svg";
import budget from "../../../assets/images/budget.svg";
import events from "../../../assets/images/events.svg";
import logoNameB from "../../../assets/images/logoNameB.svg";
import iniviteCard from "../../../assets/images/inviteCard.svg";
import logout from "../../../assets/images/logout.svg";
import settings from "../../../assets/images/settings.svg";
import { BiMenu } from "react-icons/bi";
import { BsMenuApp, BsMenuButtonWide } from "react-icons/bs";
import { CgMenu } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

function DashboardPanel() {
  return (
    <div>
      <div className="bg-ff d-flex align-items-center flex-column mb-5" style={{ width: "fit-content", borderRadius:"16px", paddingBottom:"160px" }}>
          <img src={logoNameB} style={{width:"130px", color:"#A04D07", margin:"31px 0px 90px 0px"}}/>
        <div className="gap-3 fw-500 fs-19 txt-73" style={{minWidth:"183px"}}>
          <div className="d-flex align-items-center cursor p-3">
            <img src={overview} /> <div className="ms-2">Overview</div>
          </div>
          <div className="d-flex align-items-center cursor p-3">
            <img src={venues} /> <div className="ms-2">Venues</div>
          </div>
          <div className="d-flex align-items-center cursor p-3">
            <img src={vendors} /> <div className="ms-2">Vendors</div>
          </div>
          <div className="d-flex align-items-center cursor p-3">
            <img src={iniviteCard} /> <div className="ms-2">Invite cards</div>
          </div>
          <div className="d-flex align-items-center cursor p-3">
            <img src={budget} /> <div className="ms-2">Budget Plan</div>
          </div>
          <div className="d-flex align-items-center cursor p-3">
            <img src={events} /> <div className="ms-2">Events</div>
          </div>
        </div>
      </div>
      <div className="bg-ff fw-500 fs-19" style={{ width: "fit-content", borderRadius:"16px" ,minWidth:"183px" }}>
        <div className="d-flex align-items-center cursor p-3">
          <img src={settings} /> <div className="ms-2">Setting</div>
        </div>
        <div className="d-flex align-items-center cursor p-3">
          <img src={logout} /> <div className="ms-2 txt-eb1">Logout</div>
        </div>
      </div>
      <MdOutlineMenu size={60} />
    </div>
  );
}

export default DashboardPanel;
