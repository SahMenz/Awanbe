function VenueScreen() {
  return (
    <div className="mt-5">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="fw-500 fs-19">Gardens & Botanical Parks</div>
              <div className="cursor">View all</div>
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
          </div>
  )
}

export default VenueScreen