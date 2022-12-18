import React from "react"
import logo from "../logo.svg"
import "../index.css"
import "antd/dist/antd.min.css"
import QrScanner from "qr-scanner"
import { useState, useCallback, useRef, useEffect } from "react"
import Webcam from "react-webcam"
import { Button, Input } from "antd"
import { createRef } from "react"
import { QrReader } from "react-qr-reader"
import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setIsScanned } from "./mainSlice"

export default function Scan() {
  const dispatch = useDispatch()
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [isOpenCamera, setIsOpenCamera] = useState(false)
  const [result, setResult] = useState("No result")
  const delay = 100
  const [camera, setCamera] = useState("front")
  const navigate = useNavigate()
  const [productID, setProductID] = useState("")
  const [isScanned, setIsScanned] = useState(false)
  const lastResult = useRef()
  // useEffect
  // // const scanner = new QrScanner(
  // //   webcamRef.current.video,
  // //   (result) => {
  // //     console.log("result", result)
  // //   },
  // //   {
  // //     onDecodeError: (error) => {
  // //       // camQrResult.textContent = error
  // //       // camQrResult.style.color = "inherit"
  // //       console.log("error", error)
  // //     },
  // //     highlightScanRegion: true,
  // //     highlightCodeOutline: true
  // //   }
  // // )

  // // const updateFlashAvailability = () => {
  // //   scanner.hasFlash().then((hasFlash) => {
  // //     // camHasFlash.textContent = hasFlash
  // //     // flashToggle.style.display = hasFlash ? "inline-block" : "none"
  // //     console.log("hasFlash", hasFlash)
  // //   })
  // // }
  // // const videoConstraints = {
  // //   facingMode: { exact: "environment" }
  // // }
  // const videoConstraints = {
  //   facingMode: { exact: "user" }

  console.log("isScanned", isScanned)
  const previewStyle = {
    height: 240,
    width: 320
  }
  const handleError = (error) => {
    console.log("error", error)
  }
  const handleScan = (res) => {
    if (res) {
      setResult(res)
    }
  }

  console.log("camera", camera)
  return (
    <div className="App">
      {/* <Webcam
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        ref={webcamRef}
      ></Webcam>
      <img src={imgSrc} alt="" /> */}
      <div className="p-[20px] pb-[0px]">
        <NavLink to="/" className="text-[16px]">
          {" "}
          {"<<"} Back to home
        </NavLink>
      </div>

      {!isScanned && (
        <QrReader
          delay={300}
          style={{ width: "50%", height: "50%" }}
          onResult={(result, error) => {
            if (!!result) {
              if (lastResult?.current === result.text) {
                return
              }
              lastResult.current = result.text
              // console.log(result)
              setResult(result?.text)
              navigate(`/product/${result?.text}`)
              setIsScanned(true)
            }
            if (!!error) {
              // console.info(error)
            }
          }}
          constraints={{ facingMode: "environment" }}
          ref={webcamRef}
        />
      )}
      {/* <p>{JSON.stringify(result)}</p>
      <Button
        onClick={() => {
          // console.log(webcamRef)
          setCamera((prev) => {
            if (prev == "front") return "rear"
            else return "front"
          })
        }}
      >
        Change camera
      </Button> */}
      <div className="text-center">
        <p>Input id in case the QR not work</p>
        <div>
          <Input
            className="!w-[40%]"
            value={productID}
            onChange={(e) => setProductID(e.target.value)}
          />
        </div>
        <Button
          onClick={() => {
            if (productID && productID.length > 0) {
              navigate("/product/" + productID)
            }
          }}
        >
          Process to product
        </Button>
      </div>
    </div>
  )
}
