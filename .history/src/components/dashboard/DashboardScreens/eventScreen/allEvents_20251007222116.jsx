import { BiSearchAlt } from "react-icons/bi";
import "./eventScreen.css";
import { useState } from "react";

function AllEvents() {
  const options = [
    { label: "Last 7 days", value: "Last 7 days" },
    { label: "Last 1 week", value: "Last 1 week" },
    { label: "Last 1 month", value: "Last 1 month" },
    { label: "Last 1 year", value: "Last 1 year" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
            <BiSearchAlt size={27} color="#a04d07" />
            <input
              className="col-11"
              style={{ backgroundColor: "transparent" }}
              type="search"
              placeholder="Search"
            />
          </div>

          {/* <div> */}
            <select
              id="fruit-select"
              style={{padding:"10px", borderRadius:"13px", border:"1px solid #a04d07", text:"#a04d07"}}
              value={selectedValue}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option style={{border:"1px solid #a04d07", textcol:"#a04d07"}} key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* <p>Your current selection: **{selectedValue}**</p> */}
          {/* </div> */}

          {/* <div class="dropdown">
            <button class="dropbtn">Dropdown Menu</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div> */}
        </div>
        {/* <img /> */}
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default AllEvents;
