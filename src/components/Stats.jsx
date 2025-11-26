import React from 'react';

export default function Stats() {
    const stats = [
        { value: '10K+', label: 'Articles Published' },
        { value: '500K+', label: 'Monthly Readers' },
        { value: '50+', label: 'Expert Writers' },
        { value: '100+', label: 'Topics Covered' }
    ];

    return (
        <section className="relative py-20 px-6 bg-gradient-to-br from-yellow-600 to-orange-600 overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-pulse-slow" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                }} />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, idx) => (
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
    );
}
