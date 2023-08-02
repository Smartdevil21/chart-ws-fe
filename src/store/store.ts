import { configureStore } from "@reduxjs/toolkit";
import { combinedReducers } from "./reducers.combined";

const store = configureStore({
  reducer: combinedReducers,
  preloadedState: {},
});

export { store };
