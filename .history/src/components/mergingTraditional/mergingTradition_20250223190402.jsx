import theChallengefrom '../../assets/images/theChallenge.png'

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
        <div>
          <div>
            <img src={theChallenge} alt="" />
            <div className="d-flex flex-column justify-content-between">
              <div>The Challenge</div>
              <div>
                Traditional event planning in Nigeria is often riddled with
                inefficiencies—time-consuming vendor negotiations, limited
                access to quality suppliers, and the absence of a unified
                platform for invitation design & guest handling.
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MergingTradition;
