import logoInHero from "../../assets/images/logoInHero.svg";
import heroImage from "../../assets/images/heroImage.png";
import CustomSvg from "../customSvg/CustomSvg";
function Hero() {
  return (
    <div className="d-flex flex-column pt-4 align-items-center bg-f5">
      <div className="bg-f5 container-adjustment d-flex col-12 align-items-center flex-column text-center">
        <img src={logoInHero} className="bg-f5" />
        <div
          className="fs-63 fw-600 my-3 bg-f5"
          style={{ minWidth: "300px", width: "75vw" }}
        >
          The New Bespoke African-Themed Solution For Party Planning
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
      <img src={heroImage} className="w-100 bg-f5" />
      <button
        className="bg-a0 fs-19 fw-400 txt-ff my-5 d-flex justify-content-center"
        style={{
          padding: "17px 40px",
          maxWidth: "360px",
          borderRadius: "30px",
        }}
      >
        Start planning today <CustomSvg name="arrowRight" />
      </button>
    </div>
  );
}

export default Hero;
