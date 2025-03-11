import Navigation from "../navigation/navigation"
import Hero from '../hero/hero'
import MergingTradition from '../mergingTraditional/mergingTradition'
import AboutUs from '../aboutUs/aboutUs'
import OurSolutions from '../ourSolutions/ourSolutions'
import HowAwambeWorks from '../howAwambeWorks/howAwambeWorks'
import Footer from '../footer/footer'

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <MergingTradition />
      <AboutUs />
      <OurSolutions />
      <HowAwambeWorks />
      <Footer />
    </div>
  )
}

export default Home