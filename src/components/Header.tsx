'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useElevenLabs } from '@/contexts/ElevenLabsContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isCallActive, status, handleStartCall, handleEndCall } = useElevenLabs();

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Header inside Hero */}
      <header 
      className="relative z-50 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"
      >
        <div 
          className="rounded-2xl bg-white/10 backdrop-blur-md border border-white shadow-2xl"
        >
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-24 h-16 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <Image 
                      src="/images/logo.svg" 
                      alt="Handler Real Estate Logo" 
                      width={244}
                      height={80}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                    Handler
                  </span>
                  <span className="text-xs text-[#0582FF] font-medium">Real Estate Excellence</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-[#0582FF] hover:text-[#2f05ff] font-medium transition-all duration-300 group cursor-pointer"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0  transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-[#0582FF]">Call Us</span>
                  <span className="text-xs text-[#0582FF]">+1 (555) 123-4567</span>
                </div>
              </div>
                             <div className="relative group">
                 <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-1.5 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                   <div className="relative">
                     <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                       <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("/images/sahara-home-newarrival-1.jpg")'}}></div>
                     </div>
                     <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                       isCallActive 
                         ? 'bg-red-400 animate-pulse' 
                         : 'bg-green-400'
                     }`}></div>
                   </div>
                   <button 
                     type="button" 
                     aria-label={isCallActive ? "End call" : "Start a call"} 
                     className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 group/btn cursor-pointer ${
                       isCallActive 
                         ? 'text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-400 hover:border-red-500 focus:ring-red-500' 
                         : 'text-gray-700 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 border-blue-100 hover:border-blue-200 focus:ring-blue-500'
                     }`}
                     onClick={isCallActive ? handleEndCall : handleStartCall}
                     disabled={status === 'connecting' || status === 'disconnecting'}
                   >
                     <svg className={`w-3.5 h-3.5 transition-colors duration-200 ${
                       isCallActive ? 'text-white group-hover/btn:text-red-100' : 'text-blue-600 group-hover/btn:text-blue-700'
                     }`} fill="currentColor" viewBox="0 0 18 18">
                       <path d="M3.7489 2.25C2.93286 2.25 2.21942 2.92142 2.27338 3.7963C2.6686 10.2041 7.79483 15.3303 14.2026 15.7255C15.0775 15.7795 15.7489 15.066 15.7489 14.25V11.958C15.7489 11.2956 15.3144 10.7116 14.6799 10.5213L12.6435 9.91035C12.1149 9.75179 11.542 9.89623 11.1518 10.2864L10.5901 10.8482C9.15291 10.0389 7.95998 8.84599 7.15074 7.40881L7.71246 6.84709C8.10266 6.45689 8.24711 5.88396 8.08854 5.35541L7.47761 3.31898C7.28727 2.6845 6.70329 2.25 6.04087 2.25H3.7489Z"></path>
                     </svg>
                     <span className={`font-semibold ${
                       isCallActive 
                         ? 'text-white' 
                         : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
                     }`}>
                       {status === 'connecting' ? 'Connecting...' : 
                        status === 'disconnecting' ? 'Disconnecting...' : 
                        isCallActive ? 'End Call' : 'Call Now'}
                     </span>
                   </button>
                 </div>
                 
                 {/* Tooltip */}
              
               </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 transition-all duration-300 group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-5 h-5">
                <span 
                  className={`absolute top-0 left-0 w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'
                  }`}
                ></span>
                <span 
                  className={`absolute top-2 left-0 w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span 
                  className={`absolute top-4 left-0 w-5 h-0.5 bg-gray-700 transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0'
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-menu-container lg:hidden">
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="py-4 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm rounded-b-2xl">
                <nav className="flex flex-col space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center px-6 py-3 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 group rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
                      onClick={() => setIsMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: isMenuOpen ? 'slideInFromTop 0.5s ease-out forwards' : 'none'
                      }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="ml-auto w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                    </Link>
                  ))}
                  
                  {/* Mobile Contact Section */}
                  <div className="mt-4 pt-4 border-t border-gray-200/50 space-y-3">
                    <div className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">Call Us Now</span>
                        <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
                      </div>
                    </div>
                    
                    <button className="w-full mx-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm">
                      Get Started Today
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header; 