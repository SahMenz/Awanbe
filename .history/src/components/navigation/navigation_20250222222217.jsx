import "./navigation.css";
import { Link, NavLink } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";

function Navigation() {
  return (
    <div className="d-flex container-adjustment justify-content-between align-items-center">
      <img src={landingPageLogo} />
      <div className="d-flex align-items-center w-50 justify-content-between">
        <NavLink className="text-decoration-none txt-a0 fw-600 fs-16">
          Home
        </NavLink>
        <NavLink className="text-decoration-none txt-a0 fw-600 fs-16">
          About us
        </NavLink>
        <NavLink className="text-decoration-none txt-a0 fw-600 fs-16">
          Our solution
        </NavLink>
        <NavLink className="text-decoration-none txt-73 fw-600 fs-16">
          How it works
        </NavLink>
      </div>
      <div>
        <Link to="/login">
          <button
            className="txt-a0 me-3 bg-trans fw-500 fs-16"
            style={{
              borderRadius: "30px",
              border: "1px solid #A04D07",
              padding: "8px 20px",
            }}
          >
            Sign in
          </button>
        </Link>
        <Link to="/sign-up">
          <button
            className="txt-ff bg-a0 fw-500 fs-16"
            style={{ borderRadius: "30px", padding: "8px 20px" }}
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
