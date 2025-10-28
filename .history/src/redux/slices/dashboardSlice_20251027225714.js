import { createSlice } from '@reduxjs/toolkit';

// Define the initial state for the dashboard feature
const initialState = {
  activeNav: 'Overview', // Tracks the currently active dashboard panel
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    /**
     * Reducer to set the active navigation item.
     * @param {object} state - The current state object (handled immutably by Immer)
     * @param {object} action - The action object, e.g., { type: 'dashboard/setActiveNav', payload: 'Venues' }
     */
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
  },
});

// Export the action creator(s)
export const { setActiveNav } = dashboardSlice.actions;

// Export the reducer function
export default dashboardSlice.reducer;
