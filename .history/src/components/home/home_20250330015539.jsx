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
  const refValue = useRef(null);
  const refHero = useRef(null);
  const refAboutUs = useRef(null);
  const refHowWeWork = useRef(null);

  const handleSolutionsClick = () => {
    if (refValue.current) {
      refValue.current.scrollIntoView();
    }
  };
  const handleHomeClick = () => {
    if (refHero.current) {
      refHero.current.scrollIntoView()
    }
  };
  const handleAboutUsClick = () => {
    if (refAboutUs.current) {
      refAboutUs.current.scrollIntoView();
    }
  };
  const handleHowWeWorkClick = () => {
    if (refHowWeWork.current) {
      refHowWeWork.current.scrollIntoView();
    }
  };

  return (
    <div>
      <Navigation
        onSolutionsClick={handleSolutionsClick}
        onAboutUsClick={handleAboutUsClick}
        onHowWeWorkClick={handleHowWeWorkClick}
      />
      <div ref={refHero}>
        <Hero />
      </div>
      <div ref={refMerge}>
        <MergingTradition />
      </div>
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
        handleHomeClick={handleHomeClick}
      />
    </div>
  );
}

export default Home;
