import React from 'react';
import { PenTool, TrendingUp, MessageCircle } from 'lucide-react';

export default function Benefits() {
    const benefits = [
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
    ];

    return (
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
                    {benefits.map((benefit, idx) => (
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
    );
}
