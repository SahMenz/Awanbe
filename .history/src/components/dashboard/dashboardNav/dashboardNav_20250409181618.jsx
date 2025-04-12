import { BiBell, BiHeart, BiNotification, BiSearch } from "react-icons/bi"
import { LuCarTaxiFront } from "react-icons/lu"

function DashboardNav() {
  return (
    <div className="bg-ff mb-4 p-3 d-flex align-items-center justify-content-between" style={{borderRadius:"16px"}}>
        <div className="fw-500 fs-43 txt-a0">Overview</div>
        <div>
            <div style={{borderRadius:"30px", padding:"15px 25px", border:"1px solid #737373"}}>
                <BiSearch size={20} color="#737373" className="me-1"/>
                <input placeholder="Search"/>
            </div>
            <div>
                <BiHeart size={18} color="black"/>
                <BiBell size={18} color="black"/>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav