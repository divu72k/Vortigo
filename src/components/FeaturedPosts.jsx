import React from 'react';

export default function FeaturedPosts() {
    const featuredPosts = [
        {
            title: "How Malware Works: A Deep Dive",
            excerpt: "A beginner-friendly breakdown of malware types, behavior, and analysis techniques.",
            category: "Malware Analysis",
            readTime: "7 min read",
            image: "🦠",
            imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            link: "https://blog.malwarebytes.com/malware/2020/01/how-malware-works/"
        },
        {
            title: "Introduction to Network Security",
            excerpt: "Understanding firewalls, IDS/IPS, network segmentation and attacker techniques.",
            category: "Network Security",
            readTime: "9 min read",
            image: "🌐",
            imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
            link: "https://www.imperva.com/learn/application-security/network-security/"
        },
        {
            title: "Beginner’s Guide to Blockchain Security",
            excerpt: "How blockchain ensures trust, immutability, and cryptographic security.",
            category: "Blockchain Security",
            readTime: "8 min read",
            image: "⛓️",
            imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
            link: "https://consensys.io/blog/blockchain-explained/how-does-blockchain-security-work"
        }
    ];

    return (
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
                            <div className="h-48 bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-7xl transition-transform duration-700 group-hover:scale-110 overflow-hidden relative">
                                {post.imageUrl ? (
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    post.image
                                )}
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
    );
}
