import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeNav: "Overview", // Default active navigation item
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
  },
});

export const { setActiveNav } = dashboardSlice.actions;

export default dashboardSlice.reducer;