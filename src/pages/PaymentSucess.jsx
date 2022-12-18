import { Typography } from "antd"
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
    <div className="text-center mt-[40%]">
      <Typography.Title>PaymentSucess</Typography.Title>
      <div className="">
        <NavLink to="/" className="text-[20px]">
          {"<<"}
          Back to home
        </NavLink>
      </div>
    </div>
  )
}
