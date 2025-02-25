import { useEffect, useState } from "react";

const RandomColor = () => {
  const [color, setColor] = useState<string>("#000000");
  const [typeOfColor, setTypeOfColor] = useState<"hex" | "rgb">("hex");

  function RandomUtility(length: number) {
    return Math.floor(Math.random() * length);
  }

  function handleRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleRandomRGBColor() {
    const r = RandomUtility(256);
    const g = RandomUtility(256);
    const b = RandomUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleRandomRGBColor();
    else handleRandomHexColor();
  }, [typeOfColor]);

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
          onClick={typeOfColor === "hex" ? handleRandomHexColor : handleRandomRGBColor}
          className="w-[180px] max-w-[180px] rounded-3xl p-4 bg-slate-900 hover:bg-blue-800 text-green-400 font-mono font-extrabold text-2xl"
        >
          Generate
        </button>
      </div>

      {/* Display Color Code */}
      <div className="bg-gray-100 p-4 rounded-xl w-[800px] max-w-[800px] text-center shadow-md mt-10 mb-8">
        <p className="font-mono text-lg text-gray-800 font-bold">
          <span className="text-blue-800 font-extrabold text-lg">Color Code:</span> {color}
        </p>
      </div>

      {/* Toggle Color Type */}
      <div className="flex gap-4">
        <button
          onClick={() => setTypeOfColor("hex")}
          className="border-2 border-black bg-transparent text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all"
        >
          HEX Mode
        </button>
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="border-2 border-black bg-transparent text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-all"
        >
          RGB Mode
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
