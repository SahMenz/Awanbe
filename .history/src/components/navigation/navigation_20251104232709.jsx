import logoInHero from "../../assets/images/logoInHero.svg";
import heroImage from "../../assets/images/heroImage.png";
import CustomSvg from "../customSvg/CustomSvg";
import { motion } from "framer-motion"; // Import Framer Motion

// 1. Define Staggered Variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child element's animation
    },
  },
};

// 2. Define Animation for Individual Items (Fade In Up)
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

function Hero() {
  return (
    // Outer container: Triggers the animation on scroll and handles stagger
    <motion.div 
      className="d-flex flex-column pt-4 align-items-center bg-f5"
      variants={containerVariants}
      initial="hidden"
      // whileInView triggers when in view. Setting once: false allows re-triggering.
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }} // Triggers when 10% of the element is visible
    >
      {/* Text Content Container */}
      <div className="bg-f5 container-adjustment d-flex col-12 align-items-center flex-column text-center">
        {/* Logo - Item 1 */}
        <motion.img 
          src={logoInHero} 
          className="bg-f5" 
          alt="African Party Planner Logo"
          variants={itemVariants}
        />
        
        {/* Title - Item 2 */}
        <motion.div
          className="fs-63 fw-600 my-3 bg-f5"
          style={{ minWidth: "300px", width: "75vw" }}
          variants={itemVariants}
        >
          The New Bespoke African-Themed Solution For Party Planning
        </motion.div>
        
        {/* Subtitle - Item 3 */}
        <motion.div
          className="fs-19 fw-400 bg-f5"
          style={{ minWidth: "300px", width: "65vw" }}
          variants={itemVariants}
        >
          Discover a thoughtfully designed solution for African-themed party
          planning. With customizable invitations & digital event websites, a
          trusted vendor network, and efficient guest management, every
          celebration is both distinctive and memorable.
        </motion.div>
      </div>
      
      {/* Hero Image - Item 4 */}
      <motion.img 
        src={heroImage} 
        className="w-100 bg-f5" 
        alt="African-themed party scene"
        variants={itemVariants}
      />
      
      {/* Button - Item 5 (Uses the existing 'hero-button' class for hover animation) */}
      <motion.button
        className="bg-a0 fs-19 fw-400 txt-ff my-5 d-flex justify-content-center hero-button"
        style={{
          padding: "17px 40px",
          maxWidth: "360px",
          borderRadius: "30px",
        }}
        variants={itemVariants}
      >
        Start planning today <CustomSvg name="arrowRight" />
      </motion.button>
    </motion.div>
  );
}

export default Hero;





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