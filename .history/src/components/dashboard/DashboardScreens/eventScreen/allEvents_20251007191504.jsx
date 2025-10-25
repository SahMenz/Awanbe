import { BiSearch, BiSearchAlt } from "react-icons/bi";

function AllEvents() {
  return (
    <div>
      <div>
        <div>
          <div
            className="d-flex justify-content-between align-items-center gap-2"
            style={{
              border: "0.9px solid #a04d07",
              borderRadius: "30px",
              padding: "10px",
              maxWidth: "415px",
            }}
          >
            <BiSearchAlt size={27} />
            <input
              className="col-11"
              style={{ backgroundColor: "transparent" }}
              type="search"
            />
          </div>
        </div>
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default AllEvents;
