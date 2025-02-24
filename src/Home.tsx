import React from "react";
import grad from './assets/grad.jpg';
import color from './assets/color.jpg';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl my-32 mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-100 mb-6">PrismPulse</h1>
        </header>

        {/* Large Feature Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-full h-120">
            <img
              src={grad}
              alt="Feature 1"
              className="w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Experiment with Gradients</h2>
            <p className="text-gray-600 mb-6">
            Seamlessly shift through endless gradients, in every direction! Generate and copy the code. Its that simple!
            </p>
            <Link to="/gradient">
            <button className="mt-auto px-8 py-4 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
              Generate
            </button>
            </Link>
            
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center text-center w-full h-120">
            <img
              src={color}
              alt="colors"
              className="w-full h-64 object-cover"
            />
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">HexVibe</h2>
            <p className="text-gray-600 mb-6">
            One click, infinite colors—unleash the power of randomness!
            </p>
            <Link to="/color">
            <button className="mt-auto px-8 py-4 bg-slate-950 text-white font-semibold rounded-lg hover:bg-slate-800 transition">
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
