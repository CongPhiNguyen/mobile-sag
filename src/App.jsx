import logo from "./logo.svg"
import "./index.css"
import "antd/dist/antd.min.css"

import { useState, useCallback, useRef } from "react"
import Webcam from "react-webcam"
import { Button } from "antd"

function App() {
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const [isOpenCamera, setIsOpenCamera] = useState(false)

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-[red] text-center text-[24px] mt-[12px]">
          Scan and Go app
        </p>
        <div className="border-[1px] border-[black] width-[100%] height-[400px] px-[40px] mt-[20px]">
          {isOpenCamera && (
            <Webcam
              audio={false}
              forceScreenshotSourceSize={true}
              ref={webcamRef}
            />
          )}
        </div>
        <Button
          type="primary"
          onClick={() => {
            setIsOpenCamera((prev) => !prev)
          }}
        >
          Turn {isOpenCamera ? "off" : "on"} camera
        </Button>
        <button onClick={capture}>Capture photo</button>
        {imgSrc && <img src={imgSrc} />}
      </header>
    </div>
  )
}

export default App
