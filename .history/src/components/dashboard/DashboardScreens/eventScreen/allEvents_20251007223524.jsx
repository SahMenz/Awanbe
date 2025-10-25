import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import addEvents from "../../../../assets/images/addEvents.png"


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
        <div className="d-flex justify-content-between gap-2">
          <div
            className="d-flex justify-content-between align-items-center gap-2"
            style={{
              border: "0.9px solid #a04d07",
              borderRadius: "30px",
              padding: "10px",
              maxWidth: "415px",
            }}
          >
            <BiSearchAlt size={27} className="col-1" color="#a04d07" />
            <input
              className="col-11"
              style={{ backgroundColor: "transparent" }}
              type="search"
              placeholder="Search"
            />
          </div>

            <select
              id="fruit-select" className="txt-a0"
              style={{padding:"10px",cursor:"pointer", borderRadius:"13px", border:"1px solid #a04d07", text:"#a04d07"}}
              value={selectedValue}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option className="txt-a0" style={{cursor:"pointer",border:"1px solid #a04d07",}} key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {/* <p>Your current selection: **{selectedValue}**</p> */}
        </div>
        <img src="addEvents"/>
      </div>
      {/* <div></div> */}
    </div>
  );
}

export default AllEvents;
