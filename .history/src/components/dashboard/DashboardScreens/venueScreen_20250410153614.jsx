import { BiSearch } from "react-icons/bi";
import { Venue1 } from "../dashboardData/dashboardData";
import { FiFilter } from "react-icons/fi";

function VenueScreen() {
  return (
    <div className="ms-5">
      <div className="fw-600 fs-43 txt-a0">Select a Venue for your event</div>
      <div className="d-flex bg-ff align-items-center justify-content-between mb-3" style={{ padding: "10px 8px 10px 15px", borderRadius: "40.6px" }}>
        <div className="d-flex col-9">
          <FiFilter size={22} />
          <BiSearch size={22} className="mx-3"/>
          <input
            type="search"
            placeholder="Search for venue"
            className="col-10"
          />
        </div>
        <button
          className="bg-a0 txt-ff"
          style={{ padding: "13px 50px", borderRadius: "40.6px" }}
        >
          Search
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
    </div>
  );
}

export default VenueScreen;
