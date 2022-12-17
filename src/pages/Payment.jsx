import { Button } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function Payment() {
  const navigate = useNavigate()
  return (
    <div>
      Payment
      <Button onClick={() => navigate("/pay-success")}>Pay</Button>
    </div>
  )
}
