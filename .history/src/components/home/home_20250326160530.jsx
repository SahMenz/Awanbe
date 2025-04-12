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

  const handleClick = () => {
    if (refValue.current) {
      refValue.current.scrollIntoView()
    }
  };

  return (
    <div>
      <button onClick={handleClick}> click me</button>
      <Navigation />
      <Hero />
      <MergingTradition />
      <AboutUs />
      <div ref={refValue}>
        {/* <OurSolutions /> */}
      </div>
      <HowAwambeWorks />
      <Footer />
    </div>
  );
}

export default Home;
