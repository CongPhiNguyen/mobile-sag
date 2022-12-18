import { Button, Typography } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"
export default function Payment() {
  const navigate = useNavigate()
  return (
    <React.Fragment>
      <div className="p-[20px] pb-[0px]">
        <NavLink to="/cart" className="text-[16px]">
          {" "}
          {"<<"} Back to cart
        </NavLink>
      </div>
      <div className="text-center">
        <Typography.Title level={3}>Payment</Typography.Title>
        <Button
          onClick={() => navigate("/pay-success")}
          className="!text-[20px] mt-[40px] !pb-[40px] !px-[40px]"
        >
          Pay
        </Button>
      </div>
    </React.Fragment>
  )
}
