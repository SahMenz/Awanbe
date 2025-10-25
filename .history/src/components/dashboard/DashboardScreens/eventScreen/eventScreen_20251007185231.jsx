import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EventNavigation from "./EventNavigation";
import PastEvents from "./pastEvents";
import UpcomingEvent from "./upcomingEvent";
import AllEvents from "./allEvents";
import DraftEvents from "./draftEvents";

// --- Dummy components created for a runnable example ---
function AllEventsFunc() {
  return (
    <div className="">
      <AllEvents />
    </div>
  );
}
function UpcomingEventsFunc() {
  return (
    <div className="p-8 text-xl font-light text-green-700 bg-white rounded-lg border border-green-200">
      <UpcomingEvent />
    </div>
  );
}
function PastEventsFunc() {
  return (
    <div className="p-8 text-xl font-light text-red-700 bg-white rounded-lg border border-red-200">
      <PastEvents />
    </div>
  );
}
function DraftEventsFunc() {
  return (
    <div className="p-8 text-xl font-light text-yellow-700 bg-white rounded-lg border border-yellow-200">
      <DraftEvents />
    </div>
  );
}

function EventScreen() {
  return (
    <div className="p-lg-5  p-2 pt-lg-0 w-100">
      <div className="txt-a0 d-flex justify-content-between gap-5 fs-32 fw-600 col-12">
        <div>Your Events</div>
        <button
          className="bg-a0 fs-16 fw-500 px-3 py-2 txt-f5f"
          style={{ borderRadius: "30px" }}
        >
          + New Events
        </button>
      </div>

      <EventNavigation />

      <div className="mt-3">
        <Routes>
          <Route index path="all" element={<AllEventsFunc />} />
          <Route path="upcoming" element={<UpcomingEventsFunc />} />
          <Route path="past" element={<PastEventsFunc />} />
          <Route path="draft" element={<DraftEventsFunc />} />
        </Routes>
      </div>
    </div>
  );
}

export default EventScreen;

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
