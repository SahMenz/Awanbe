import './home.css'
import Navigation from "../navigation/navigation"
import Hero from '../hero/hero'
import MergingTradition from '../mergingTraditional/mergingTradition'
import AboutUs from '../aboutUs/aboutUs'

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <MergingTradition />
      <AboutUs />
    </div>
  )
}

export default Home