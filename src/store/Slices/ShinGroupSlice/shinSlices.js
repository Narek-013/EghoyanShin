import { createSlice } from "@reduxjs/toolkit";

const shinGroupSlices = createSlice({
  name: "shinGroup",
  initialState: {
    contactBtn: false,
    mailValue: "",
  },
  reducers: {
    changeBtn(state, { payload }) {
      state.contactBtn = true;
      state.mailValue = payload;
    },
    changeBtnErr(state) {
      state.contactBtn = false;
      state.mailValue = "";
    },
  },
  extraReducers: (builder) => {},
});


export const selectShinGroup = (state) => state.shinGroup;
export const shinGroupReducer = shinGroupSlices.reducer;
export const { changeBtn, changeBtnErr, seeValue } = shinGroupSlices.actions;

