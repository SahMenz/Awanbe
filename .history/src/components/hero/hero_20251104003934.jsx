import { useRef, useEffect } from "react";
import "./hero.css"; // Ensure to import the new CSS file
import logoInHero from "../../assets/images/logoInHero.svg";
import heroImage from "../../assets/images/heroImage.png";
import CustomSvg from "../customSvg/CustomSvg";


function Hero() {
  const heroRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Collect all elements to observe
    const elementsToAnimate = [logoRef, titleRef, subtitleRef, imageRef, buttonRef];
    
    // Function to add the animation class sequentially
    const triggerAnimations = () => {
        elementsToAnimate.forEach((ref, index) => {
            if (ref.current) {
                // Stagger the animation start time
                setTimeout(() => {
                    ref.current.classList.add('fade-in-up');
                }, index * 150); // 150ms delay between elements
            }
        });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the staggered animation when the main container enters view
            triggerAnimations(); 
            // Stop observing after the animation has been triggered once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Cleanup function
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div 
        className="d-flex flex-column pt-4 align-items-center bg-f5"
        ref={heroRef} // Ref for the Intersection Observer target
    >
      <div className="bg-f5 container-adjustment d-flex col-12 align-items-center flex-column text-center">
        {/* Logo - Initial hidden state and ref added */}
        <img 
            src={logoInHero} 
            className="bg-f5 initial-hidden" 
            ref={logoRef} 
            alt="Logo" 
        />
        
        {/* Title - Initial hidden state and ref added */}
        <div
          className="fs-63 fw-600 my-3 bg-f5 initial-hidden"
          style={{ minWidth: "300px", width: "75vw" }}
          ref={titleRef}
        >
          The New Bespoke African-Themed Solution For Party Planning
        </div>
        
        {/* Subtitle - Initial hidden state and ref added */}
        <div
          className="fs-19 fw-400 bg-f5 initial-hidden"
          style={{ minWidth: "300px", width: "65vw" }}
          ref={subtitleRef}
        >
          Discover a thoughtfully designed solution for African-themed party
          planning. With customizable invitations & digital event websites, a
          trusted vendor network, and efficient guest management, every
          celebration is both distinctive and memorable.
        </div>
      </div>
      
      {/* Hero Image - Initial hidden state and ref added */}
      <img 
        src={heroImage} 
        className="w-100 bg-f5 initial-hidden" 
        ref={imageRef} 
        alt="African Themed Party Hero"
      />
      
      {/* Button - Initial hidden state, ref added, and style moved to CSS */}
      <button
        className="bg-a0 fs-19 fw-400 txt-ff my-5 d-flex justify-content-center hero-button initial-hidden"
        ref={buttonRef}
      >
        Start planning today <CustomSvg name="arrowRight" />
      </button>
    </div>
  );
}

export default Hero;
