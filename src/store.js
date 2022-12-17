import { configureStore } from "@reduxjs/toolkit"
import mainSlice from "./pages/mainSlice"
export const store = configureStore({
  reducer: {
    mainSlice: mainSlice
  }
})
