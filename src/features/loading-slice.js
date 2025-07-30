// features/loadingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAnalysisLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setToTrue: (state) => {
      state.isAnalysisLoading = true;
    },
    setToFalse: (state) => {
      state.isAnalysisLoading = false;
    },
  },
});

export const { setToTrue, setToFalse } = loadingSlice.actions;
export default loadingSlice.reducer;
