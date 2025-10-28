import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
  reducer: {
    // Add all slice reducers here
    dashboard: dashboardReducer,
    // Add other state slices as the application grows (e.g., user: userReducer)
  },
  // Redux Toolkit automatically sets up Thunks, DevTools, and other middleware
});

export default store;
