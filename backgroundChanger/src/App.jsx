import { useState, useEffect } from "react";

function App() {
  // Initialize color state with default value or retrieve from localStorage...
  const [color, setColor] = useState(() => {
    const bgColor = localStorage.getItem("bgColor");
    return bgColor || "black";
  });

  // Save color to localStorage whenever it changes...
  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed text-center text-lg font-bold px-3 text-white top-10 py-2 rounded-xl inset-x-0 mx-5"
        style={{ backgroundColor: color === "black" ? "red" : "black" }}
      >
        !...Peek Your Favourite Background Color...!
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "lime" }}
          >
            Lime
          </button>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-32 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-g"
            style={{ backgroundColor: "black" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
