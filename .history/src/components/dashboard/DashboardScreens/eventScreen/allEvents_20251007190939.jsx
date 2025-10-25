import { BiSearch, BiSearchAlt } from "react-icons/bi"

function AllEvents() {
  return (
    <div>
      <div>
        <div style={{border:"1px solid #a04d07"}}>
          <BiSearchAlt size={27} />
          <input style={{backgroundColor:"transparent"}} type="search"/>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  )
}

export default AllEvents