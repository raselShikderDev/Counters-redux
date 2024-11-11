import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Features/Counters/countersSlice"
const store = configureStore({
  reducer: {
    counters: countersReducer
  }
})

export default store