import logo from "./logo.svg"
import "./App.css"
import Webcam from "react-webcam"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Webcam audio={true} />
        </div>
      </header>
    </div>
  )
}

export default App
