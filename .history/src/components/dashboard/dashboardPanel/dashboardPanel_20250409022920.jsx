import CustomSvg from "../../customSvg/CustomSvg";

function DashboardPanel() {
  return (
    <div>
      <div className="bg-ff" style={{width:"fit-content"}}>
        <div>
          <CustomSvg name="logoName" color="#A04D07" />
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default DashboardPanel;
