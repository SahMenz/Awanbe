import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import theChallenge from "../../assets/images/theChallenge.png";
import ourResources from "../../assets/images/ourResources.png";

// Animation Variants for re-use
const headerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const textVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2 + 0.4, // Staggered delay for the cards
      ease: "easeOut",
    },
  }),
};

function MergingTradition() {
  const ref = useRef(null);
  // Trigger animation when 20% of the element is visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div className="mt-4 container-adjustment" ref={ref}>
      <div>
        {/* Header and Introduction Text Section */}
        <div className="d-flex align-items-center justify-content-between flex-wrap flex-lg-nowrap">
          {/* Animated Header */}
          <motion.div
            className="fw-500 fs-43 col-12 col-lg-5"
            variants={headerVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Merging <span className="txt-a0">Tradition</span> and{" "}
            <span className="txt-a0">Innovation</span> to Craft{" "}
            <span className="txt-a0">Unforgettable</span> Celebrations.
          </motion.div>

          {/* Animated Subtext */}
          <motion.div
            className="fs-16 fw-400 col-12 col-lg-5 mt-3 mt-lg-0"
            variants={textVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            Awambe was created to modernize event planning while celebrating
            African heritage, tackling challenges like finding trusted vendors
            and designing culturally meaningful invitations with a blend of
            tradition and innovation.
          </motion.div>
        </div>

        {/* Challenge and Response Cards Section */}
        <div className="mt-5 d-flex align-items-start justify-content-center gap-3 flex-wrap flex-xxl-nowrap justify-content-md-between">
          {/* Card 1: The Challenge */}
          <motion.div
            className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6"
            custom={0} // Custom prop for staggered delay
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <img
              src={theChallenge}
              alt="The Challenge"
              className="col-12 col-sm-6 col-md-4"
              style={{ objectFit: "cover", maxWidth: "200px" }} // Added minor style for better image control
            />
            <div
              className="d-flex bg-f5 flex-column col-12 col-sm-6 col-md-8" // Added responsive column classes
              style={{ borderRadius: "20px", padding: "20px" }}
            >
              <div className="fs-23 fw-400 bg-f5 mb-4">The Challenge</div>
              <div className="fw-400 fs-16 bg-f5 mt-xl-5">
                Traditional event planning in Nigeria is often riddled with
                inefficiencies—time-consuming vendor negotiations, limited access
                to quality suppliers, and the absence of a unified platform for
                invitation design & guest handling.
              </div>
            </div>
          </motion.div>

          {/* Card 2: Our Response */}
          <motion.div
            className="d-flex gap-3 col-12 flex-column flex-sm-row col-xxl-6 mt-4 mt-xxl-0" // Added top margin for wrapping on smaller screens
            custom={1} // Custom prop for staggered delay
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <img
              src={ourResources}
              alt="Our Resources"
              className="col-12 col-sm-6 col-md-4"
              style={{ objectFit: "cover", maxWidth: "200px" }} // Added minor style for better image control
            />
            <div
              className="d-flex bg-f5 flex-column col-12 col-sm-6 col-md-8" // Added responsive column classes
              style={{ borderRadius: "20px", padding: "20px" }}
            >
              <div className="fs-23 fw-400 bg-f5 mb-4">Our Response</div>
              <div className="fw-400 fs-16 bg-f5 mt-xl-5">
                Awambe simplifies event planning with trusted vendors, cultural
                invitations, and seamless guest handling, turning challenges into
                opportunities while honoring African heritage.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
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
