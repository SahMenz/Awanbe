import logoInHero from "../../assets/images/logoInHero.svg";
import "./hero.css";
function Hero() {
  return (
    <div className="">
      <div className="bg-f5 container-adjustment d-flex align-items-center flex-column text-center">
        <img src={logoInHero} />
        <div
          className="fs-63 fw-600 my-3 bg-f5"
          style={{ minWidth: "350px", width: "75vw" }}
        >
          New Bespoke African-Themed Solution For Party Planning
        </div>
        <div
          className="fs-19 fw-400 bg-f5"
          style={{ minWidth: "300px", width: "65vw" }}
        >
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
