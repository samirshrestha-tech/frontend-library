import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    adminInfo: {},
  },
});

export default store;
