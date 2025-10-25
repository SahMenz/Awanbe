import { BiSearch, BiSearchAlt } from "react-icons/bi"

function AllEvents() {
  return (
    <div>
      <div>
        <div style={{border:"0.9px solid #a04d07", borderRadius:"30px", padding:"10px", maxWidth:"415px"}}>
          <BiSearchAlt size={27} />
          <input className="col-10" style={{backgroundColor:"transparent"}} type="search"/>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  )
}

export default AllEvents