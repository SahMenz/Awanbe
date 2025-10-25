import { Route, Routes } from "react-router-dom"

function EventScreen() {
  return (
    <div className="ms-3">
        <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600">
            <div>Your Events</div>
            <button className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f" style={{borderRadius:"30px"}}>+ New Events</button>
        </div>
        <Routes>
            <Route path="/" element={<All />} />
            <Route path="/Upcoming" element={<Upcoming />} />
            <Route path="/Past" element={<Past />} />
            <Route path="/Draft" element={<Draft />} />
            {/* <Route path="/Vendors" element={<VenueDetails />} /> */}
          </Routes>
        <div></div>
    </div>
  )
}

export default EventScreen