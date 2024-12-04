import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice.js";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
