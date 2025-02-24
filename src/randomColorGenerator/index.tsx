import { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState<string>("#000000");

  function generateHexColor() {
    const colors: (string | number)[] = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F",
    ];
    let hex: string = "#";
    for (let i = 0; i < 6; i++) {
      hex += colors[Math.floor(Math.random() * colors.length)];
    }
    setColor(hex);
  }

  useEffect(() => {
    generateHexColor();
  }, []);

  return (
    <div className="w-screen min-h-[70vh] flex flex-col items-center justify-center bg-amber-200 p-8">
      {/* Heading */}
      <h1 className="font-extrabold text-3xl pb-3 text-slate-900 font-sans mt-5 max-w-[1100px]">
        <strong>HexVibe</strong>
      </h1>

      {/* Color Display Box */}
      <div
        style={{ backgroundColor: color }}
        className="w-[1100px] h-[750px] max-w-[1100px] max-h-[750px] border border-black rounded-t-xl flex flex-col justify-center items-center"
      >
        <button
          onClick={generateHexColor}
          className="w-[180px] max-w-[180px] rounded-3xl p-4 bg-slate-900 hover:bg-blue-800 text-green-400 font-mono font-extrabold text-2xl"
        >
          Generate
        </button>
      </div>

      {/* Display Color Code */}
      <div className="bg-gray-100 p-4 rounded-xl w-[800px] max-w-[800px] text-center shadow-md mt-10 mb-8">
        <p className="font-mono text-lg text-gray-800 font-bold">
          <span className="text-blue-800 font-extrabold text-lg">Hex Code:</span> {color}
        </p>
      </div>
    </div>
  );
};

export default RandomColor;
