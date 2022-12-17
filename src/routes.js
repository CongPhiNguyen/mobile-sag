import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Scan from "./pages/Scan"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/scan" element={<Scan />}></Route>

      {/* <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="/payment" element={<Payment></Payment>}></Route> */}
    </Routes>
  )
}

export default Routers
