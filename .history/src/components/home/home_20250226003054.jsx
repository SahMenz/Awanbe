import './home.css'
import Navigation from "../navigation/navigation"
import Hero from '../hero/hero'
import MergingTradition from '../mergingTraditional/mergingTradition'
import AboutUs from '../aboutUs/aboutUs'
import OurSolutions from '../ourSolutions/ourSolutions'

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <MergingTradition />
      <AboutUs />
      <OurSolutions />
    </div>
  )
}

export default Home