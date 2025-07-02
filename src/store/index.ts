// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../features/loadingSlice";
import resultReducer from "../features/resultSlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;