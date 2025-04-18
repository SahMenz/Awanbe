import ourMission from '../../assets/images/ourMission.svg'
import ourVision from '../../assets/images/ourVision.svg'
import ourValues from '../../assets/images/ourValues.svg'
function AboutUs() {
  return (
    <div className="mt-5">
      <div className="text-center">
        <div className="fs-43 fw-500 txt-a0">Our Guiding Principles</div>
        <div className="fs-16 fw-400">
          We modernize event planning while preserving African heritage,
          ensuring seamless coordination, cultural authenticity, and memorable
          celebrations.
        </div>
      </div>
      <div>
        <div
          className="bg-a0"
          style={{ borderRadius: "15px", padding: "25px" }}
        >
          <img src={ourMission} alt="" />
          <div className='txt-ff fw-500 fs-23'>Our Mission</div>
          <div style={{height:"100px"}}></div>
          <div className='fs-16 fw-400 txt-ff bd-a0'>
            To empower event planners and individuals by providing a
            comprehensive, culturally nuanced platform that makes every
            celebration uniquely memorable, efficient, and stress-free.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
