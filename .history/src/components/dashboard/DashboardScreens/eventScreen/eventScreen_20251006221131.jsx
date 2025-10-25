import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import EventNavigation from "./eventNavigation"; // Assuming the path is correct

// --- Placeholder Components for Routing ---
const AllEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for All Events goes here.</div>;
const UpcomingEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for Upcoming Events goes here.</div>;
const PastEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for Past Events goes here.</div>;
const DraftEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for Draft Events goes here.</div>;
const CancelledEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg text-red-700">Content for CANCELLED Events goes here. (New Feature)</div>; // NEW VIEW

// ------------------------------------------

function EventScreen() {
    const navigate = useNavigate();
    const goHome = () => navigate("/dashboard/events/new"); // Adjusted path for clarity, assuming a new event creation path

    return (
        <div className="ms-3 w-100">
            <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600 col-12">
                <div>Your Events</div>
                <button
                    onClick={goHome}
                    className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f"
                    style={{ borderRadius: "30px" }}
                >
                    + New Events
                </button>
            </div>
            
            {/* The Navigation bar that contains the new "Cancelled" link */}
            <EventNavigation />
            
            {/* Nested Routing System */}
            <Routes>
                {/* 1. Redirect from the base path (/dashboard/events) to a default sub-route (/dashboard/events/all).
                  This ensures a view is always shown when "Events" is clicked in the main sidebar.
                */}
                <Route path="/" element={<Navigate to="all" replace />} />
                
                {/* Define the sub-routes relative to the parent route path */}
                <Route path="all" element={<AllEvents />} />
                <Route path="upcoming" element={<UpcomingEvents />} />
                <Route path="past" element={<PastEvents />} />
                <Route path="draft" element={<DraftEvents />} />
                <Route path="cancelled" element={<CancelledEvents />} /> {/* NEW ROUTE ADDED HERE */}
                
                {/* Catch-all for any unknown sub-paths, redirecting to 'all' */}
                <Route path="*" element={<Navigate to="all" replace />} />
            </Routes>
        </div>
    );
}

export default EventScreen;
















// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import EventNavigation from "./eventNavigation";

// // const navLinks = [
// //   {
// //     title: "All",
// //     path: "/events",
// //   },
// //   {
// //     title: "Upcoming",
// //     path: "/dashboard/event/upcoming",
// //   },
// //   {
// //     title: "Past",
// //     path: "/dashboard/event/past",
// //   },
// //   {
// //     title: "Draft",
// //     path: "/dashboard/event/draft",
// //   },
// // ];

// function EventScreen() {
//   const navigate = useNavigate();
//   const navigateTo = (path) => navigate(path);
//   const goHome = () => navigateTo("/dashboard/events/all");

//   // const { pathname } = useLocation();
//   // const [activeNav, setActiveNav] = useState('All')

//   // useEffect(() => {
//   //     let setActiveNav = "Overview";
//   //     if (pathname.toLowerCase().includes("/dashboard/event/all")) {
//   //       setActiveNav = "All";
//   //     } else if (pathname.toLowerCase().includes("/dashboard/event/past")) {
//   //       setActiveNav = "Past";
//   //     } else if (pathname.toLowerCase().includes("/dashboard/event/budget")) {
//   //       setActiveNav = "Upcoming";
//   //     } else if (pathname.toLowerCase().includes("/dashboard/event/draft")) {
//   //       setActiveNav = "Draft";
//   //     } else{
//   //     setActiveNav('All')
//   //   }
//   //   }, [pathname]);

//   // const displayNavLinks = navLinks.map((nav, i) => {
//   // const { title, src, path } = nav;
//   // const isActive = activeNav === title;

//   // const onNavClick = () => {
//   //   path && navigateTo(path);
//   //   setActiveNav(title); // Update local state
//   // };

//   //   return (
//   //     <div
//   //       key={i}
//   //       onClick={onNavClick}
//   //       style={{
//   //         borderLeft: isActive ? "2px #A04D07 solid" : undefined,
//   //         padding: "10px 15px",
//   //       }}
//   //       className="d-flex align-items-center cursor p-3"
//   //     >
//   //       <img
//   //         src={src}
//   //         alt={title}
//   //         style={{ filter: isActive ? "invert(96%) sepia(93%) saturate(6000%) hue-rotate(26deg) brightness(96%) contrast(80%)" : "" }}
//   //       />
//   //       <div style={{ color: isActive ? "#A04D07" : "" }} className="ms-2">
//   //         {title}
//   //       </div>
//   //     </div>
//   //   );
//   // });

//   return (
//     <div className="ms-3 w-100">
//       <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600 col-12">
//         <div>Your Events</div>
//         <button
//           onClick={goHome}
//           className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f"
//           style={{ borderRadius: "30px" }}
//         >
//           + New Events
//         </button>
//       </div>
//       <EventNavigation />
//         {/* <div>{displayNavLinks}</div> */}
//       {/* <Routes> */}
//       {/* <Route path="/events" element={<AllEvents />} /> */}
//       {/* <Route path="/Upcoming" element={<Upcoming />} /> */}
//       {/* <Route path="/Past" element={<Past />} /> */}
//       {/* <Route path="/Draft" element={<Draft />} /> */}
//       {/* </Routes> */}
//       <div></div>
//     </div>
//   );
// }

// export default EventScreen;
