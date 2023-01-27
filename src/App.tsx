import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://github.com/massalabs/thyra" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          <img src="/massa.svg" className="logo massa" alt="Vite logo" />
        </a>
      </div>
      <h1>Massa + Thyra</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">Click on the Massa logo to learn more</p>
    </div>
  );
}

export default App;
