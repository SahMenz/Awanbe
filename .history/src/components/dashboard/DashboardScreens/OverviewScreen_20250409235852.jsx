import { venueCategories } from "../dashboardData/dashboardData";

function OverviewScreen() {
  return (
    <div className="ms-4 w-100">
      <div className="d-flex align-items-center justify-content-between">
        <div className="fw-500 fs-19">Banquet Halls</div>
        <div className="cursor">View all</div>
      </div>
      <div className="d-flex">
        {venueCategories.map((venueCategories) => (
          <>
            <div>
                <div><img src={venueCategories.venueImage} /></div>
                <div>
                    <div>{venueCategories.venueName}</div>
                    <div>{venueCategories.venueName}</div>
                    <div>Rental Price: {venueCategories.venueName}</div>
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
