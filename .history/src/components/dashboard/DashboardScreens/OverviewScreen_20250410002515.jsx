import {
  venueCategories,
  venueCategories2,
  venueCategories3,
} from "../dashboardData/dashboardData";

function OverviewScreen() {
  return (
    <div className="ms-4 w-100">
      <div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fw-500 fs-19">Banquet Halls</div>
          <div className="cursor">View all</div>
        </div>
        <div className="mb-5 gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
          {venueCategories.map((venueCategories) => (
            <>
              <div>
                <div>
                  <img src={venueCategories.venueImage} />
                </div>
                <div className="mt-3">
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
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fw-500 fs-19">Hotels & Resorts</div>
          <div className="cursor">View all</div>
        </div>
        <div className="my-5 gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
          {venueCategories2.map((venueCategories2) => (
            <>
              <div>
                <div>
                  <img src={venueCategories2.venueImage} />
                </div>
                <div className="mt-4">
                  <div>{venueCategories2.venueName}</div>
                  <div className="d-flex my-2">
                    <div>{venueCategories2.location}</div>
                    <div className="mx-2 ">
                      <img src={venueCategories2.rating} />
                    </div>
                    <div>{venueCategories2.ratingFigures}</div>
                  </div>
                  <div>Rental Price: {venueCategories2.price}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fw-500 fs-19">Gardens & Botanical Parks</div>
          <div className="cursor">View all</div>
        </div>
        <div className="mt-5 gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
          {venueCategories3.map((venueCategories3) => (
            <>
              <div>
                <div>
                  <img src={venueCategories3.venueImage} />
                </div>
                <div className="mt-4">
                  <div>{venueCategories3.venueName}</div>
                  <div className="d-flex my-2">
                    <div>{venueCategories3.location}</div>
                    <div className="mx-2 ">
                      <img src={venueCategories3.rating} />
                    </div>
                    <div>{venueCategories3.ratingFigures}</div>
                  </div>
                  <div>Rental Price: {venueCategories3.price}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* <div>
            <div>Plan Your Event</div>
            <button className="bg-a0 txt-ff" style={{borderRadius:"30px", padding:"10px 29px"}}>Plan new Event +</button>
        </div> */}
    </div>
  );
}

export default OverviewScreen;
