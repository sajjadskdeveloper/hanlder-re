'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useElevenLabs } from '@/contexts/ElevenLabsContext';

const Header = () => {
  // Use ElevenLabs context
  const { 
    isCallActive, 
    errorMessage,
    status, 
    handleStartCall, 
    handleEndCall
  } = useElevenLabs();

  const navItems = [
    // { href: '/', label: 'Home' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#availabilities', label: 'Availabilities' },
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
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-gray-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent ">
                  Handler 
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-[#0582FF] hover:text-[#2f05ff] font-medium transition-all duration-300 group cursor-pointer"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0  transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="flex items-center space-x-4">
              {/* Desktop Contact Info */}
              <div className="hidden lg:flex items-center space-x-2 group">
                <div className="w-8 h-8 bg-gradient-to-br from-slate-50 to-gray-50 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-slate-100 group-hover:to-gray-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-[#0582FF]">Call Us</span>
                  <span className="text-xs text-[#0582FF]">+1 (555) 123-4567</span>
                </div>
              </div>
              
              {/* Call Button - Desktop */}
              <div className="hidden lg:block relative group">
                 <button 
                   type="button" 
                   aria-label={isCallActive ? "End call" : "Start a call"} 
                   className={`flex items-center space-x-2 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 group/btn cursor-pointer bg-white/10 backdrop-blur-sm shadow-lg border-white/20 hover:shadow-xl transform hover:scale-105 ${
                     isCallActive 
                       ? 'text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-400 hover:border-red-500 focus:ring-red-500' 
                       : 'text-gray-700 hover:bg-white/20'
                   }`}
                   onClick={isCallActive ? handleEndCall : handleStartCall}
                   disabled={status === 'connecting' || status === 'disconnecting'}
                 >
                   <div className="relative">
                     <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-slate-100 group-hover:ring-slate-200 transition-all duration-300">
                       <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("/images/sahara-home-newarrival-1.jpg")'}}></div>
                     </div>
                     <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                   </div>
                   <span className={`font-semibold ${
                     isCallActive 
                       ? 'text-white' 
                       : 'bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent'
                   }`}>
                     {status === 'connecting' ? 'Connecting...' : 
                      status === 'disconnecting' ? 'Disconnecting...' : 
                      isCallActive ? 'End Call' : 'Speak to our Concierge'}
                   </span>
                 </button>
                 
                 {/* Error message display */}
                 {errorMessage && (
                   <div className="absolute top-full left-0 mt-2 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs whitespace-nowrap z-50">
                     {errorMessage}
                   </div>
                 )}
               </div>

               {/* Mobile Call Button - With Text */}
               <div className="lg:hidden relative group">
                 <button 
                   type="button" 
                   aria-label={isCallActive ? "End call" : "Start a call"} 
                   className={`flex items-center space-x-2 px-3 py-1.5 text-xs font-medium rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 group/btn cursor-pointer bg-white/10 backdrop-blur-sm shadow-lg border-white/20 hover:shadow-xl transform hover:scale-105 ${
                     isCallActive 
                       ? 'text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-red-400 hover:border-red-500 focus:ring-red-500' 
                       : 'text-gray-700 hover:bg-white/20'
                   }`}
                   onClick={isCallActive ? handleEndCall : handleStartCall}
                   disabled={status === 'connecting' || status === 'disconnecting'}
                 >
                   <div className="relative">
                     <div className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-slate-100 group-hover:ring-slate-200 transition-all duration-300">
                       <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("/images/sahara-home-newarrival-1.jpg")'}}></div>
                     </div>
                     <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                   </div>
                   <span className={`font-semibold ${
                     isCallActive 
                       ? 'text-white' 
                       : 'bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent'
                   }`}>
                     {status === 'connecting' ? 'Connecting...' : 
                      status === 'disconnecting' ? 'Disconnecting...' : 
                      isCallActive ? 'End Call' : 'Speak to our Concierge'}
                   </span>
                 </button>
                 
                 {/* Error message display for mobile */}
                 {errorMessage && (
                   <div className="absolute top-full right-0 mt-2 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-xs whitespace-nowrap z-50">
                     {errorMessage}
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};


export default Header; 