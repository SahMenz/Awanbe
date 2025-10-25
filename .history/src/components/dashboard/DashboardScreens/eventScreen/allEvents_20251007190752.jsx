import { BiSearch, BiSearchAlt } from "react-icons/bi"

function AllEvents() {
  return (
    <div>
      <div>
        <div>
          <BiSearchAlt size={27} />
          <input style={{backgroundColor:"transparent", MozMarginStart:"200px"}} type="search"/>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  )
}

export default AllEvents