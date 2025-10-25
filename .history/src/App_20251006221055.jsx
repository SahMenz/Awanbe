import React from 'react';
import { HashRouter, Route, Routes, Navigate, Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// The problematic CSS imports have been removed to fix the compilation error.
// The app relies on assumed Tailwind CSS availability for styling.

// --- Placeholder Components for Demonstrating Routing Structure ---
// NOTE: In a real app, these should remain imports from their respective files.

const ScrollToTop = () => { useEffect(() => { window.scrollTo(0, 0); }, []); return null; };
const Home = () => <div>Home Page</div>;
const Login = () => <div>Login Page</div>;
const SignUp = () => <div>Sign Up Page</div>;
const RecoverAccountEmail = () => <div>Recover Account Email Screen</div>;
const RecoverAccountDetails = () => <div>Recover Account Details Screen</div>;
const RecoveredAccount = () => <div>Recovered Account Screen</div>;
const AllEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for All Events goes here.</div>;
const UpcomingEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for Upcoming Events goes here.</div>;
const PastEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for Past Events goes here.</div>;
const DraftEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg">Content for Draft Events goes here.</div>;
const CancelledEvents = () => <div className="p-4 bg-gray-100 mt-4 rounded-lg text-red-700">Content for CANCELLED Events goes here.</div>;
const OverviewScreen = () => <div className="p-4">Dashboard Overview Content</div>;
const VenuesScreen = () => <div className="p-4">Venues Content</div>;
const VendorsScreen = () => <div className="p-4">Vendors Content</div>;
const InviteScreen = () => <div className="p-4">Invite Card Content</div>;
const BudgetScreen = () => <div className="p-4">Budget Plan Content</div>;

// Event Navigation Component
const eventNavLinks = [
    { title: "All", path: "all" },
    { title: "Upcoming", path: "upcoming" },
    { title: "Past", path: "past" },
    { title: "Draft", path: "draft" },
    { title: "Cancelled", path: "cancelled" },
];

const EventNavigation = () => {
    const getNavLinkStyle = ({ isActive }) => ({
        paddingBottom: '0.75rem',
        cursor: 'pointer',
        transition: 'all 0.15s',
        color: isActive ? '#A04D07' : '#737373',
        borderBottom: isActive ? '2px solid #A04D07' : 'none',
        fontWeight: '500',
        marginRight: '2rem',
        textDecoration: 'none'
    });

    return (
        <div className='w-full mt-5' style={{ borderBottom: "0.5px solid #ccccccff" }}>
            <div className='flex items-center text-base font-medium'>
                {eventNavLinks.map((nav) => (
                    // NavLink automatically gets 'useLocation' data, which works because it's now inside the main <Routes>
                    <NavLink
                        key={nav.title}
                        to={nav.path}
                        style={getNavLinkStyle}
                        end={nav.path === 'all'}
                    >
                        {nav.title}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

// Event Screen Component (Container for Event Sub-Routes)
const EventScreen = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-semibold text-[#A04D07]">Your Events</h2>
                <button className="bg-[#A04D07] text-white px-4 py-2 rounded-full text-lg">
                    + New Events
                </button>
            </div>
            
            <EventNavigation />
            
            {/* Nested Routes for Events: /dashboard/events/all, /dashboard/events/upcoming, etc. */}
            <Routes>
                {/* When user hits /dashboard/events (path=""), redirect to "all" */}
                <Route path="/" element={<Navigate to="all" replace />} />
                <Route path="all" element={<AllEvents />} />
                <Route path="upcoming" element={<UpcomingEvents />} />
                <Route path="past" element={<PastEvents />} />
                <Route path="draft" element={<DraftEvents />} />
                <Route path="cancelled" element={<CancelledEvents />} /> 
                <Route path="*" element={<Navigate to="all" replace />} />
            </Routes>
        </div>
    );
};


// Dashboard Component (Main Layout) - Must use <Outlet> to render child routes
const Dashboard = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    // Placeholder for DashboardPanel logic (Sidebar/Nav)
    const navLinks = [
        { title: "Overview", path: "/dashboard/overview" },
        { title: "Venues", path: "/dashboard/venues" },
        { title: "Vendors", path: "/dashboard/vendors" },
        { title: "Events", path: "/dashboard/events" }, // Main Events link
        // ... other links
    ];

    const DashboardPanel = () => (
        <div className="p-8 w-64 bg-white shadow-lg flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-4 text-[#A04D07]">Dashboard</h3>
            {navLinks.map(link => (
                <div 
                    key={link.title}
                    onClick={() => navigate(link.path)}
                    // Improved active state checking for navigation links
                    className={`cursor-pointer p-2 rounded transition-colors ${
                        // Check if the current pathname starts with the link's path for active state
                        (link.path === '/dashboard/overview' && pathname === link.path) ||
                        (link.path !== '/dashboard/overview' && pathname.startsWith(link.path))
                        ? 'bg-orange-100 text-[#A04D07] font-semibold' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    {link.title}
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex min-h-screen bg-gray-50">
            <DashboardPanel /> 
            <main className="flex-grow p-8">
                {/* <Outlet> renders the matching child route, e.g., EventScreen, VenuesScreen, etc. */}
                <Outlet /> 
            </main>
        </div>
    );
}

// Main App Component (Your Root File)
function App() {
    return (
        <div>
            {/* The main router wrapper */}
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    {/* MAIN ROUTES */}
                    <Route path="/" element={<Home />} />
                    
                    {/* AUTH ROUTES */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/recover-account-email" element={<RecoverAccountEmail />} />
                    <Route path="/recover-account-details" element={<RecoverAccountDetails />} />
                    <Route path="/recovered-account" element={<RecoveredAccount />} />

                    {/* DASHBOARD NESTED ROUTES */}
                    {/* The Dashboard component acts as the layout, using <Outlet> to render children */}
                    {/* We use a path ending in /* to capture all children. */}
                    <Route path="/dashboard/*" element={<Dashboard />}>
                        {/* Define explicit child paths that will be rendered inside Dashboard's <Outlet> */}
                        <Route path="overview" element={<OverviewScreen />} />
                        <Route path="venues" element={<VenuesScreen />} />
                        <Route path="vendors" element={<VendorsScreen />} />
                        <Route path="invite" element={<InviteScreen />} />
                        <Route path="budget" element={<BudgetScreen />} />
                        
                        {/* Events route: path="events/*" allows EventScreen to define its own nested <Routes> */}
                        <Route path="events/*" element={<EventScreen />} />
                        
                        {/* Default redirect for /dashboard/ (index route of /dashboard/*) to /dashboard/overview */}
                        <Route index element={<Navigate to="overview" replace />} />

                        {/* Fallback for unknown dashboard routes */}
                        <Route path="*" element={<Navigate to="overview" replace />} />
                    </Route>
                    
                    {/* Fallback for all other unmatched routes */}
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;














// import { useRef } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Login from "./components/authentication/login/login";
// import SignUp from "./components/authentication/signUp/signUp";
// import Home from "./components/home/home";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import RecoverAccountEmail from "./components/authentication/recoverAccount/recoverAccountEmail";
// import RecoverAccountDetails from "./components/authentication/recoverAccount/recoverAccountDetails";
// import RecoveredAccount from "./components/authentication/recoverAccount/recoveredAccount";
// import ScrollToTop from "./components/scroll/ScrollToTop";
// import Dashboard from "./components/dashboard/dashboard";
// import AllEvents from "./components/dashboard/DashboardScreens/eventScreen/allEvents";
// // 
// function App() {
//   return (
//     <div>
//       <HashRouter>
//         <ScrollToTop />
//         <Routes>
//           {/* MAIN ROUTE */}

//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />

//           {/* AUTH ROUTE */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signUp" element={<SignUp />} />
//           <Route
//             path="/recover-account-email"
//             element={<RecoverAccountEmail />}
//           />
//           <Route
//             path="/recover-account-details"
//             element={<RecoverAccountDetails />}
//           />
//           <Route path="/recovered-account" element={<RecoveredAccount />} />

//           {/* DASHBOARD ROUTE */}
//           <Route
//             path="/dashboard/*"
//             element={
//               // <ProtectedRoute>
//               <Dashboard />
//               // </ProtectedRoute>
//             }
//           />


//           <Route
//             path="/dashboard/events/all"
//             element={<AllEvents />}
//           />
//         </Routes>
//       </HashRouter>
//     </div>
//   );
// }

// export default App;
