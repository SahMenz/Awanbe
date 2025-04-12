import "./footer.css";
import footerLogo from "../../assets/images/footerLogo.png";
import linkedIn from "../../assets/images/linkedIn.svg";
import faceBook from "../../assets/images/faceBook.svg";
import instagram from "../../assets/images/instagram.svg";
import x from "../../assets/images/x.svg";

function Footer({
  onSolutionsClick,
  onHomeClick,
  onAboutUsClick,
  onHowWeWorkClick,
}) {
  return (
    <div className="container-adjustment gap-5 bg-a0 py-5 footerBackgroundImage txt d-flex justify-content-start flex-wrap justify-content-lg-between">
      <div>
        <div>
          <img src={footerLogo} />
        </div>
        <div
          className="my-4 fs-19 fw-500 txt-f5f"
          style={{ maxWidth: "329px" }}
        >
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
        <div className="fw-23 fw-800 txt-f5f">Explore</div>
        <div onClick={onHomeClick} className="cursor fw-19 fw-500 txt-eb my-3">Home</div>
        <div onClick={onAboutUsClick} className="cursor fw-19 fw-500 txt-eb">About us</div>
        <div onClick={onSolutionsClick} className="cursor fw-19 fw-500 txt-eb my-3">Our solution</div>
        <div onClick={onHowWeWorkClick} className="cursor fw-19 fw-500 txt-eb">How it works</div>
      </div>
      <div>
        <div className="cursor fw-23 fw-800 txt-f5f">Quick Links</div>
        <div className="cursor fw-19 fw-500 txt-eb my-3">Privacy policy</div>
        <div className="cursor fw-19 fw-500 txt-eb">Terms of use</div>
      </div>
      <div>
        <div className="fw-23 fw-800 txt-f5f">Contacts</div>
        <div className="fw-19 fw-500 txt-eb my-3">+234 903 456 8901</div>
        <div className="fw-19 fw-500 txt-eb">contact@awanbe.com</div>
      </div>
    </div>
  );
}

export default Footer;
