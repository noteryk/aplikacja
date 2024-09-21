import React from 'react';

const Info = () => {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'rgb(255, 221, 208)' }}>
      <div className="max-w-4xl mx-auto p-8 flex items-center">
        <div className="w-1/2">
          <div className="mb-4">
            <div className="w-12 h-1 bg-red-500 mb-2"></div>
            <h1 className="mt-10 mr-10 text-4xl font-bold text-gray-800">Leading Medicine</h1>
          </div>
          <p className="text-gray-600 mb-4">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics:<br />
            Newtonian mechanics
          </p>
          <a href="#" className="text-blue-500 font-semibold flex items-center">
            Learn More {'>'} <i className="fas fa-arrow-right ml-2"></i>
          </a>

                   {/* Opinie */}
                   <div className="mt-8 space-y-4">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2">⭐</span>
              <span className="font-medium">Dr. Jane Smith</span>
            </div>
            <p className="text-gray-600">
              "I've been using this service for years and it has revolutionized my practice. The AI-powered tools are incredibly helpful!"
            </p>
          </div>

          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">⭐</span>
            <span className="font-medium">Mr. John Doe</span>
          </div>
          <p className="text-gray-600">
            "The support team is always quick to respond and solve any issues I encounter. Highly recommended!"
          </p>

          <div className="flex items-center">
            <span className="text-yellow-400 mr-2">⭐</span>
            <span className="font-medium">Ms. Emily Johnson</span>
          </div>
          <p className="text-gray-600">
            "The intuitive interface makes it easy for me to navigate and find what I need quickly."
          </p>
        </div>
      </div>
      <div className="w-1/2 flex">
        <div className="pl-16 relative">
          <img src="./lekarz.jpg" alt="lekarz" className="shadow-lg rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Info;
