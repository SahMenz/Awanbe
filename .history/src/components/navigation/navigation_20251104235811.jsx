import "./navigation.css";
import { Link } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom"; // NavLink is kept but isActive is not used

// NOTE: The prop activeSection is a string (e.g., 'home', 'aboutUs', 'solutions', 'howItWorks')
function Navigation({ activeSection, onHomeClick, onSolutionsClick, onAboutUsClick, onHowWeWorkClick }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // --- New function to handle Home click and scroll to top (Removed window.scrollTo as ref scroll is now used) ---
  const handleHomeClick = () => {
    // Note: The logic in Home.js is already set up to use the ref for scrolling
    // which aligns with the request to scroll to the top section.
    if (onHomeClick) {
      onHomeClick();
    }
  };
  // -----------------------------------------------------------

  // Function to determine the style based on the activeSection prop
  const getNavLinkStyle = (sectionKey) => {
    const isLinkActive = activeSection === sectionKey;
    return {
      color: isLinkActive ? "#A04D07" : "#737373",
    };
  };

  const NavItem = ({ sectionKey, onClick, children }) => (
    <div 
      onClick={onClick}
      // Added className for the hover style (defined in CSS below)
      className={`text-decoration-none txt-73 fw-600 fs-16 navigation-item-hover ${
        activeSection === sectionKey ? "navigation-item-active" : ""
      }`}
      style={getNavLinkStyle(sectionKey)}
      role="button" // Improve accessibility since it acts like a button/link
      tabIndex={0}
      onKeyDown={(e) => { // Allow activation with Enter key
        if (e.key === 'Enter') {
            onClick();
        }
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="d-flex fixed-top bg-ff container-adjustment justify-content-between align-items-center">
      <img src={landingPageLogo} alt="Logo" />
      
      {/* Desktop Navigation */}
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        {/* Home link - Desktop */}
        <NavItem sectionKey="home" onClick={handleHomeClick}>
          Home
        </NavItem>
        
        {/* About us link - Desktop */}
        <NavItem sectionKey="aboutUs" onClick={onAboutUsClick}>
          About us
        </NavItem>
        
        {/* Our solution link - Desktop */}
        <NavItem sectionKey="solutions" onClick={onSolutionsClick}>
          Our solution
        </NavItem>
        
        {/* How it works link - Desktop */}
        <NavItem sectionKey="howItWorks" onClick={onHowWeWorkClick}>
          How it works
        </NavItem>
      </div>

      {/* ... (Sign In/Sign Up Buttons - kept as-is) ... */}
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
      
      {/* ... (Mobile Menu Icon - kept as-is) ... */}
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
      
      {/* Offcanvas (Mobile Navigation) */}
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
              {/* Home link - Mobile/Offcanvas */}
              <NavItem 
                sectionKey="home" 
                onClick={() => { handleHomeClick(); handleClose(); }}
                // Override base styling for mobile appearance if needed, otherwise rely on NavItem
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
              >
                Home
              </NavItem>

              {/* About us link - Mobile/Offcanvas */}
              <NavItem 
                sectionKey="aboutUs" 
                onClick={() => { onAboutUsClick(); handleClose(); }}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
              >
                About us
              </NavItem>

              {/* Our solution link - Mobile/Offcanvas */}
              <NavItem 
                sectionKey="solutions" 
                onClick={() => { onSolutionsClick(); handleClose(); }}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
              >
                Our solution
              </NavItem>

              {/* How it works link - Mobile/Offcanvas */}
              <NavItem 
                sectionKey="howItWorks" 
                onClick={() => { onHowWeWorkClick(); handleClose(); }}
                className="hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3"
              >
                How it works
              </NavItem>
            </div>
            {/* Added Sign In/Sign Up buttons to Offcanvas for completeness and closure */}
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