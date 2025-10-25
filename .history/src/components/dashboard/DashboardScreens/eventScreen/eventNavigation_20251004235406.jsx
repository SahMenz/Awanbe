import React from 'react'

function EventNavigation() {
  return (
    <div className='w-100 mt-5' style={{borderBottom:"0.5px solid #7a7a7aff"}}>
        <div className='d-flex justify-content-between align-items-center fs-16 fw-500 txt-73 col-6'>
            <div className='pb-3'>All</div>
            <div className='pb-3'>Upcoming</div>
            <div className='pb-3'>Past</div>
            <div className='pb-3'>Draft</div>
        </div>
    </div>
  )
}

export default EventNavigation