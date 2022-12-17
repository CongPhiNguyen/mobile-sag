import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { addProducts } from "./mainSlice"

export default function PaymentSucess() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(addProducts([]))
  }, [])
  return (
    <div>
      <div className="p-[20px] pb-[0px]">
        <NavLink to="/">Back to home</NavLink>
      </div>
      PaymentSucess
    </div>
  )
}
