import venueSittingCapacity from "../../../assets/images/venueSittingCapacity.svg";
import venueType from "../../../assets/images/venueType.svg";
import venueSettings from "../../../assets/images/venueSettings.svg";
import venueFacebook from "../../../assets/images/venueFacebook.svg";
import venueX from "../../../assets/images/venueX.svg";
import venueInstagram from "../../../assets/images/venueInstagram.svg";
import { MdCall } from "react-icons/md";
import { BiLocationPlus } from "react-icons/bi";
import { venueData } from "../dashboardData/dashboardData";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function MyVerticallyCenteredModal(props) {
  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Form submitted with values:", values);
    setSubmitting(false);
    // You can close the modal after a successful submission
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      contentClassName="shadow-lg"
    >
      <Modal.Header closeButton className="bg-02 txt-ff">
        <Modal.Title id="contained-modal-title-vcenter">
          Consultation form
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{ name: "", email: "", message: "", businessType: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Modal.Body className="bg-02 txt-ff">
              <div
                style={{
                  borderRadius: "25px",
                  minWidth: "280px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Name Field */}
                <div style={{ position: "relative" }}>
                  <CgProfile
                    size="25"
                    style={{
                      color: "black",
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: "2",
                    }}
                  />
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name (what should we call you)"
                    className="form-control"
                    style={{
                      width: "100%",
                      minWidth: "200px",
                      paddingLeft: "3rem",
                      borderRadius: "25px",
                    }}
                  />
                </div>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-danger"
                />

                {/* Email Field */}
                <div style={{ position: "relative" }}>
                  <MdEmail
                    size="25"
                    style={{
                      color: "black",
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: "2",
                    }}
                  />
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email (How we will reach out to you)"
                    className="form-control"
                    style={{
                      width: "100%",
                      minWidth: "200px",
                      paddingLeft: "3rem",
                      borderRadius: "25px",
                    }}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />

                {/* Business type Field */}
                <div style={{ position: "relative" }}>
                  <RiBuilding2Line
                    size="25"
                    style={{
                      color: "black",
                      position: "absolute",
                      left: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: "2",
                    }}
                  />
                  <Field
                    type="text"
                    name="businessType"
                    placeholder="Business Type (what best describes your business)"
                    className="form-control"
                    style={{
                      width: "100%",
                      minWidth: "200px",
                      paddingLeft: "3rem",
                      borderRadius: "25px",
                    }}
                  />
                </div>
                <ErrorMessage
                  name="businessType"
                  component="div"
                  className="text-danger"
                />

                {/* Message Field (Textarea) */}
                <div style={{ position: "relative" }}>
                  <LuMessageSquare
                    size="25"
                    style={{
                      color: "black",
                      position: "absolute",
                      left: "1rem",
                      top: "1rem",
                      transform: "translateY(-50%)",
                      zIndex: "2",
                    }}
                  />
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Details on issues found"
                    className="form-control"
                    rows="4"
                    style={{
                      width: "100%",
                      minWidth: "200px",
                      paddingLeft: "3rem",
                      borderRadius: "25px",
                    }}
                  />
                </div>
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-danger"
                />
              </div>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: "#020202" }}>
              {/* Cancel Button */}
              <Button
                onClick={props.onHide}
                style={{
                  backgroundColor: "transparent",
                  color: "#ffd800",
                  border: "1px solid #ffd800",
                  borderRadius: "20px",
                  marginRight: "10px",
                }}
              >
                Cancel
              </Button>
              {/* Submit Button */}
              <Button
                type="submit"
                style={{
                  backgroundColor: "#ffd800",
                  color: "black",
                  border: "none",
                  borderRadius: "20px",
                }}
                disabled={isSubmitting}
              >
                Apply for free initial consultation calls
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}



function VenueDetails() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleShowImage = (imagePath) => {
    setImageUrl(imagePath);
  };

  return (
    <div className="ms-4">
      {venueData.map((venueData) => (
        <>
          <div style={{ borderBottom: "1px solid #737373" }}>
            <div className="mb-5 d-flex flex-column-reverse flex-md-row gap-4 align-items-center  jusitfy-content-center justify-content-md-between">
              <div className="col-6">
                {imageUrl ? (
                  <img src={imageUrl} className="w-100" alt="Displayed Image" />
                ) : (
                  <img src={venueData.venueImage1} className="w-100" alt="No Image selected" />
                )}
              </div>
              <div className="d-flex justify-content-center flex-wrap gap-3 col-5">
                <div onClick={() => handleShowImage(venueData.venueImage1)}>
                  <img
                    src={venueData.venueImage1}
                    style={{ maxWidth: "179px", cursor: "pointer" }}
                  />
                </div>
                <div onClick={() => handleShowImage(venueData.venueImage2)}>
                  <img
                    src={venueData.venueImage2}
                    style={{ maxWidth: "179px", cursor: "pointer" }}
                  />
                </div>
                <div onClick={() => handleShowImage(venueData.venueImage3)}>
                  <img
                    src={venueData.venueImage3}
                    style={{ maxWidth: "179px", cursor: "pointer" }}
                  />
                </div>
                <div onClick={() => handleShowImage(venueData.venueImage4)}>
                  <img
                    src={venueData.venueImage4}
                    style={{ maxWidth: "179px", cursor: "pointer" }}
                  />
                </div>
                <div onClick={() => handleShowImage(venueData.venueImage5)}>
                  <img
                    src={venueData.venueImage5}
                    style={{ maxWidth: "179px", cursor: "pointer" }}
                  />
                </div>
                <div onClick={() => handleShowImage(venueData.venueImage6)}>
                  <img
                    src={venueData.venueImage6}
                    style={{ maxWidth: "179px", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div className="my-3">
              <div className="fw-500 fs-32">{venueData.venueName}</div>
              <div className="fw-400 fs-16 my-2">{venueData.location}</div>
              <div className="fw-500 fs-23">
                Rental Price: ${venueData.price}.00
              </div>
            </div>
          </div>
          <div className="my-3" style={{ borderBottom: "1px solid #737373" }}>
            <div className="fw-500 fs-32">Overview</div>
            <div className="mt-3">
              <div className="d-flex align-items-start ">
                <img src={venueSittingCapacity} />
                <div className="ms-2">
                  <div className="fs-23 fw-400 mb-2">
                    Venue Sitting Capacity
                  </div>
                  <div className="fs-16 fw-400 txt-73">
                    {venueData.sittingCapacity}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="d-flex align-items-start my-4">
                <img src={venueType} />
                <div className="ms-2">
                  <div className="fs-23 fw-400 mb-2">Venue Type</div>
                  <div className="fs-16 fw-400 txt-73">
                    {venueData.venueType}
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div className="d-flex align-items-start ">
                <img src={venueSettings} />
                <div className="ms-2">
                  <div className="fs-23 fw-400 mb-2">Venue Settings</div>
                  <div className="fs-16 fw-400 txt-73">
                    {venueData.venueSettings}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mb-4 pb-4 pt-3 d-flex flex-column flex-md-row justify-content-center justify-content-md-between gap-3"
            style={{ borderBottom: "1px solid #737373" }}
          >
            <div>
              <div className="fw-500 fs-32">About Venue</div>
              <div className="fs-19 fw-400 mt-3">{venueData.AboutVenue}</div>
            </div>
            <div>
              <img src={venueData.venueOnGoogle} />
            </div>
          </div>
          <div>
            <div className="fw-500 fs-32 mb-3">Contact Information</div>
            <div className="d-flex">
              <div className="me-3">
                <BiLocationPlus size={25} />
              </div>
              <div>{venueData.contactAddress}</div>
            </div>
            <div className="my-3 d-flex">
              <div className="me-3">
                <MdCall size={25} />
              </div>
              <div>
                Phone number: {venueData.contactPhoneNumber1} |{" "}
                {venueData.contactPhoneNumber2}
              </div>
            </div>
            <div className="d-flex">
              <div>
                <img src={venueFacebook} />
              </div>
              <div className="mx-3">
                <img src={venueX} />
              </div>
              <div>
                <img src={venueInstagram} />
              </div>
            </div>
            <button
              className="bg-a0 py-2 px-4 cursor txt-f5f fs-19 fw-500 mt-5"
              style={{ borderRadius: "30px" }}
            >
              Get Venue
            </button>
          </div>
        </>
      ))}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default VenueDetails;
