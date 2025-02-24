import logoInHero from "../../assets/images/logoInHero.svg";
import "./hero.css";
function Hero() {
  return (
    <div className="bg-f5">
      <div className="container-adjustment d-flex align-items-center flex-column text-center">
        <img src={logoInHero} />
        <div className="fs-63 fw-600 container-adjustment"style={{minWidth:"350px", width:"85vw"}}>
          New Bespoke African-Themed Solution For Party Planning
        </div>
        <div className="fs-19 fw-400 container-adjustment" style={{minWidth:"300px", width:"100vw"}}>
          Discover a thoughtfully designed solution for African-themed party
          planning. With customizable invitations & digital event websites, a
          trusted vendor network, and efficient guest management, every
          celebration is both distinctive and memorable.
        </div>
      </div>
    </div>
  );
}

export default Hero;
