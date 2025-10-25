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
// 
function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          {/* MAIN ROUTE */}

          <Route path="/" element={<Home />} />
          {/* We'll use the dynamic route below for all dashboard paths */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}

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

          {/* DASHBOARD ROUTE - Use '*' for nested routes within Dashboard */}
          {/* All dashboard-related routes will be handled here */}
          <Route
            path="/dashboard/*"
            element={
              // <ProtectedRoute>
              <Dashboard />
              // </ProtectedRoute>
            }
          />


          {/* REMOVE THIS SPECIFIC ROUTE - Nested routing will now be handled inside the Dashboard structure or EventScreen */}
          {/* <Route
            path="/dashboard/events/all"
            element={<AllEvents />}
          /> */}
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
