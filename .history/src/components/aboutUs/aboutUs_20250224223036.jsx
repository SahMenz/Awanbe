import ourMission from "../../assets/images/ourMission.svg";
import ourVision from "../../assets/images/ourVision.svg";
import ourValues from "../../assets/images/ourValues.svg";
function AboutUs() {
  return (
    <div className="mt-5 container-adjustment">
      <div className="text-center">
        <div className="fs-43 fw-500 txt-a0">Our Guiding Principles</div>
        <div className="fs-16 fw-400">
          We modernize event planning while preserving African heritage,
          ensuring seamless coordination, cultural authenticity, and memorable
          celebrations.
        </div>
      </div>
      <div className="mt-5 d-flex flex-column align-items-center justify-content-center gap-4 flex-lg-row justify-content-lg-between">
        <div
          className="bg-a0 w-25"
          style={{ minWidth:"250px",borderRadius: "15px", padding: "25px" }}
        >
          <img src={ourMission} alt="" style={{ borderRadius: "30px" }} />
          <div className="bg-a0 txt-ff fw-500 fs-23">Our Mission</div>
          <div style={{ height: "100px", backgroundColor: "#A04D07" }}></div>
          <div className="fs-16 fw-400 txt-ff bg-a0">
            To empower event planners and individuals by providing a
            comprehensive, culturally nuanced platform that makes every
            celebration uniquely memorable, efficient, and stress-free.
          </div>
        </div>

        <div className="w-25" style={{minWidth:"250px", borderRadius: "15px", padding: "25px" }}>
          <img src={ourVision} alt="" />
          <div className="txt-a0 fw-500 fs-23">Our Vision</div>
          <div style={{ height: "100px"}}></div>
          <div className="fs-16 fw-400 txt-00">
            To be the leading platform for African-themed events, seamlessly
            blending tradition with technology to create meaningful and
            memorable celebrations.
          </div>
        </div>

        <div className="w-25" style={{minWidth:"250px", borderRadius: "15px", padding: "25px" }}>
          <img src={ourValues} alt="" />
          <div className="txt-a0 fw-500 fs-23">Our Values</div>
          <div style={{ height: "100px"}}></div>
          <div className="fs-16 fw-400 txt-00">
            We innovate to meet user needs, preserve African heritage, build a
            strong community, and deliver excellence through a seamless
            experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
