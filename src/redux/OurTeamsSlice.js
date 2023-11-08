import { createSlice } from "@reduxjs/toolkit";

export const ourTeamsSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    readData: (state, action) => {
      state.list = [...action.payload];
      // action.payload.map((data) => {
      //   state.list.push(data);
      // });
      // console.log(state.list);
      // return state;
    },
  },
});

export const { readData } = ourTeamsSlice.actions;

export const selectOurTeamList = (state) => state;

export default ourTeamsSlice.reducer;
