import './home.css'
import Navigation from "../navigation/navigation"
import Hero from '../hero/hero'
import MergingTradition from '../mergingTraditional/mergingTradition'

function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <MergingTradition />
    </div>
  )
}

export default Home