'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  email: string;
  phone: string;
  image: string;
  category: 'PRINCIPALS' | 'TENANT REPRESENTING' | 'MANAGEMENT';
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Scott Galin',
    title: 'PRINCIPAL/CEO',
    email: 'sgalin@handler-re.com',
    phone: '646.597.6170',
    image: '/images/Scott_Galin_146.jpg',
    category: 'PRINCIPALS',
    description: 'Leading the company with over 25 years of real estate expertise and strategic vision.'
  },
  {
    id: 2,
    name: 'Scott G. Handler',
    title: 'PRINCIPAL',
    email: 'shandler@handler-re.com',
    phone: '646.597.6171',
    image: '/images/Scott_Handler_079.jpg',
    category: 'PRINCIPALS',
    description: 'Co-founder with deep expertise in commercial real estate development and investment.'
  },
  {
    id: 3,
    name: 'Darell M. Handler',
    title: 'Chief Operating Officer',
    email: 'dhandler@handler-re.com',
    phone: '646.597.6171',
    image: '/images/Darell_Handler_041.jpg',
    category: 'TENANT REPRESENTING',
    description: 'Overseeing day-to-day operations and driving operational excellence across all properties.'
  },
  {
    id: 4,
    name: 'Richard Farley',
    title: 'Senior Vice President',
    email: 'rfarley@handler-re.com',
    phone: '646.597.6179',
    image: '/images/Richard_Farley_047.jpg',
    category: 'TENANT REPRESENTING',
    description: 'Leading tenant representation and leasing strategies with proven track record.'
  },
  {
    id: 5,
    name: 'Kyle Galin',
    title: 'VICE PRESIDENT',
    email: 'kgalin@handler-re.com',
    phone: '646.998.6012',
    image: '/images/Kyle_Galin_092.jpg',
    category: 'TENANT REPRESENTING',
    description: 'Managing client relationships and driving business development initiatives.'
  },
  {
    id: 6,
    name: 'Alex Bush',
    title: 'SENIOR DIRECTOR',
    email: 'abush@handler-re.com',
    phone: '646.517.8782',
    image: '/images/Alex_Bush_009.jpg',
    category: 'TENANT REPRESENTING',
    description: 'Specializing in high-value commercial transactions and market analysis.'
  },
  {
    id: 7,
    name: 'Isaac Leader',
    title: 'ASSOCIATE',
    email: 'ileader@handler-re.com',
    phone: '646.747.4686',
    image: '/images/Isaac_Leader_036.jpg',
    category: 'TENANT REPRESENTING',
    description: 'Building strong client relationships and supporting complex real estate transactions.'
  },
  {
    id: 8,
    name: 'Allen C. Reiferson',
    title: 'Controller',
    email: 'allen@handro.com',
    phone: '646.747.4690',
    image: '/images/Allen_Reiferson_033.jpg',
    category: 'MANAGEMENT',
    description: 'Managing financial operations and ensuring fiscal responsibility across all properties.'
  },
  {
    id: 9,
    name: 'Jesse McNeill',
    title: 'Director, Property MGMT',
    email: 'jesse@handro.com',
    phone: '646.747.4698',
    image: '/images/Jesse_McNeill_38.jpg',
    category: 'MANAGEMENT',
    description: 'Overseeing property management operations and tenant satisfaction initiatives.'
  },
  {
    id: 10,
    name: 'Maria Bidnick',
    title: 'Accounting Manager',
    email: 'maria@handro.com',
    phone: '646.747.4702',
    image: '/images/Maria_Bidnick_050-1.jpg',
    category: 'MANAGEMENT',
    description: 'Leading accounting operations and financial reporting for all managed properties.'
  },
  {
    id: 11,
    name: 'Helen Werring',
    title: 'Administrative Assistant',
    email: 'helen@handro.com',
    phone: '646.747.4692',
    image: '/images/Helen_Werring_098.jpg',
    category: 'MANAGEMENT',
    description: 'Providing exceptional administrative support and ensuring smooth office operations.'
  }
];

const TeamSection = () => {
  const [activeCategory, setActiveCategory] = useState<'PRINCIPALS' | 'TENANT REPRESENTING' | 'MANAGEMENT'>('PRINCIPALS');
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

    const element = document.getElementById('team');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { key: 'PRINCIPALS', label: 'PRINCIPALS', color: 'from-blue-600 to-purple-600' },
    { key: 'TENANT REPRESENTING', label: 'TENANT REPRESENTING, LEASING & AGENCY SERVICES', color: 'from-green-600 to-teal-600' },
    { key: 'MANAGEMENT', label: 'MANAGEMENT', color: 'from-orange-600 to-red-600' }
  ];

  const filteredMembers = teamMembers.filter(member => member.category === activeCategory);

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Our Team
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Real Estate with a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Long-Term Perspective
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated professionals who drive our success through expertise, innovation, and unwavering commitment to excellence in real estate.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key as 'PRINCIPALS' | 'TENANT REPRESENTING' | 'MANAGEMENT')}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                activeCategory === category.key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {activeCategory === category.key && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative bg-gray-800/20 backdrop-blur-md rounded-3xl p-6 border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Subtle Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/3 to-purple-500/3 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                             {/* Member Image */}
               <div className="relative mb-6">
                 <div className="relative w-36 h-36 mx-auto">
                   {/* Glass Effect Container */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl"></div>
                   
                   {/* Image Container */}
                   <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                     <img
                       src={member.image}
                       alt={member.name}
                       className="w-full h-full object-cover"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.src = '/images/placeholder-avatar.svg';
                       }}
                     />
                     {/* Subtle overlay for depth */}
                     <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
                   </div>
                   
                   {/* Professional border accent */}
                   <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-indigo-500/30 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   
                   {/* Status Indicator */}
                   <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-3 border-gray-800 shadow-lg">
                     <div className="absolute inset-1 bg-green-300 rounded-full animate-pulse"></div>
                   </div>
                 </div>
               </div>

              {/* Member Info */}
              <div className="text-center space-y-3">
                                 <h3 className="text-2xl font-bold text-white">
                   {member.name}
                 </h3>
                <p className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full inline-block">
                  {member.title}
                </p>
                
                {member.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                )}

                {/* Contact Info */}
                <div className="space-y-2 pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${member.phone}`} className="text-sm hover:underline">
                      {member.phone}
                    </a>
                  </div>
                </div>

                
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className={`mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">11</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Team Members</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">25+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">1000+</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Deals Closed</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">98%</div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work with Our Team?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect with our experienced professionals and discover how we can help you achieve your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer">
                Contact Our Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <Link href="/properties">
                View Our Properties
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 