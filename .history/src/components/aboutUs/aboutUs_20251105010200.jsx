import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// Import images
import ourMission from "../../assets/images/ourMission.svg";
import ourVision from "../../assets/images/ourVision.svg";
import ourValues from "../../assets/images/ourValues.svg";
import middleImageTop from "../../assets/images/middleImageTop.png";
import middleImageLeft from "../../assets/images/middleImageLeft.png";
import middleImageRight from "../../assets/images/middleImageRight.png";
import aboutUsImageRight from "../../assets/images/aboutUsImageRight.png";
import aboutUsImageLeft from "../../assets/images/aboutUsImageLeft.png";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.15, // Stagger animation for child elements
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function AboutUs() {
  // Ref for the main section to trigger the "Guiding Principles" animation
  const principlesRef = useRef(null);
  const principlesInView = useInView(principlesRef, { once: false, amount: 0.3 });

  // Ref for the image section to trigger the image animation
  const imagesRef = useRef(null);
  const imagesInView = useInView(imagesRef, { once: false, amount: 0.2 });

  return (
    <div className="mt-5 container-adjustment">
      
      {/* Our Guiding Principles Section (Animated) */}
      <motion.div
        ref={principlesRef}
        initial="hidden"
        animate={principlesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center"
      >
        <motion.div className="fs-43 fw-500 txt-a0" variants={itemVariants}>
          Our Guiding Principles
        </motion.div>
        <motion.div className="fs-16 fw-400" variants={itemVariants}>
          We modernize event planning while preserving African heritage,
          ensuring seamless coordination, cultural authenticity, and memorable
          celebrations.
        </motion.div>
      </motion.div>
      
      {/* Mission, Vision, Values Cards Section (Animated) */}
      <div className="mt-5 d-flex flex-column align-items-center justify-content-center gap-4 flex-lg-row justify-content-lg-between">
        
        {/* Our Mission Card */}
        <motion.div
          className="bg-a0 w-25"
          style={{ minWidth: "250px", borderRadius: "15px", padding: "25px" }}
          variants={itemVariants}
          initial="hidden"
          animate={principlesInView ? "visible" : "hidden"}
        >
          <img
            src={ourMission}
            alt="Our Mission Icon"
            style={{ borderRadius: "30px", backgroundColor: "#fff" }}
          />
          <div className="bg-a0 txt-ff fw-500 fs-23">Our Mission</div>
          <div style={{ height: "100px", backgroundColor: "#A04D07" }}></div>
          <div className="fs-16 fw-400 txt-ff bg-a0">
            To empower event planners and individuals by providing a
            comprehensive, culturally nuanced platform that makes every
            celebration uniquely memorable, efficient, and stress-free.
          </div>
        </motion.div>

        {/* Our Vision Card */}
        <motion.div
          className="w-25"
          style={{ minWidth: "250px", borderRadius: "15px", padding: "25px" }}
          variants={itemVariants}
          initial="hidden"
          animate={principlesInView ? "visible" : "hidden"}
        >
          <img src={ourVision} alt="Our Vision Icon" />
          <div className="txt-a0 fw-500 fs-23">Our Vision</div>
          <div style={{ height: "100px" }}></div>
          <div className="fs-16 fw-400 txt-00">
            To be the leading platform for African-themed events, seamlessly
            blending tradition with technology to create meaningful and
            memorable celebrations.
          </div>
        </motion.div>

        {/* Our Values Card */}
        <motion.div
          className="w-25"
          style={{ minWidth: "250px", borderRadius: "15px", padding: "25px" }}
          variants={itemVariants}
          initial="hidden"
          animate={principlesInView ? "visible" : "hidden"}
        >
          <img src={ourValues} alt="Our Values Icon" />
          <div className="txt-a0 fw-500 fs-23">Our Values</div>
          <div style={{ height: "100px" }}></div>
          <div className="fs-16 fw-400 txt-00">
            We innovate to meet user needs, preserve African heritage, build a
            strong community, and deliver excellence through a seamless
            experience.
          </div>
        </motion.div>
      </div>

      {/* Main Title and Images Section (Animated) */}
      <motion.div
        ref={imagesRef}
        initial="hidden"
        animate={imagesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="txt-73 fs-83 fw-500 mt-5 w-75" variants={itemVariants}>
          Where <span className="txt-a0">Cultural Roots</span> Meet Modern Expression
        </motion.div>
        
        {/* Image Group */}
        <div className="d-flex align-items-center justify-content-center mt-5 flex-column flex-lg-row">
          
          {/* Left Image */}
          <motion.div variants={itemVariants}>
            <img 
              src={aboutUsImageLeft} 
              alt="Cultural Imagery Left" 
              style={{width:"90vw", maxWidth:"300px"}}
              className="img-fluid" // Added for responsiveness
            />
          </motion.div>
          
          {/* Middle Images Group */}
          <motion.div 
            className="d-flex align-items-center justify-content-center gap-3 gap-lg-3 mt-5 mt-lg-0" 
            style={{height:"400px"}}
            variants={containerVariants} // Use container for a staggered effect within the group
          >
            <motion.div variants={itemVariants}>
              <img 
                src={middleImageLeft} 
                alt="Middle Image Left" 
                style={{width:"25vw", maxWidth:"120px"}}
                className="img-fluid"
              />
            </motion.div>
            <motion.div className="align-self-start" variants={itemVariants}>
              <img 
                src={middleImageTop} 
                alt="Middle Image Top" 
                style={{width:"25vw", maxWidth:"120px"}}
                className="img-fluid"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <img 
                src={middleImageRight} 
                alt="Middle Image Right" 
                style={{width:"25vw", maxWidth:"120px"}}
                className="img-fluid"
              />
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div variants={itemVariants}>
            <img 
              src={aboutUsImageRight} 
              alt="Cultural Imagery Right" 
              style={{width:"90vw", maxWidth:"300px"}}
              className="img-fluid"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;







// import ourMission from "../../assets/images/ourMission.svg";
// import ourVision from "../../assets/images/ourVision.svg";
// import ourValues from "../../assets/images/ourValues.svg";
// import middleImageTop from "../../assets/images/middleImageTop.png";
// import middleImageLeft from "../../assets/images/middleImageLeft.png";
// import middleImageRight from "../../assets/images/middleImageRight.png";
// import aboutUsImageRight from "../../assets/images/aboutUsImageRight.png";
// import aboutUsImageLeft from "../../assets/images/aboutUsImageLeft.png";
// function AboutUs() {
//   return (
//     <div className="mt-5 container-adjustment">
//       <div className="text-center">
//         <div className="fs-43 fw-500 txt-a0">Our Guiding Principles</div>
//         <div className="fs-16 fw-400">
//           We modernize event planning while preserving African heritage,
//           ensuring seamless coordination, cultural authenticity, and memorable
//           celebrations.
//         </div>
//       </div>
//       <div className="mt-5 d-flex flex-column align-items-center justify-content-center gap-4 flex-lg-row justify-content-lg-between">
//         <div
//           className="bg-a0 w-25"
//           style={{ minWidth: "250px", borderRadius: "15px", padding: "25px" }}
//         >
//           <img
//             src={ourMission}
//             alt=""
//             style={{ borderRadius: "30px", backgroundColor: "#fff" }}
//           />
//           <div className="bg-a0 txt-ff fw-500 fs-23">Our Mission</div>
//           <div style={{ height: "100px", backgroundColor: "#A04D07" }}></div>
//           <div className="fs-16 fw-400 txt-ff bg-a0">
//             To empower event planners and individuals by providing a
//             comprehensive, culturally nuanced platform that makes every
//             celebration uniquely memorable, efficient, and stress-free.
//           </div>
//         </div>

//         <div
//           className="w-25"
//           style={{ minWidth: "250px", borderRadius: "15px", padding: "25px" }}
//         >
//           <img src={ourVision} alt="" />
//           <div className="txt-a0 fw-500 fs-23">Our Vision</div>
//           <div style={{ height: "100px" }}></div>
//           <div className="fs-16 fw-400 txt-00">
//             To be the leading platform for African-themed events, seamlessly
//             blending tradition with technology to create meaningful and
//             memorable celebrations.
//           </div>
//         </div>

//         <div
//           className="w-25"
//           style={{ minWidth: "250px", borderRadius: "15px", padding: "25px" }}
//         >
//           <img src={ourValues} alt="" />
//           <div className="txt-a0 fw-500 fs-23">Our Values</div>
//           <div style={{ height: "100px" }}></div>
//           <div className="fs-16 fw-400 txt-00">
//             We innovate to meet user needs, preserve African heritage, build a
//             strong community, and deliver excellence through a seamless
//             experience.
//           </div>
//         </div>
//       </div>
//       <div className="txt-73 fs-83 fw-500 mt-5 w-75">
//         Where <span className="txt-a0">Cultural Roots</span> Meet Modern Expression
//       </div>
//       <div className="d-flex align-items-center justify-content-center mt-5 flex-column flex-lg-row">
//         <div><img src={aboutUsImageLeft}  style={{width:"90vw", maxWidth:"300px"}}/></div>
//         <div className="d-flex align-items-center justify-content-center gap-3 gap-lg-3 mt-5 mt-lg-0" style={{height:"400px"}}>
//           <div><img src={middleImageLeft} style={{width:"25vw", maxWidth:"120px"}}/></div>
//           <div className="align-self-start"><img src={middleImageTop} style={{width:"25vw", maxWidth:"120px"}}/></div>
//           <div><img src={middleImageRight} style={{width:"25vw", maxWidth:"120px"}}/></div>
//         </div>
//         <div><img src={aboutUsImageRight} style={{width:"90vw", maxWidth:"300px"}}/></div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;
