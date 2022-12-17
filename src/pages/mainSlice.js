import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUserInfo: {}
}

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    products: []
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
    }
  }
})

export const { addProducts } = mainSlice.actions

export default mainSlice.reducer
