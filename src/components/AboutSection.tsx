import React, { useEffect, useRef } from 'react';
import { Brain, Rocket, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.about-feature',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo(statsRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About TechNova
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're pioneering the next generation of AI-driven technology solutions that empower 
            businesses to innovate, scale, and thrive in an increasingly digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <div className="about-feature flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">
                    Harness the power of advanced machine learning algorithms to make smarter 
                    decisions and automate complex processes.
                  </p>
                </div>
              </div>

              <div className="about-feature flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Rapid Innovation</h3>
                  <p className="text-gray-300">
                    Accelerate your development cycle with cutting-edge tools and frameworks 
                    designed for the modern enterprise.
                  </p>
                </div>
              </div>

              <div className="about-feature flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-pink-500 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Collaborative Ecosystem</h3>
                  <p className="text-gray-300">
                    Build and deploy solutions in a collaborative environment that brings 
                    teams together across the entire development lifecycle.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              ref={statsRef}
              className="relative bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    5M+
                  </div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-green-400 mb-1">150+</div>
                    <div className="text-sm text-gray-300">Countries</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-2xl font-bold text-blue-400 mb-1">1B+</div>
                    <div className="text-sm text-gray-300">API Calls</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg opacity-30 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;