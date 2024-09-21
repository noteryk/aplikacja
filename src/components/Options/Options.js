import React from 'react';

function Doctor() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <a href="#" className="text-blue-500 text-sm font-semibold">Practice Advice</a>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Our Doctors Specialize in you</h1>
        <p className="text-gray-600 mt-2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img src="lekarz.jpg" alt={`Doctor ${index + 1}`} className="w-full h-48 object-cover"/>
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale</span>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-500 text-sm font-semibold">English Departement</span>
                <span className="text-yellow-500 text-sm font-semibold flex items-center"><i className="fas fa-star mr-1"></i> 4.9</span>
              </div>
              <h2 className="text-lg font-semibold text-gray-900">Graphic Design</h2>
              <p className="text-gray-600 mt-1">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
              <div className="flex items-center mt-4">
                <i className="fas fa-download text-gray-500 mr-2"></i>
                <span className="text-gray-600 text-sm">15 Sales</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-500 line-through mr-2">$16.48</span>
                <span className="text-green-500 font-semibold">$6.48</span>
              </div>
              <div className="flex items-center mt-4 text-gray-600 text-sm">
                <div className="flex items-center mr-4">
                  <i className="fas fa-clock mr-1"></i> 22hr 30min
                </div>
                <div className="flex items-center mr-4">
                  <i className="fas fa-book mr-1"></i> 64 Lessons
                </div>
                <div className="flex items-center">
                  <i className="fas fa-chart-line mr-1"></i> Progress
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white text-sm font-semibold py-2 rounded hover:bg-blue-600 transition-colors duration-300">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor;