'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const businessLines = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Ownership',
      description: 'Handro Properties and ESSH Investments LLC',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Agency Representation',
      description: 'Handler Real Estate Services',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Property Management',
      description: 'Handro Management Group',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Real Estate Advisory',
      description: 'Strategic consulting and guidance',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Strategic Investments',
      description: 'Over 100 unique investments across multiple asset classes',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const tenantServices = [
    { id: 'tenantServices1', text: 'Boutique Brokerage Involved in Every Deal' },
    { id: 'tenantServices2', text: 'Representing Small and Large Startups and Established Firms' },
    { id: 'tenantServices3', text: 'Committed to Curating the Best and Most Relevant Tenant Opportunities' },
    { id: 'tenantServices4', text: 'Focused on Tenant Bottom Line and Future Growth' }
  ];

  const industries = [
    'HEDGEFUND – FINANCIAL DISTRICT',
    'FINANCIAL SERVICES - TRIBECA',
    'PROPTECH - FLATIRON',
    'TECH - HUDSON SQUARE',
    'ENTERTAINMENT - MEATPACKING DISTRICT'
  ];

  const stats = [
    { number: '110+', label: 'Unique Investments', suffix: '' },
    { number: '20+', label: 'Investments in 2022-2023', suffix: '' },
    { number: '100%', label: 'Client Satisfaction', suffix: '' },
    { number: '25+', label: 'Years of Experience', suffix: '' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 {/* Professional Header Section */}
         <div className={`text-center mb-12 sm:mb-16 lg:mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <div className="inline-flex items-center px-3 sm:px-4 lg:px-6 py-2 sm:py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8 shadow-lg">
             <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
             ABOUT HANDLER
           </div>
           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 lg:mb-8 leading-tight px-2 sm:px-4">
             <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
               Creative Thinking
             </span>
             <br />
             <span className="text-slate-700">&</span>
             <br />
             <span className="bg-gradient-to-r from-purple-800 via-blue-800 to-slate-900 bg-clip-text text-transparent">
               Committed Doing
             </span>
           </h1>
           <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 mx-auto rounded-full shadow-lg"></div>
         </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-16 sm:mb-24 lg:mb-32">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 lg:space-y-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-light">
                Whether as owners (Handro Properties, ESSH Investments LLC), leasing agents (Handler Real Estate Services) or managing agents (Handro Management Group) our focus is always on both the big picture as well as the small details. This leads us to look at every challenge as an opportunity and every day as a reason to add value.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-light">
                Our roots lie in New York City where we continue to own and manage properties for our own account. A recent ambitious growth program has added several additional business lines – a thriving boutique tenant representation practice, a robust consulting practice, agency representation and an investment portfolio comprised of over 100 unique investments, both domestic and international.
              </p>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 sm:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-2 sm:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium text-xs sm:text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Professional Styling */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Image Container */}
            <div className="relative z-10 group">
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl">
                <img
                  src="/images/about.png"
                  alt="New York City Real Estate"
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/10"></div>
                
                {/* Floating Content Overlay */}
                <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-white/20">
                    <div className="flex items-center mb-2 sm:mb-3">
                      <div className="w-2 sm:w-3 h-2 sm:h-3 bg-blue-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-medium text-blue-200 uppercase tracking-wide">New York City</span>
                    </div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">Premium Real Estate</h4>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                      Strategic investments across Manhattan&apos;s most prestigious districts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sophisticated Background Elements - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-10 -right-10 w-full h-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-3xl -z-10 transform rotate-3 shadow-2xl"></div>
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl -z-10 transform rotate-1"></div>
            
            {/* Floating Decorative Elements - Hidden on mobile */}
            <div className="hidden lg:block absolute -top-12 -left-12 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full -z-10 animate-pulse blur-xl"></div>
            <div className="hidden lg:block absolute top-20 -right-8 w-24 h-24 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full -z-10 animate-bounce opacity-60"></div>
            <div className="hidden lg:block absolute bottom-20 -left-6 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-full -z-10 animate-ping opacity-40"></div>
            
            {/* Professional Border Accent */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/10 -z-10"></div>
          </div>
        </div>

        {/* Investment Portfolio Section */}
        <div className={`bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl mb-16 sm:mb-24 lg:mb-32 border border-slate-200 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-8 sm:mb-12">
            {/* <h3 className="text-4xl font-bold text-slate-900 mb-6">Investment Portfolio Growth</h3> */}
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
            In 2015 we created a new entity, ESSH Investments LLC, to expand our investments beyond our core portfolio. Since that time, we have participated in over 110 unique investments, including more than 20 in 2022 and 2023,  across multiple asset classes including multifamily, mixed-use, industrial, self-storage, and student housing. We continue to actively seek diverse equity and debt opportunities where our knowledge, insight, and experience add value to our partnerships.


            </p>
          </div>
        </div>

        {/* Professional Business Lines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 lg:mb-32">
          {businessLines.map((line, index) => (
            <div key={index} className={`bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${line.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                <div className="text-white">
                  {line.icon}
                </div>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">{line.title}</h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{line.description}</p>
            </div>
          ))}
        </div>

        {/* Relationships Matter Section - Professional Design */}
        <div className={`bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl mb-12 sm:mb-16 lg:mb-24 text-white relative overflow-hidden transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight px-2">
              MORE THAN BRICKS AND MORTAR,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">RELATIONSHIPS MATTER</span>
            </h3>
            <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4 sm:mb-6 lg:mb-8"></div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-4xl lg:max-w-5xl mx-auto leading-relaxed font-light px-2 sm:px-4">
              Part of our success can be attributed to our broad and deep network representing every corner of the real estate business. This informs our knowledge base and contributes to our decision-making capacity knowing that for any question that may arise or any circumstance requiring due diligence we can call upon this network of experts for insight and guidance.
            </p>
          </div>
        </div>

        {/* Tenant Representation Section - Professional Layout */}
        <div id="tenantServices1" className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-24 lg:mb-32">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">Tenant Representation</h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 sm:mb-8"></div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 leading-relaxed font-light">
              We bring a practiced and nuanced landlord&apos;s perspective to tenant representation which imbues our clients with a comprehensive understanding of the current state of the market and the best approach to leasing in the moment.
            </p>
            
            {/* Tenant Services */}
            <div className="space-y-4 sm:space-y-6">
              {tenantServices.map((service, index) => (
                <div key={service.id} className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-sm"></div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">{service.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
              We understand how – and importantly, when – to be both aggressive and reasonable on behalf of each client and we approach each lease negotiation from a holistic perspective to reach a win-win outcome. We pride ourselves on our communications skills and strive for as much transparency as feasible so that all parties are more than satisfied at closing.
            </p>
          </div>

          {/* Right Content - Industries */}
          <div className={`bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl border border-slate-200 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h4 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8">Industries We Serve</h4>
            <div className="space-y-3 sm:space-y-4">
              {industries.map((industry) => (
                <div key={industry} className="group p-4 sm:p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl sm:rounded-2xl border-l-4 border-blue-600 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-slate-900 text-sm sm:text-base lg:text-lg">{industry}</span>
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Professional Background Image */}
            <div className="mt-6 sm:mt-8 relative overflow-hidden rounded-xl sm:rounded-2xl h-24 sm:h-32">
              <img
                src="/images/about-bg.jpg"
                alt="New York City Skyline"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">Premium Locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl max-w-5xl mx-auto border border-slate-200">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              Ready to Experience the Handler Difference?
            </h3>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto font-light">
              Discover how our creative thinking and committed doing approach can transform your real estate experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                Contact Us Today
              </button>
              <button className="border-2 border-slate-800 text-slate-800 px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold hover:bg-slate-800 hover:text-white transition-all duration-300 shadow-lg text-sm sm:text-base">
                <Link href="/properties">
                View Our Properties
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default AboutSection; 