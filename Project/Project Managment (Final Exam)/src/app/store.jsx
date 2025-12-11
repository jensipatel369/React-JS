import { configureStore } from "@reduxjs/toolkit";
import product from "../feature/ProductSlice";

export const store = configureStore({
  reducer : {
    ProductKey : product
  }
})