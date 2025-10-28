import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Stores user data if logged in
  isAuthenticated: false, // Tracks login status
  loading: false, // For async login/signup operations
  error: null, // Stores any error message
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to set user upon successful login
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    // Reducer to clear user upon logout (THE ACTION WE NEED)
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    // Reducer for when an authentication process starts (optional)
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    // Reducer for authentication errors (optional)
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setUser, logout, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;







// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null, // Stores user data if logged in
//   isAuthenticated: false, // Tracks login status
//   loading: false, // For async login/signup operations
//   error: null, // Stores any error message
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     // Reducer to set user upon successful login
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.error = null;
//     },
//     // Reducer to clear user upon logout
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.loading = false;
//       state.error = null;
//     },
//     // Reducer for when an authentication process starts (optional)
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//       state.error = null;
//     },
//     // Reducer for authentication errors (optional)
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { setUser, logout, setLoading, setError } = authSlice.actions;

// export default authSlice.reducer;