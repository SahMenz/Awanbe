import footerLogo from "../../assets/images/footerLogo.png";
import linkedIn from "../../assets/images/linkedIn.svg";
import faceBook from "../../assets/images/faceBook.svg";
import instagram from "../../assets/images/instagram.svg";
import x from "../../assets/images/x.svg";

function Footer() {
  return (
    <div className="container-adjustment d-flex justify-content-center flex-wrap justify-content-lg-between">
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
        <div className="fw-19 fw-500 txt-eb my-2">Home</div>
        <div className="fw-19 fw-500 txt-eb">About us</div>
        <div className="fw-19 fw-500 txt-eb my-2">Our solution</div>
        <div className="fw-19 fw-500 txt-eb">How it works</div>
      </div>
      <div>
        <div className="fw-23 fw-600 txt-f5f">Quick Links</div>
        <div className="fw-19 fw-500 txt-eb my-2">Privacy policy</div>
        <div className="fw-19 fw-500 txt-eb">Terms of use</div>
      </div>
      <div>
        <div className="fw-23 fw-600 txt-f5f">Contacts</div>
        <div className="fw-19 fw-500 txt-eb my-2">+234 903 456 8901</div>
        <div className="fw-19 fw-500 txt-eb">contact@awanbe.com</div>
      </div>
    </div>
  );
}

export default Footer;
