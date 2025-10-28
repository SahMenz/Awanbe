import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Import your slice reducers
import dashboardReducer from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    // Add other slice reducers here
  },
});