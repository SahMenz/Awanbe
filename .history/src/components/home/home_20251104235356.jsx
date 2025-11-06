import "./home.css";
import Navigation from "../navigation/navigation";
import Hero from "../hero/hero";
import MergingTradition from "../mergingTraditional/mergingTradition";
import AboutUs from "../aboutUs/aboutUs";
import OurSolutions from "../ourSolutions/ourSolutions";
import HowAwambeWorks from "../howAwambeWorks/howAwambeWorks";
import Footer from "../footer/footer";
import { useRef, useState, useEffect } from "react"; // Import useState and useEffect

function Home() {
  // State to manage the currently active section. Default is 'home'.
  const [activeSection, setActiveSection] = useState('home'); 

  const refValue = useRef(null); // OurSolutions
  const refHero = useRef(null); // Hero / Home
  const refAboutUs = useRef(null);
  const refHowWeWork = useRef(null);

  // Helper function to scroll and set state
  const scrollToRef = (ref, sectionKey) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionKey); // Set the active state when scrolling
    }
  };

  const handleSolutionsClick = () => scrollToRef(refValue, 'solutions');
  const handleHomeClick = () => scrollToRef(refHero, 'home');
  const handleAboutUsClick = () => scrollToRef(refAboutUs, 'about');
  const handleHowWeWorkClick = () => scrollToRef(refHowWeWork, 'howitworks');

  // OPTIONAL: Add an observer to automatically set active section on scroll
  // This provides a much better user experience for a one-page site.

  /*
  const sectionRefs = {
    home: refHero,
    about: refAboutUs,
    solutions: refValue,
    howitworks: refHowWeWork,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Map the DOM element back to its section key
            const sectionKey = Object.keys(sectionRefs).find(key => sectionRefs[key].current === entry.target);
            if (sectionKey) {
              setActiveSection(sectionKey);
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px 0px -50% 0px', // Adjust this to define when a section is "active" (e.g., when it crosses the middle)
        threshold: 0.5, // 50% of the section must be visible
      }
    );

    // Observe each section ref
    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up the observer when the component unmounts
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []); // Run only on mount and unmount
  */

  return (
    <div>
      <Navigation
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
        // Pass the state and updater to the Navigation component
        activeSection={activeSection}
        setActiveSection={setActiveSection} 
      />
      <div style={{marginTop:"70px"}} ref={refHero}>
        <Hero />
      </div>
      <MergingTradition />
      <div ref={refAboutUs}>
        <AboutUs />
      </div>
      <div ref={refValue}>
        <OurSolutions />
      </div>
      <div ref={refHowWeWork}>
        <HowAwambeWorks />
      </div>
      <Footer
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
        onHomeClick={handleHomeClick}
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
