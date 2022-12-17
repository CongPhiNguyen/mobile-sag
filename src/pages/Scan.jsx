import React from "react"
import logo from "../logo.svg"
import "../index.css"
import "antd/dist/antd.min.css"
import QrScanner from "qr-scanner"
import { useState, useCallback, useRef, useEffect } from "react"
import Webcam from "react-webcam"
import { Button } from "antd"
import { createRef } from "react"
import { QrReader } from "react-qr-reader"
import { NavLink } from "react-router-dom"

export default function Scan() {
  const webcamRef = createRef()
  const [imgSrc, setImgSrc] = useState(null)
  const [isOpenCamera, setIsOpenCamera] = useState(false)
  const [result, setResult] = useState("No result")
  const delay = 100
  const [camera, setCamera] = useState("front")
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
  // }
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
        <NavLink to="/">Back to home</NavLink>
      </div>

      <QrReader
        delay={300}
        style={{ width: "50%", height: "50%" }}
        onResult={(result, error) => {
          console.log("result", result)
          if (!!result) {
            setResult(result?.text)
          }

          if (!!error) {
            console.info(error)
          }
        }}
        constraints={{ facingMode: "environment" }}
      />

      <p>{JSON.stringify(result)}</p>
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
      </Button>
    </div>
  )
}
