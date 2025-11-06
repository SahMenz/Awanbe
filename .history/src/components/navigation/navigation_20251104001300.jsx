import "./navigation.css";
import { Link, NavLink } from "react-router-dom"; // NavLink is already imported
import landingPageLogo from "../../assets/images/landingPageLogo.svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navigation({ onHomeClick, onSolutionsClick, onAboutUsClick, onHowWeWorkClick }) {
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

  // Helper function for NavLink style
  const getNavLinkClass = ({ isActive }) => 
    `text-decoration-none fw-600 fs-16 nav-link-animated ${isActive ? "nav-active-link" : "nav-default-link"}`;


  return (
    <div className="d-flex fixed-top bg-ff container-adjustment justify-content-between align-items-center">
      <img src={landingPageLogo} alt="Logo" />
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        
        {/* Home link with animation class */}
        <NavLink
          to="/" 
          onClick={handleHomeClick}
          className={getNavLinkClass}
        >
          Home
        </NavLink>
        
        {/* About us link with animation class */}
        <NavLink
          onClick={onAboutUsClick}
          className={getNavLinkClass}
        >
          About us
        </NavLink>
        
        {/* Our solution link with animation class */}
        <NavLink
          onClick={onSolutionsClick}
          className={getNavLinkClass}
        >
          Our solution
        </NavLink>
        
        {/* How it works link with animation class */}
        <NavLink
          onClick={onHowWeWorkClick}
          className={getNavLinkClass}
        >
          How it works
        </NavLink>
      </div>
      <div className="d-lg-flex d-none">
        {/* Sign In Button with hover animation */}
        <Link to="/login">
          <button
            className="txt-a0 me-3 bg-trans fw-500 fs-16 button-animated"
            style={{
              borderRadius: "30px",
              border: "1px solid #A04D07",
              padding: "8px 20px",
            }}
          >
            Sign in
          </button>
        </Link>
        {/* Sign Up Button with hover animation */}
        <Link to="/signUp">
          <button
            className="txt-ff bg-a0 fw-500 fs-16 button-animated-primary"
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
        {/* ... Hamburger icon structure remains the same ... */}
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
              
              {/* Mobile links: Use simplified style, but include hover effect in CSS */}
              <NavLink
                to="/"
                onClick={() => { handleHomeClick(); handleClose(); }} 
                className={({ isActive }) => 
                    `hovering txt-16 lh-19 fw-600 text-decoration-none mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
                end
              >
                Home
              </NavLink>

              <NavLink
                onClick={() => { onAboutUsClick(); handleClose(); }} 
                className={({ isActive }) => 
                    `hovering txt-16 lh-19 fw-600 text-decoration-none mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
                end
              >
                About us
              </NavLink>

              <NavLink
                onClick={() => { onSolutionsClick(); handleClose(); }} 
                className={({ isActive }) => 
                    `hovering txt-16 lh-19 fw-600 text-decoration-none mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
                end
              >
                Our solution
              </NavLink>

              <NavLink
                onClick={() => { onHowWeWorkClick(); handleClose(); }} 
                className={({ isActive }) => 
                    `hovering txt-16 lh-19 fw-600 text-decoration-none mobile-nav-link ${isActive ? "mobile-nav-active" : ""}`
                }
                end
              >
                How it works
              </NavLink>
            </div>
            {/* ... Buttons in Offcanvas remain the same but might benefit from the button classes too... */}
            <div className="d-flex flex-column align-items-center gap-3 mt-4 w-100 px-4">
              <Link to="/login" className="w-100">
                <button
                  onClick={handleClose}
                  className="txt-a0 w-100 bg-trans fw-500 fs-16 button-animated" // Added class
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
                  className="txt-ff w-100 bg-a0 fw-500 fs-16 button-animated-primary" // Added class
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