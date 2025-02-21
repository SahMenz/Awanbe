import { Link } from "react-router-dom"
import Navigation from "../navigation/navigation"

function Home() {
  return (
    <div>
      <Navigation />
    <Link to="/login">Home</Link>
    </div>
  )
}

export default Home