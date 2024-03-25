import { useState } from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Timer from "./Components/Timer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Clock></Clock>
      <Timer></Timer>
    </>
  );
}

export default App;
