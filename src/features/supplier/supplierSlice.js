import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  suppliers: [],
};

export const supplierSlice = createSlice({
  name: "supplier",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  supplierSlice.actions;

export default supplierSlice.reducer;
