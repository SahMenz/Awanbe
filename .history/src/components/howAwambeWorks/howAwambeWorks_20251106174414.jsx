import "./howAwambeWorks.css";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import CustomSvg from "../customSvg/CustomSvg";
import arrow from "../../assets/images/Arrow.svg";
import guest from "../../assets/images/guest.svg";
import register from "../../assets/images/register.svg";
import planning from "../../assets/images/planning.svg";
import gift from "../../assets/images/gift.svg";
import invitation from "../../assets/images/invitation.svg";
import { motion } from "framer-motion"; // Import Framer Motion

// --- Framer Motion Variants ---

// 1. Base Variants for sequential fade-in-up effect
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

// 2. Container Variants for staggering children (used for the steps and the FAQ list)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// 3. Item Variants for the individual process steps and FAQ items
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// 4. Arrow Variants (Slight horizontal movement)
const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "tween",
            duration: 0.3,
            ease: "easeOut",
            delay: 0.2 // Delay after the card itself appears
        }
    }
};


function HowAwambeWorks() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    // Outer container wrapper for scroll detection
    <motion.div 
        className="container-adjustment-special-case"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }} // Re-trigger animation when 10% is visible
        variants={staggerContainer} // Use stagger container for the whole component's contents
    >
      <div>
        {/* Title and Subtitle Block (Section Variant) */}
        <motion.div 
            className="pb-5 pb-md-1 d-flex align-items-center flex-column justify-content-center text-center"
            variants={sectionVariants}
        >
          <div className="txt-a0 fw-500 fs-43 mb-3">How Awambe Works</div>
          <div className="fs-16 fw-400 col-6">
            Our user-friendly platform guides you through every step of the
            event planning process, ensuring that you remain in control from
            start to finish.
          </div>
        </motion.div>
        <div style={{ height: "30vw", maxHeight: "130px" }}></div>
        
        {/* Step-by-Step Process Container (Staggered Children) */}
        <motion.div 
            className="pt-5 pt-xl-1 d-flex justify-content-center gap-5 gap-xl-1 flex-column flex-xl-row align-items-center col-12 heightAdjustment mt-5 mt-xl-1"
            variants={staggerContainer} // Use stagger container for the steps
        >
          
          {/* Step 1 & 2 Group */}
          <div
            className="d-flex flex-column flex-sm-row align-self-xl-start"
            style={{ height: "200px" }}
          >
            {/* Step 1: Register */}
            <motion.div className="d-flex" variants={itemVariants}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={register} className="iconShrink" alt="Register Icon" />
                <div className="fs-16 fw-600 my-2">Register</div>
                <div className=" fs-11 fw-400" style={{ width: "163px" }}>
                  Quickly sign up, then access your personalized planning
                  dashboard.
                </div>
              </div>
              <motion.div className="mt-5" variants={arrowVariants}>
                <img src={arrow} className="arrowShrink" alt="Arrow" />
              </motion.div>
            </motion.div>

            {/* Step 2: Invitations */}
            <motion.div className="d-flex align-self-end mt-3  mt-sm-1" variants={itemVariants}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={invitation} className="iconShrink" alt="Invitation Icon" />
                <div className="fs-16 fw-600 my-2">Invitations</div>
                <div className=" fs-11 fw-400" style={{ width: "163px" }}>
                  Design and customize unique invitations with ease, then
                  preview before sending
                </div>
              </div>
              <motion.div className="mt-5" variants={arrowVariants}>
                <img src={arrow} className="arrowShrink" alt="Arrow" />
              </motion.div>
            </motion.div>
          </div>

          {/* Step 3 & 4 Group */}
          <div
            className="d-flex flex-column flex-sm-row mt-5 mt-sm-1 align-self-center"
            style={{ height: "200px" }}
          >
            {/* Step 3: Guests */}
            <motion.div className="d-flex" variants={itemVariants}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={guest} className="iconShrink" alt="Guest Icon" />
                <div className="fs-16 fw-600 my-2">Guests</div>
                <div className=" fs-11 fw-400" style={{ width: "163px" }}>
                  Easily upload and manage guest lists, and send automated
                  reminders.
                </div>
              </div>
              <motion.div className="mt-5" variants={arrowVariants}>
                <img src={arrow} className="arrowShrink" alt="Arrow" />
              </motion.div>
            </motion.div>

            {/* Step 4: Planning */}
            <motion.div className="d-flex align-self-end mt-3 mt-sm-1" variants={itemVariants}>
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={planning} className="iconShrink" alt="Planning Icon" />
                <div className="fs-16 fw-600 my-2">Planning</div>
                <div className=" fs-11 fw-400" style={{ width: "163px" }}>
                  Book vendors directly, schedule events, and track your budget
                  efficiently.
                </div>
              </div>
              <motion.div className="mt-5" variants={arrowVariants}>
                <img src={arrow} className="arrowShrink" alt="Arrow" />
              </motion.div>
            </motion.div>
          </div>

          {/* Step 5: Gifts */}
          <motion.div className="align-self-center mt-5 mt-sm-1  align-self-xl-end text-center d-flex flex-column align-items-center " variants={itemVariants}>
            <img src={gift} className="iconShrink" alt="Gift Icon" />
            <div className="fs-16 fw-600 my-2 ">Gifts</div>
            <div className=" fs-11 fw-400" style={{ width: "163px" }}>
              Link your registry, receive secure gifts, and send automated
              thank-you notes.
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div style={{ height: "50vw", maxHeight: "160px" }}></div>
      
      {/* FAQ Section */}
      <div className="pt-5 mt-5 mt-sm-5 pt-sm-5">
        <motion.div 
            className="fs-43 fw-500 text-center mt-5 mb-4"
            variants={sectionVariants} // Title fades up
        >
          Frequently Asked Questions
        </motion.div>
        
        {/* FAQ List Container (Staggered Children) */}
        <motion.div 
            className="d-flex flex-column align-items-center mb-5"
            variants={staggerContainer} // Use stagger container for the FAQ items
        >
          
          {/* FAQ Item 1 */}
          <motion.div
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between faq-item"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open ? "fit-content" : "",
            }}
            variants={itemVariants}
          >
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{ padding: "20px 29px 20px 18px" }}
            >
              <div className="fw-400">
                What is Awambe?
              </div>
              <div>
                {open ? (
                  <div><CustomSvg name="minus" /></div>
                ) : (
                  <div><CustomSvg name="plus" /></div>
                )}
              </div>
            </div>
            <Collapse in={open}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </motion.div>

          {/* FAQ Item 2 */}
          <motion.div
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between faq-item"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open1 ? "fit-content" : "",
            }}
            variants={itemVariants}
          >
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{ padding: "20px 29px 20px 18px" }}
            >
              <div className="fw-400">
                Who can use Awambe?
              </div>
              <div>
                {open1 ? (
                  <div><CustomSvg name="minus" /></div>
                ) : (
                  <div><CustomSvg name="plus" /></div>
                )}
              </div>
            </div>
            <Collapse in={open1}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </motion.div>

          {/* FAQ Item 3 */}
          <motion.div
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between faq-item"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open2 ? "fit-content" : "",
            }}
            variants={itemVariants}
          >
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{ padding: "20px 29px 20px 18px" }}
            >
              <div className="fw-400">
                How does Awambe help with event planning?
              </div>
              <div>
                {open2 ? (
                  <div><CustomSvg name="minus" /></div>
                ) : (
                  <div><CustomSvg name="plus" /></div>
                )}
              </div>
            </div>
            <Collapse in={open2}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </motion.div>

          {/* FAQ Item 4 */}
          <motion.div
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between faq-item"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open3 ? "fit-content" : "",
            }}
            variants={itemVariants}
          >
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{ padding: "20px 29px 20px 18px" }}
            >
              <div className="fw-400">
                Can I create digital invitations on Awambe?
              </div>
              <div>
                {open3 ? (
                  <div><CustomSvg name="minus" /></div>
                ) : (
                  <div><CustomSvg name="plus" /></div>
                )}
              </div>
            </div>
            <Collapse in={open3}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </motion.div>

          {/* FAQ Item 5 */}
          <motion.div
            onClick={() => setOpen4(!open4)}
            aria-controls="example-collapse-text"
            aria-expanded={open4}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between faq-item"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open4 ? "fit-content" : "",
            }}
            variants={itemVariants}
          >
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{ padding: "20px 29px 20px 18px" }}
            >
              <div className="fw-400">
                How does guest management work on Awambe?
              </div>
              <div>
                {open4 ? (
                  <div><CustomSvg name="minus" /></div>
                ) : (
                  <div><CustomSvg name="plus" /></div>
                )}
              </div>
            </div>
            <Collapse in={open4}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HowAwambeWorks;








