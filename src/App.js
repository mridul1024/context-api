import { useState, createContext } from "react";
import "./App.css";
import ComponentOne from "./components/ComponentOne";

export const SharedContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  const contextValues = {
    counter: count,
    header: "Current Count",
    increment: () => {
      setCount((prev) => prev + 1);
    },
    decrement: () => {
      setCount((prev) => prev - 1);
    },
  };

  return (
    <>
      <SharedContext.Provider value={contextValues}>
        <div className="App">
          <header className="App-header">
            <ComponentOne />
          </header>
        </div>
      </SharedContext.Provider>
    </>
  );
}

export default App;
