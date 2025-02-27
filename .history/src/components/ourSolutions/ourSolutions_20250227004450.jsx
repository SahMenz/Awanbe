import './ourSolutions.css'

function OurSolutions() {
  return (
    <div className="container-adjustment mt-5">
      <div>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 justify-content-md-between">
          <div className="txt-a0 fw-500 fs-43 w-25">
            Our Customized Solutions
          </div>
          <div className="fs-00 txt-16 fw-400 w-50">
            Awambe is designed to address every facet of event planning with a
            suite of innovative tools and services.
          </div>
        </div>
        <div className="mt-5 d-flex flex-wrap gap-5 justify-content-lg-between justify-content-center">
          <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              01
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Bespoke Invitations</div>
              <div className="fs-16 fw-400 w-75">
                Create personalized invitations, digital or print, with
                African-inspired designs and interactive features.
              </div>
            </div>
          </div>

          <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              02
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Custom Event Websites</div>
              <div className="fs-16 fw-400 w-75">
                Build a tailored event website for guest engagement and
                real-time updates.
              </div>
            </div>
          </div>

          <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              03
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Awambe Wedding Registry</div>
              <div className="fs-16 fw-400 w-75">
                Manage gifts easily with an online registry featuring culturally
                relevant options.
              </div>
            </div>
          </div>

          <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              04
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Smart Guest Services</div>
              <div className="fs-16 fw-400 w-75">
                Streamline guest coordination with automated RSVP tracking and
                secure access control.
              </div>
            </div>
          </div>

          <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              05
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">E-Store Party Supply Shop</div>
              <div className="fs-16 fw-400 w-75">
                Simplify party supply purchases from a curated vendor
                marketplace.
              </div>
            </div>
          </div>

          <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              06
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Curated Vendor List</div>
              <div className="fs-16 fw-400 w-75">
                Access a list of vetted vendors for reliable and culturally
                appropriate event services.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 d-flex align-items-center justify-content-center">
        <div className="mt-5 w-75 bg-a0 d-flex flex-column align-items-center text-center creatingAccess">
          <div className="fw-500 fs-43 txt-ff text-center">
            Subscribe for Exclusive Updates and Notifications.
          </div>
          <div
            className="w-75 d-flex justify-content-between bg-ff mt-lg-5 mt-4"
            style={{ minWidth:"330px",borderRadius: "30px", padding: "9px 9px 9px 30px" }}
          >
            <input
              type="email"
              className='w-50'
              placeholder="Your email address"
              style={{ width: "50vw", maxWidth: "455px" }}
            />
            <button
              className="w-25 bg-a0 txt-ff d-none d-md-block lh-22 fw-400 fs-19"
              style={{backgroundColor:"#A04D07" ,padding: "12px 20px", borderRadius: "20px" }}
            >
              Get Notified
            </button>
            <div className="d-block d-md-none">
              {/* <CustomSvg name="telegram" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSolutions;
