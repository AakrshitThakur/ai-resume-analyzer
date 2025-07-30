// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../features/loading-slice";
import resultReducer from "../features/result-slice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;