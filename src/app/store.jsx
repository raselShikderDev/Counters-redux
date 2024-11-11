import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Features/Counters/countersSlice"
import postReducer from "../Features/Posts/postSlice"
const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postReducer,
  }
})

export default store
