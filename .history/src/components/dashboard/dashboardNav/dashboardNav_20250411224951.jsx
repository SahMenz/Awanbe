import { BiBell, BiCart, BiHeart, BiSearch } from "react-icons/bi";
import profile from "../../../assets/images/profile.svg";
function DashboardNav() {
  return (
    <div
      className="bg-ff mb-4 p-3 d-flex align-items-center justify-content-between"
      style={{ borderRadius: "16px" }}
    >
      <div className="fw-500 fs-43 txt-a0">Overview</div>
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="me-4"
          style={{
            borderRadius: "30px",
            padding: "15px 25px",
            border: "1px solid #737373",
          }}
        >
          <BiSearch size={20} color="#737373" className="me-1" />
          <input placeholder="Search" />
        </div>
        <div>
          <BiCart size={18} color="black" className="cursor" />
          <BiHeart size={18} color="black" className="cursor ms-4" />
          <BiBell size={18} color="black" className="cursor mx-4" />
          <img
            src={profile}
            className="bg-00 cursor"
            style={{ borderRadius: "20px" }}
          />
        </div>
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
                      // onClick={onAboutUsClick}
                      style={({ isActive }) => ({
                        color: isActive ? "#A04D07" : "#737373",
                      })}
                      className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                      end
                    >
                      About us
                    </NavLink>
                    <div
                      // onClick={onSolutionsClick}
                      style={({ isActive }) => ({
                        color: isActive ? "#A04D07" : "#737373",
                      })}
                      className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                      end
                    >
                      Our solution
                    </div>
                    <div
                      // onClick={onHowWeWorkClick}
                      style={({ isActive }) => ({
                        color: isActive ? "#A04D07" : "#737373",
                      })}
                      className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
                      end
                    >
                      How it works
                    </div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
    </div>
  );
}

export default DashboardNav;
