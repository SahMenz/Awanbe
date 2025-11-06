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

  // Base class name for desktop links
  const desktopNavLinkClass = "text-decoration-none txt-73 fw-600 fs-16";
  // The class to add when active (you would define 'nav-link-active' in your CSS)
  const activeClass = "nav-link-active"; 
  // Function to return the correct class string
  const getDesktopNavLinkClass = ({ isActive }) =>
    isActive ? `${desktopNavLinkClass} ${activeClass}` : desktopNavLinkClass;

  return (
    <div className="d-flex fixed-top bg-ff container-adjustment justify-content-between align-items-center">
      <img src={landingPageLogo} />
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        <NavLink
          // Use the new handler here
          to="/" 
          onClick={handleHomeClick}
          // Use the function for className to apply an active class
          className={getDesktopNavLinkClass}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
        >
          Home
        </NavLink>
        <NavLink
          onClick={onAboutUsClick}
          // Use the function for className to apply an active class
          className={getDesktopNavLinkClass}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
        >
          About us
        </NavLink>
        <NavLink
          onClick={onSolutionsClick}
          // Use the function for className to apply an active class
          className={getDesktopNavLinkClass}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
        >
          Our solution
        </NavLink>
        <NavLink
          onClick={onHowWeWorkClick}
          // Use the function for className to apply an active class
          className={getDesktopNavLinkClass}
          style={({ isActive }) => ({
            color: isActive ? "#A04D07" : "#737373",
          })}
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
        <Link to="/signUp">
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
            className="bg-ff pt-4 pb-4 d-flex flex-column d-lg-flex justify-content-center align-items-center"
          >
            <div
              className="d-flex flex-column mb-5 justify-content-between align-items-center"
              style={{ height: "200px" }}
            >
              {/* Offcanvas links remain the same but can also be updated */}
              <NavLink
                to="/"
                onClick={() => { handleHomeClick(); handleClose(); }} 
                className={({ isActive }) => isActive ? "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3 nav-link-active-mobile" : "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"}
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                end
              >
                Home
              </NavLink>

              <NavLink
                onClick={() => { onAboutUsClick(); handleClose(); }} 
                className={({ isActive }) => isActive ? "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3 nav-link-active-mobile" : "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"}
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                end
              >
                About us
              </NavLink>

              <NavLink
                onClick={() => { onSolutionsClick(); handleClose(); }} 
                className={({ isActive }) => isActive ? "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3 nav-link-active-mobile" : "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"}
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                end
              >
                Our solution
              </NavLink>

              <NavLink
                onClick={() => { onHowWeWorkClick(); handleClose(); }} 
                className={({ isActive }) => isActive ? "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3 nav-link-active-mobile" : "hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"}
                style={({ isActive }) => ({
                  color: isActive ? "#A04D07" : "#737373",
                })}
                end
              >
                How it works
              </NavLink>
            </div>
            <div className="d-flex flex-column align-items-center gap-3 mt-4 w-100 px-4">
              <Link to="/login" className="w-100">
                <button
                  onClick={handleClose}
                  className="txt-a0 w-100 bg-trans fw-500 fs-16"
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
                  className="txt-ff w-100 bg-a0 fw-500 fs-16"
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





// import "./navigation.css";
// import { Link } from "react-router-dom";
// import landingPageLogo from "../../assets/images/landingPageLogo.svg";
// import { useState } from "react";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import { NavLink } from "react-router-dom";

// function Navigation({onHomeClick,onSolutionsClick, onAboutUsClick, onHowWeWorkClick }) {
//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   // --- New function to handle Home click and scroll to top ---
//   const handleHomeClick = () => {
//     // 1. Scroll to the top of the page
//     window.scrollTo(0, 0); 
//     // 2. Execute any provided parent handler
//     if (onHomeClick) {
//         onHomeClick();
//     }
//   };
//   // -----------------------------------------------------------

//   return (
//     <div className="d-flex fixed-top bg-ff container-adjustment justify-content-between align-items-center">
//       <img src={landingPageLogo} />
//       <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
//         <NavLink
//           // Use the new handler here
//           to="/" onClick={handleHomeClick}
//           style={({ isActive }) => ({
//             color: isActive ? "#A04D07" : "#737373",
//           })}
//           className="text-decoration-none txt-73 fw-600 fs-16"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           onClick={onAboutUsClick}
//           style={({ isActive }) => ({
//             color: isActive ? "#A04D07" : "#737373",
//           })}
//           className="text-decoration-none txt-73 fw-600 fs-16"
//         >
//           About us
//         </NavLink>
//         <NavLink
//           onClick={onSolutionsClick}
//           style={({ isActive }) => ({
//             color: isActive ? "#A04D07" : "#737373",
//           })}
//           className="text-decoration-none txt-73 fw-600 fs-16"
//         >
//           Our solution
//         </NavLink>
//         <NavLink
//           onClick={onHowWeWorkClick}
//           style={({ isActive }) => ({
//             color: isActive ? "#A04D07" : "#737373",
//           })}
//           className="text-decoration-none txt-73 fw-600 fs-16"
//         >
//           How it works
//         </NavLink>
//       </div>
//       <div className="d-lg-flex d-none">
//         <Link to="/login">
//           <button
//             className="txt-a0 me-3 bg-trans fw-500 fs-16"
//             style={{
//               borderRadius: "30px",
//               border: "1px solid #A04D07",
//               padding: "8px 20px",
//             }}
//           >
//             Sign in
//           </button>
//         </Link>
//         <Link to="/signUp">
//           <button
//             className="txt-ff bg-a0 fw-500 fs-16"
//             style={{ borderRadius: "30px", padding: "8px 20px" }}
//           >
//             Sign up
//           </button>
//         </Link>
//       </div>
//       <div
//         onClick={handleShow}
//         className=" d-lg-none"
//         style={{
//           cursor: "pointer",
//           width: "40px",
//           height: "40px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "5px",
//         }}
//       >
//         <div
//           style={{ width: "30px", height: "3px", backgroundColor: "black" }}
//         ></div>
//         <div
//           style={{ width: "30px", height: "3px", backgroundColor: "black" }}
//         ></div>
//         <div
//           style={{ width: "30px", height: "3px", backgroundColor: "black" }}
//         ></div>
//       </div>
//       <Offcanvas
//         show={show}
//         onHide={handleClose}
//         placement="end"
//         className=""
//         style={{ backgroundColor: "#737373" }}
//       >
//         <Offcanvas.Header closeButton></Offcanvas.Header>
//         <Offcanvas.Body>
//           <div
//             style={{ borderRadius: "20px" }}
//             className="bg-ff pt-4 pb-4 d-flex flex-column d-lg-flex justify-content-center align-items-center"
//           >
//             <div
//               className="d-flex flex-column mb-5 justify-content-between align-items-center"
//               style={{ height: "200px" }}
//             >
//               {/* Home link - Mobile/Offcanvas */}
//               <NavLink
//                 to="/"
//                 // Combine the new handler and handleClose
//                 onClick={() => { handleHomeClick(); handleClose(); }} 
//                 style={({ isActive }) => ({
//                   color: isActive ? "#A04D07" : "#737373",
//                 })}
//                 className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
//                 end
//               >
//                 Home
//               </NavLink>

//               {/* About us link */}
//               <NavLink
//                 onClick={() => { onAboutUsClick(); handleClose(); }} 
//                 style={({ isActive }) => ({
//                   color: isActive ? "#A04D07" : "#737373",
//                 })}
//                 className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
//                 end
//               >
//                 About us
//               </NavLink>

//               {/* Our solution link */}
//               <NavLink
//                 onClick={() => { onSolutionsClick(); handleClose(); }} 
//                 style={({ isActive }) => ({
//                   color: isActive ? "#A04D07" : "#737373",
//                 })}
//                 className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
//                 end
//               >
//                 Our solution
//               </NavLink>

//               {/* How it works link */}
//               <NavLink
//                 onClick={() => { onHowWeWorkClick(); handleClose(); }} 
//                 style={({ isActive }) => ({
//                   color: isActive ? "#A04D07" : "#737373",
//                 })}
//                 className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
//                 end
//               >
//                 How it works
//               </NavLink>
//             </div>
//             {/* Added Sign In/Sign Up buttons to Offcanvas for completeness and closure */}
//             <div className="d-flex flex-column align-items-center gap-3 mt-4 w-100 px-4">
//               <Link to="/login" className="w-100">
//                 <button
//                   onClick={handleClose}
//                   className="txt-a0 w-100 bg-trans fw-500 fs-16"
//                   style={{
//                     borderRadius: "30px",
//                     border: "1px solid #A04D07",
//                     padding: "8px 20px",
//                   }}
//                 >
//                   Sign in
//                 </button>
//               </Link>
//               <Link to="/signUp" className="w-100">
//                 <button
//                   onClick={handleClose}
//                   className="txt-ff w-100 bg-a0 fw-500 fs-16"
//                   style={{ borderRadius: "30px", padding: "8px 20px" }}
//                 >
//                   Sign up
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// }

// export default Navigation;