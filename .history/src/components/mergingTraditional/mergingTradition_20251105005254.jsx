import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// Assuming the following two imports are correct for your file structure
import theChallenge from "../../assets/images/theChallenge.png";
import ourResources from "../../assets/images/ourResources.png";

// Define the animation variants outside the component for better performance
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger animation for child elements
      delayChildren: 0.3, // Delay the start of child animations slightly
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function MergingTradition() {
  // 1. Create a ref for the main container
  const ref = useRef(null);
  
  // 2. Use useInView hook to check visibility
  // `once: true` ensures the animation plays only once
  // `amount: 0.25` means the animation starts when 25% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.25 }); 

  return (
    <div className="mt-4 container-adjustment">
      <motion.div
        ref={ref} // Attach the ref to the outer motion.div
        variants={containerVariants}
        initial="hidden"
        // 3. Use the isInView state to trigger the animation
        animate={isInView ? "visible" : "hidden"} 
      >
        {/* Title and Description Section */}
        <div className="d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
          <motion.div
            className="fw-500 fs-43 col-12 col-lg-5"
            variants={itemVariants} // Inherits the container's stagger
          >
            Merging <span className="txt-a0">Tradition</span> and{" "}
            <span className="txt-a0">Innovation</span> to Craft{" "}
            <span className="txt-a0">Unforgettable</span> Celebrations.
          </motion.div>
          <motion.div
            className="fs-16 fw-400 col-12 col-lg-5"
            variants={itemVariants} // Inherits the container's stagger
          >
            Awambe was created to modernize event planning while celebrating
            African heritage, tackling challenges like finding trusted vendors
            and designing culturally meaningful invitations with a blend of
            tradition and innovation.
          </motion.div>
        </div>

        {/* Challenge and Response Cards Section */}
        <div className="mt-5 d-flex align-items-start justify-content-center gap-3 flex-wrap flex-xxl-nowrap justify-content-md-between">
          
          {/* The Challenge Card */}
          <motion.div
            className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
            variants={itemVariants} // Inherits the container's stagger
          >
            {/* Added img-fluid for better image responsiveness */}
            <img src={theChallenge} alt="The Challenge" className="col-6 col-md-4 img-fluid" />
            <div
              className="d-flex bg-f5 flex-column w-100" // Added w-100 for better layout on small screens
              style={{ borderRadius: "20px", padding: "20px" }}
            >
              <div className="fs-23 fw-400 bg-f5 mb-4">The Challenge</div>
              <div className="fw-400 fs-16 bg-f5 mt-xl-5">
                Traditional event planning in Nigeria is often riddled with
                inefficiencies—time-consuming vendor negotiations, limited
                access to quality suppliers, and the absence of a unified
                platform for invitation design & guest handling.
              </div>
            </div>
          </motion.div>

          {/* Our Response Card */}
          <motion.div
            className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
            variants={itemVariants} // Inherits the container's stagger
          >
            <img src={ourResources} alt="Our Response" className="col-6 col-md-4 img-fluid" />
            <div
              className="d-flex bg-f5 flex-column w-100" // Added w-100 for better layout on small screens
              style={{ borderRadius: "20px", padding: "20px" }}
            >
              <div className="fs-23 fw-400 bg-f5 mb-4">Our Response</div>
              <div className="fw-400 fs-16 bg-f5 mt-xl-5">
                Awambe simplifies event planning with trusted vendors, cultural
                invitations, and seamless guest handling, turning challenges
                into opportunities while honoring African heritage.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default MergingTradition;












// import theChallenge from "../../assets/images/theChallenge.png";
// import ourResources from "../../assets/images/ourResources.png";
// import { motion } from "framer-motion"; // Import Framer Motion

// // Variants for the Title/Subtitle Block (Fade Up)
// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//     },
//   },
// };

// // Variants for the Card Section container, enabling horizontal stagger
// const cardContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, // Stagger between the Challenge and Response cards
//       delayChildren: 0.1, // Slight delay after the Title/Subtitle fade in
//     },
//   },
// };

// // Variants for the individual Cards (Slide in from the right)
// const cardItemVariants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//     },
//   },
// };

// function MergingTradition() {
//   return (
//     // Outer container: Triggers the animation on scroll and hides horizontal overflow
//     <motion.div
//       className="mt-4"
//       initial="hidden"
//       whileInView="visible"
//       // Setting viewport={{ once: false }} allows the animation to re-occur on every scroll into view
//       viewport={{ once: false, amount: 0.1 }}
//       // Fix: Add overflow-x: hidden to prevent horizontal scrollbar from the initial x: 50
//       style={{ overflowX: "hidden" }}
//     >
//       <div className="container container-adjustment"> {/* Added Bootstrap 'container' and kept 'container-adjustment' */}
//         {/* Block 1: Title and Subtitle - Simple Fade Up */}
//         <motion.div
//           className="d-flex align-items-center col-12 justify-content-between flex-wrap flex-lg-nowrap"
//           variants={fadeUpVariants}
//         >
//           <div className="fw-500 fs-43 col-12 col-lg-5">
//             Merging <span className="txt-a0">Tradition</span> and{" "}
//             <span className="txt-a0">Innovation</span> to Craft{" "}
//             <span className="txt-a0">Unforgettable</span>{" "}
//             Celebrations.
//           </div>
//           <div className="fs-16 fw-400 col-12 col-lg-5">
//             Awambe was created to modernize event planning while celebrating
//             African heritage, tackling challenges like finding trusted vendors
//             and designing culturally meaningful invitations with a blend of
//             tradition and innovation.
//           </div>
//         </motion.div>

//         {/* Block 2: Card Container - Manages the stagger for the two cards */}
//         <motion.div
//           className="mt-5 d-flex align-items-start justify-content-center gap-3 flex-wrap flex-xxl-nowrap justify-content-md-between"
//           variants={cardContainerVariants}
//         >

//           {/* Challenge Card - Staggered Item 1 */}
//           <motion.div
//             className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
//             variants={cardItemVariants}
//           >
//             <img src={theChallenge} alt="Image representing the challenge" className="col-6 col-md-4"/>
//             <div
//               className="d-flex bg-f5 flex-column "
//               style={{ borderRadius: "20px", padding: "20px" }}
//             >
//               <div className="fs-23 fw-400 bg-f5 mb-4">The Challenge</div>
//               <div className="fw-400 fs-16 bg-f5 mt-xl-5">
//                 Traditional event planning in Nigeria is often riddled with
//                 inefficiencies—time-consuming vendor negotiations, limited
//                 access to quality suppliers, and the absence of a unified
//                 platform for invitation design & guest handling.
//               </div>
//             </div>
//           </motion.div>

//           {/* Response Card - Staggered Item 2 */}
//           <motion.div
//             className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
//             variants={cardItemVariants}
//           >
//             <img src={ourResources} alt="Image representing our response" className="col-6 col-md-4"/>
//             <div
//               className="d-flex bg-f5 flex-column "
//               style={{ borderRadius: "20px", padding: "20px" }}
//             >
//               <div className="fs-23 fw-400 bg-f5 mb-4">Our Response</div>
//               <div className="fw-400 fs-16 bg-f5 mt-xl-5">
//                 Awambe simplifies event planning with trusted vendors, cultural
//                 invitations, and seamless guest handling, turning challenges
//                 into opportunities while honoring African heritage.
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default MergingTradition;







// import theChallenge from "../../assets/images/theChallenge.png";
// import ourResources from "../../assets/images/ourResources.png";
// import { motion } from "framer-motion"; // Import Framer Motion

// // Variants for the Title/Subtitle Block (Fade Up)
// const fadeUpVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//     },
//   },
// };

// // Variants for the Card Section container, enabling horizontal stagger
// const cardContainerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, // Stagger between the Challenge and Response cards
//       delayChildren: 0.1, // Slight delay after the Title/Subtitle fade in
//     },
//   },
// };

// // Variants for the individual Cards (Slide in from the right)
// const cardItemVariants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 100,
//     },
//   },
// };

// function MergingTradition() {
//   return (
//     // Outer container: Triggers the animation on scroll
//     <motion.div 
//       className="mt-4 container-adjustment"
//       initial="hidden"
//       whileInView="visible"
//       // Setting viewport={{ once: false }} allows the animation to re-occur on every scroll into view
//       viewport={{ once: false, amount: 0.1 }} 
//     >
//       <div>
//         {/* Block 1: Title and Subtitle - Simple Fade Up */}
//         <motion.div 
//           className="d-flex align-items-center col-12 justify-content-between flex-wrap flex-lg-nowrap"
//           variants={fadeUpVariants}
//         >
//           <div className="fw-500 fs-43 col-12 col-lg-5">
//             Merging <span className="txt-a0">Tradition</span> and{" "}
//             <span className="txt-a0">Innovation</span> to Craft{" "}
//             <span className="txt-a0">Unforgettable</span>{" "}
//             Celebrations.
//           </div>
//           <div className="fs-16 fw-400 col-12 col-lg-5">
//             Awambe was created to modernize event planning while celebrating
//             African heritage, tackling challenges like finding trusted vendors
//             and designing culturally meaningful invitations with a blend of
//             tradition and innovation.
//           </div>
//         </motion.div>
        
//         {/* Block 2: Card Container - Manages the stagger for the two cards */}
//         <motion.div 
//           className="mt-5 d-flex align-items-start justify-content-center gap-3 flex-wrap flex-xxl-nowrap justify-content-md-between"
//           variants={cardContainerVariants}
//         >
          
//           {/* Challenge Card - Staggered Item 1 */}
//           <motion.div 
//             className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
//             variants={cardItemVariants}
//           >
//             <img src={theChallenge} alt="Image representing the challenge" className="col-6 col-md-4"/>
//             <div
//               className="d-flex bg-f5 flex-column "
//               style={{ borderRadius: "20px", padding: "20px" }}
//             >
//               <div className="fs-23 fw-400 bg-f5 mb-4">The Challenge</div>
//               <div className="fw-400 fs-16 bg-f5 mt-xl-5">
//                 Traditional event planning in Nigeria is often riddled with
//                 inefficiencies—time-consuming vendor negotiations, limited
//                 access to quality suppliers, and the absence of a unified
//                 platform for invitation design & guest handling.
//               </div>
//             </div>
//           </motion.div>
          
//           {/* Response Card - Staggered Item 2 */}
//           <motion.div 
//             className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
//             variants={cardItemVariants}
//           >
//             <img src={ourResources} alt="Image representing our response" className="col-6 col-md-4"/>
//             <div
//               className="d-flex bg-f5 flex-column "
//               style={{ borderRadius: "20px", padding: "20px" }}
//             >
//               <div className="fs-23 fw-400 bg-f5 mb-4">Our Response</div>
//               <div className="fw-400 fs-16 bg-f5 mt-xl-5">
//                 Awambe simplifies event planning with trusted vendors, cultural
//                 invitations, and seamless guest handling, turning challenges
//                 into opportunities while honoring African heritage.
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }

// export default MergingTradition;













// import theChallenge from "../../assets/images/theChallenge.png";
// import ourResources from "../../assets/images/ourResources.png";

// function MergingTradition() {
//   return (
//     <div className="mt-4 container-adjustment">
//       <div>
//         <div className="d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
//           <div className="fw-500 fs-43 col-12 col-lg-5">
//             Merging <span className="txt-a0">Tradition</span> and{" "}
//             <span className="txt-a0">Innovation</span> to Craft{" "}
//             <span className="txt-a0">Unforgettable</span>{" "}
//             Celebrations.
//           </div>
//           <div className="fs-16 fw-400 col-12 col-lg-5">
//             Awambe was created to modernize event planning while celebrating
//             African heritage, tackling challenges like finding trusted vendors
//             and designing culturally meaningful invitations with a blend of
//             tradition and innovation.
//           </div>
//         </div>
//         <div className="mt-5 d-flex align-items-start justify-content-center gap-3 flex-wrap flex-xxl-nowrap justify-content-md-between">
//           <div className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6">
//             <img src={theChallenge} alt="" className="col-6 col-md-4"/>
//             <div
//               className="d-flex bg-f5 flex-column "
//               style={{ borderRadius: "20px", padding: "20px" }}
//             >
//               <div className="fs-23 fw-400 bg-f5 mb-4">The Challenge</div>
//               <div className="fw-400 fs-16 bg-f5 mt-xl-5">
//                 Traditional event planning in Nigeria is often riddled with
//                 inefficiencies—time-consuming vendor negotiations, limited
//                 access to quality suppliers, and the absence of a unified
//                 platform for invitation design & guest handling.
//               </div>
//             </div>
//           </div>
//           <div className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6">
//             <img src={ourResources} alt="" className="col-6 col-md-4"/>
//             <div
//               className="d-flex bg-f5 flex-column "
//               style={{ borderRadius: "20px", padding: "20px" }}
//             >
//               <div className="fs-23 fw-400 bg-f5 mb-4">Our Response</div>
//               <div className="fw-400 fs-16 bg-f5 mt-xl-5">
//                 Awambe simplifies event planning with trusted vendors, cultural
//                 invitations, and seamless guest handling, turning challenges
//                 into opportunities while honoring African heritage.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MergingTradition;
