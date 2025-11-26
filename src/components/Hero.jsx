import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero({ isVisible }) {
    return (
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
    );
}
