import "./home.css";
import Navigation from "../navigation/navigation";
import Hero from "../hero/hero";
import MergingTradition from "../mergingTraditional/mergingTradition";
import AboutUs from "../aboutUs/aboutUs";
import OurSolutions from "../ourSolutions/ourSolutions";
import HowAwambeWorks from "../howAwambeWorks/howAwambeWorks";
import Footer from "../footer/footer";
import { useRef } from "react";

function Home() {
  const refSolutions = useRef(null); // Renamed for clarity: was refValue
  const refHero = useRef(null);      // Renamed for clarity: was refHero
  const refAboutUs = useRef(null);
  const refHowWeWork = useRef(null);

  // Combine refs into an object to pass to Navigation
  const sectionRefs = {
    homeRef: refHero, 
    aboutUsRef: refAboutUs,
    solutionsRef: refSolutions,
    howWeWorkRef: refHowWeWork,
  };

  const handleSolutionsClick = () => {
    if (refSolutions.current) {
      refSolutions.current.scrollIntoView({ behavior: "smooth" }); // Added smooth scroll
    }
  };
  const handleHomeClick = () => {
    // Note: The Navigation component also scrolls to the very top (window.scrollTo(0,0))
    if (refHero.current) {
      refHero.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleAboutUsClick = () => {
    if (refAboutUs.current) {
      refAboutUs.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleHowWeWorkClick = () => {
    if (refHowWeWork.current) {
      refHowWeWork.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navigation
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
        onHomeClick={handleHomeClick} // Added explicit onHomeClick
        sectionRefs={sectionRefs} // Pass the collected refs for scrollspy
      />
      <div style={{marginTop:"70px"}} ref={refHero}>
        <Hero />
      </div>
      <MergingTradition />
      <div ref={refAboutUs}>
        <AboutUs />
      </div>
      <div ref={refSolutions}>
        <OurSolutions />
      </div>
      <div ref={refHowWeWork}>
        <HowAwambeWorks />
      </div>
      <Footer
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
        onHomeClick={handleHomeClick} // Footer also uses the Home click handler
      />
    </div>
  );
}

export default Home;












// import "./home.css";
// import Navigation from "../navigation/navigation";
// import Hero from "../hero/hero";
// import MergingTradition from "../mergingTraditional/mergingTradition";
// import AboutUs from "../aboutUs/aboutUs";
// import OurSolutions from "../ourSolutions/ourSolutions";
// import HowAwambeWorks from "../howAwambeWorks/howAwambeWorks";
// import Footer from "../footer/footer";
// import { useRef, useState, useEffect } from "react"; // Added useState and useEffect

// function Home() {
//   const [activeSection, setActiveSection] = useState('home'); // 1. State for active section
  
//   // Renamed refValue to be more descriptive (solutionsRef)
//   const solutionsRef = useRef(null);
//   const refHero = useRef(null);
//   const refAboutUs = useRef(null);
//   const refHowWeWork = useRef(null);
  
//   // Group refs for easy iteration
//   const sectionRefs = {
//     home: refHero,
//     aboutUs: refAboutUs,
//     solutions: solutionsRef,
//     howItWorks: refHowWeWork,
//   };

//   // 2. Intersection Observer to track the visible section
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           // If a section is intersecting and is near the top of the viewport (or is the largest visible part)
//           if (entry.isIntersecting && entry.intersectionRatio >= 0.5) { 
//             // Get the key (e.g., 'home', 'aboutUs') from the ref map
//             const sectionKey = Object.keys(sectionRefs).find(key => sectionRefs[key].current === entry.target);
//             if (sectionKey) {
//               setActiveSection(sectionKey);
//             }
//           }
//         });
//       },
//       { 
//         root: null, // viewport
//         rootMargin: '0px 0px -50% 0px', // Center of viewport trigger
//         threshold: 0.5, // 50% visible
//       }
//     );

//     // Observe all sections
//     Object.values(sectionRefs).forEach(ref => {
//       if (ref.current) {
//         observer.observe(ref.current);
//       }
//     });

//     // Cleanup function
//     return () => {
//       Object.values(sectionRefs).forEach(ref => {
//         if (ref.current) {
//           observer.unobserve(ref.current);
//         }
//       });
//     };
//   }, []); // Run only once on mount
//   // NOTE: You might need to adjust the rootMargin/threshold based on your layout/header height.

//   // --- Click Handlers (Kept your original ref scrolling logic) ---

//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       // Smooth scroll for a modern feel
//       ref.current.scrollIntoView({ behavior: 'smooth' }); 
//       // Manually set active state on click for immediate feedback
//       const sectionKey = Object.keys(sectionRefs).find(key => sectionRefs[key].current === ref.current);
//       if (sectionKey) {
//           setActiveSection(sectionKey);
//       }
//     }
//   };

//   const handleSolutionsClick = () => scrollToSection(solutionsRef);
//   const handleHomeClick = () => scrollToSection(refHero);
//   const handleAboutUsClick = () => scrollToSection(refAboutUs);
//   const handleHowWeWorkClick = () => scrollToSection(refHowWeWork);


//   return (
//     <div>
//       <Navigation
//         // 3. Pass active state down
//         activeSection={activeSection} 
//         onSolutionsClick={handleSolutionsClick}
//         onAboutUsClick={handleAboutUsClick}
//         onHowWeWorkClick={handleHowWeWorkClick}
//         // Passed to the Navigation component for the 'Home' link
//         onHomeClick={handleHomeClick} 
//       />
//       <div style={{marginTop:"70px"}} ref={refHero}>
//         <Hero />
//       </div>
//       <MergingTradition />
//       <div ref={refAboutUs}>
//         <AboutUs />
//       </div>
//       <div ref={solutionsRef}> {/* Use descriptive ref name here */}
//         <OurSolutions />
//       </div>
//       <div ref={refHowWeWork}>
//         <HowAwambeWorks />
//       </div>
//       <Footer
//         onSolutionsClick={handleSolutionsClick}
//         onAboutUsClick={handleAboutUsClick}
//         onHowWeWorkClick={handleHowWeWorkClick}
//         onHomeClick={handleHomeClick}
//       />
//     </div>
//   );
// }

// export default Home;






// import "./home.css";
// import Navigation from "../navigation/navigation";
// import Hero from "../hero/hero";
// import MergingTradition from "../mergingTraditional/mergingTradition";
// import AboutUs from "../aboutUs/aboutUs";
// import OurSolutions from "../ourSolutions/ourSolutions";
// import HowAwambeWorks from "../howAwambeWorks/howAwambeWorks";
// import Footer from "../footer/footer";
// import { useRef } from "react";

// function Home() {
//   const refValue = useRef(null);
//   const refHero = useRef(null);
//   const refAboutUs = useRef(null);
//   const refHowWeWork = useRef(null);

//   const handleSolutionsClick = () => {
//     if (refValue.current) {
//       refValue.current.scrollIntoView();
//     }
//   };
//   const handleHomeClick = () => {
//     if (refHero.current) {
//       refHero.current.scrollIntoView();
//     }
//   };
//   const handleAboutUsClick = () => {
//     if (refAboutUs.current) {
//       refAboutUs.current.scrollIntoView();
//     }
//   };
//   const handleHowWeWorkClick = () => {
//     if (refHowWeWork.current) {
//       refHowWeWork.current.scrollIntoView();
//     }
//   };

//   return (
//     <div>
//       <Navigation
//         onSolutionsClick={handleSolutionsClick}
//         onAboutUsClick={handleAboutUsClick}
//         onHowWeWorkClick={handleHowWeWorkClick}
//       />
//       <div style={{marginTop:"70px"}} ref={refHero}>
//         <Hero />
//       </div>
//       <MergingTradition />
//       <div ref={refAboutUs}>
//         <AboutUs />
//       </div>
//       <div ref={refValue}>
//         <OurSolutions />
//       </div>
//       <div ref={refHowWeWork}>
//         <HowAwambeWorks />
//       </div>
//       <Footer
//         onSolutionsClick={handleSolutionsClick}
//         onAboutUsClick={handleAboutUsClick}
//         onHowWeWorkClick={handleHowWeWorkClick}
//         onHomeClick={handleHomeClick}
//       />
//     </div>
//   );
// }

// export default Home;
