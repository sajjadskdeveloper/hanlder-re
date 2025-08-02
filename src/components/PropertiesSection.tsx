'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const PropertiesSection = () => {
  const router = useRouter();
  const [hoveredProperty, setHoveredProperty] = useState<string | null>(null);

  const featuredProperties = [
    {
      id: '1',
      // title: '320W37',
      subtitle: '320W37',
      image: '/images/320w37.jpg',
      type: 'Architecture',
      
    },
    {
      id: '2',
      // title: 'IMG_5471',
      subtitle: '989 Avenue of the Americas',
      image: '/images/IMG_5471-q46oz9dg23mofuqg5y5q32taz468upmrxlvf8sberk.jpeg',
      type: 'Architecture',
    }
  ];

  return (
    <section id="properties" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Premium Properties
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            Featured
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties in the most desirable locations, 
            designed for those who demand excellence
          </p>
        </div>
        
        {/* Enhanced Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {featuredProperties.map((property) => (
            <div 
              key={property.id}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 transform hover:-translate-y-6 cursor-pointer bg-white"
              onMouseEnter={() => setHoveredProperty(property.id)}
              onMouseLeave={() => setHoveredProperty(null)}
              onClick={() => router.push(`/properties/${property.id}`)}
            >
              {/* Enhanced Image Container */}
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={property.image}
                  // alt={property.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-500 ${
                  hoveredProperty === property.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-4xl font-bold text-white mb-2 leading-tight">
                          {/* {property.title} */}
                        </h3>
                        <p className="text-white/90 text-xl font-medium">
                          {property.subtitle}
                        </p>
                      </div>
                      
                  
                      <div className="flex items-center justify-between">
                       
                        </div>
                        <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                          View Details
                        </button>
                     
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Property Type Badge */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full text-sm font-bold shadow-xl border border-white/50">
                  {property.type}
                </div>

            
                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-3xl transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-16 shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Find Your Dream Property?
              </h3>
              <p className="text-white/90 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Explore our complete portfolio of premium properties and find the perfect place to call home. 
                Our expert team is here to guide you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  className="bg-white text-gray-900 px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => router.push('/properties')}
                >
                  Browse All Properties
                </button>
                <button 
                  className="border-2 border-white text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection; 