import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUserInfo: {}
}

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    products: [],
    isScanned: false
  },
  reducers: {
    // setLoginState: (state, action) => {
    //   state.isLogin = action.payload
    // },
    addProducts: (state, action) => {
      // return async (dispatch) => {
      //   const currentState = getState()
      //   console.log(currentState)
      // }
      // state.products.
      // console.log(newStateProduct)
      state.products = action.payload
    },
    setIsScanned: (state, action) => {
      state.isScanned = action.payload
    }
  }
})

export const { addProducts, setIsScanned } = mainSlice.actions

export default mainSlice.reducer
