'use client';

import { useState } from 'react';
import Header from './Header';
import Link from 'next/link';

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-10">
      {/* Header inside Hero */}
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-black/10"></div>
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="absolute inset-0 z-10">
          <Header />
        </div>
      </div>

            {/* Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Main Content */}
          <div className="text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">PASSION FUELED BY HUSTLE</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-none tracking-wide">
                <span className="block">
                  Decades of
                </span>
                
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Perspective
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Since <span className="font-semibold text-blue-300">1979</span> when Jerry Handler founded our firm, we've brought a passion for the details to every facet of our business. As a multi-faceted real estate company and owner/operator of more than <span className="font-semibold text-purple-300">one million square feet</span> of commercial space, our decades of perspective ground our get it done approach.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 ">
              <button id="tenant-representation-btn" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <Link href="#tenantServices1">
                GO DIRECTLY TO Tenant Representation
                </Link>
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 backdrop-blur-md transition-all duration-300 cursor-pointer">
                View Portfolio
              </button>
            </div>

            {/* Features */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">01</span>
                </div>
                <div>
                  <div className="text-white font-semibold">100% Satisfaction</div>
                  <div className="text-gray-400 text-sm">Guarantee</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">02</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Quality Office</div>
                  <div className="text-gray-400 text-sm">Design</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Professional</div>
                  <div className="text-gray-400 text-sm">Excellence</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right Side - Stats & Visual Elements */}
          <div className="relative">
            {/* Floating Stats Cards */}
            {/* <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-gray-300">Projects Completed</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 ml-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">1000+</div>
                    <div className="text-gray-300">Happy Clients</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 