import {
  venueCategories,
  venueCategories2,
  venueCategories3,
  venueCategories4,
  venueCategories5,
  venueCategories6,
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
      <div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="fw-500 fs-19">Gardens & Botanical Parks</div>
          <div className="cursor">View all</div>
        </div>
        <div className="mt-5 gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
          {venueCategories4.map((venueCategories4) => (
            <>
              <div>
                <div>
                  <img src={venueCategories4.venueImage} />
                </div>
                <div className="mt-4">
                  <div>{venueCategories4.venueName}</div>
                  <div className="d-flex my-2">
                    <div>{venueCategories4.location}</div>
                    <div className="mx-2 ">
                      <img src={venueCategories4.rating} />
                    </div>
                    <div>{venueCategories4.ratingFigures}</div>
                  </div>
                  <div>Rental Price: {venueCategories4.price}</div>
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
          {venueCategories5.map((venueCategories5) => (
            <>
              <div>
                <div>
                  <img src={venueCategories5.venueImage} />
                </div>
                <div className="mt-4">
                  <div>{venueCategories5.venueName}</div>
                  <div className="d-flex my-2">
                    <div>{venueCategories5.location}</div>
                    <div className="mx-2 ">
                      <img src={venueCategories5.rating} />
                    </div>
                    <div>{venueCategories5.ratingFigures}</div>
                  </div>
                  <div>Rental Price: {venueCategories5.price}</div>
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
        <div className="gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
          {venueCategories6.map((venueCategories6) => (
            <>
              <div>
                <div>
                  <img src={venueCategories6.venueImage} />
                </div>
                <div className="mt-4">
                  <div>{venueCategories6.venueName}</div>
                  <div className="d-flex my-2">
                    <div>{venueCategories6.location}</div>
                    <div className="mx-2 ">
                      <img src={venueCategories6.rating} />
                    </div>
                    <div>{venueCategories6.ratingFigures}</div>
                  </div>
                  <div>Rental Price: {venueCategories6.price}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverviewScreen;
