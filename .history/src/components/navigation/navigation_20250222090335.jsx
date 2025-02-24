import './navigation.css'
import { Link, NavLink } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";

function Navigation() {
  return (
    <div className="d-flex">
      <img src={landingPageLogo} />
      <div>
        <NavLink className="text-decoration-none txt-a0 fw-600 fs-16">
          Home
        </NavLink>
      </div>
      <div>
        <Link to="/login">
          <button
            className="txt-a0 bg-trans fw-500 fs-16"
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
