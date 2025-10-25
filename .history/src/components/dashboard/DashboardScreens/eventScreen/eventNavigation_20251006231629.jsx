import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
    { title: "All", path: "/dashboard/events/all" }, // Relative path from /dashboard/events
    { title: "Upcoming", path: "/dashboard/events/upcoming" },
    { title: "Past", path: "/dashboard/events/past" },
    { title: "Draft", path: "/dashboard/events/draft" },
];

function EventNavigation() {
    return (
        <div className='w-100 mt-5' style={{ borderBottom: "0.5px solid #ccccccff" }}>
            <div className='d-flex gap-5 align-items-center fs-16 fw-500 col-6'>
                {navLinks.map((nav) => (
                    <NavLink
                        key={nav.title}
                        to={nav.path}
                        end={nav.path === "all"} // 'end' ensures it only matches /dashboard/events/all exactly
                        className={({ isActive }) => 
                            `pb-3 cursor-pointer ${isActive ? 'txt-a0 text-decoration-none border-bottom-a0 fw-600' : 'txt-73 text-decoration-none'}` // Assuming 'txt-a0' and 'border-bottom-a0' are styles for active state
                        }
                        // style={{
                        //     borderBottom: '2px solid transparent' // Placeholder for border
                        // }}
                    >
                        {nav.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default EventNavigation;


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