import './home.css'
import Navigation from "../navigation/navigation"
import Hero from '../hero/hero'

function Home() {
  return (
    <div className="home-container">
      <Navigation />
      <Hero />
    </div>
  )
}

export default Home