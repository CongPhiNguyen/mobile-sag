import { Button } from "antd"
import React, { useEffect, useRef } from "react"
import { NavLink } from "react-router-dom"
import socketIOClient from "socket.io-client"

const host = "http://localhost:5050/"

export default function Home() {
  // TODO: connect socket and user profile show here

  return (
    <div className="text-center p-[40px]">
      <Button>
        <NavLink to="/scan">Scan</NavLink>
      </Button>
    </div>
  )
}
