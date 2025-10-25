import { useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/authentication/login/login";
import SignUp from "./components/authentication/signUp/signUp";
import Home from "./components/home/home";
import { HashRouter, Route, Routes } from "react-router-dom";
import RecoverAccountEmail from "./components/authentication/recoverAccount/recoverAccountEmail";
import RecoverAccountDetails from "./components/authentication/recoverAccount/recoverAccountDetails";
import RecoveredAccount from "./components/authentication/recoverAccount/recoveredAccount";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Dashboard from "./components/dashboard/dashboard";
import AllEvents from "./components/dashboard/DashboardScreens/eventScreen/allEvents";
// import EventScreen from "./components/dashboard/DashboardScreens/eventScreen/eventScreen"; // Import EventScreen
// import Upcoming from "./components/dashboard/DashboardScreens/eventScreen/upcoming"; // Placeholder for Upcoming
// import Past from "./components/dashboard/DashboardScreens/eventScreen/past"; // Placeholder for Past
// import Draft from "./components/dashboard/DashboardScreens/eventScreen/draft"; // Placeholder for Draft

// 
function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* MAIN ROUTE */}

          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* AUTH ROUTE */}
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/recover-account-email"
            element={<RecoverAccountEmail />}
          />
          <Route
            path="/recover-account-details"
            element={<RecoverAccountDetails />}
          />
          <Route path="/recovered-account" element={<RecoveredAccount />} />

          {/* DASHBOARD ROUTE - Master Route */}
          <Route path="/dashboard/*" element={<Dashboard />}>
            {/* Nested Routes for Dashboard Screens will go here, or be handled inside the Dashboard component */}
            {/* I will add specific nested event routes below, which is the most common pattern */}
          </Route>

          {/* DASHBOARD EVENTS ROUTE */}
          <Route path="/dashboard/events" element={<Dashboard />}>
            <Route index element={<EventScreen />} /> {/* Default to the Event Screen component */}
            <Route path="all" element={<AllEvents />} /> {/* The default 'All' events view, can be handled by index or a dedicated route */}
            <Route path="upcoming" element={<Upcoming />} />
            <Route path="past" element={<Past />} />
            <Route path="draft" element={<Draft />} />
          </Route>

          {/* The previous /dashboard/* route is fine for the main dashboard content, but for the EventScreen content to work, 
          it's best to define the nested structure or move all nested routes into the Dashboard component's Routes.
          Given the current setup, I'll update the EventScreen to use relative routing within its own component.
          Let's revert the App.jsx dashboard route to the original wild-card and define the event routes *outside* of the main dashboard component for simplicity, 
          as was being attempted before, but route the `/dashboard/events` path to the `EventScreen` component which will handle its own sub-routing.
          
          CORRECTION: The existing `EventScreen` component is designed to be a screen *within* the `Dashboard`.
          I will change the `/dashboard/events/*` route to render `EventScreen` instead of `Dashboard`, and move all the routing for event sub-screens *into* `EventScreen`.
          
          Final proposed App.jsx routes:
          */}

          {/* DASHBOARD ROUTE - Wildcard for generic dashboard content */}
          <Route
            path="/dashboard/*"
            element={<Dashboard />}
          />

          {/* EVENTS PARENT ROUTE (handled by EventScreen for sub-routing) */}
          <Route
            path="/dashboard/events/*"
            element={<Dashboard />} // Dashboard wraps all content
          >
            <Route index element={<EventScreen />} />
            {/* The actual sub-routes (all, upcoming, etc.) will be defined INSIDE EventScreen */}
          </Route>
          
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
