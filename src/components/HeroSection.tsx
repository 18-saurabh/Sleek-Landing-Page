import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.6 }
      );

      gsap.fromTo(buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.9 }
      );

      gsap.fromTo('.stat-card',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, delay: 1.2, ease: 'power2.out' }
      );

      // Floating shapes animation
      gsap.to('.floating-shape-1', {
        y: -20,
        rotation: 5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.to('.floating-shape-2', {
        y: 20,
        rotation: -5,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      gsap.to('.floating-shape-3', {
        y: -15,
        rotation: 10,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // Continuous rotation for geometric shapes
      gsap.to('.rotating-shape', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"
    >
      {/* Animated Background Elements */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none">
        <div className="floating-shape-1 absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"></div>
        <div className="floating-shape-2 absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg opacity-30"></div>
        <div className="floating-shape-3 absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-25"></div>
        <div className="rotating-shape absolute bottom-40 right-10 w-24 h-24 border-2 border-purple-500 rounded-lg opacity-20"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-shape-1 absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl transform rotate-45"></div>
        <div className="floating-shape-2 absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-full"></div>
        <div className="floating-shape-3 absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-green-500/10 backdrop-blur-sm rounded-2xl transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 
              ref={titleRef}
              className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                The Future of
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Innovation
              </span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Experience next-generation technology that transforms ideas into reality with 
              AI-powered solutions designed for tomorrow's challenges.
            </p>
          </div>

          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4"
          >
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 w-full sm:w-auto justify-center">
              <span>Get Started Now</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center">
              <Play className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          <div 
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 px-4"
          >
            <div className="stat-card bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">99.9%</div>
              <div className="text-gray-300 mt-2 text-sm sm:text-base">Uptime Reliability</div>
            </div>
            <div className="stat-card bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">10x</div>
              <div className="text-gray-300 mt-2 text-sm sm:text-base">Faster Processing</div>
            </div>
            <div className="stat-card bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-gray-300 mt-2 text-sm sm:text-base">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;