import { useEffect, useState } from "react";

const GradientPicker = () => {
  const [color1, setColor1] = useState<string>("#000000");
  const [color2, setColor2] = useState<string>("#000000");
  const [color3, setColor3] = useState<string>("#000000");
  const [direction, setDirection] = useState<string>("right");

  function Colors() {
    const arr: (number | string)[] = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let FirstGradient: string = "#";
    let SecondGradient: string = "#";
    let ThirdGradient: string = "#";

    for (let i = 0; i < 6; i++) {
      FirstGradient += arr[Math.floor(Math.random() * arr.length)];
      SecondGradient += arr[Math.floor(Math.random() * arr.length)];
      ThirdGradient += arr[Math.floor(Math.random() * arr.length)];
    }

    setColor1(FirstGradient);
    setColor2(SecondGradient);
    setColor3(ThirdGradient);
  }

  useEffect(() => {
    Colors();
  }, []);

  return (
    <div className="w-screen h-screen bg-[#FFF0BD] flex flex-col items-center justify-center overflow-hidden p-8">
      {/* Main Container - Buttons and Gradient */}
      <div className="flex items-center justify-center gap-10 flex-row">
        {/* Left Column - Directions */}
        <div className="flex flex-col items-center gap-6 mt-20">
          <button
            onClick={() => setDirection("top")}
            className="p-4 bg-slate-900 w-[180px] rounded-3xl hover:animate-bounce font-extrabold text-emerald-400 font-mono text-xl"
          >
            Top
          </button>
          <button
            onClick={() => setDirection("top left")}
            className="p-4 bg-slate-900 w-[180px] rounded-3xl hover:animate-bounce font-extrabold text-emerald-400 font-mono text-xl"
          >
            Top Left
          </button>
          <button
            onClick={() => setDirection("top right")}
            className="p-4 bg-slate-900 w-[180px] rounded-3xl hover:animate-bounce font-extrabold text-emerald-400 font-mono text-xl"
          >
            Top Right
          </button>
          <button
            onClick={() => setDirection("left")}
            className="p-4 bg-slate-900 w-[180px] rounded-3xl hover:animate-bounce font-extrabold text-emerald-400 font-mono text-xl"
          >
            Left
          </button>
        </div>

        {/* Gradient Display */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-extrabold text-3xl pb-3 text-slate-900 font-sans mt-5">
           <strong>Gradient Alchemy</strong> 
           <h3 className="font-semibold text-slate-900 text-xl mt-1">Blend Colors-Create Magic.</h3>
          </h1>
          <div
            style={{
              background: `linear-gradient(to ${direction}, ${color1}, ${color2}, ${color3})`,
              
            }}
            className="w-[1100px] h-[750px] border border-black rounded-t-xl"
          >
            <div className="flex items-center justify-end gap-2 bg-slate-900 w-full h-11 rounded-t-xl pr-2">
              <div className="rounded-full bg-yellow-500 w-4 h-4"></div>
              <div className="rounded-full bg-green-600 w-4 h-4"></div>
              <div className="rounded-full bg-red-600 w-4 h-4"></div>
            </div>
            <button
              onClick={Colors}
              className="flex items-center justify-center mx-auto my-[36rem] w-[180px] rounded-3xl p-4 bg-slate-900 hover:bg-blue-800 text-green-400 font-mono font-extrabold text-2xl"
            >
              Generate
            </button>
          </div>
        </div>

        {/* Right Column - Directions */}
        <div className="flex flex-col items-center gap-6 mt-20">
          <button
            onClick={() => setDirection("right")}
            className="p-4 bg-slate-900 text-emerald-400 font-mono text-xl w-[180px] rounded-3xl hover:animate-bounce font-extrabold"
          >
            Right
          </button>
          <button
            onClick={() => setDirection("bottom left")}
            className="p-4 bg-slate-900 text-emerald-400 font-mono text-xl w-[180px] rounded-3xl hover:animate-bounce font-extrabold"
          >
            Bottom Left
          </button>
          <button
            onClick={() => setDirection("bottom right")}
            className="p-4 bg-slate-900 text-emerald-400 font-mono text-xl w-[180px] rounded-3xl hover:animate-bounce font-extrabold"
          >
            Bottom Right
          </button>
          <button
            onClick={() => setDirection("bottom")}
            className="p-4 bg-slate-900 text-emerald-400 font-mono text-xl w-[180px] rounded-3xl hover:animate-bounce font-extrabold"
          >
            Bottom
          </button>
        </div>
      </div>

      {/* CSS Code Display (with proper spacing) */}
      <div className="bg-gray-100 p-4 rounded-xl w-[800px] text-center shadow-md mt-10 mb-8">
        <p className="font-mono text-lg text-gray-800 font-bold">
          <span className="text-blue-800 font-extrabold text-lg">
            background:
          </span>{" "}
          linear-gradient(to {direction}, {color1}, {color2}, {color3});
        </p>
      </div>
    </div>
  );
};

export default GradientPicker;

//background: linear-gradient(to bottom right, #218678, #E3BE40);
