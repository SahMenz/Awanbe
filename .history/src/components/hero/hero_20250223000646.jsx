import logoInHero from "../../assets/images/logoInHero.svg";
import CustomSvg from "../customSvg/CustomSvg";
import "./hero.css";
function Hero() {
  return (
    <div className="d-flex align-items-center flex-col">
      <div className="bg-f5 container-adjustment text-center">
        <img src={logoInHero} className="bg-f5"/>
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
      <div></div>
      <button className="bg-a0 fs-19 fw-400 txt-ff mt-5" style={{padding:"17px 30px", borderRadius:"30px"}}>Start planning today <CustomSvg name="arrowRight"/></button>
    </div>
  );
}

export default Hero;
