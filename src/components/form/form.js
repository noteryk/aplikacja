import React from 'react';

function Form() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h2 className="text-blue-500 text-lg">Newsletter</h2>
        <h1 className="text-5xl font-bold text-gray-800 mt-2">Join Us</h1>
        <p className="text-gray-500 mt-4">
          Join our community and stay updated on the latest developments in AI and machine learning!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <input 
            type="email" 
            placeholder="Your Email"
            className="p-4 w-full md:w-96 border border-gray-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-r-lg transition duration-200 ease-in-out transform hover:-translate-y-0.5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
