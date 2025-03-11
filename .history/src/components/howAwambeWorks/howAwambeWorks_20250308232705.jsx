import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import CustomSvg from "../customSvg/CustomSvg";
import arrow from '../../assets/images/Arrow.svg'
import guest from '../../assets/images/guest.svg'
import register from '../../assets/images/register.svg'
import planning from '../../assets/images/planning.svg'
import gift from '../../assets/images/gift.svg'
import invitation from '../../assets/images/invitation.svg'

function HowAwambeWorks() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <div className="container-adjustment">
      <div>
        <div className="d-flex align-items-center flex-column justify-content-center text-center">
          <div className="txt-a0 fw-500 fs-43 mb-3">How Awambe Works</div>
          <div className="fs-16 fw-400 col-6">
            Our user-friendly platform guides you through every step of the
            event planning process, ensuring that you remain in control from
            start to finish.
          </div>
        </div>
        <div>
          <div className="d-flex">
            <div className="d-flex col-4">
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={register}/>
                <div className="fs-19 fw-600 my-2">Register</div>
                <div className=" fs-13 fw-400" style={{minWidth:"163px"}}>Quickly sign up, then access your personalized planning dashboard.</div>
              </div>
              <img src={arrow}/>
            </div>
            
            
            <div className="d-flex col-4 align-self-end">
              <div className="text-center d-flex flex-column align-items-center ">
                <img src={invitation}/>
                <div className="fs-19 fw-600 my-2">Invitations</div>
                <div className=" fs-13 fw-400" style={{minWidth:"163px"}}>Design and customize unique invitations with ease, then preview before sending</div>
              </div>
              <img src={arrow}/>
            </div>


          </div>
          {/* <div></div> */}
          {/* <div></div> */}
        </div>
      </div>  
      <div> 
        <div className="fs-43 fw-500 text-center mt-5 mb-4">
          Frequently Asked Questions
        </div>
        <div className="d-flex flex-column align-items-center mb-5">
          <div
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open ? "fit-content" : "",
            }}
          >
            {/* <div> */}
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{
                padding: "20px 29px 20px 18px",
              }}
            >
              <div
                className="fw-400"
                // style={{ width: "70vw" }}
              >
                What is Awambe?
              </div>
              <div>
                {open ? (
                  <div>
                    <CustomSvg name="minus" />
                  </div>
                ) : (
                  <div>
                    <CustomSvg name="plus" />
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <Collapse in={open}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </div>

          <div
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open1 ? "fit-content" : "",
            }}
          >
            {/* <div> */}
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{
                padding: "20px 29px 20px 18px",
              }}
            >
              <div
                className="fw-400"
                // style={{ width: "70vw" }}
              >
                Who can use Awambe?
              </div>
              <div>
                {open1 ? (
                  <div>
                    <CustomSvg name="minus" />
                  </div>
                ) : (
                  <div>
                    <CustomSvg name="plus" />
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <Collapse in={open1}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </div>

          <div
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open2 ? "fit-content" : "",
            }}
          >
            {/* <div> */}
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{
                padding: "20px 29px 20px 18px",
              }}
            >
              <div
                className="fw-400"
                // style={{ width: "70vw" }}
              >
                How does Awambe help with event planning?
              </div>
              <div>
                {open2 ? (
                  <div>
                    <CustomSvg name="minus" />
                  </div>
                ) : (
                  <div>
                    <CustomSvg name="plus" />
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <Collapse in={open2}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </div>

          <div
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open3 ? "fit-content" : "",
            }}
          >
            {/* <div> */}
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{
                padding: "20px 29px 20px 18px",
              }}
            >
              <div
                className="fw-400"
                // style={{ width: "70vw" }}
              >
                Can I create digital invitations on Awambe?
              </div>
              <div>
                {open3 ? (
                  <div>
                    <CustomSvg name="minus" />
                  </div>
                ) : (
                  <div>
                    <CustomSvg name="plus" />
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <Collapse in={open3}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </div>

          <div
            onClick={() => setOpen4(!open4)}
            aria-controls="example-collapse-text"
            aria-expanded={open4}
            className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
            style={{
              cursor: "pointer",
              borderRadius: "20px",
              height: open4 ? "fit-content" : "",
            }}
          >
            {/* <div> */}
            <div
              className="d-flex align-items-center justify-content-between col-12"
              style={{
                padding: "20px 29px 20px 18px",
              }}
            >
              <div
                className="fw-400"
                // style={{ width: "70vw" }}
              >
                How does guest management work on Awambe?
              </div>
              <div>
                {open4 ? (
                  <div>
                    <CustomSvg name="minus" />
                  </div>
                ) : (
                  <div>
                    <CustomSvg name="plus" />
                  </div>
                )}
              </div>
            </div>
            {/* </div> */}
            <Collapse in={open4}>
              <div id="example-fade-text">
                <div
                  className="fw-400 txt-16 "
                  style={{
                    borderRadius: "20px",
                    padding: "20px 29px 20px 18px",
                  }}
                >
                  Awambe is an event planning platform designed to simplify
                  African-themed celebrations. We offer customizable
                  invitations, guest management tools, a curated vendor
                  marketplace, and a seamless event coordination experience.
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowAwambeWorks;
