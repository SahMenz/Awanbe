import { BiSearch } from "react-icons/bi";
import { Venue1 } from "../dashboardData/dashboardData";
import filter from "../../../assets/images/filter.png";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
      contentClassName="shadow-lg"
    >
      <Modal.Header style={{border:"none"}}  className="bg-02 txt-00 d-flex justify-content-between">
        <Modal.Title id="">
          Filter
        </Modal.Title>
        <button 
          type="button" 
          style={{borderRadius:"20px", padding:"3px"}}
          className="bg-a0" // Your custom CSS class
          onClick={props.onHide} // Calls the close function
          aria-label="Close"
        >
          <IoClose size={30} color="white" /> {/* Custom icon/style */}
        </button>
      </Modal.Header>
      <Modal.Body className="bg-f7 txt-a0">
        <div>
          <p>Event Type</p>
          <div className="txt-a0 gap-3 d-flex align-items-center flex-wrap">
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Wedding</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Political Events</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Anniversaries</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Beach Events</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Church Events</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Birthday Parties</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Special Club Events</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>School Events</button>
            <button style={{borderRadius:"15px", border:"1px solid #A04D07", padding:"10px 24px"}}>Others</button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer style={{border:"none"}} className="bg-f7"></Modal.Footer>
    </Modal>
  );
}

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
