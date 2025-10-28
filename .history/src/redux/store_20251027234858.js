import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"; // Import your slice reducers
import dashboardReducer from "./slices/dashboardSlice";
import userProfileReducer from "./slices/userProfileSlice"; // Import the new reducer

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    userProfile: userProfileReducer, // Add the new reducer
    // Add other slice reducers here
  },
});