import { BrowserRouter } from "react-router-dom"
import React, { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import socketIOClient from "socket.io-client"
import { Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Scan from "./pages/Scan"
import Product from "./pages/Product"
import Cart from "./pages/Cart"

import { store } from "./store"
import { Provider } from "react-redux"
import Payment from "./pages/Payment"
import PaymentSucess from "./pages/PaymentSucess"

const host = "https://payment-be.onrender.com/"
function App() {
  const socketRef = useRef()
  const [socketId, setSocketId] = useState("")
  useEffect(() => {
    socketRef.current = socketIOClient(host, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      },
      allowRequest: (req, callback) => {
        const noOriginHeader = req.headers.origin === undefined
        callback(null, noOriginHeader)
      }
    })

    socketRef.current.on("me", (id) => {
      socketRef.current.emit("user-join", id)
      setSocketId(id)
    })

    socketRef.current.on("connect", () => {
      if (socketRef.current.connected) {
        console.log("connected ở đây sẽ thành công")
        console.log(socketRef.current.connected)
      }
    })

    // socketRef.current.emit("sendMessageToAdmin", message)

    // Add chat user
    // axios
    //   .post(`${host}api/user-chat/add-chat-user`, {
    //     userID: userInfo._id
    //   })
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

    socketRef.current.on("id", (data) => {
      console.log(data)
    })

    // socketRef.current.on("getMessageFromAdmin", (data) => {
    //   console.log("dataAdmin", data)
    //   setMessages((prev) => {
    //     return [
    //       ...prev,
    //       { message: data.message, time: new Date(), senderId: "admin" }
    //     ]
    //   })
    // })

    return () => {
      socketRef.current.disconnect()
    }
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/scan" element={<Scan socketRef={socketRef} />}></Route>
          <Route
            path="/product/:id"
            element={<Product socketRef={socketRef} socketId={socketId} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart socketRef={socketRef} socketId={socketId} />}
          ></Route>
          <Route path="/pay" element={<Payment />}></Route>
          <Route path="/pay-success" element={<PaymentSucess />}></Route>
          {/* <Route path="/detail/:id" element={<Detail></Detail>}></Route>
      <Route path="/payment" element={<Payment></Payment>}></Route> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