// import "./howAwambeWorks.css";
// import { useState } from "react";
// import Collapse from "react-bootstrap/Collapse";
// import CustomSvg from "../customSvg/CustomSvg";
// import arrow from "../../assets/images/Arrow.svg";
// import guest from "../../assets/images/guest.svg";
// import register from "../../assets/images/register.svg";
// import planning from "../../assets/images/planning.svg";
// import gift from "../../assets/images/gift.svg";
// import invitation from "../../assets/images/invitation.svg";

// function HowAwambeWorks() {
//   const [open, setOpen] = useState(false);
//   const [open1, setOpen1] = useState(false);
//   const [open2, setOpen2] = useState(false);
//   const [open3, setOpen3] = useState(false);
//   const [open4, setOpen4] = useState(false);

//   return (
//     <div className="container-adjustment-special-case">
//       <div>
//         <div className="pb-5 pb-md-1 d-flex align-items-center flex-column justify-content-center text-center">
//           <div className="txt-a0 fw-500 fs-43 mb-3">How Awambe Works</div>
//           <div className="fs-16 fw-400 col-6">
//             Our user-friendly platform guides you through every step of the
//             event planning process, ensuring that you remain in control from
//             start to finish.
//           </div>
//         </div>
//         <div style={{ height: "30vw", maxHeight: "130px" }}></div>
//         <div className="pt-5 pt-xl-1 d-flex justify-content-center gap-5 gap-xl-1 flex-column flex-xl-row align-items-center col-12 heightAdjustment mt-5 mt-xl-1">
//           <div
//             className="d-flex flex-column flex-sm-row align-self-xl-start"
//             style={{ height: "200px" }}
//           >
//             <div className="d-flex">
//               <div className="text-center d-flex flex-column align-items-center ">
//                 <img src={register} className="iconShrink" />
//                 <div className="fs-16 fw-600 my-2">Register</div>
//                 <div className=" fs-11 fw-400" style={{ width: "163px" }}>
//                   Quickly sign up, then access your personalized planning
//                   dashboard.
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <img src={arrow} className="arrowShrink" />
//               </div>
//             </div>

