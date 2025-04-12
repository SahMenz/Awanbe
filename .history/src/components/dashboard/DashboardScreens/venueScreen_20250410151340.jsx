import { BiSearch } from "react-icons/bi";
import { Venue1 } from "../dashboardData/dashboardData";

function VenueScreen() {
  return (
    <div className="ms-5">
      <div className="fw-600 fs-43 txt-a0">Select a Venue for your event</div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="fw-500 fs-19">Gardens & Botanical Parks</div>
        <BiSearch size={20} />
        <input type="search" />
        <div className="cursor">Search</div>
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
