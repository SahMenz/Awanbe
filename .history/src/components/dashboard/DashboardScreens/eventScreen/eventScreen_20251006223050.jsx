import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import EventNavigation from "./eventNavigation";
import UpcomingEvent from "./upcomingEvent";
import PastEvents from "./pastEvents";
import DraftEvents from "./draftEvents";
import AllEvents from "./allEvents";
// import AllEvents from "./allEvents"; // Assuming this is the AllEvents component
// import Upcoming from "./upcoming"; // Assuming this is the Upcoming component
// import Past from "./past"; // Assuming this is the Past component
// import Draft from "./draft"; // Assuming this is the Draft component

// const navLinks = [ ... ]; // Retained as commented out

function EventScreen() {
  const navigate = useNavigate();
  const navigateTo = (path) => navigate(path);
  // The goHome button should navigate to the base path for 'New Events', or the 'All' path.
  // I'll keep the goHome logic as-is, assuming it's for a 'New Event' creation flow.
  const goHome = () => navigateTo("/dashboard/events/all");

  // Since we are moving the routing logic inside, the useEffect/useState for activeNav
  // should ideally be used here or in EventNavigation, but for now, we'll focus on the routes.

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
      {/* <EventNavigation /> */}
      
      {/* ADDED ROUTES HERE */}
      <Routes>
        {/* Set 'all' as the default/index route for /dashboard/events */}
        <Route index element={<AllEvents />} /> 
        {/* <Route path="all" element={<AllEvents />} /> */}
        <Route path="upcoming" element={<UpcomingEvent />} />
        <Route path="past" element={<PastEvents />} />
        <Route path="draft" element={<DraftEvents />} />
      </Routes>
      {/* END OF ADDED ROUTES */}

      <div></div>
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
