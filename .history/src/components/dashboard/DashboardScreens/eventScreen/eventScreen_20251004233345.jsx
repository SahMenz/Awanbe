import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

// const navLinks = [
//   {
//     title: "All",
//     path: "/events",
//   },
//   {
//     title: "Upcoming",
//     path: "/dashboard/event/upcoming",
//   },
//   {
//     title: "Past",
//     path: "/dashboard/event/past",
//   },
//   {
//     title: "Draft",
//     path: "/dashboard/event/draft",
//   },
// ];

function EventScreen() {


  const navigate = useNavigate()
  const navigateTo = (path) => navigate(path)
  const goHome = () => navigateTo('/dashboard/events/all')

  // const { pathname } = useLocation();
  // const [activeNav, setActiveNav] = useState('All')

  // useEffect(() => {
  //     let setActiveNav = "Overview";
  //     if (pathname.toLowerCase().includes("/dashboard/event/all")) {
  //       setActiveNav = "All";
  //     } else if (pathname.toLowerCase().includes("/dashboard/event/past")) {
  //       setActiveNav = "Past";
  //     } else if (pathname.toLowerCase().includes("/dashboard/event/budget")) {
  //       setActiveNav = "Upcoming";
  //     } else if (pathname.toLowerCase().includes("/dashboard/event/draft")) {
  //       setActiveNav = "Draft";
  //     } else{
  //     setActiveNav('All')
  //   }
  //   }, [pathname]);


    // const displayNavLinks = navLinks.map((nav, i) => {
    // const { title, src, path } = nav;
    // const isActive = activeNav === title;

    // const onNavClick = () => {
    //   path && navigateTo(path);
    //   setActiveNav(title); // Update local state
    // };

  //   return (
  //     <div
  //       key={i}
  //       onClick={onNavClick}
  //       style={{
  //         borderLeft: isActive ? "2px #A04D07 solid" : undefined,
  //         padding: "10px 15px",
  //       }}
  //       className="d-flex align-items-center cursor p-3"
  //     >
  //       <img
  //         src={src}
  //         alt={title}
  //         style={{ filter: isActive ? "invert(96%) sepia(93%) saturate(6000%) hue-rotate(26deg) brightness(96%) contrast(80%)" : "" }}
  //       />
  //       <div style={{ color: isActive ? "#A04D07" : "" }} className="ms-2">
  //         {title}
  //       </div>
  //     </div>
  //   );
  // });



  return (
    <div className="ms-3">
        <div className="txt-a0 d-flex justify-content-between gap-3 fs-32 fw-600 w-100">
            <div>Your Events</div>
            <button onClick={goHome} className="bg-a0 fs-19 fw-500 px-4 py-2 txt-f5f" style={{borderRadius:"30px"}}>+ New Events</button>
            {/* <div>{displayNavLinks}</div> */}
        </div>
        {/* <Routes> */}
            {/* <Route path="/events" element={<AllEvents />} /> */}
            {/* <Route path="/Upcoming" element={<Upcoming />} /> */}
            {/* <Route path="/Past" element={<Past />} /> */}
            {/* <Route path="/Draft" element={<Draft />} /> */}
          {/* </Routes> */}
        <div></div>
    </div>
  )
}

export default EventScreen