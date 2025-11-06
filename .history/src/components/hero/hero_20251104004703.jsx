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
