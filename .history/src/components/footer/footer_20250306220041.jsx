import { NavLink } from "react-router-dom"
import CustomSvg from "../customSvg/CustomSvg"

function Footer() {
  return (
    <div
      className="d-flex bg-f5 justify-content-between footerGeneral gap-5"
      style={{ borderRadius: "50px" }}
    >
      <div
        className="d-flex flex-column"
        style={{ width: "272px", height: "166px" }}
      >
        <img src={logo} style={{ width: "97.2px" }} />
        <div className="fw-400 lh-15 txt-11 py-4">
          At Verion X, we believe that finding your ideal job should be a
          seamless and empowering experience. Our platform is dedicated to
          connecting talented professionals with employers who appreciate and
          value their unique skills and ambitions
        </div>
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "110px" }}
        >
          {/* <button>
            <CustomSvg name="x" />
          </button>
          <button>
            <CustomSvg name="facebook" />
          </button>
          <button>
            <CustomSvg name="insta" />
          </button>
          <button>
            <CustomSvg name="linkedin" />
          </button> */}
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ width: "84px", height: "192px" }}
      >
        <div className="fw-500 txt-23 lh-32">Explore</div>
        <NavLink
        //   to="/aboutUs"
          style={({ isActive }) => ({ color: isActive ? "#EB1C25" : "#000" })}
          className="txt-00 fw-400 txt-13 lh-18 text-decoration-none"
        >
          About Us
        </NavLink>
        <NavLink className="txt-00 fw-400 txt-13 lh-18 text-decoration-none">
          Contact us
        </NavLink>
        <NavLink className="txt-00 fw-400 txt-13 lh-18 text-decoration-none">
          Find Jobs
        </NavLink>
        <NavLink
        //   to="/courses"
          style={({ isActive }) => ({ color: isActive ? "#EB1C25" : "#000" })}
          className="txt-00 fw-400 txt-13 lh-18 text-decoration-none"
        >
          Courses
        </NavLink>
      </div>
      <div
        className="d-flex flex-column justify-content-between"
        style={{ width: "127px", height: "192px" }}
      >
        <div className="fw-500 txt-23 lh-32">Quick Links</div>
        <NavLink
        //   to="/cvs"
          className="txt-00 fw-400 txt-13 lh-18 text-decoration-none"
        >
          Create Cv
        </NavLink>
        <NavLink
        //   to="/PrivacyPolicy"
          style={({ isActive }) => ({ color: isActive ? "#EB1C25" : "#000" })}
          className="txt-00 fw-400 txt-13 lh-18 text-decoration-none"
        >
          Privacy Policy
        </NavLink>
        <NavLink
        //   to="/TermsOfUse"
          style={({ isActive }) => ({ color: isActive ? "#EB1C25" : "#000" })}
          className="txt-00 fw-400 txt-13 lh-18 text-decoration-none"
        >
          Term Of Use
        </NavLink>
        <NavLink
        //   to="/TermsOfAgreement"
          style={({ isActive }) => ({ color: isActive ? "#EB1C25" : "#000" })}
          className="txt-00 fw-400 txt-13 lh-18 text-decoration-none"
        >
          Term Of Agreement
        </NavLink>
      </div>
    </div>
  )
}

export default Footer