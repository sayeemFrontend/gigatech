import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
};

export const counterSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountry: (state, action) => {
      state.countries = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCountry } = counterSlice.actions;

export default counterSlice.reducer;
