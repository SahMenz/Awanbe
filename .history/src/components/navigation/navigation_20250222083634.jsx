import { Link } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";

function Navigation() {
  return (
    <div className="d-flex">
      <img src={landingPageLogo} />
      <div></div>
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
        <button
          className="txt-ff bg-a0 fw-500 fs-16"
          style={{ borderRadius: "30px", padding: "8px 20px" }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navigation;
