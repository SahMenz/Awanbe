import { venueCategories } from "../dashboardData/dashboardData";

function OverviewScreen() {
  return (
    <div className="ms-4 w-100">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div className="fw-500 fs-19">Banquet Halls</div>
        <div className="cursor">View all</div>
      </div>
      <div className="gap-2 d-flex algin-items-center justify-content-center justify-content-md-between">
        {venueCategories.map((venueCategories) => (
          <>
            <div>
              <div>
                <img src={venueCategories.venueImage} />
              </div>
              <div className="mt-4">
                <div>{venueCategories.venueName}</div>
                <div className="d-flex my-2">
                  <div>{venueCategories.location}</div>
                  <div className="mx-2 ">
                    <img src={venueCategories.rating} />
                  </div>
                  <div>{venueCategories.ratingFigures}</div>
                </div>
                <div>Rental Price: {venueCategories.price}</div>
              </div>
            </div>
          </>
        ))}
      </div>
      {/* <div>
            <div>Plan Your Event</div>
            <button className="bg-a0 txt-ff" style={{borderRadius:"30px", padding:"10px 29px"}}>Plan new Event +</button>
        </div> */}
    </div>
  );
}

export default OverviewScreen;
