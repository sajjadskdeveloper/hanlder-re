'use client';

import { useState, useEffect } from 'react';

const properties = [
  {
    id: 1,
    name: '561 7TH AVENUE',
    location: 'NEW YORK, NY',
    image: '/images/240w37.jpg',
    propertyType: 'Office',
    yearBuilt: '1925',
    stories: '21',
    typicalFloor: '3,539 RSF',
    buildingSize: '80,470 RSF',
    floorRange: '2,700 – 4,000 RSF',
    totalSpaceAvailable: '4,697 RSF',
    availsVts: '1234',
    description: 'Prime office space in the heart of Manhattan with modern amenities and excellent accessibility.'
  },
  {
    id: 2,
    name: '263 W 38TH STREET',
    location: 'NEW YORK, NY',
    image: '/images/320w37.jpg',
    propertyType: 'Office',
    yearBuilt: '1925',
    stories: '17',
    typicalFloor: '10,000 RSF',
    buildingSize: '160,000 RSF',
    floorRange: '6,000 – 10,000 RSF',
    totalSpaceAvailable: '16,226 RSF',
    availsVts: '123',
    description: 'Spacious office building offering flexible floor plans and premium business environment.'
  },
  {
    id: 3,
    name: '315 W 39TH STREET',
    location: 'NEW YORK, NY',
    image: '/images/65w36th.jpg',
    propertyType: 'Office',
    yearBuilt: '1925',
    stories: '16',
    typicalFloor: '8,000 RSF',
    buildingSize: '140,000 RSF',
    floorRange: '8,000 – 10,000 RSF',
    totalSpaceAvailable: '4,000 RSF',
    availsVts: '123',
    description: 'Modern office complex with state-of-the-art facilities and prime location benefits.'
  }
];

const PortfolioSection = () => {
  const [activeProperty, setActiveProperty] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Function to handle smooth property transitions with blink effect
  const changeProperty = (newIndex: number, direction: 'next' | 'prev') => {
    if (isTransitioning || newIndex === activeProperty) return;
    
    setIsTransitioning(true);
    setTransitionDirection(direction);
    
    // Smooth blink-style transition
    setTimeout(() => {
      setActiveProperty(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 200);
  };

  // Auto-rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProperty((prevIndex) => {
        const nextIndex = (prevIndex + 1) % properties.length;
        return nextIndex;
      });
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array - only run once on mount

    return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Our Portfolio
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Details Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We own, manage, and invest in a diverse portfolio encompassing more than one million square feet of commercial, residential, industrial, and mixed-use properties throughout the metropolitan area and the United States.
          </p>
          <p className="text-lg text-blue-400 font-semibold mt-4">
            Our Manhattan commercial portfolio is comprised of the following properties:
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-3">
            {properties.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === activeProperty
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

                 {/* Active Property Display */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                       {/* Property Image */}
            <div 
              key={`image-${activeProperty}`}
              className={`relative group transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'opacity-30 scale-95 blur-sm' 
                  : 'opacity-100 scale-100 blur-0'
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={properties[activeProperty].image} 
                  alt={properties[activeProperty].name}
                  className={`w-full h-full object-cover aspect-[4/3] transition-all duration-700 ease-in-out group-hover:scale-110 ${
                    isTransitioning ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className={`absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg transition-all duration-500 ${
                isTransitioning ? 'scale-90 opacity-60' : 'scale-100 opacity-100'
              }`}>
                AVAILS VTS {properties[activeProperty].availsVts}
              </div>
            </div>

                       {/* Property Details */}
            <div 
              key={`details-${activeProperty}`}
              className={`space-y-8 transition-all duration-500 ease-in-out ${
                isTransitioning 
                  ? 'opacity-40 translate-y-4 scale-95' 
                  : 'opacity-100 translate-y-0 scale-100'
              }`}
            >
             <div className={`transition-all duration-500 ease-in-out ${!isTransitioning ? 'animate-pulse' : ''}`}>
               <h3 className="text-4xl font-bold text-white mb-2 transition-all duration-300">
                 {properties[activeProperty].name}
               </h3>
               <p className="text-xl text-blue-400 font-semibold transition-all duration-300">
                 {properties[activeProperty].location}
               </p>
             </div>

             <p className={`text-gray-300 text-lg leading-relaxed transition-all duration-500 ease-in-out ${!isTransitioning ? 'animate-pulse' : ''}`}>
               {properties[activeProperty].description}
             </p>

                         {/* Property Stats Grid */}
             <div className={`grid grid-cols-2 gap-6 transition-all duration-500 ease-in-out ${!isTransitioning ? 'animate-pulse' : ''}`}>
               <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:scale-105 ${
                 isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
               }`}>
                 <div className="text-blue-400 text-sm font-medium mb-2">PROPERTY TYPE</div>
                 <div className="text-white text-xl font-bold">{properties[activeProperty].propertyType}</div>
               </div>
               
               <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105 ${
                 isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
               }`}>
                 <div className="text-purple-400 text-sm font-medium mb-2">YEAR BUILT</div>
                 <div className="text-white text-xl font-bold">{properties[activeProperty].yearBuilt}</div>
               </div>
               
               <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-500 hover:scale-105 ${
                 isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
               }`}>
                 <div className="text-green-400 text-sm font-medium mb-2">STORIES</div>
                 <div className="text-white text-xl font-bold">{properties[activeProperty].stories}</div>
               </div>
               
               <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-500 hover:scale-105 ${
                 isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
               }`}>
                 <div className="text-yellow-400 text-sm font-medium mb-2">TYPICAL FLOOR</div>
                 <div className="text-white text-xl font-bold">{properties[activeProperty].typicalFloor}</div>
               </div>
               
               <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-500 hover:scale-105 ${
                 isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
               }`}>
                 <div className="text-red-400 text-sm font-medium mb-2">BUILDING SIZE</div>
                 <div className="text-white text-xl font-bold">{properties[activeProperty].buildingSize}</div>
               </div>
               
               <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-500 hover:scale-105 ${
                 isTransitioning ? 'opacity-50 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
               }`}>
                 <div className="text-indigo-400 text-sm font-medium mb-2">FLOOR RANGE</div>
                 <div className="text-white text-xl font-bold">{properties[activeProperty].floorRange}</div>
               </div>
             </div>

                         {/* Total Space Available */}
             <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center transition-all duration-500 ease-in-out hover:scale-105 ${
               isTransitioning ? 'opacity-60 scale-95 blur-sm' : 'opacity-100 scale-100 blur-0'
             }`}>
               <div className="text-blue-100 text-sm font-medium mb-2">TOTAL SPACE AVAILABLE</div>
               <div className="text-white text-3xl font-bold">{properties[activeProperty].totalSpaceAvailable}</div>
             </div>

             {/* Action Buttons */}
             <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ease-in-out ${!isTransitioning ? 'animate-pulse' : ''}`}>
               <button className="flex-1 bg-white text-gray-900 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                 View Details
               </button>
               <button className="flex-1 border-2 border-white text-white py-4 px-6 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                 Schedule Tour
               </button>
             </div>
           </div>
        </div>

        {/* Portfolio Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1M+</div>
            <div className="text-gray-400">Square Feet Managed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Properties Portfolio</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection; 