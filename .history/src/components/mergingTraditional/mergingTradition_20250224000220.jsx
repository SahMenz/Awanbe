import theChallenge from "../../assets/images/theChallenge.png";
import ourResources from "../../assets/images/ourResources.png";

function MergingTradition() {
  return (
    <div className="mt-4 container-adjustment">
      <div>
        <div className="d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
          <div className="fw-500 fs-43 col-12 col-lg-5">
            Merging <span className="txt-a0">Tradition</span> and{" "}
            <span className="txt-a0">Innovation</span> to Craft{" "}
            <span className="txt-a0">Unforgettable</span>
            Celebrations.
          </div>
          <div className="fs-16 fw-400 col-12 col-lg-5">
            Awambe was created to modernize event planning while celebrating
            African heritage, tackling challenges like finding trusted vendors
            and designing culturally meaningful invitations with a blend of
            tradition and innovation.
          </div>
        </div>
        <div className="mt-5 d-flex align-items-start justify-content-center gap-3 flex-wrap flex-xxl-nowrap justify-content-md-between">
          <div className="d-flex gap-3 col-12 flex-column flex-md-row col-xxl-6">
            <img src={theChallenge} alt="" className="col-3"/>
            <div
              className="d-flex bg-f5 flex-column "
              style={{ borderRadius: "20px", padding: "20px" }}
            >
              <div className="fs-23 fw-400 bg-f5 mb-5">The Challenge</div>
              <div className="fw-400 fs-16 bg-f5 mt-5">
                Traditional event planning in Nigeria is often riddled with
                inefficiencies—time-consuming vendor negotiations, limited
                access to quality suppliers, and the absence of a unified
                platform for invitation design & guest handling.
              </div>
            </div>
          </div>
          <div className="d-flex gap-3 col-12 col-xxl-6">
            <img src={ourResources} alt="" />
            <div
              className="d-flex bg-f5 flex-column "
              style={{ borderRadius: "20px", padding: "20px" }}
            >
              <div className="fs-23 fw-400 bg-f5 mb-5">Our Response</div>
              <div className="fw-400 fs-16 bg-f5 mt-5">
                Awambe simplifies event planning with trusted vendors, cultural
                invitations, and seamless guest handling, turning challenges
                into opportunities while honoring African heritage.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="text-center">
            <div className="fs-43 fw-500 txt-a0">Our Guiding Principles</div>
            <div className="fs-16 fw-400">We modernize event planning while preserving African heritage, ensuring seamless coordination, cultural authenticity, and memorable celebrations.</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default MergingTradition;
