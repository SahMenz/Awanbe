import { BiBell, BiCart, BiHeart, BiSearch } from "react-icons/bi";
import profile from "../../../assets/images/profile.svg";
function DashboardNav() {
  return (
    <div
      className="bg-ff mb-4 p-3 d-flex align-items-center justify-content-between"
      style={{ borderRadius: "16px" }}
    >
      <div className="fw-500 fs-43 txt-a0">Overview</div>
      <div className="d-flex align-items-center col-7 justify-content-between">
        <div
          style={{
            borderRadius: "30px",
            padding: "15px 25px",
            border: "1px solid #737373",
          }}
        >
          <BiSearch size={20} color="#737373" className="me-1" />
          <input placeholder="Search" />
        </div>
        <div>
          <BiCart size={18} color="black" />
          <BiHeart size={18} color="black" className="mx-2"/>
          <BiBell size={18} color="black" />
          <img
            src={profile}
            className="bg-00"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
