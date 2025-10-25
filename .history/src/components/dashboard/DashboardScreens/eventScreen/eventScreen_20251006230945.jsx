// EventScreen.jsx

import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EventNavigation from "./eventNavigation";
import AllEvents from "./allEvents"; // Import your components
// Placeholder imports (replace with actual imports for your files)
const UpcomingEvents = () => <div>Upcoming Events Content</div>;
const PastEvents = () => <div>Past Events Content</div>;
const DraftEvents = () => <div>Draft Events Content</div>;


function EventScreen() {
    const navigate = useNavigate();
    const navigateTo = (path) => navigate(path);
    // When navigating to a new event, it should go to the base 'all' screen first
    const goNewEvent = () => navigateTo("/dashboard/events/all"); 

    return (
        <div className="ms-3 w-100">
            <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600 col-12">
                <div>Your Events</div>
                <button
                    onClick={goNewEvent}
                    className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f"
                    style={{ borderRadius: "30px" }}
                >
                    + New Events
                </button>
            </div>
            
            {/* The Navigation component */}
            <EventNavigation /> 

            {/* NESTED EVENT ROUTES - This is the key section */}
            <Routes>
                {/* The 'index' route renders when the URL is exactly /dashboard/events */}
                <Route index element={<AllEvents />} /> 
                {/* Relative paths: "all" means /dashboard/events/all */}
                <Route path="all" element={<AllEvents />} />
                <Route path="upcoming" element={<UpcomingEvents />} />
                <Route path="past" element={<PastEvents />} />
                <Route path="draft" element={<DraftEvents />} />
            </Routes>
            
            {/* The routes above correctly replace the content in this spot. 
            Removing the extra empty <div> at the end to ensure proper structure. */}
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
