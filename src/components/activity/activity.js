import React from 'react';
import { CiMobile2 } from "react-icons/ci"; 
import { FaLaptopMedical } from "react-icons/fa"; 
import { AiOutlineHeart } from "react-icons/ai"; 

const Activity = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-8">
      <div className="w-full max-w-4xl mb-12 px-4">
        <h2 className="text-blue-600 text-lg font-bold text-left mb-4">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-gray-900 text-left mb-8">Our Activity</h1>
        <p className="text-gray-600 text-left">
          Problems trying to resolve the conflict between<br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mt-12">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-8 w-full md:w-1/3">
            <div className="flex justify-center items-center mb-4">
              {index === 0 && <CiMobile2 className="text-blue-500 text-6xl" />}
              {index === 1 && <AiOutlineHeart className="text-green-500 text-6xl" />}
              {index === 2 && <FaLaptopMedical className="text-red-500 text-6xl" />}
            </div>
            <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Emergency Case</h3>
            <div className="w-12 h-1 bg-red-500 mx-auto my-4"></div>
            <p className="text-gray-600 text-center">
              The gradual accumulation of<br/>
              information about
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
