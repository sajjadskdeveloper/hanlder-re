'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

interface Property {
  id: string;
  title: string;
  image: string;
  location: string;
  price: string;
  status: string;
}

const PropertiesPage = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const allProperties: Property[] = [
    {
      id: '1',
      title: '561 Seventh Avenue',
      image: '/images/561-Seventh-Ave-7.jpg',
      location: 'Manhattan, NY',
      price: 'Upon Request',
      status: 'Available'
    },
    {
      id: '2',
      title: '315-321 West 39th Street',
      image: '/images/315-321-W-39th-St-4.jpg',
      location: 'Manhattan, NY',
      price: 'Upon Request',
      status: 'Available'
    },
    {
      id: '3',
      title: '263 West 38th Street',
      image: '/images/263-W-38th-St-6.jpg',
      location: 'Manhattan, NY',
      price: 'Upon Request',
      status: 'Available'
    },
  ];

  const filteredProperties = allProperties.filter(property => {
    return property.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-indigo-50/40">
      {/* Header Component */}
      <Header />

      {/* Page Content with proper spacing for fixed header */}
      <div className="pt-20">
        {/* Enhanced Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Enhanced decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 mb-6">
                <svg className="w-6 h-6 text-blue-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-blue-200 font-semibold">Premium Real Estate Portfolio</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Our Properties
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Discover exceptional real estate opportunities in prime Manhattan locations. 
                Each property represents the pinnacle of commercial real estate excellence.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{allProperties.length}</div>
                  <div className="text-blue-200 text-sm font-medium">Total Properties</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Premium</div>
                  <div className="text-blue-200 text-sm font-medium">Quality Grade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Search Filter Section */}
        <div className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 max-w-lg w-full">
                <label className="block text-lg font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Search Properties
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by property name, location, or features..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 bg-white/90 backdrop-blur-sm transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
                  />
                  <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Properties Count Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg text-center min-w-[140px]">
                  <div className="text-3xl font-bold text-blue-600 mb-1">{filteredProperties.length}</div>
                  <div className="text-sm text-gray-700 font-medium">Properties Found</div>
                </div>
                
                {/* Back Button */}
                <button
                  onClick={() => router.push('/')}
                  className="bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 px-8 py-4 rounded-2xl hover:from-gray-200 hover:to-blue-200 transition-all duration-300 transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 cursor-pointer"
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Properties Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {filteredProperties.length > 0 ? (
            <>
              {/* Grid Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Available Properties
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Explore our curated selection of premium commercial properties in Manhattan
                </p>
              </div>
              
              {/* Properties Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
              
              {/* Bottom CTA
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Need More Information?</h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Contact our team for detailed property information and viewing arrangements
                  </p>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer">
                    Contact Our Team
                  </button>
                </div>
              </div> */}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No properties found</h3>
              <p className="text-gray-600 max-w-md mx-auto text-lg mb-8">
                Try adjusting your search criteria or browse our complete collection of premium properties
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// PropertyCard component with enhanced design
const PropertyCard = ({ id, title, image, location, price, status }: Property) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/properties/${id}`);
  };

  return (
    <div 
      className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden cursor-pointer border border-gray-100 bg-gradient-to-br from-white to-blue-50/30"
      onClick={handleCardClick}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-xl font-semibold text-sm shadow-lg">
          {status}
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-sm shadow-xl border border-blue-500">
          {price}
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
        
        {/* Hover overlay with icon */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-2xl">
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
        
      </div>
      
      {/* Content */}
      <div className="p-6 transform transition-transform duration-500 ease-out group-hover:translate-y-1">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-2">
          {title}
        </h3>
        
     
        
      </div>
    </div>
  );
};

export default PropertiesPage; 