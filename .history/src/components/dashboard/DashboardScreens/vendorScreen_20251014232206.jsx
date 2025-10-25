import { BiLocationPlus, BiSearch } from "react-icons/bi";
import { vendors } from "../dashboardData/dashboardData";
import filter from "../../../assets/images/filter.png";

function VendorScreen() {
  return (
    <div className="ms-5">
      <div className="fw-600 fs-43 txt-a0">Select a Vendor for your event</div>
      {/* <div
        className="d-flex my-4 bg-ff align-items-center justify-content-between"
        style={{ padding: "0px 8px 0px 0px", borderRadius: "40.6px" }}
      >
        <div className="d-block d-lg-flex col-10 col-lg-9 align-items-center">
          <div className="col-6">
            <BiSearch size={22} className="mx-3 txt-73" />
            <input type="search" placeholder="Vendor Type" className="col-8" />
          </div>
          <div className="mx-3 d-none d-lg-flex">|</div>
          <div className="mt-3 mt-lg-0 col-6">
            <BiLocationPlus size={22} className="mx-3 txt-73" />
            <input
              type="search"
              placeholder="Add Location "
              className="col-8"
            />
          </div>
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
      </div> */}
      <div
              className="d-flex my-4 bg-ff align-items-center justify-content-between"
              style={{ padding: "0px 8px 0px 0px", borderRadius: "40.6px" }}
            >
              <div className="d-flex col-9 align-items-center">
                <img
                  src={filter}
                  // onClick={() => setModalShow(true)}
                  className="cursor"
                />
                <BiSearch size={22} className="mx-3 txt-73" />
                <input
                  type="search"
                  placeholder="Search for Vendors"
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
        {vendors.map((vendors) => (
          <>
            <div>
              <div>
                <img src={vendors.venueImage} />
              </div>
              <div className="mt-4">
                <div className="fs-16 fw-400">{vendors.venueName}</div>
                {/* <div className="d-flex my-2"> */}
                <div className="d-flex fs-11 fw-400">
                  <img src={vendors.rating} />
                  <div className="ms-3">{vendors.ratingFigures}</div>
                </div>
                <div className="d-flex fs-11 fw-400">
                  <div className="me-3">{vendors.location}</div>
                  <div>{vendors.genre}</div>
                </div>
                {/* </div> */}
                <div className="fs-13 fw-500">
                  Starting Price: {vendors.price}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default VendorScreen;
