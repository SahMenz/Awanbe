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
          <div className="d-flex"><img src={overview}/> <div>Overview</div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DashboardPanel;
