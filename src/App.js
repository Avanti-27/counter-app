import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold p-4 m-8">Counter App</h1>
      <div className="bg-black text-white text-3xl mx-auto my-0 w-2/4">
        <div className="p-4 m-4">{counter}</div>
        <div>
          <button
            className="border-2 border-white px-4 py-1 m-4 rounded-lg"
            onClick={handleAdd}
          >
            +
          </button>
          <button
            className="border-2 border-white px-4 py-1 m-4 rounded-lg"
            onClick={handleSubtract}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
