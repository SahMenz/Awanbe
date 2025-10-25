import { NavLink } from 'react-router-dom';

// Use relative paths, which are standard for nested routing (relative to the parent route, e.g., /dashboard/events).
const navLinks = [
    // Use '.' to link to the index/base path (e.g., /dashboard/events)
    { title: "All", path: ".", isIndex: true }, 
    { title: "Upcoming", path: "upcoming" },
    { title: "Past", path: "past" },
    { title: "Draft", path: "draft" },
];

function EventNavigation() {
    return (
        // Converted Bootstrap classes (d-flex, col-6) to Tailwind CSS for responsiveness and modern styling
        <div className='w-full mt-5 border-b border-gray-300'>
            <div className='flex gap-8 items-center text-lg font-medium w-full md:w-3/4 lg:w-1/2'>
                {navLinks.map((nav) => (
                    <NavLink
                        key={nav.title}
                        to={nav.path}
                        // 'end' is crucial for the index route ("All") so it only matches the exact parent path.
                        end={nav.isIndex} 
                        className={({ isActive }) => 
                            // Using Tailwind classes for the active state (blue-600)
                            `pb-3 cursor-pointer transition-colors duration-200 text-base
                            ${isActive 
                                ? 'text-blue-600 border-b-2 border-blue-600 font-semibold' 
                                : 'text-gray-600 hover:text-gray-800'}`
                        }
                    >
                        {nav.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default EventNavigation;









// import { NavLink } from 'react-router-dom';

// const navLinks = [
//     { title: "All", path: "/dashboard/events/all" }, // Relative path from /dashboard/events
//     { title: "Upcoming", path: "/dashboard/events/upcoming" },
//     { title: "Past", path: "/dashboard/events/past" },
//     { title: "Draft", path: "/dashboard/events/draft" },
// ];

// function EventNavigation() {
//     return (
//         <div className='w-100 mt-5' style={{ borderBottom: "0.5px solid #ccccccff" }}>
//             <div className='d-flex gap-5 align-items-center fs-16 fw-500 col-6'>
//                 {navLinks.map((nav) => (
//                     <NavLink
//                         key={nav.title}
//                         to={nav.path}
//                         end={nav.path === "all"} // 'end' ensures it only matches /dashboard/events/all exactly
//                         className={({ isActive }) => 
//                             `pb-3 cursor-pointer ${isActive ? 'txt-a0 text-decoration-none border-bottom-a0 fw-600' : 'txt-73 text-decoration-none'}` // Assuming 'txt-a0' and 'border-bottom-a0' are styles for active state
//                         }
//                     >
//                         {nav.title}
//                     </NavLink>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default EventNavigation;