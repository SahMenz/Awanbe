import React from 'react';
import { NavLink } from 'react-router-dom';

const eventNavLinks = [
    { title: "All", path: "all" },
    { title: "Upcoming", path: "upcoming" },
    { title: "Past", path: "past" },
    { title: "Draft", path: "draft" },
];

function EventNavigation() {
    return (
        <div className='w-100 mt-5' style={{ borderBottom: "0.5px solid #ccccccff" }}>
            <div className='d-flex justify-content-start align-items-center fs-16 fw-500 txt-73 col-6 gap-5'>
                {eventNavLinks.map((nav) => (
                    <NavLink
                        key={nav.title}
                        to={nav.path}
                        end={nav.path === 'all'} // Use 'end' for the exact match on the index/default route
                        className={({ isActive }) => 
                            `pb-3 cursor text-decoration-none ${isActive ? 'txt-a0 fw-600' : 'txt-73'}`
                        }
                        style={({ isActive }) => ({
                            borderBottom: isActive ? "2px #A04D07 solid" : undefined,
                            color: isActive ? "#A04D07" : undefined,
                        })}
                    >
                        {nav.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default EventNavigation










// import React from 'react'

// function EventNavigation() {
//   return (
//     <div className='w-100 mt-5' style={{borderBottom:"0.5px solid #ccccccff"}}>
//         <div className='d-flex justify-content-between align-items-center fs-16 fw-500 txt-73 col-6'>
//             <div className='pb-3'>All</div>
//             <div className='pb-3'>Upcoming</div>
//             <div className='pb-3'>Past</div>
//             <div className='pb-3'>Draft</div>
//         </div>
//     </div>
//   )
// }

// export default EventNavigation