import { createSlice } from "@reduxjs/toolkit";

const shinGroupSlices = createSlice({
    name:"shinGroup",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder) => {

    }
})

export const selectShinGroup = (state) => state.shinGroup;
export const shinGroupReducer = shinGroupSlices.reducer;
export const {} = shinGroupSlices.actions;

