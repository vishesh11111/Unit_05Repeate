import { useState } from "react";
import "./App.css";
import StopWatch from "./components/stopwatch/StopWatch";
import { Timer } from "./components/timer/Timer";

function App() {
  const [show, setShow] = useState("");
  return (
    <>
      <div className="App">
        {show == "m" ? (
          <div>
            <Timer />
          </div>
        ) : null}
        {show == "n" ? (
          <div>
            <StopWatch />
          </div>
        ) : null}
      </div>
      <div className="nh">
        <button
          onClick={() => {
            setShow("m");
          }}
        >
          Set Timer
        </button>
        <button
          onClick={() => {
            setShow("n");
          }}
        >
          Stop Watch
        </button>
      </div>
    </>
  );
}

export default App;
