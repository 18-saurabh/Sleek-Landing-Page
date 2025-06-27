import React, { useEffect, useRef } from 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PricingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 29,
      period: 'month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 team members',
        'Basic AI tools',
        '10GB storage',
        'Email support',
        'Basic analytics',
        'Mobile app access'
      ],
      gradient: 'from-blue-500 to-purple-500',
      popular: false
    },
    {
      name: 'Professional',
      icon: Crown,
      price: 99,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 team members',
        'Advanced AI features',
        '100GB storage',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom integrations',
        'White-label options'
      ],
      gradient: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Enterprise',
      icon: Rocket,
      price: 299,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'Full AI suite',
        'Unlimited storage',
        '24/7 dedicated support',
        'Custom analytics',
        'Full API access',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      gradient: 'from-pink-500 to-red-500',
      popular: false
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card',
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
      id="pricing" 
      className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible pricing options designed to scale with your business. 
            Start free and upgrade as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`pricing-card group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-purple-500/50 hover:border-purple-400 scale-105' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/25'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                }`}>
                  Get Started
                </button>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5'
                    : 'bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5'
                }`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;