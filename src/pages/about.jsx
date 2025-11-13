import React from 'react';
import { ShieldCheck, Target, Compass, Award, Users, Globe2 } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'Integrity First',
    description: 'We champion truthful storytelling and rigorous research, ensuring every article delivers trusted insight.'
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: 'Mission Driven',
    description: 'Our focus is empowering readers to navigate complex security topics with clarity and confidence.'
  },
  {
    icon: <Compass className="w-10 h-10" />,
    title: 'Curious by Nature',
    description: 'We explore emerging trends, technologies, and threats to illuminate the path ahead.'
  },
  {
    icon: <Award className="w-10 h-10" />,
    title: 'Crafted Excellence',
    description: 'From visuals to voice, every detail is thoughtfully designed to create an immersive reading experience.'
  }
];

const stats = [
  { label: 'Countries Reached', value: '70+', icon: <Globe2 className="w-8 h-8" /> },
  { label: 'Community Members', value: '35K', icon: <Users className="w-8 h-8" /> },
  { label: 'Expert Contributors', value: '80+', icon: <Award className="w-8 h-8" /> }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-yellow-900/10 opacity-90" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-32 -left-24 w-80 h-80 bg-orange-500/20 blur-3xl rounded-full animate-float" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-900/30 border border-yellow-700/40 rounded-full text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            About Vortigo
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Where Insight Meets Imagination
            </span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Vortigo Solutions is a collective of analysts, storytellers, and creators dedicated to decoding the digital frontier. 
            We blend investigative rigor with rich narratives to demystify cybersecurity, emerging tech, and the people shaping tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl border border-yellow-900/30 shadow-lg shadow-yellow-500/10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Our Story</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              What began as a small research newsletter has evolved into a vibrant publication serving curious minds across the globe. 
              We believe knowledge should be accessible, engaging, and actionable—especially in domains as critical as digital security and innovation.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Every issue is crafted with a blend of expert interviews, investigative reporting, and immersive design. 
              Our goal is to illuminate the unseen patterns, reveal hidden threats, and celebrate the pioneers who push technology forward responsibly.
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-600/10 via-yellow-500/5 to-transparent p-10 rounded-3xl border border-yellow-900/30 backdrop-blur animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-6">Our Pillars</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <div
                  key={value.title}
                  className="group p-6 bg-black/40 rounded-2xl border border-yellow-900/30 hover:border-yellow-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-500/30 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
                >
                  <div className="text-yellow-400 mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-3xl p-12 text-black shadow-2xl shadow-yellow-500/30 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent animate-shimmer" />
          </div>
          <div className="relative z-10 grid md:grid-cols-3 gap-10 items-center">
            {stats.map((stat, idx) => (
              <div key={stat.label} className="text-center md:text-left space-y-3">
                <div className="flex justify-center md:justify-start text-yellow-900">{stat.icon}</div>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-yellow-900 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
