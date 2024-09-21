import React from 'react';
import './App.css';

function App() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="flex flex-col items-start justify-center px-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-24 lg:py-24">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-blue-600">Welcome</h1>
          <h2 className="text-5xl font-black text-gray-900 leading-tight">Online Appointment</h2>
          <p className="mt-4 text-gray-600">
            Medical Functional is most focused in helping you <br /> 
            discover your most beautiful smile
          </p>
          <div className="mt-8 space-x-4">
            <a href="#" className="px-10 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-200 ease-in-out transform hover:-translate-y-0.5">
              Get Quote Now
            </a>
            <a href="#" className="px-10 py-3 border border-blue-700 text-gray-600 rounded-xl hover:bg-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-0.5">
              Learn more
            </a>
          </div>
        </div>
        <div className="relative mt-12 lg:mt-0">
        <img src="kobieta.png" alt="doktor" className="rounded-lg shadow-lg w-25 h-auto object-cover" />
        <div className="absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2">
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;