//             <div className="d-flex align-self-end mt-3  mt-sm-1">
//               <div className="text-center d-flex flex-column align-items-center ">
//                 <img src={invitation} className="iconShrink" />
//                 <div className="fs-16 fw-600 my-2">Invitations</div>
//                 <div className=" fs-11 fw-400" style={{ width: "163px" }}>
//                   Design and customize unique invitations with ease, then
//                   preview before sending
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <img src={arrow} className="arrowShrink" />
//               </div>
//             </div>
//           </div>

//           <div
//             className="d-flex flex-column flex-sm-row mt-5 mt-sm-1 align-self-center"
//             style={{ height: "200px" }}
//           >
//             <div className="d-flex ">
//               <div className="text-center d-flex flex-column align-items-center ">
//                 <img src={guest} className="iconShrink" />
//                 <div className="fs-16 fw-600 my-2">Guests</div>
//                 <div className=" fs-11 fw-400" style={{ width: "163px" }}>
//                   Easily upload and manage guest lists, and send automated
//                   reminders.
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <img src={arrow} className="arrowShrink" />
//               </div>
//             </div>

//             <div className="d-flex align-self-end mt-3 mt-sm-1">
//               <div className="text-center d-flex flex-column align-items-center ">
//                 <img src={planning} className="iconShrink" />
//                 <div className="fs-16 fw-600 my-2">Planning</div>
//                 <div className=" fs-11 fw-400" style={{ width: "163px" }}>
//                   Book vendors directly, schedule events, and track your budget
//                   efficiently.
//                 </div>
//               </div>
//               <div className="mt-5">
//                 <img src={arrow} className="arrowShrink" />
//               </div>
//             </div>
//           </div>

