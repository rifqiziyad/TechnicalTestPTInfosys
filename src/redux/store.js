import { configureStore } from "@reduxjs/toolkit";
import ourTeamsReducer from "./OurTeamsSlice";

export default configureStore({
  reducer: {
    list: ourTeamsReducer,
  },
});
