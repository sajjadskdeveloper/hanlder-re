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
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [propertyData]);

  if (!propertyData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <p className="text-gray-600">The property you&apos;re looking for doesn&apos;t exist.</p>
          <button
            onClick={() => router.push('/properties')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Properties
          </button>
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Property Header */}
      <div className="bg-white shadow-sm border-b relative top-20 z-40 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/properties')}
                className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{propertyData.title}</h1>
                <p className="text-gray-600">{propertyData.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Contact Agent
              </button>
              <button className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleImageClick((activeImage + 1) % propertyData.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg font-bold text-lg">
                  {propertyData.price}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg font-medium">
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
                <div className="p-4">
                  <div className="flex space-x-2 overflow-x-auto">
                    {propertyData.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                          activeImage === index 
                            ? 'border-blue-500 ring-2 ring-blue-200' 
                            : 'border-gray-200 hover:border-gray-300'
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
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Details</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{propertyData.bedrooms}</div>
                  <div className="text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{propertyData.bathrooms}</div>
                  <div className="text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{propertyData.sqft.toLocaleString()}</div>
                  <div className="text-gray-600">Square Feet</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{propertyData.yearBuilt}</div>
                  <div className="text-gray-600">Year Built</div>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4 border">
                          {summaryLines.map((line: string, i: number) => {
                            const [label, ...rest] = line.split(':');
                            return (
                              <div key={i} className="flex flex-col">
                                <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold">{label.trim()}</span>
                                <span className="text-gray-900 text-base font-medium">{rest.join(':').trim()}</span>
                              </div>
                            );
                          })}
                        </div>
                        {/* Features and Amenities */}
                        {features.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-blue-700 mb-2">Features & Amenities</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {features.map((f: string, i: number) => (
                                <li key={i} className="flex items-center text-gray-700">
                                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {/* Property Facts Table */}
                        {facts.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-blue-700 mb-2">Property Facts</h4>
                            <div className="overflow-x-auto">
                              <table className="min-w-full border border-gray-200 rounded-lg">
                                <tbody>
                                  {facts.map((fact: { key: string; value: string }, i: number) => (
                                    <tr key={i} className="even:bg-gray-50">
                                      <td className="px-4 py-2 font-medium text-gray-600 whitespace-nowrap border-b border-gray-100">{fact.key}</td>
                                      <td className="px-4 py-2 text-gray-900 border-b border-gray-100">{fact.value}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                        {/* Select Tenants */}
                        {tenantsLines.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-blue-700 mb-2">Select Tenants</h4>
                            <div className="w-full overflow-x-auto">
                              <div className="min-w-[400px] grid grid-cols-3 bg-blue-50 rounded-t-lg border-b border-blue-200">
                                <div className="px-4 py-2 font-bold text-blue-800 text-xs uppercase tracking-wider">Floor</div>
                                <div className="px-4 py-2 font-bold text-blue-800 text-xs uppercase tracking-wider">Tenant Name</div>
                                <div className="px-4 py-2 font-bold text-blue-800 text-xs uppercase tracking-wider">Industry</div>
                              </div>
                              <div className="divide-y divide-blue-100 border border-blue-100 rounded-b-lg overflow-hidden">
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
                                    <div key={i} className="grid grid-cols-3 bg-white even:bg-blue-50">
                                      <div className="px-4 py-2 text-blue-700 font-semibold text-sm border-r border-blue-50">{floor}</div>
                                      <div className="px-4 py-2 text-gray-800 text-sm font-medium border-r border-blue-50">{name}</div>
                                      <div className="px-4 py-2 text-gray-600 text-sm">{industry}</div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Map Scores */}
                        {mapLines.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-blue-700 mb-2">Map Scores</h4>
                            <div className="flex flex-wrap gap-4">
                              {mapLines.map((m: string, i: number) => {
                                const [label, ...rest] = m.split(':');
                                return (
                                  <div key={i} className="bg-blue-50 rounded px-3 py-2 flex flex-col items-start border border-blue-100 min-w-[160px]">
                                    <span className="text-xs text-blue-700 font-semibold uppercase">{label.trim()}</span>
                                    <span className="text-base text-blue-900 font-bold">{rest.join(':').trim()}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                        {/* Transportation */}
                        {(transit.length > 0 || rail.length > 0 || airport.length > 0) && (
                          <div>
                            <h4 className="text-lg font-semibold text-blue-700 mb-2">Transportation</h4>
                            <div className="space-y-6">
                              {transit.length > 0 && (
                                <div>
                                  <div className="font-semibold text-gray-700 mb-1">Transit/Subway</div>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[400px] border border-blue-200 rounded-lg">
                                      <thead>
                                        <tr className="bg-blue-50">
                                          <th className="px-4 py-2 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-blue-100">Station/Stop Name</th>
                                          <th className="px-4 py-2 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-blue-100">Details</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {transit.map((t: string, i: number) => {
                                          const [name, ...rest] = t.split(':');
                                          return (
                                            <tr key={i} className="even:bg-blue-50">
                                              <td className="px-4 py-2 text-blue-700 font-semibold text-sm border-b border-blue-50 whitespace-nowrap">{name.trim()}</td>
                                              <td className="px-4 py-2 text-gray-800 text-sm font-medium border-b border-blue-50">{rest.join(':').trim()}</td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                              {rail.length > 0 && (
                                <div>
                                  <div className="font-semibold text-gray-700 mb-1">Commuter Rail</div>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[400px] border border-blue-200 rounded-lg">
                                      <thead>
                                        <tr className="bg-blue-50">
                                          <th className="px-4 py-2 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-blue-100">Station/Stop Name</th>
                                          <th className="px-4 py-2 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-blue-100">Details</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {rail.map((t: string, i: number) => {
                                          const [name, ...rest] = t.split(':');
                                          return (
                                            <tr key={i} className="even:bg-blue-50">
                                              <td className="px-4 py-2 text-blue-700 font-semibold text-sm border-b border-blue-50 whitespace-nowrap">{name.trim()}</td>
                                              <td className="px-4 py-2 text-gray-800 text-sm font-medium border-b border-blue-50">{rest.join(':').trim()}</td>
                                            </tr>
                                          );
                                        })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                              {airport.length > 0 && (
                                <div>
                                  <div className="font-semibold text-gray-700 mb-1">Airport</div>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-[400px] border border-blue-200 rounded-lg">
                                      <thead>
                                        <tr className="bg-blue-50">
                                          <th className="px-4 py-2 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-blue-100">Airport Name</th>
                                          <th className="px-4 py-2 text-left text-xs font-bold text-blue-800 uppercase tracking-wider border-b border-blue-100">Details</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {airport.map((t: string, i: number) => {
                                          const [name, ...rest] = t.split(':');
                                          return (
                                            <tr key={i} className="even:bg-blue-50">
                                              <td className="px-4 py-2 text-blue-700 font-semibold text-sm border-b border-blue-50 whitespace-nowrap">{name.trim()}</td>
                                              <td className="px-4 py-2 text-gray-800 text-sm font-medium border-b border-blue-50">{rest.join(':').trim()}</td>
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

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {propertyData.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Building Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {propertyData.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center text-gray-700">
                        <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {amenity}
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
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{propertyData.price}</div>
                <div className="text-gray-600 mb-4">Estimated monthly payment: $12,500</div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
                  Schedule Viewing
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                  Request Information
                </button>
              </div>
            </div>

            {/* Agent Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Listed by</h3>
              <div className="flex items-center mb-4">
                <img
                  src={propertyData.agent.image}
                  alt={propertyData.agent.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{propertyData.agent.name}</div>
                  <div className="text-gray-600">Licensed Real Estate Agent</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {propertyData.agent.phone}
                </div>
                <div className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {propertyData.agent.email}
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-gray-700">
                    <div className="font-medium">{propertyData.address}</div>
                    <div className="text-sm text-gray-500">Manhattan, New York</div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                    </svg>
                    Interactive Map
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Contact Agent</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="I'm interested in this property..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailPage; 