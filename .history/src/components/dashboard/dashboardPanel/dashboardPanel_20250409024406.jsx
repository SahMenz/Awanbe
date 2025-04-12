import CustomSvg from "../../customSvg/CustomSvg";
import overview from "../../../assets/images/overview.svg"
import venues from "../../../assets/images/venues.svg"
import vendors from "../../../assets/images/vendors.svg"
// import iniviteCards from "../../../assets/images/iniviteCards.svg"
import budget from "../../../assets/images/budget.svg"
import events from "../../../assets/images/events.svg"


function DashboardPanel() {
  return (
    <div>
      <div className="bg-ff" style={{ width: "fit-content" }}>
        <div>
          <CustomSvg name="logoName" color="#A04D07" />
        </div>
        <div>
          <div className="d-flex align-items-center"><img src={overview}/> <div className="ms-32">Overview</div></div>
          <div className="d-flex align-items-center"><img src={venues}/> <div className="ms-32">Venues</div></div>
          <div className="d-flex align-items-center"><img src={vendors}/> <div className="ms-32">Vendors</div></div>
          <div className="d-flex align-items-center"><img src={iniviteCards}/> <div className="ms-32">Invite cards</div></div>
          <div className="d-flex align-items-center"><img src={budget}/> <div className="ms-32">Budget Plan</div></div>
          <div className="d-flex align-items-center"><img src={events}/> <div className="ms-32">Events</div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DashboardPanel;
