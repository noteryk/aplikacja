import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

function Coms() {
  return (
    <div className="h-1/2 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-blue-600 text-lg font-bold text-left">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-gray-900 text-left">Each and every client is important</h1>
        <p className="text-gray-600 mt-4 text-left">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex space-x-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-8 w-64">
            <div className="flex justify-center items-center mb-4">
              {[...Array(4)].map(() => <FaStar className="text-yellow-500" />)}
              {[...Array(1)].map(() => <FaRegStar className="text-yellow-500" />)}
            </div>
            <p className="text-gray-600 break-words">
              Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
            </p>
            <div className="flex content-center mt-10"> 
              <img src="lekarz.jpg" className="rounded-full h-16 w-16" alt="Kasia Kowalska" />
              <div className="ml-4">
                <p className="text-gray-900">Regina Miles</p>
                <p className="text-gray-500">designer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coms;
  