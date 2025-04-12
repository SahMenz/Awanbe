import { BiSearch } from "react-icons/bi"

function DashboardNav() {
  return (
    <div className="bg-ff mb-4 p-4 d-flex" style={{borderRadius:"16px"}}>
        <div className="fw-500 fs-43 txt-a0">Overview</div>
        <div>
            <div>
                <BiSearch size={17} color="black" />
                <input placeholder="Search"/>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default DashboardNav