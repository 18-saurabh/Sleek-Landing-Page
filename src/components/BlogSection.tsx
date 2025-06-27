import React, { useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const blogPosts = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for growth and efficiency.',
      author: 'Dr. Sarah Mitchell',
      date: 'January 15, 2025',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Cloud Migration Strategies for Modern Enterprises',
      excerpt: 'Learn the best practices and strategies for successful cloud migration that minimizes downtime and maximizes ROI.',
      author: 'Michael Chen',
      date: 'January 12, 2025',
      readTime: '7 min read',
      category: 'Cloud Computing',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-green-500'
    },
    {
      title: 'Cybersecurity Trends to Watch in 2025',
      excerpt: 'Stay ahead of emerging cyber threats with insights into the latest security trends and protection strategies.',
      author: 'Emily Rodriguez',
      date: 'January 10, 2025',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Building Scalable Mobile Applications',
      excerpt: 'Essential techniques and frameworks for developing mobile apps that can handle millions of users seamlessly.',
      author: 'David Park',
      date: 'January 8, 2025',
      readTime: '8 min read',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-teal-500 to-purple-500'
    },
    {
      title: 'Data Analytics: From Raw Data to Business Intelligence',
      excerpt: 'Transform your data into actionable insights with advanced analytics techniques and visualization tools.',
      author: 'Lisa Thompson',
      date: 'January 5, 2025',
      readTime: '9 min read',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'The Rise of Low-Code Development Platforms',
      excerpt: 'Explore how low-code platforms are democratizing software development and accelerating digital transformation.',
      author: 'James Wilson',
      date: 'January 3, 2025',
      readTime: '4 min read',
      category: 'Development',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      gradient: 'from-red-500 to-purple-500'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
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
      id="blog" 
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Latest Insights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in technology 
            and digital innovation from our expert team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-card group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${post.gradient}`}>
                  {post.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-200 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <button className="group/btn flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300"></div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;