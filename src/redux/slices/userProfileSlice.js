// src/redux/slices/userProfileSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "SahMenz", // Example initial state
  profileImage: null, // Stores the URL or path to the profile image
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    // Reducer to update the username
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    // Reducer to update the profile image URL
    setProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
    // You could add an action here to handle all profile fields at once, e.g.,
    // updateProfile: (state, action) => { ... }
  },
});

export const { setUsername, setProfileImage } = userProfileSlice.actions;

export default userProfileSlice.reducer;