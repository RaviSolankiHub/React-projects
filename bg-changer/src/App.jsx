import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="fixed flex flex-wrap justify-center bottom-50 inset-x-3.5 px-2">ravi</h1>
      <div className="fixed flex flex-wrap justify-center bottom-96 inset-x-3.5 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shaow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("green")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={()=> setColor("goldenrod")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "goldenrod" }}
          >
            Goldenrod
          </button>
           <button
          onClick={()=> setColor("cyan")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "cyan" }}
          >
            cyan
          </button>
           <button
          onClick={()=> setColor("teal")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "teal" }}
          >
            teal
          </button>
           <button
          onClick={()=> setColor("cornflowerblue")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "cornflowerblue" }}
          >
            cornflowerblue
          </button>
           <button
          onClick={()=> setColor("coral")}
            className="outline-none px-4 py-1 text-white rounded-3xl shadow-lg"
            style={{ backgroundColor: "coral" }}
          >
            Coral
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
