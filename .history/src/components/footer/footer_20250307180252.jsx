import footerLogo from "../../assets/images/footerLogo.png";
import linkedIn from "../../assets/images/linkedIn.svg";
import faceBook from "../../assets/images/faceBook.svg";
import instagram from "../../assets/images/instagram.svg";
import x from "../../assets/images/x.svg";

function Footer() {
  return (
    <div className="d-flex justify-content-center flex-wrap justify-content-lg-between">
      <div>
        <div>
          <img src={footerLogo} />
        </div>
        <div className="my-3 fs-19 fw-500">
          Awambe simplifies African-themed event planning with custom
          invitations, guest management, and a curated vendor marketplace.
        </div>
        <div>
          <img src={x} />
          <img src={faceBook} className="mx-2" />
          <img src={instagram} />
          <img src={linkedIn} className="mx-2" />
        </div>
      </div>
      <div>
        <div className="fw-23 fw-600 txt-f5f">Explore</div>
        <div>Home</div>
        <div>About us</div>
        <div>Our solution</div>
        <div>How it works</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Footer;
