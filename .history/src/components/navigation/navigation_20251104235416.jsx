import "./navigation.css";
import { Link } from "react-router-dom";
import landingPageLogo from "../../assets/images/landingPageLogo.svg";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom"; // NavLink is kept but isActive logic is manual

// Pass the activeSection state and a function to update it from the parent (Home component)
function Navigation({ onHomeClick, onSolutionsClick, onAboutUsClick, onHowWeWorkClick, activeSection, setActiveSection }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Helper function to handle click and set active status
  const handleClick = (sectionKey, clickHandler) => {
    // 1. Set the new active section state
    setActiveSection(sectionKey);
    // 2. Execute the provided scroll handler
    if (clickHandler) {
      clickHandler();
    }
  };

  // --- New function to handle Home click and scroll to top/Hero section ---
  const handleHomeClick = () => {
    handleClick('home', onHomeClick); // Call the new handler with 'home' key
    // You can remove window.scrollTo(0, 0) since the onHomeClick from parent should handle the scroll
  };
  // -----------------------------------------------------------

  const linkStyle = (sectionKey) => ({
    // Use the component's state (activeSection) for the color logic
    color: activeSection === sectionKey ? "#A04D07" : "#737373",
  });


  // Utility component to reuse NavLink structure
  const NavItem = ({ sectionKey, onClickHandler, children, isOffcanvas = false }) => {
    const commonProps = {
      className: `text-decoration-none fw-600 fs-16 ${isOffcanvas ? 'hovering txt-16 lh-19 txt-f3' : 'txt-73'}`,
      // NavLink's 'to' prop is mandatory for its internal workings, set to '#' for non-route links
      to: sectionKey === 'home' ? '/' : '#', 
      // Manual click handler
      onClick: (e) => {
        // Prevent default navigation if it's not the actual route link
        if (sectionKey !== 'home') e.preventDefault(); 
        
        // Execute the general click logic
        handleClick(sectionKey, onClickHandler);
        
        // Close offcanvas if it's an offcanvas item
        if (isOffcanvas) handleClose();
      },
      // Manual style check
      style: linkStyle(sectionKey), 
      // Add 'end' for Home link to match only the base path
      end: sectionKey === 'home' ? true : undefined,
    };

    return <NavLink {...commonProps}>{children}</NavLink>;
  }


  return (
    <div className="d-flex fixed-top bg-ff container-adjustment justify-content-between align-items-center">
      <img src={landingPageLogo} alt="Logo" />
      <div className="d-flex align-items-center w-50 justify-content-between d-lg-flex d-none">
        
        <NavItem sectionKey="home" onClickHandler={onHomeClick}>Home</NavItem>
        
        <NavItem sectionKey="about" onClickHandler={onAboutUsClick}>About us</NavItem>
        
        <NavItem sectionKey="solutions" onClickHandler={onSolutionsClick}>Our solution</NavItem>
        
        <NavItem sectionKey="howitworks" onClickHandler={onHowWeWorkClick}>How it works</NavItem>

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
              {/* Home link - Mobile/Offcanvas */}
              <NavItem sectionKey="home" onClickHandler={onHomeClick} isOffcanvas>Home</NavItem>

              {/* About us link */}
              <NavItem sectionKey="about" onClickHandler={onAboutUsClick} isOffcanvas>About us</NavItem>

              {/* Our solution link */}
              <NavItem sectionKey="solutions" onClickHandler={onSolutionsClick} isOffcanvas>Our solution</NavItem>

              {/* How it works link */}
              <NavItem sectionKey="howitworks" onClickHandler={onHowWeWorkClick} isOffcanvas>How it works</NavItem>
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