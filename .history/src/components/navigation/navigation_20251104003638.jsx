import "./navigation.css";
import { Link } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function Navigation({onHomeClick,onSolutionsClick, onAboutUsClick, onHowWeWorkClick }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // --- New function to handle Home click and scroll to top ---
  const handleHomeClick = () => {
    // 1. Scroll to the top of the page
    window.scrollTo(0, 0); 
    // 2. Execute any provided parent handler
    if (onHomeClick) {
        onHomeClick();
    }
  };
  // -----------------------------------------------------------

  return (
    <div className="d-flex fixed-top bg-ff container-adjustment justify-content-between align-items-center">
      {/* Added 'logo-link' class for hover animation */}
      <img src={landingPageLogo} alt="Logo" className="logo-link" />
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        {/* Desktop Nav Links - Fixed by removing inline style prop */}
        <NavLink
          to="/" onClick={handleHomeClick}
          className="text-decoration-none fw-600 fs-16 nav-link-item"
        >
          Home
        </NavLink>
        <NavLink
          onClick={onAboutUsClick}
          className="text-decoration-none fw-600 fs-16 nav-link-item"
        >
          About us
        </NavLink>
        <NavLink
          onClick={onSolutionsClick}
          className="text-decoration-none fw-600 fs-16 nav-link-item"
        >
          Our solution
        </NavLink>
        <NavLink
          onClick={onHowWeWorkClick}
          className="text-decoration-none fw-600 fs-16 nav-link-item"
        >
          How it works
        </NavLink>
      </div>
      <div className="d-lg-flex d-none">
        <Link to="/login">
          <button
            // Added 'nav-button-secondary' class for animation
            className="txt-a0 me-3 bg-trans fw-500 fs-16 nav-button-secondary"
            style={{
              borderRadius: "30px",
              border: "1px solid #A04D07",
              padding: "8px 20px",
            }}
          >
            Sign in
          </button>
        </Link>
        <Link to="/signUp">
          <button
            // Added 'nav-button-primary' class for animation
            className="txt-ff bg-a0 fw-500 fs-16 nav-button-primary"
            style={{ borderRadius: "30px", padding: "8px 20px" }}
          >
            Sign up
          </button>
        </Link>
      </div>
      <div
        onClick={handleShow}
        className=" d-lg-none"
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className=""
        style={{ backgroundColor: "#737373" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div
            style={{ borderRadius: "20px" }}
            className="bg-ff pt-4 pb-4 d-flex flex-column d-lg-flex justify-content-center align-items-center"
          >
            <div
              className="d-flex flex-column mb-5 justify-content-between align-items-center"
              style={{ height: "200px" }}
            >
              {/* Mobile Nav Links - Fixed by removing inline style prop */}
              <NavLink
                to="/"
                onClick={() => { handleHomeClick(); handleClose(); }} 
                className="fw-600 text-decoration-none nav-link-item-mobile"
                end
              >
                Home
              </NavLink>

              <NavLink
                onClick={() => { onAboutUsClick(); handleClose(); }} 
                className="fw-600 text-decoration-none nav-link-item-mobile"
                end
              >
                About us
              </NavLink>

              <NavLink
                onClick={() => { onSolutionsClick(); handleClose(); }} 
                className="fw-600 text-decoration-none nav-link-item-mobile"
                end
              >
                Our solution
              </NavLink>

              <NavLink
                onClick={() => { onHowWeWorkClick(); handleClose(); }} 
                className="fw-600 text-decoration-none nav-link-item-mobile"
                end
              >
                How it works
              </NavLink>
            </div>
            {/* Added Sign In/Sign Up buttons to Offcanvas for completeness and closure */}
            <div className="d-flex flex-column align-items-center gap-3 mt-4 w-100 px-4">
              <Link to="/login" className="w-100">
                <button
                  onClick={handleClose}
                  // Added 'nav-button-secondary' class for animation
                  className="txt-a0 w-100 bg-trans fw-500 fs-16 nav-button-secondary"
                  style={{
                    borderRadius: "30px",
                    border: "1px solid #A04D07",
                    padding: "8px 20px",
                  }}
                >
                  Sign in
                </button>
              </Link>
              <Link to="/signUp" className="w-100">
                <button
                  onClick={handleClose}
                  // Added 'nav-button-primary' class for animation
                  className="txt-ff w-100 bg-a0 fw-500 fs-16 nav-button-primary"
                  style={{ borderRadius: "30px", padding: "8px 20px" }}
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigation;
