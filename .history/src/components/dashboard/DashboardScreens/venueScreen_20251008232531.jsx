import { BiSearch } from "react-icons/bi";
import { Venue1 } from "../dashboardData/dashboardData";
import filter from "../../../assets/images/filter.png";
import { useState } from "react";
import { Modal } from "bootstrap";

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//       backdrop="static"
//       contentClassName="shadow-lg"
//     >
//       <Modal.Header closeButton className="bg-02 txt-ff">
//         <Modal.Title id="contained-modal-title-vcenter">
//           Consultation form
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body className="bg-02 txt-ff"></Modal.Body>
//       <Modal.Footer style={{ backgroundColor: "#020202" }}></Modal.Footer>
//     </Modal>
//   );
// }

function VenueScreen() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="ms-5">
      <div className="fw-600 fs-43 txt-a0">Select a Venue for your event</div>
      <div
        className="d-flex my-4 bg-ff align-items-center justify-content-between"
        style={{ padding: "0px 8px 0px 0px", borderRadius: "40.6px" }}
      >
        <div className="d-flex col-9 align-items-center">
          <img
            src={filter}
            onClick={() => setModalShow(true)}
            className="cursor"
          />
          <BiSearch size={22} className="mx-3 txt-73" />
          <input
            type="search"
            placeholder="Search for venue"
            className="col-10"
          />
        </div>
        <button
          className="bg-a0 txt-ff d-none d-lg-block"
          style={{ padding: "13px 50px", borderRadius: "40.6px" }}
        >
          Search
        </button>
        <button className="bg-ff d-lg-none">
          <BiSearch size={28} className="mx-3 txt-73" />
        </button>
      </div>
      <div className="gap-3 d-flex algin-items-center flex-wrap justify-content-center justify-content-md-between">
        {Venue1.map((Venue1) => (
          <>
            <div>
              <div>
                <img src={Venue1.venueImage} />
              </div>
              <div className="mt-4">
                <div>{Venue1.venueName}</div>
                <div className="d-flex my-2">
                  <div>{Venue1.location}</div>
                  <div className="mx-2 ">
                    <img src={Venue1.rating} />
                  </div>
                  <div>{Venue1.ratingFigures}</div>
                </div>
                <div>Rental Price: {Venue1.price}</div>
              </div>
            </div>
          </>
        ))}
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default VenueScreen;
