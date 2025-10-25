import { BiBell, BiCart, BiHeart, BiSearch } from "react-icons/bi";
import profile from "../../../assets/images/profile.svg";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function DashboardNav({ title }) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div
      className="bg-ff mb-4 p-3 d-flex align-items-center justify-content-between"
      style={{ borderRadius: "16px" }}
    >
      <div className="fw-500 fs-43 txt-a0">{title}</div> {/* Use the title prop */}
      <div className="d-md-flex d-none align-items-center justify-content-between">
        <div
          className="me-4"
          style={{
            borderRadius: "30px",
            padding: "15px 25px",
            border: "1px solid #737373",
          }}
        >
          <BiSearch size={20} color="#737373" className="me-1" />
          <input placeholder="Search" />
        </div>
        <div>
          <BiCart size={18} color="black" className="cursor" />
          <BiHeart size={18} color="black" className="cursor ms-4" />
          <BiBell size={18} color="black" className="cursor mx-4" />
          <img
            src={profile}
            className="bg-00 cursor"
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
      <div
        onClick={handleShow}
        className=" d-md-none"
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
        <div
          style={{ width: "30px", height: "3px", backgroundColor: "black" }}
        ></div>
      </div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className=""
        style={{ backgroundColor: "#fff" }}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column align-items-center gap-4">
            <div
              className="me-4"
              style={{
                borderRadius: "30px",
                padding: "15px 25px",
                border: "1px solid #737373",
              }}
            >
              <BiSearch size={20} color="#737373" className="me-1" />
              <input placeholder="Search" />
            </div>
            <div>
              <BiCart size={18} color="black" className="cursor" />
              <BiHeart size={18} color="black" className="cursor ms-4" />
              <BiBell size={18} color="black" className="cursor mx-4" />
              <img
                src={profile}
                className="bg-00 cursor"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default DashboardNav;