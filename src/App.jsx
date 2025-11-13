import React, { useState, useEffect } from 'react';
import { BookOpen, PenTool, Users, Sparkles, TrendingUp, MessageCircle, Search, Menu, X } from 'lucide-react';
import About from './pages/about';

export default function VortigoBlog() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredPosts = [
  {
    title: "How Malware Works: A Deep Dive",
    excerpt: "A beginner-friendly breakdown of malware types, behavior, and analysis techniques.",
    category: "Malware Analysis",
    readTime: "7 min read",
    image: "🦠",
    link: "https://blog.malwarebytes.com/malware/2020/01/how-malware-works/"
  },
  {
    title: "Introduction to Network Security",
    excerpt: "Understanding firewalls, IDS/IPS, network segmentation and attacker techniques.",
    category: "Network Security",
    readTime: "9 min read",
    image: "🌐",
    link: "https://www.imperva.com/learn/application-security/network-security/"
  },
  {
    title: "Beginner’s Guide to Blockchain Security",
    excerpt: "How blockchain ensures trust, immutability, and cryptographic security.",
    category: "Blockchain Security",
    readTime: "8 min read",
    image: "⛓️",
    link: "https://consensys.io/blog/blockchain-explained/how-does-blockchain-security-work"
  }
];

  const categories = [
  { name: "Network Security", icon: "🌐", count: 120 },
  { name: "Malware Analysis", icon: "🦠", count: 95 },
  { name: "Digital Forensics", icon: "🔍", count: 88 },
  { name: "Vulnerability Assessment", icon: "🧭", count: 102 },
  { name: "Security Auditing", icon: "📋", count: 76 },
  { name: "Penetration Testing", icon: "🛠️", count: 141 },
  { name: "Blockchain Security", icon: "⛓️", count: 67 },
  { name: "Smart Contract Review", icon: "📜", count: 54 }
];

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse-slow" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #eab308 0%, transparent 50%)',
          }} />
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="animate-float">
            <BookOpen className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider animate-fade-in">
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Vortigo Solutions
            </span>
          </h1>
          <div className="space-y-4 animate-fade-in-delay">
            <p className="text-yellow-400 text-lg tracking-widest">Loading stories...</p>
            <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-yellow-300 font-mono transition-all duration-300">{Math.floor(progress)}%</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full transition-transform duration-300 ease-out"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(234, 179, 8, 0.15)' : 'rgba(251, 191, 36, 0.1)'} 0%, transparent 70%)`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
              animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-900/30 transition-all duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 animate-fade-in">
            <BookOpen className="w-8 h-8 text-yellow-500 transition-transform duration-300 hover:rotate-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Vortigo Solutions
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-all duration-500 ease-out font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#articles" className="text-gray-300 hover:text-yellow-400 transition-all duration-500 ease-out font-medium relative group">
              Articles
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#categories" className="text-gray-300 hover:text-yellow-400 transition-all duration-500 ease-out font-medium relative group">
              Categories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-all duration-500 ease-out font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-500 ease-out group-hover:w-full"></span>
            </a>
            <button className="p-2 hover:bg-yellow-900/20 rounded-lg transition-all duration-500 ease-out hover:scale-110">
              <Search className="w-5 h-5 text-gray-400 transition-colors duration-500 ease-out" />
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full hover:from-yellow-400 hover:to-orange-400 transition-all duration-500 ease-out shadow-lg shadow-yellow-500/30 font-semibold hover:scale-105 hover:shadow-yellow-500/50">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-yellow-400 transition-transform duration-300 hover:scale-110"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-black border-t border-yellow-900/30 overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 px-6">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium transform hover:translate-x-2">Home</a>
              <a href="#articles" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium transform hover:translate-x-2">Articles</a>
              <a href="#categories" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium transform hover:translate-x-2">Categories</a>
              <a href="#about" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium transform hover:translate-x-2">About</a>
              <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 text-center font-semibold hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-20">
        <div className={`max-w-6xl mx-auto text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-yellow-900/30 border border-yellow-700/50 rounded-full text-yellow-400 text-sm font-medium animate-fade-in-up">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Stories that inspire and inform</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
              Ideas Worth
            </span>
            <br />
            <span className="text-white">Reading About</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover thought-provoking articles, insightful stories, and expert perspectives on the topics that matter most
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full text-lg font-semibold hover:from-yellow-400 hover:to-orange-400 transition-all duration-500 transform hover:scale-110 shadow-xl shadow-yellow-500/30 hover:shadow-yellow-500/60">
              Start Reading
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-500 border-2 border-yellow-500/30 text-yellow-400 hover:border-yellow-500/60 transform hover:scale-105">
              Browse Topics
            </button>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section id="articles" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Featured Stories
              </span>
            </h2>
            <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Illustrations from our latest collection</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post, idx) => (
              <a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-700 ease-out hover:-translate-y-2 cursor-pointer border border-yellow-900/30 hover:border-yellow-500/50 animate-fade-in-up block no-underline"
                style={{ animationDelay: `${idx * 0.1}s`, textDecoration: 'none' }}
              >
                <div className="h-48 bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-7xl transition-transform duration-700 group-hover:scale-110">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-sm font-medium transition-all duration-300 group-hover:bg-yellow-900/50">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">{post.excerpt}</p>
                  <div className="flex items-center text-yellow-400 font-semibold transition-all duration-300">
                    <span>Read More</span>
                    <span className="transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="relative py-20 px-6 bg-gradient-to-b from-transparent via-yellow-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Explore Topics
              </span>
            </h2>
            <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Find your interests and dive deep</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="group p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-yellow-900/30 hover:border-yellow-500/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:rotate-2 cursor-pointer text-center shadow-md hover:shadow-xl hover:shadow-yellow-500/20 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="text-5xl mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{category.icon}</div>
                <h3 className="font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-400">{category.count} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />

      {/* Why Subscribe Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Why Join Us?
              </span>
            </h2>
            <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Benefits of being part of our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="w-12 h-12" />,
                title: 'Expert Writers',
                description: 'Learn from industry professionals and thought leaders sharing their insights and experiences.'
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: 'Fresh Content Daily',
                description: 'New articles published every day across diverse topics to keep you informed and inspired.'
              },
              {
                icon: <MessageCircle className="w-12 h-12" />,
                title: 'Engaged Community',
                description: 'Connect with like-minded readers, share perspectives, and engage in meaningful discussions.'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-700 ease-out border border-yellow-900/30 hover:border-yellow-500/50 group hover:-translate-y-3 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-yellow-500 mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white transition-colors duration-300 group-hover:text-yellow-400">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-yellow-600 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animate-pulse-slow" style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
          }} />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10K+', label: 'Articles Published' },
              { value: '500K+', label: 'Monthly Readers' },
              { value: '50+', label: 'Expert Writers' },
              { value: '100+', label: 'Topics Covered' }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-bold mb-2 text-black transition-transform duration-500 hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-yellow-900 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl p-12 text-center text-black shadow-2xl shadow-yellow-500/30 relative overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent animate-shimmer" />
            </div>
            <div className="relative z-10">
              <div className="animate-float">
                <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Never Miss a Story
              </h2>
              <p className="text-xl text-yellow-900 mb-8 max-w-2xl mx-auto font-medium">
                Get the best articles delivered straight to your inbox every week
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-black text-yellow-400 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg whitespace-nowrap hover:scale-105 hover:shadow-xl">
                  Subscribe Now
                </button>
              </div>
              <p className="text-yellow-900 text-sm mt-4 font-medium">
                Join 50,000+ readers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 bg-black border-t border-yellow-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-yellow-500 transition-transform duration-300 hover:rotate-12" />
                <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Vortigo</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Inspiring minds through compelling stories and thoughtful perspectives.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="font-semibold mb-4 text-lg text-yellow-400">Explore</h4>
              <div className="space-y-2 text-gray-400">
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Latest Articles</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Popular Posts</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">All Categories</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Authors</a></div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="font-semibold mb-4 text-lg text-yellow-400">Company</h4>
              <div className="space-y-2 text-gray-400">
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">About Us</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Write for Us</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Advertise</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></div>
              </div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-semibold mb-4 text-lg text-yellow-400">Legal</h4>
              <div className="space-y-2 text-gray-400">
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</a></div>
                <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Cookie Policy</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-yellow-900/30 pt-8 text-center text-gray-400 animate-fade-in">
            <p>© 2025 Vortigo. Crafted with passion for readers worldwide.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
