import { GrOverview } from "react-icons/gr";
import CustomSvg from "../../customSvg/CustomSvg";
import overview from "../../../assets/images/overview.svg"


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
          <div className="d-flex align-items-center"><img src={overview}/> <div className="ms-32">Overview</div></div>
          <div className="d-flex align-items-center"><img src={overview}/> <div className="ms-32">Overview</div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DashboardPanel;
