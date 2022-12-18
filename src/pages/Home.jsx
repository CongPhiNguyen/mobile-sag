import { Button, Typography } from "antd"
import React, { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import socketIOClient from "socket.io-client"

const host = "http://localhost:5050/"

export default function Home() {
  return (
    <div className="text-center p-[40px] h-[100%] mt-[10%]">
      <img
        src="https://play-lh.googleusercontent.com/ORR9uyAM1SljjrJAlwhrLJNLtIp4DfV5dzY4R5Yodb_g6YhGXX5rrxx_26gVVFntAr8"
        alt=""
      />
      <Typography.Title className="text-[32px] font-[700] mt-[32px]">
        Welcome to scan and go app
      </Typography.Title>
      <Button type="primary" className="!px-[40px] !pb-[40px]">
        <NavLink to="/scan" className="text-[20px]">
          Scan
        </NavLink>
      </Button>
    </div>
  )
}
