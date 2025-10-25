import { BiSearchAlt } from "react-icons/bi";
import "./eventScreen.css";

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
          <div class="dropdown">
            <button class="dropbtn">Dropdown Menu</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
        </div>
        {/* <img /> */}
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default AllEvents;
