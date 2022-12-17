import { Button } from "antd"
import React from "react"
import { NavLink } from "react-router-dom"

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
