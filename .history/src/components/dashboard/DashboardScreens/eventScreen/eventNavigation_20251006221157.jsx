import React from 'react';
import { NavLink } from 'react-router-dom';

const eventNavLinks = [
    { title: "All", path: "all" },
    { title: "Upcoming", path: "upcoming" },
    { title: "Past", path: "past" },
    { title: "Draft", path: "draft" },
    { title: "Cancelled", path: "cancelled" }, // Includes the new 'Cancelled' item
];

function EventNavigation() {
    // Styling function for NavLink to apply active state
    // We use a style object here for better compatibility across environments.
    const getNavLinkStyle = ({ isActive }) => ({
        paddingBottom: '0.75rem',
        cursor: 'pointer',
        transition: 'all 0.15s',
        color: isActive ? '#A04D07' : '#737373', // Active: brown, Inactive: gray
        borderBottom: isActive ? '2px solid #A04D07' : 'none', // Active: bottom border
        fontWeight: '500',
        marginRight: '2rem', // Added margin for spacing between links
        textDecoration: 'none'
    });

    return (
        <div className='w-100 mt-5' style={{ borderBottom: "0.5px solid #ccccccff" }}>
            <div className='d-flex align-items-center fs-16 fw-500'>
                {eventNavLinks.map((nav) => (
                    <NavLink
                        key={nav.title}
                        to={nav.path} // Relative path is correct for nested routing
                        style={getNavLinkStyle}
                        end={nav.path === 'all'} // Ensures 'All' only matches the exact path
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