//           <div className="align-self-center mt-5 mt-sm-1  align-self-xl-end text-center d-flex flex-column align-items-center ">
//             <img src={gift} className="iconShrink" />
//             <div className="fs-16 fw-600 my-2 ">Gifts</div>
//             <div className=" fs-11 fw-400" style={{ width: "163px" }}>
//               Link your registry, receive secure gifts, and send automated
//               thank-you notes.
//             </div>
//           </div>
//         </div>
//       </div>
//       <div style={{ height: "30vw", maxHeight: "120px" }}></div>
//       <div className="pt-5 mt-5 mt-sm-1 pt-sm-1">
//         <div className="fs-43 fw-500 text-center mt-5 mb-4">
//           Frequently Asked Questions
//         </div>
//         <div className="d-flex flex-column align-items-center mb-5">
//           <div
//             onClick={() => setOpen(!open)}
//             aria-controls="example-collapse-text"
//             aria-expanded={open}
//             className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
//             style={{
//               cursor: "pointer",
//               borderRadius: "20px",
//               height: open ? "fit-content" : "",
//             }}
//           >
//             {/* <div> */}
//             <div
//               className="d-flex align-items-center justify-content-between col-12"
//               style={{
//                 padding: "20px 29px 20px 18px",
//               }}
//             >
//               <div
//                 className="fw-400"
//                 // style={{ width: "70vw" }}
//               >
//                 What is Awambe?
//               </div>
//               <div>
//                 {open ? (
//                   <div>
//                     <CustomSvg name="minus" />
//                   </div>
//                 ) : (
//                   <div>
//                     <CustomSvg name="plus" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* </div> */}
//             <Collapse in={open}>
//               <div id="example-fade-text">
//                 <div
//                   className="fw-400 txt-16 "
//                   style={{
//                     borderRadius: "20px",
//                     padding: "20px 29px 20px 18px",
//                   }}
//                 >
//                   Awambe is an event planning platform designed to simplify
//                   African-themed celebrations. We offer customizable
//                   invitations, guest management tools, a curated vendor
//                   marketplace, and a seamless event coordination experience.
//                 </div>
//               </div>
//             </Collapse>
//           </div>

//           <div
//             onClick={() => setOpen1(!open1)}
//             aria-controls="example-collapse-text"
//             aria-expanded={open1}
//             className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
//             style={{
//               cursor: "pointer",
//               borderRadius: "20px",
//               height: open1 ? "fit-content" : "",
//             }}
//           >
//             {/* <div> */}
//             <div
//               className="d-flex align-items-center justify-content-between col-12"
//               style={{
//                 padding: "20px 29px 20px 18px",
//               }}
//             >
//               <div
//                 className="fw-400"
//                 // style={{ width: "70vw" }}
//               >
//                 Who can use Awambe?
//               </div>
//               <div>
//                 {open1 ? (
//                   <div>
//                     <CustomSvg name="minus" />
//                   </div>
//                 ) : (
//                   <div>
//                     <CustomSvg name="plus" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* </div> */}
//             <Collapse in={open1}>
//               <div id="example-fade-text">
//                 <div
//                   className="fw-400 txt-16 "
//                   style={{
//                     borderRadius: "20px",
//                     padding: "20px 29px 20px 18px",
//                   }}
//                 >
//                   Awambe is an event planning platform designed to simplify
//                   African-themed celebrations. We offer customizable
//                   invitations, guest management tools, a curated vendor
//                   marketplace, and a seamless event coordination experience.
//                 </div>
//               </div>
//             </Collapse>
//           </div>

