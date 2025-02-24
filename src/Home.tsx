import React from "react";
import grad from "./assets/grad.jpg";
import color from "./assets/color.jpg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-[70vh] w-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl my-32 mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16 max-w-[700px] mx-auto">
          <h1 className="text-5xl font-bold text-gray-100 mb-6 max-w-[500px] mx-auto">
            PrismPulse
          </h1>
        </header>

        {/* Large Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-[1200px] mx-auto">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-full max-w-[600px] h-120 max-h-[500px]">
            <img
              src={grad}
              alt="Feature 1"
              className="w-full h-64 max-h-[256px] max-w-[500px] object-cover"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 max-w-[400px]">
              Experiment with Gradients
            </h2>
            <p className="text-gray-600 mb-6 max-w-[500px]">
              Seamlessly shift through endless gradients, in every direction!
              Generate and copy the code. It's that simple!
            </p>
            <Link to="/gradient">
              <button className="mt-auto px-8 py-4 max-w-[200px] max-h-[50px] bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
                Generate
              </button>
            </Link>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-full max-w-[600px] h-120 max-h-[500px]">
            <img
              src={color}
              alt="colors"
              className="w-full h-64 max-h-[256px] max-w-[500px] object-cover"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 max-w-[400px]">
              HexVibe
            </h2>
            <p className="text-gray-600 mb-6 max-w-[500px]">
              One click, infinite colors—unleash the power of randomness!
            </p>
            <Link to="/color">
              <button className="mt-auto px-8 py-4 max-w-[200px] max-h-[50px] bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
                Generate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
