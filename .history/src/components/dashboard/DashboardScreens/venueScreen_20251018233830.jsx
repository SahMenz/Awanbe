import "./dashboard.css"
import { BiSearch } from "react-icons/bi";
import { Venue1 } from "../dashboardData/dashboardData";
import filter from "../../../assets/images/filter.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

function MyVerticallyCenteredModal(props) {
  const options = [
    { label: "Country", value: "Country" },
    { label: "Nigeria", value: "Nigeria" },
    { label: "Niger", value: "Niger" },
    { label: "China", value: "China" },
  ];

  const StateOptions = [
    { label: "State", value: "State" },
    { label: "Cross river", value: "Cross river" },
    { label: "Lagos", value: "Lagos" },
    { label: "Bauchi", value: "Bauchi" },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [selectedValueState, setSelectedValueState] = useState(
    options[0].value
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleChangedState = (event) => {
    setSelectedValueState(event.target.value);
  };

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      contentClassName="shadow-lg"
    >
      <Modal.Header
        style={{ border: "none" }}
        className="bg-02 txt-00 d-flex justify-content-between"
      >
        <Modal.Title id="">Filter</Modal.Title>
        <button
          type="button"
          style={{ borderRadius: "20px", padding: "3px" }}
          className="bg-a0" // Your custom CSS class
          onClick={props.onHide} // Calls the close function
          aria-label="Close"
        >
          <IoClose size={30} color="white" /> {/* Custom icon/style */}
        </button>
      </Modal.Header>
      <Modal.Body className="bg-f7 txt-a0">
        <div className="mt-4">
          <p className="txt-00 fs-23 fw-400">Event Type</p>
          <div className="gap-3 fs-16 fw-400 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <button className="items"
            >
              Wedding
            </button>
            <button
              className="items"
            >
              Political Events
            </button>
            <button
              className="items"
            >
              Anniversaries
            </button>
            <button
              className="items"
            >
              Beach Events
            </button>
            <button
              className="items"
            >
              Church Events
            </button>
            <button
              className="items"
            >
              Birthday Parties
            </button>
            <button
              className="items"
            >
              Special Club Events
            </button>
            <button
             className="items"
            >
              School Events
            </button>
            <button
              className="items"
            >
              Others
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Venue Type</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <button
              className="items"
            >
              Conference Centers
            </button>
            <button
              className="items"
            >
              Hotels & Resorts
            </button>
            <button
              className="items"
            >
              Coworking Spaces
            </button>
            <button
              className="items"
            >
              Auditoriums & Theaters
            </button>
            <button
              className="items"
            >
              Banquet Halls
            </button>
            <button
              className="items"
            >
              Ballrooms
            </button>
            <button
              className="items"
            >
              Lounge
            </button>
            <button
              className="items"
            >
              Gardens & Parks
            </button>
            <button
              className="items"
            >
              Beaches & Waterfront
            </button>
            <button
              className="items"
            >
              Museums & Art Galleries
            </button>
            <button
              className="items"
            >
              Convention Centers
            </button>
            <button
              className="items"
            >
              Others
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Venue Capacity</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <button
              className="items"
            >
              Up to 50
            </button>
            <button
              className="items"
            >
              50 - 100
            </button>
            <button
              className="items"
            >
              100 - 300
            </button>
            <button
              className="items"
            >
              300 - 500
            </button>
            <button
              className="items"
            >
              500 - 700
            </button>
            <button
              className="items"
            >
              700 - 1000
            </button>
            <button
              className="items"
            >
              1000 and Above
            </button>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Location</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <select
              id="country-select"
              className="txt-a0"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
                cursor: "pointer",
                // appearance: "none",
              }}
              value={selectedValue}
              onChange={handleChange}
            >
              {" "}
              {options.map((option) => (
                <option
                  className="txt-a0"
                  style={{ cursor: "pointer", border: "1px solid #a04d07" }}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>

            <select
              id="state-select"
              className="txt-a0"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
                cursor: "pointer",
                // appearance: "none",
              }}
              value={selectedValueState}
              onChange={handleChangedState}
            >
              {" "}
              {StateOptions.map((StateOptions) => (
                <option
                  className="txt-a0"
                  style={{ cursor: "pointer", border: "1px solid #a04d07" }}
                  key={StateOptions.value}
                  value={StateOptions.value}
                >
                  {StateOptions.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <p className="txt-00 fs-23 fw-400">Budget Price Plan</p>
          <div className="gap-3 fs-16 fw-400 gap-3 d-flex align-items-center flex-wrap justify-content-center justify-content-md-start">
            <input
              type="number"
              placeholder="$ Minimum price"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
              }}
            />
            <input
              type="number"
              placeholder="$ Maximum price"
              style={{
                borderRadius: "15px",
                backgroundColor: "transparent",
                color: "#A04D07",
                border: "1px solid #A04D07",
                padding: "10px 24px",
              }}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ border: "none" }} className="bg-f7">
        <div className="mt-5 d-flex flex-column flex-md-row gap-3  fs-16 fw-400 justify-content-between w-100">
          <button
            style={{
              border: "1px solid #A04D07",
              borderRadius: "15px",
              backgroundColor: "Transparent",
            }}
            className="col-12 col-md-5 txt-a0 p-3"
          >
            Clear All Filters
          </button>
          <button
            style={{ border: "none", borderRadius: "15px" }}
            className="col-12 col-md-5 bg-eb p-3"
          >
            Apply Filters
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

function VenueScreen() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="ms-sm-4 ms-0">
      <div className="fw-600 fs-43 txt-a0">Select a Venue for your event</div>
      <div
        className="d-flex my-4 bg-ff align-items-center justify-content-between"
        style={{ padding: "0px 8px 0px 0px", borderRadius: "40.6px" }}
      >
        <div className="d-flex col-9 align-items-center">
          <img
            src={filter}
            onClick={() => setModalShow(true)}
            className="cursor"
          />
          <BiSearch size={22} className="mx-3 txt-73" />
          <input
            type="search"
            placeholder="Search for venue"
            className="col-10"
          />
        </div>
        <button
          className="bg-a0 txt-ff d-none d-lg-block"
          style={{ padding: "13px 50px", borderRadius: "40.6px" }}
        >
          Search
        </button>
        <button className="bg-ff d-lg-none">
          <BiSearch size={28} className="mx-3 txt-73" />
        </button>
      </div>
      <div className="gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
        {Venue1.map((Venue1) => (
          <>
            <div>
              <div>
                <img src={Venue1.venueImage} />
              </div>
              <div className="mt-4">
                <div>{Venue1.venueName}</div>
                <div className="d-flex my-2">
                  <div>{Venue1.location}</div>
                  <div className="mx-2 ">
                    <img src={Venue1.rating} />
                  </div>
                  <div>{Venue1.ratingFigures}</div>
                </div>
                <div>Rental Price: {Venue1.price}</div>
              </div>
            </div>
          </>
        ))}
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default VenueScreen;
