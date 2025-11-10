import { configureStore } from "@reduxjs/toolkit";
import Counter from "../feature/CounterSlice";
import todo from "../feature/TodoSlice";

export const store = configureStore({
  reducer : {
    CounterKey : Counter,
    TodoKey : todo
  }
})