//           <div
//             onClick={() => setOpen2(!open2)}
//             aria-controls="example-collapse-text"
//             aria-expanded={open2}
//             className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
//             style={{
//               cursor: "pointer",
//               borderRadius: "20px",
//               height: open2 ? "fit-content" : "",
//             }}
//           >
//             {/* <div> */}
//             <div
//               className="d-flex align-items-center justify-content-between col-12"
//               style={{
//                 padding: "20px 29px 20px 18px",
//               }}
//             >
//               <div
//                 className="fw-400"
//                 // style={{ width: "70vw" }}
//               >
//                 How does Awambe help with event planning?
//               </div>
//               <div>
//                 {open2 ? (
//                   <div>
//                     <CustomSvg name="minus" />
//                   </div>
//                 ) : (
//                   <div>
//                     <CustomSvg name="plus" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* </div> */}
//             <Collapse in={open2}>
//               <div id="example-fade-text">
//                 <div
//                   className="fw-400 txt-16 "
//                   style={{
//                     borderRadius: "20px",
//                     padding: "20px 29px 20px 18px",
//                   }}
//                 >
//                   Awambe is an event planning platform designed to simplify
//                   African-themed celebrations. We offer customizable
//                   invitations, guest management tools, a curated vendor
//                   marketplace, and a seamless event coordination experience.
//                 </div>
//               </div>
//             </Collapse>
//           </div>

//           <div
//             onClick={() => setOpen3(!open3)}
//             aria-controls="example-collapse-text"
//             aria-expanded={open3}
//             className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
//             style={{
//               cursor: "pointer",
//               borderRadius: "20px",
//               height: open3 ? "fit-content" : "",
//             }}
//           >
//             {/* <div> */}
//             <div
//               className="d-flex align-items-center justify-content-between col-12"
//               style={{
//                 padding: "20px 29px 20px 18px",
//               }}
//             >
//               <div
//                 className="fw-400"
//                 // style={{ width: "70vw" }}
//               >
//                 Can I create digital invitations on Awambe?
//               </div>
//               <div>
//                 {open3 ? (
//                   <div>
//                     <CustomSvg name="minus" />
//                   </div>
//                 ) : (
//                   <div>
//                     <CustomSvg name="plus" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* </div> */}
//             <Collapse in={open3}>
//               <div id="example-fade-text">
//                 <div
//                   className="fw-400 txt-16 "
//                   style={{
//                     borderRadius: "20px",
//                     padding: "20px 29px 20px 18px",
//                   }}
//                 >
//                   Awambe is an event planning platform designed to simplify
//                   African-themed celebrations. We offer customizable
//                   invitations, guest management tools, a curated vendor
//                   marketplace, and a seamless event coordination experience.
//                 </div>
//               </div>
//             </Collapse>
//           </div>

//           <div
//             onClick={() => setOpen4(!open4)}
//             aria-controls="example-collapse-text"
//             aria-expanded={open4}
//             className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
//             style={{
//               cursor: "pointer",
//               borderRadius: "20px",
//               height: open4 ? "fit-content" : "",
//             }}
//           >
//             {/* <div> */}
//             <div
//               className="d-flex align-items-center justify-content-between col-12"
//               style={{
//                 padding: "20px 29px 20px 18px",
//               }}
//             >
//               <div
//                 className="fw-400"
//                 // style={{ width: "70vw" }}
//               >
//                 How does guest management work on Awambe?
//               </div>
//               <div>
//                 {open4 ? (
//                   <div>
//                     <CustomSvg name="minus" />
//                   </div>
//                 ) : (
//                   <div>
//                     <CustomSvg name="plus" />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* </div> */}
//             <Collapse in={open4}>
//               <div id="example-fade-text">
//                 <div
//                   className="fw-400 txt-16 "
//                   style={{
//                     borderRadius: "20px",
//                     padding: "20px 29px 20px 18px",
//                   }}
//                 >
//                   Awambe is an event planning platform designed to simplify
//                   African-themed celebrations. We offer customizable
//                   invitations, guest management tools, a curated vendor
//                   marketplace, and a seamless event coordination experience.
//                 </div>
//               </div>
//             </Collapse>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HowAwambeWorks;
