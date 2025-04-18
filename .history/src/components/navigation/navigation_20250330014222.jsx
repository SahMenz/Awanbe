import "./navigation.css";
import { Link } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";

function Navigation({
  onSolutionsClick,
  onAboutUsClick,
  onHowWeWorkClick,
}) {
  
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="d-flex container-adjustment justify-content-between align-items-center">
      <img src={landingPageLogo} />
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
          className="text-decoration-none txt-73 fw-600 fs-16"
        >
          Home
        </NavLink>
        <NavLink
          onClick={onAboutUsClick}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
          className="text-decoration-none txt-73 fw-600 fs-16"
        >
          About us
        </NavLink>
        <NavLink
          onClick={onSolutionsClick}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
          className="text-decoration-none txt-73 fw-600 fs-16"
        >
          Our solution
        </NavLink>
        <NavLink
          onClick={onHowWeWorkClick}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
          className="text-decoration-none txt-73 fw-600 fs-16"
        >
          How it works
        </NavLink>
      </div>
      <div className="d-lg-flex d-none">
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
            className="bg-ff pt-4 d-flex flex-column d-lg-flex justify-content-center align-items-center"
          >
            <div
              className="d-flex flex-column mb-5 justify-content-between align-items-center"
              style={{ height: "200px" }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                Home
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                About us
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                Our solution
              </NavLink>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                end
              >
                How it works
              </NavLink>

              {/* {navLinks.map((navLink, i) => {
                const { title } = navLink;

                return (
                  <div key={i} className="">
                    <p className="m-0 p-0 font-family-DmSans txt-15 txt-000 clickable mb-4">
                      {title}
                    </p>
                  </div>
                );
              })} */}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Navigation;
