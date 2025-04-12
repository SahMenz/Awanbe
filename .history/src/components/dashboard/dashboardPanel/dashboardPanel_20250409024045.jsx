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
          <div className="d-flex align-items-center"><img src={overview}/> <div className="ms-3">Overview</div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DashboardPanel;
