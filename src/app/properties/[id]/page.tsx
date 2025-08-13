'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getPropertyById } from '@/data/properties';
import Header from '@/components/Header';

const PropertyDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const propertyId = params.id as string;
  const propertyData = getPropertyById(propertyId);

  // Auto-transition effect
  useEffect(() => {
    if (!propertyData || propertyData.images.length <= 1) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveImage((prev) => (prev + 1) % propertyData.images.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [propertyData]);

  if (!propertyData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Header />
        
        {/* Error Content with proper spacing for fixed header */}
        <div className="pt-20 flex items-center justify-center min-h-screen p-4">
          <div className="text-center max-w-2xl mx-auto">
            {/* Error Icon */}
            <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl border-4 border-white animate-bounce">
              <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Property Not Found
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
              We couldn&apos;t find the property you&apos;re looking for. It may have been removed or the URL might be incorrect.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => router.push('/properties')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                ← Back to Properties
              </button>
              
              <button
                onClick={() => router.push('/')}
                className="bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 px-8 py-4 rounded-2xl font-semibold hover:from-gray-200 hover:to-blue-200 transition-all duration-300 border border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
              >
                Go to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleImageClick = (index: number) => {
    if (index === activeImage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveImage(index);
      setIsTransitioning(false);
    }, 300);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    alert('Thank you for your interest! We will contact you soon.');
    setShowContactForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      {/* Hero Section with Property Header */}
      <div className="relative top-20 z-40 w-full">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => router.push('/properties')}
                  className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div>
                  <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    {propertyData.title}
                  </h1>
                  <p className="text-blue-100 text-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {propertyData.location}
                  </p>
                </div>
              </div>
              
              {/* Price Badge */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-3xl font-bold text-white">{propertyData.price}</div>
                <div className="text-blue-100 text-sm">Available Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="relative h-96 lg:h-[500px]">
                <div className="relative w-full h-full overflow-hidden">
                  {propertyData.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${propertyData.title} ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ease-in-out ${
                        index === activeImage 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      } ${isTransitioning ? 'blur-sm' : 'blur-0'}`}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                {propertyData.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handleImageClick((activeImage - 1 + propertyData.images.length) % propertyData.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200 hover:border-gray-300 cursor-pointer"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleImageClick((activeImage + 1) % propertyData.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200 hover:border-gray-300 cursor-pointer"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-xl border border-blue-500">
                  {propertyData.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg">
                  {propertyData.status}
                </div>
                
                {/* Image Counter */}
                {propertyData.images.length > 1 && (
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {activeImage + 1} / {propertyData.images.length}
                  </div>
                )}
              </div>
              
              {/* Thumbnail Gallery */}
              {propertyData.images.length > 1 && (
                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex space-x-3 overflow-x-auto pb-4 thumbnail-scrollbar scroll-smooth scroll-container">
                    {propertyData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer ${
                          activeImage === index 
                            ? 'border-blue-500 ring-4 ring-blue-200 shadow-blue-200' 
                            : 'border-gray-200 hover:border-blue-300 hover:shadow-blue-100'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${propertyData.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                  
                  {/* Enhanced Scroll Indicators */}
                  {propertyData.images.length > 4 && (
                    <div className="flex items-center justify-center mt-4">
                    
                      
                      {/* Page indicators */}
                      <div className="flex space-x-1">
                        {Array.from({ length: Math.ceil(propertyData.images.length / 4) }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              Math.floor(activeImage / 4) === i 
                                ? 'bg-blue-500 w-6' 
                                : 'bg-blue-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Property Details
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{propertyData.bedrooms}</div>
                  <div className="text-gray-700 font-medium">Bedrooms</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{propertyData.bathrooms}</div>
                  <div className="text-gray-700 font-medium">Bathrooms</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{propertyData.sqft.toLocaleString()}</div>
                  <div className="text-gray-700 font-medium">Square Feet</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{propertyData.yearBuilt}</div>
                  <div className="text-gray-700 font-medium">Year Built</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Description</h3>
                  {/* Advanced, professional rendering of propertyData.description */}
                  {(() => {
                    const desc = propertyData.description;
                    // Split into sections
                    const sections = desc.split(/\n\n/);
                    // Helper to find section by title
                    const getSection = (title: string) => sections.find((s: string) => s.startsWith(title));
                    // Helper to get lines after a section title
                    const getLines = (section: string | undefined, title: string) => section ? section.split('\n').slice(1) : [];
                    // Top summary (first block, before any section)
                    const summaryLines = sections[0].split('\n');
                    // Features and Amenities
                    const featuresSection = getSection('FEATURES AND AMENITIES');
                    const features = getLines(featuresSection, 'FEATURES AND AMENITIES').map((l: string) => l.replace(/^[-•]\s*/, ''));
                    // Property Facts (table)
                    const factsSection = getSection('PROPERTY FACTS');
                    const factsLines = getLines(factsSection, 'PROPERTY FACTS');
                    const facts = factsLines.map((line: string) => {
                      const [key, ...rest] = line.split(':');
                      return key && rest.length ? { key: key.trim(), value: rest.join(':').trim() } : null;
                    }).filter(Boolean) as { key: string; value: string }[];
                    // Select Tenants
                    const tenantsSection = getSection('SELECT TENANTS');
                    const tenantsLines = getLines(tenantsSection, 'SELECT TENANTS');
                    // Map (table-like)
                    const mapSection = getSection('MAP');
                    const mapLines = getLines(mapSection, 'MAP');
                    // Transportation
                    const transportSection = getSection('TRANSPORTATION');
                    const transportLines = getLines(transportSection, 'TRANSPORTATION');
                    // Subsections for transportation
                    const transitIdx = transportLines.findIndex((l: string) => l.startsWith('TRANSIT/SUBWAY'));
                    const railIdx = transportLines.findIndex((l: string) => l.startsWith('COMMUTER RAIL'));
                    const airportIdx = transportLines.findIndex((l: string) => l.startsWith('AIRPORT'));
                    const transit = transitIdx !== -1 ? transportLines.slice(transitIdx + 1, railIdx !== -1 ? railIdx : airportIdx !== -1 ? airportIdx : undefined) : [];
                    const rail = railIdx !== -1 ? transportLines.slice(railIdx + 1, airportIdx !== -1 ? airportIdx : undefined) : [];
                    const airport = airportIdx !== -1 ? transportLines.slice(airportIdx + 1) : [];
                    return (
                      <div className="space-y-8">
                        {/* Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
                          {summaryLines.map((line: string, i: number) => {
                            const [label, ...rest] = line.split(':');
                            return (
                              <div key={i} className="flex flex-col bg-white rounded-xl p-4 border border-blue-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                                <span className="text-blue-600 text-xs uppercase tracking-wider font-bold mb-1">{label.trim()}</span>
                                <span className="text-gray-900 text-base font-semibold">{rest.join(':').trim()}</span>
                              </div>
                            );
                          })}
                        </div>
                        {/* Features and Amenities */}
                        {features.length > 0 && (
                          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200 shadow-lg">
                            <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              Features & Amenities
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {features.map((f: string, i: number) => (
                                <li key={i} className="flex items-center text-gray-700 bg-white rounded-xl p-3 border border-green-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                                  <span className="font-medium">{f}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* Property Facts Table */}
                        {facts.length > 0 && (
                          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-yellow-200 shadow-lg">
                            <h4 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                              Property Facts
                            </h4>
                            <div className="overflow-x-auto">
                              <table className="min-w-full border border-yellow-200 rounded-xl overflow-hidden shadow-lg">
                                <tbody>
                                  {facts.map((fact: { key: string; value: string }, i: number) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-amber-50'} hover:bg-yellow-100 transition-colors duration-200`}>
                                      <td className="px-6 py-4 font-bold text-yellow-700 whitespace-nowrap border-b border-yellow-100">{fact.key}</td>
                                      <td className="px-6 py-4 text-gray-900 font-medium border-b border-yellow-100">{fact.value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                        {/* Select Tenants */}
                        {tenantsLines.length > 0 && (
                          <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 shadow-lg">
                            <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              Select Tenants
                            </h4>
                            <div className="w-full overflow-x-auto">
                              <div className="min-w-[400px] grid grid-cols-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-t-xl border-b border-orange-300 shadow-lg">
                                <div className="px-6 py-3 font-bold text-white text-sm uppercase tracking-wider">Floor</div>
                                <div className="px-6 py-3 font-bold text-white text-sm uppercase tracking-wider">Tenant Name</div>
                                <div className="px-6 py-3 font-bold text-white text-sm uppercase tracking-wider">Industry</div>
                              </div>
                              <div className="divide-y divide-orange-200 border border-orange-200 rounded-b-xl overflow-hidden shadow-lg">
                                {tenantsLines.map((t: string, i: number) => {
                                  // Example: '5th: Emsig Manufacturing Corporation (Wholesaler)'
                                  const match = t.match(/^([^:]+):\s*(.*?)\s*\(([^)]+)\)$/);
                                  let floor = '', name = '', industry = '';
                                  if (match) {
                                    floor = match[1];
                                    name = match[2];
                                    industry = match[3];
                                  } else {
                                    // fallback: try to split by ':'
                                    const [f, ...rest] = t.split(':');
                                    floor = f?.trim() || '';
                                    const restStr = rest.join(':').trim();
                                    const parenIdx = restStr.lastIndexOf('(');
                                    if (parenIdx !== -1) {
                                      name = restStr.slice(0, parenIdx).trim();
                                      industry = restStr.slice(parenIdx + 1, restStr.length - 1).trim();
                                    } else {
                                      name = restStr;
                                    }
                                  }
                                  return (
                                    <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-orange-50'} hover:bg-orange-100 transition-colors duration-200`}>
                                      <div className="px-6 py-3 text-orange-700 font-bold text-sm border-r border-orange-100">{floor}</div>
                                      <div className="px-6 py-3 text-gray-800 text-sm font-semibold border-r border-orange-100">{name}</div>
                                      <div className="px-6 py-3 text-gray-700 text-sm font-medium">{industry}</div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Map Scores */}
                        {mapLines.length > 0 && (
                          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-200 shadow-lg">
                            <h4 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                              </svg>
                              Map Scores
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                              {mapLines.map((m: string, i: number) => {
                                const [label, ...rest] = m.split(':');
                                return (
                                  <div key={i} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-teal-300">
                                    <span className="text-xs text-teal-600 font-bold uppercase tracking-wider mb-2 block">{label.trim()}</span>
                                    <span className="text-lg text-teal-900 font-bold">{rest.join(':').trim()}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                        {/* Transportation */}
                        {(transit.length > 0 || rail.length > 0 || airport.length > 0) && (
                          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-200 shadow-lg">
                            <h4 className="text-xl font-bold text-indigo-800 mb-6 flex items-center">
                              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              Transportation
                            </h4>
                            <div className="space-y-8">
                              {transit.length > 0 && (
                                <div className="bg-white rounded-xl p-4 border border-indigo-100">
                                  <div className="font-bold text-indigo-700 mb-3 text-lg flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                    Transit/Subway
                                  </div>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[400px] border border-indigo-200 rounded-lg overflow-hidden shadow-lg">
                                      <thead>
                                        <tr className="bg-gradient-to-r from-indigo-500 to-blue-500">
                                          <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider border-b border-indigo-300">Station/Stop Name</th>
                                          <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider border-b border-indigo-300">Details</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {transit.map((t: string, i: number) => {
                                          const [name, ...rest] = t.split(':');
                                          return (
                                            <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-indigo-50'} hover:bg-indigo-100 transition-colors duration-200`}>
                                              <td className="px-6 py-3 text-indigo-700 font-bold text-sm border-b border-indigo-100 whitespace-nowrap">{name.trim()}</td>
                                              <td className="px-6 py-3 text-gray-800 text-sm font-medium border-b border-indigo-100">{rest.join(':').trim()}</td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                              {rail.length > 0 && (
                                <div className="bg-white rounded-xl p-4 border border-indigo-100">
                                  <div className="font-bold text-indigo-700 mb-3 text-lg flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Commuter Rail
                                  </div>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[400px] border border-indigo-200 rounded-lg overflow-hidden shadow-lg">
                                      <thead>
                                        <tr className="bg-gradient-to-r from-indigo-500 to-blue-500">
                                          <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider border-b border-indigo-300">Station/Stop Name</th>
                                          <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider border-b border-indigo-300">Details</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {rail.map((t: string, i: number) => {
                                          const [name, ...rest] = t.split(':');
                                          return (
                                            <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-indigo-50'} hover:bg-indigo-100 transition-colors duration-200`}>
                                              <td className="px-6 py-3 text-indigo-700 font-bold text-sm border-b border-indigo-100 whitespace-nowrap">{name.trim()}</td>
                                              <td className="px-6 py-3 text-gray-800 text-sm font-medium border-b border-indigo-100">{rest.join(':').trim()}</td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                              {airport.length > 0 && (
                                <div className="bg-white rounded-xl p-4 border border-indigo-100">
                                  <div className="font-bold text-indigo-700 mb-3 text-lg flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    Airport
                                  </div>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[400px] border border-indigo-200 rounded-lg overflow-hidden shadow-lg">
                                      <thead>
                                        <tr className="bg-gradient-to-r from-indigo-500 to-blue-500">
                                          <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider border-b border-indigo-300">Airport Name</th>
                                          <th className="px-6 py-3 text-left text-xs font-bold text-white uppercase tracking-wider border-b border-indigo-300">Details</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {airport.map((t: string, i: number) => {
                                          const [name, ...rest] = t.split(':');
                                          return (
                                            <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-indigo-50'} hover:bg-indigo-100 transition-colors duration-200`}>
                                              <td className="px-6 py-3 text-indigo-700 font-bold text-sm border-b border-indigo-100 whitespace-nowrap">{name.trim()}</td>
                                              <td className="px-6 py-3 text-gray-800 text-sm font-medium border-b border-indigo-100">{rest.join(':').trim()}</td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Property Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {propertyData.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700 bg-white rounded-xl p-3 border border-emerald-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                        <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 border border-sky-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-sky-800 mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Building Amenities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {propertyData.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-700 bg-white rounded-xl p-3 border border-sky-100 hover:shadow-md transition-all duration-300 hover:scale-105">
                        <svg className="w-5 h-5 text-sky-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 bg-gradient-to-br from-white to-blue-50">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">{propertyData.price}</div>
                <div className="text-gray-600 mb-6 text-lg">Estimated monthly payment: $12,500</div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 mb-4 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer">
                  Schedule Viewing
                </button>
                <button className="w-full bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 py-4 rounded-2xl font-semibold hover:from-gray-200 hover:to-blue-200 transition-all duration-300 border border-gray-200 hover:border-gray-300 cursor-pointer">
                  Request Information
                </button>
              </div>
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 bg-gradient-to-br from-white to-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Listed by</h3>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={propertyData.agent.image}
                    alt={propertyData.agent.name}
                    className="w-20 h-20 rounded-2xl object-cover mr-4 border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{propertyData.agent.name}</div>
                  <div className="text-gray-600 font-medium">Licensed Real Estate Agent</div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700 bg-blue-50 rounded-xl p-3 border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold">{propertyData.agent.phone}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-blue-50 rounded-xl p-3 border border-blue-100 hover:bg-blue-100 transition-colors duration-200">
                  <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-semibold">{propertyData.agent.email}</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 bg-gradient-to-br from-white to-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Location</h3>
              <div className="space-y-4">
                <div className="flex items-start bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-gray-700">
                    <div className="font-bold text-lg">{propertyData.address}</div>
                    <div className="text-blue-600 font-medium">Manhattan, New York</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl h-40 flex items-center justify-center border border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="text-center text-blue-700 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-10 h-10 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                    <div className="font-semibold">Interactive Map</div>
                    <div className="text-sm opacity-75">Click to explore</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage; 