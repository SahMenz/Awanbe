// EventScreen.js (No mandatory changes, but a suggestion for simplification)

import { Route, Routes } from "react-router-dom"; // Removed unused imports
import EventNavigation from "./EventNavigation";

// --- Dummy components created for a runnable example ---
// ... (AllEvents, UpcomingEvents, PastEvents, DraftEvents components remain the same)
// --------------------------------------------------------

function EventScreen() {
  return (
    <div className="p-5 pt-0 w-100">
      <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600 col-12">
        <div>Your Events</div>
        <button
          className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f"
          style={{ borderRadius: "30px" }}
        >
          + New Events
        </button>
      </div>

      <EventNavigation />

      <div className="mt-3">
        <Routes>
          {/* SIMPLIFICATION/CLARIFICATION:
            Since the path for 'Events' in DashboardPanel is now '/dashboard/events/all', 
            you can remove the 'index' route and rely on 'all' matching the explicit path.
            
            If you want '/dashboard/events' (with no segment) to also show AllEvents, 
            you should keep the 'index' route and ensure EventNavigation also links to it 
            or keep the redundant path="all" (which is okay).
          */}
          
          {/* Original structure kept for compatibility, it handles '/all' and (if no segment is provided, this won't be hit because of the index route below, but it's redundant) */}
          <Route path="all" element={<AllEvents />} />

          {/* If the parent route in the main application's Routes is something like:
              <Route path="events/*" element={<EventScreen />} />
              ... then this index route will catch the exact match for '/dashboard/events'. 
              Since DashboardPanel now explicitly navigates to '/dashboard/events/all', 
              this index route is not strictly needed for that scenario, but is useful 
              if other parts of the app link to the base path.
              
              If you want /dashboard/events to also show all, you'd add:
              <Route index element={<AllEvents />} />
          */}
          
          {/* The key is that the new DashboardPanel path, /dashboard/events/all, 
             will match the Route with path="all". */}

          <Route path="upcoming" element={<UpcomingEvents />} />
          <Route path="past" element={<PastEvents />} />
          <Route path="draft" element={<DraftEvents />} />

        </Routes>
      </div>
    </div>
  );
}

export default EventScreen;













// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import EventNavigation from "./EventNavigation";

// // --- Dummy components created for a runnable example ---
// function AllEvents() {
//   return (
//     <div className="p-8 text-xl font-light text-gray-700 bg-white rounded-lg border border-gray-200">
//       ✅ All Events Overview (Matches base path / or /all)
//     </div>
//   );
// }
// function UpcomingEvents() {
//   return (
//     <div className="p-8 text-xl font-light text-green-700 bg-white rounded-lg border border-green-200">
//       🗓️ Upcoming Events List
//     </div>
//   );
// }
// function PastEvents() {
//   return (
//     <div className="p-8 text-xl font-light text-red-700 bg-white rounded-lg border border-red-200">
//       ⏳ Past Events History
//     </div>
//   );
// }
// function DraftEvents() {
//   return (
//     <div className="p-8 text-xl font-light text-yellow-700 bg-white rounded-lg border border-yellow-200">
//       📝 Draft Events Work in Progress
//     </div>
//   );
// }
// // --------------------------------------------------------

// function EventScreen() {
//   // Hooks imported but not strictly needed for this file's logic, kept for context
//   // const location = useLocation();
//   // const navigate = useNavigate();

//   return (
//     // Applied Tailwind classes for layout and spacing
//     <div className="p-5 pt-0 w-100">
//       <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600 col-12">
//         <div>Your Events</div>
//         <button
//           className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f"
//           style={{ borderRadius: "30px" }}
//         >
//           + New Events
//         </button>
//       </div>

//       <EventNavigation />

//       <div className="mt-3">
//         <Routes>
//           {/* 'index' route matches the parent path exactly (e.g., /dashboard/events) and serves as the default view. */}
//           {/* <Route index element={<AllEvents />} /> */}

//           {/* Explicitly adding 'all' segment is often useful for matching the URL segment */}
//           <Route index path="all" element={<AllEvents />} />

//           {/* Other segments - using relative paths now */}
//           <Route path="upcoming" element={<UpcomingEvents />} />
//           <Route path="past" element={<PastEvents />} />
//           <Route path="draft" element={<DraftEvents />} />

//           {/* Optional: Add a catch-all route for 404s if desired */}
//           {/* <Route path="*" element={<NotFoundComponent />} /> */}
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default EventScreen;













// // EventScreen.jsx

// import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
// import EventNavigation from "./eventNavigation";
// import AllEvents from "./allEvents"; // Assuming this is already imported
// //
// // 👇 REPLACE THE PLACEHOLDERS WITH ACTUAL IMPORTS
// import UpcomingEvents from "./UpcomingEvents";
// import PastEvents from "./PastEvents";
// import DraftEvents from "./DraftEvents";

// function EventScreen() {
//     // ... (rest of your component logic)

//     return (
//         <div className="ms-3 w-100">
//             {/* ... (header and EventNavigation) ... */}

//             <EventNavigation />

//             <Routes>
//                 {/* The component prop now refers to the imported components */}
//                 <Route index element={<AllEvents />} />
//                 <Route path="/dashboard/events/all" element={<AllEvents />} />
//                 <Route path="/dashboard/events/upcoming" element={<UpcomingEvents />} />
//                 <Route path="/dashboard/events/past" element={<PastEvents />} />
//                 <Route path="/dashboard/events/draft" element={<DraftEvents />} />
//             </Routes>

//         </div>
//     );
// }

// export default EventScreen;

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
