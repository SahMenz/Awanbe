import { BiSearch } from "react-icons/bi"

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
                <BiSearch size={20} color="#737373"/>
            </div>
        </div>
    </div>
  )
}

export default DashboardNav