import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    name: "",
    statusMessage: "",
  },
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },

    /////////
    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      console.log(`User name: ${name}`);
      state.login.name = name;
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload;
      console.log(`Status Message: ${statusMessage}`);
      state.login.statusMessage = statusMessage;
    },
    logout: (state, action) => {
      console.log("Logging out");
      state.login.userId = 0;
      state.login.accessToken = null;
    },
  },
});
