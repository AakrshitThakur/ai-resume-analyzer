// features/loadingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gotAnalysisResult: false,
  analysisResult: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setToTrue: (state, action) => {
      if (!action.payload) {
        return console.error("Error! Empty payload");
      }
      state.gotAnalysisResult = true;
      state.analysisResult = action.payload;
    },
    setToFalse: (state) => {
      state.gotAnalysisResult = false;
      state.analysisResult = null;
    },
  },
});

export const { setToTrue, setToFalse } = resultSlice.actions;
export default resultSlice.reducer;
