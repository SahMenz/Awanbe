import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import CustomSvg from "../customSvg/CustomSvg"

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
        {/* <div></div> */}
      </div>
      <div>
        <div className="fs-43 fw-500 text-center mt-5 mb-4">Frequently Asked Questions</div>
          <div className="d-flex flex-column align-items-center">
              <div
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="bg-eb flex-column d-flex mt-3 col-10 align-items-center justify-content-between"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  // height: open ? "" : "90px",
                }}
              >
                {/* <div> */}
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      // padding: "20px 29px 20px 18px",
                    }}
                  >
                    <div
                      className="fw-400"
                      // style={{ width: "70vw" }}
                    >
                      What is Verion X?
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
                        // padding: "20px 29px 20px 18px",
                      }}
                    >
                      Verion X is a comprehensive career development platform
                      designed to help you achieve your professional goals. We
                      connect job seekers with top employers, offer a wide range
                      of skill-enhancing courses, and provide professional CV
                      templates to help you stand out in the job market.
                    </div>
                  </div>
                </Collapse>
              </div>

              <div
                onClick={() => setOpen1(!open1)}
                aria-controls="example-fade-text"
                aria-expanded={open1}
                className="bg-eb mt-4 flex-column d-flex align-items-center justify-content-between"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  height: open1 ? "" : "90px",
                  width: "90vw",
                  maxWidth: "553px",
                }}
              >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      padding: "20px 29px 20px 18px",
                      width: "90vw",
                      maxWidth: "553px",
                    }}
                  >
                    <div
                      className="fw-400 textAdjust text-start lh-34"
                      style={{ width: "70vw" }}
                    >
                      What are the courses available on Verion X?
                    </div>
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
                <Collapse in={open1}>
                  <div id="example-fade-text">
                    <div
                      className="fw-400 txt-16 lh-26 accordionDesc"
                      style={{
                        borderRadius: "20px",
                        padding: "20px 29px 20px 18px",
                        width: "90vw",
                        maxWidth: "553px",
                      }}
                    >
                      VerionX, as a platform that connects job seekers with
                      opportunities and also offers courses, can provide a
                      comprehensive learning experience. Here are some potential
                      course categories and specific examples: Technical Skills:
                      Data science and analytics Cybersecurity Web development
                      (front-end, back-end, full-stack) Mobile app development
                      UI/UX design, Soft Skills: Communication and interpersonal
                      skills Leadership and management Teamwork and
                      collaboration Problem-solving and critical thinking.
                    </div>
                  </div>
                </Collapse>
              </div>

              <div
                onClick={() => setOpen2(!open2)}
                aria-controls="example-fade-text"
                aria-expanded={open2}
                className="bg-eb mt-4 flex-column d-flex align-items-center justify-content-between"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  height: open2 ? "" : "90px",
                  width: "90vw",
                  maxWidth: "553px",
                }}
              >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      padding: "20px 29px 20px 18px",
                      width: "90vw",
                      maxWidth: "553px",
                    }}
                  >
                    <div
                      className="fw-400 textAdjust text-start lh-34"
                      style={{ width: "70vw" }}
                    >
                      How do I create a profile on Verion X?
                    </div>
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
                <Collapse in={open2}>
                  <div id="example-fade-text">
                    <div
                      className="fw-400 txt-16 lh-26 accordionDesc"
                      style={{
                        borderRadius: "20px",
                        padding: "20px 29px 20px 18px",
                        width: "90vw",
                        maxWidth: "553px",
                      }}
                    >
                      Creating a profile on verion X is A seamless process that
                      is crucial for the retrieval of user information. Landing
                      Page: The user arrives at Verion X&apos;s homepage or a
                      dedicated signup page. Signup Form: A clear and concise
                      form should be presented, gathering essential information
                      like: Name Email Password
                    </div>
                  </div>
                </Collapse>
              </div>
            
              <div
                onClick={() => setOpen3(!open3)}
                aria-controls="example-fade-text"
                aria-expanded={open3}
                className="bg-eb mt-4 flex-column d-flex align-items-center justify-content-between"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  height: open3 ? "" : "90px",
                  width: "90vw",
                  maxWidth: "553px",
                }}
              >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      padding: "20px 29px 20px 18px",
                      width: "90vw",
                      maxWidth: "553px",
                    }}
                  >
                    <div
                      className="fw-400 textAdjust text-start lh-34"
                      style={{ width: "70vw" }}
                    >
                      Is there any cost to use Verion X?
                    </div>
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
                <Collapse in={open3}>
                  <div id="example-fade-text">
                    <div
                      className="fw-400 txt-16 lh-26 accordionDesc"
                      style={{
                        borderRadius: "20px",
                        padding: "20px 29px 20px 18px",
                        width: "90vw",
                        maxWidth: "553px",
                      }}
                    >
                      Verion X is completely free for job seekers. You can
                      search for jobs, apply, and access career resources
                      without paying a dime. For course learners, there&apos;s a
                      mix of free and paid courses. We offer a selection of free
                      courses to help you get started. For in-depth learning and
                      certifications, premium courses may have a fee.
                    </div>
                  </div>
                </Collapse>
              </div>

              <div
                onClick={() => setOpen4(!open4)}
                aria-controls="example-fade-text"
                aria-expanded={open4}
                className="bg-eb mt-4 flex-column d-flex align-items-center justify-content-between"
                style={{
                  cursor: "pointer",
                  borderRadius: "20px",
                  height: open4 ? "" : "90px",
                  width: "90vw",
                  maxWidth: "553px",
                }}
              >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{
                      padding: "20px 29px 20px 18px",
                      width: "90vw",
                      maxWidth: "553px",
                    }}
                  >
                    <div
                      className="fw-400 textAdjust text-start lh-34"
                      style={{ width: "70vw" }}
                    >
                      How does the job matching algorithm work?
                    </div>
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
                <Collapse in={open4}>
                  <div id="example-fade-text">
                    <div
                      className="fw-400 txt-16 lh-26 accordionDesc"
                      style={{
                        borderRadius: "20px",
                        padding: "20px 29px 20px 18px",
                        width: "90vw",
                        maxWidth: "553px",
                      }}
                    >
                      Our job matching algorithm is designed to connect you with
                      the perfect job opportunity based on your unique skills,
                      experience, and career goals. Here’s how it works: Skill
                      Assessment: We analyze your resume and complete skill
                      assessments to identify your core competencies and areas
                      of expertise. Job Profile Matching: Our algorithm compares
                      your profile against thousands of job postings, looking
                      for roles that align with your skills and experience.
                      Preference Alignment: We consider your desired job
                      location, salary expectations, and industry preferences to
                      refine the job search results.
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
