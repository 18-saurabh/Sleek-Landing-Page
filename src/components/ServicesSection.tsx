import React, { useEffect, useRef } from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.',
      features: ['Full-stack Development', 'API Integration', 'Legacy System Modernization'],
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'Progressive Web Apps'],
      gradient: 'from-blue-500 to-green-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize performance and reduce costs.',
      features: ['AWS & Azure', 'DevOps Automation', 'Microservices Architecture'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and machine learning.',
      features: ['Big Data Processing', 'ML Model Development', 'Real-time Analytics'],
      gradient: 'from-teal-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management'],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence and automation to streamline operations and enhance productivity.',
      features: ['Process Automation', 'Chatbot Development', 'Computer Vision'],
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
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
      id="services" 
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="service-card group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-200">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-200">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;