import "./ourSolutions.css";
import { motion } from "framer-motion"; // Import Framer Motion

// --- Framer Motion Variants ---

// 1. Variants for sequential fade-in-up effect on major blocks (Title and Subscription)
const sectionVariants = {
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

// 2. Variants for the solution cards container (horizontal stagger)
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Small delay between each card's animation
      delayChildren: 0.2, // Delay before the first card starts
    },
  },
};

// 3. Variants for individual solution cards (Fade In Up slightly)
const cardItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function OurSolutions() {
  return (
    // Outer container: Triggers the animation on scroll and allows re-occurrence
    <motion.div 
      className="container-adjustment mt-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }} 
    >
      <div>
        {/* Title and Subtitle Block (Fade Up) */}
        <motion.div 
            className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 justify-content-md-between"
            variants={sectionVariants}
        >
          <div className="txt-a0 fw-500 fs-43 w-25">
            Our Customized Solutions
          </div>
          <div className="fs-00 txt-16 fw-400 w-50">
            Awambe is designed to address every facet of event planning with a
            suite of innovative tools and services.
          </div>
        </motion.div>
        
        {/* Solution Cards Container (Staggered Grid) */}
        <motion.div 
            className="mt-5 d-flex flex-wrap gap-5 justify-content-lg-between justify-content-center"
            variants={cardContainerVariants}
        >
          
          {/* Card 1: Bespoke Invitations */}
          <motion.div 
            className="txt-a0 w-25 solution-card" 
            style={{ minWidth: "278px" }}
            variants={cardItemVariants}
          >
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              01
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Bespoke Invitations</div>
              <div className="fs-16 fw-400 w-75">
                Create personalized invitations, digital or print, with
                African-inspired designs and interactive features.
              </div>
            </div>
          </motion.div>

          {/* Card 2: Custom Event Websites */}
          <motion.div 
            className="txt-a0 w-25 solution-card" 
            style={{ minWidth: "278px" }}
            variants={cardItemVariants}
          >
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              02
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Custom Event Websites</div>
              <div className="fs-16 fw-400 w-75">
                Build a tailored event website for guest engagement and
                real-time updates.
              </div>
            </div>
          </motion.div>

          {/* Card 3: Awambe Wedding Registry */}
          <motion.div 
            className="txt-a0 w-25 solution-card" 
            style={{ minWidth: "278px" }}
            variants={cardItemVariants}
          >
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              03
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Awambe Wedding Registry</div>
              <div className="fs-16 fw-400 w-75">
                Manage gifts easily with an online registry featuring culturally
                relevant options.
              </div>
            </div>
          </motion.div>

          {/* Card 4: Smart Guest Services */}
          <motion.div 
            className="txt-a0 w-25 solution-card" 
            style={{ minWidth: "278px" }}
            variants={cardItemVariants}
          >
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              04
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Smart Guest Services</div>
              <div className="fs-16 fw-400 w-75">
                Streamline guest coordination with automated RSVP tracking and
                secure access control.
              </div>
            </div>
          </motion.div>

          {/* Card 5: E-Store Party Supply Shop */}
          <motion.div 
            className="txt-a0 w-25 solution-card" 
            style={{ minWidth: "278px" }}
            variants={cardItemVariants}
          >
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              05
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">E-Store Party Supply Shop</div>
              <div className="fs-16 fw-400 w-75">
                Simplify party supply purchases from a curated vendor
                marketplace.
              </div>
            </div>
          </motion.div>

          {/* Card 6: Curated Vendor List */}
          <motion.div 
            className="txt-a0 w-25 solution-card" 
            style={{ minWidth: "278px" }}
            variants={cardItemVariants}
          >
            <div
              style={{
                borderBottom: "1.5px solid #A04D07",
                paddingBottom: "4px",
                textAlign: "end",
              }}
            >
              06
            </div>
            <div>
              <div className="fs-23 fw-500 my-4">Curated Vendor List</div>
              <div className="fs-16 fw-400 w-75">
                Access a list of vetted vendors for reliable and culturally
                appropriate event services.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Subscription Block (Fade Up) */}
      <motion.div 
        className="mb-5 d-flex align-items-center justify-content-center"
        variants={sectionVariants}
      >
        <div className="mt-5 py-5  w-75 bg-a0 d-flex flex-column align-items-center text-center creatingAccess">
          <div className="fw-500 fs-43 txt-ff text-center">
            Subscribe for Exclusive Updates and Notifications.
          </div>
          <div
            className="w-75 gap-3 m-5 d-flex align-items-center justify-content-center justify-content-xl-between bg-ff mt-lg-5 mt-4"
            style={{
              minWidth: "240px",
              borderRadius: "30px",
              padding: "10px",
            }}
          >
            <input
              type="email"
              className="col-7"
              placeholder="Your email address"
              style={{ maxWidth: "455px" }}
            />
            <button
              className="w-50 bg-a0 txt-ff d-none d-xl-block fw-400 fs-19"
              style={{
                backgroundColor: "#A04D07",
                padding: "12px 20px",
                borderRadius: "20px",
              }}
            >
              Get Notified
            </button>
          </div>
          <button
            className="bg-a0 txt-ff d-xl-none fw-400 fs-19"
            style={{
              backgroundColor: "#A04D07",
              padding: "12px 20px",
              borderRadius: "20px",border:"1px solid #EBE9E0"
            }}
          >
            Get Notified
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default OurSolutions;







// import "./ourSolutions.css";

// function OurSolutions() {
//   return (
//     <div className="container-adjustment mt-5">
//       <div>
//         <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 justify-content-md-between">
//           <div className="txt-a0 fw-500 fs-43 w-25">
//             Our Customized Solutions
//           </div>
//           <div className="fs-00 txt-16 fw-400 w-50">
//             Awambe is designed to address every facet of event planning with a
//             suite of innovative tools and services.
//           </div>
//         </div>
//         <div className="mt-5 d-flex flex-wrap gap-5 justify-content-lg-between justify-content-center">
//           <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
//             <div
//               style={{
//                 borderBottom: "1.5px solid #A04D07",
//                 paddingBottom: "4px",
//                 textAlign: "end",
//               }}
//             >
//               01
//             </div>
//             <div>
//               <div className="fs-23 fw-500 my-4">Bespoke Invitations</div>
//               <div className="fs-16 fw-400 w-75">
//                 Create personalized invitations, digital or print, with
//                 African-inspired designs and interactive features.
//               </div>
//             </div>
//           </div>

//           <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
//             <div
//               style={{
//                 borderBottom: "1.5px solid #A04D07",
//                 paddingBottom: "4px",
//                 textAlign: "end",
//               }}
//             >
//               02
//             </div>
//             <div>
//               <div className="fs-23 fw-500 my-4">Custom Event Websites</div>
//               <div className="fs-16 fw-400 w-75">
//                 Build a tailored event website for guest engagement and
//                 real-time updates.
//               </div>
//             </div>
//           </div>

//           <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
//             <div
//               style={{
//                 borderBottom: "1.5px solid #A04D07",
//                 paddingBottom: "4px",
//                 textAlign: "end",
//               }}
//             >
//               03
//             </div>
//             <div>
//               <div className="fs-23 fw-500 my-4">Awambe Wedding Registry</div>
//               <div className="fs-16 fw-400 w-75">
//                 Manage gifts easily with an online registry featuring culturally
//                 relevant options.
//               </div>
//             </div>
//           </div>

//           <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
//             <div
//               style={{
//                 borderBottom: "1.5px solid #A04D07",
//                 paddingBottom: "4px",
//                 textAlign: "end",
//               }}
//             >
//               04
//             </div>
//             <div>
//               <div className="fs-23 fw-500 my-4">Smart Guest Services</div>
//               <div className="fs-16 fw-400 w-75">
//                 Streamline guest coordination with automated RSVP tracking and
//                 secure access control.
//               </div>
//             </div>
//           </div>

//           <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
//             <div
//               style={{
//                 borderBottom: "1.5px solid #A04D07",
//                 paddingBottom: "4px",
//                 textAlign: "end",
//               }}
//             >
//               05
//             </div>
//             <div>
//               <div className="fs-23 fw-500 my-4">E-Store Party Supply Shop</div>
//               <div className="fs-16 fw-400 w-75">
//                 Simplify party supply purchases from a curated vendor
//                 marketplace.
//               </div>
//             </div>
//           </div>

//           <div className="txt-a0 w-25" style={{ minWidth: "278px" }}>
//             <div
//               style={{
//                 borderBottom: "1.5px solid #A04D07",
//                 paddingBottom: "4px",
//                 textAlign: "end",
//               }}
//             >
//               06
//             </div>
//             <div>
//               <div className="fs-23 fw-500 my-4">Curated Vendor List</div>
//               <div className="fs-16 fw-400 w-75">
//                 Access a list of vetted vendors for reliable and culturally
//                 appropriate event services.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mb-5 d-flex align-items-center justify-content-center">
//         <div className="mt-5 py-5  w-75 bg-a0 d-flex flex-column align-items-center text-center creatingAccess">
//           <div className="fw-500 fs-43 txt-ff text-center">
//             Subscribe for Exclusive Updates and Notifications.
//           </div>
//           <div
//             className="w-75 gap-3 m-5 d-flex align-items-center justify-content-center justify-content-xl-between bg-ff mt-lg-5 mt-4"
//             style={{
//               minWidth: "240px",
//               borderRadius: "30px",
//               padding: "10px",
//             }}
//           >
//             <input
//               type="email"
//               className="col-7"
//               placeholder="Your email address"
//               style={{ maxWidth: "455px" }}
//             />
//             <button
//               className="w-50 bg-a0 txt-ff d-none d-xl-block fw-400 fs-19"
//               style={{
//                 backgroundColor: "#A04D07",
//                 padding: "12px 20px",
//                 borderRadius: "20px",
//               }}
//             >
//               Get Notified
//             </button>
//           </div>
//           <button
//             className="bg-a0 txt-ff d-xl-none fw-400 fs-19"
//             style={{
//               backgroundColor: "#A04D07",
//               padding: "12px 20px",
//               borderRadius: "20px",border:"1px solid #EBE9E0"
//             }}
//           >
//             Get Notified
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OurSolutions;
