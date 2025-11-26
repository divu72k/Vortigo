import React from 'react';

export default function Categories() {
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

    return (
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
    );
}
