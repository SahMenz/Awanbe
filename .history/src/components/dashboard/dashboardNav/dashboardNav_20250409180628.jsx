import { BsSearchHeart } from "react-icons/bs"
import { IoMdEye } from "react-icons/io"

function DashboardNav() {
  return (
    <div className="bg-ff mb-4 p-4" style={{borderRadius:"16px"}}>
        <div className="fw-500 fs-43 txt-a0">Overview</div>
        <div>
            <div>
                <BsSearchHeart size={17} color="black" />
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default DashboardNav