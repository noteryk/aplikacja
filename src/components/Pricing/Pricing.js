import React from 'react';

function Pricing() {
  return (
    <div className="h-1/2 flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-blue-600 text-lg font-bold text-left">Practice Advice</h2>
        <h1 className="text-4xl font-bold text-gray-900 text-left">Pricing</h1>
        <p className="text-gray-600 mt-4 text-left">
          Our pricing plans are designed to meet the needs of various healthcare professionals.
        </p>
      </div>

      {/* First product */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Basic</h3>
        <p className="text-gray-600 mb-4">Perfect for small clinics</p>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-blue-500 mr-2">$29</span>/month
        </div>
      </div>

      {/* Second product */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium</h3>
        <p className="text-gray-600 mb-4">Ideal for growing medical practices</p>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-green-500 mr-2">$49</span>/month
        </div>
      </div>

      {/* Third product */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Enterprise</h3>
        <p className="text-gray-600 mb-4">Custom solutions for large healthcare organizations</p>
        <div className="flex items-center">
          <span className="text-4xl font-bold text-red-500 mr-2">$99</span>/month
        </div>
      </div>
    </div>
  );
}

export default Pricing;
