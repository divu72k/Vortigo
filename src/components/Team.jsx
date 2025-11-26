import React from 'react';
import { Users, MessageCircle } from 'lucide-react';
import moinakImg from '../images/pfp.png';
import divyeshImg from '../images/divyesh.png';

export default function Team() {
    const teamMembers = [
        {
            name: "Moinak Niyogi",
            role: "Co-Founder & Lead Developer",
            image: moinakImg
        },
        {
            name: "Divyesh Kumar Mahanta",
            role: "Co-Founder & Security Researcher",
            image: divyeshImg
        }
    ];

    return (
        <section id="team" className="relative py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Meet The Team
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>The minds behind Vortigo Solutions</p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-12">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-gradient-to-br from-gray-900 to-black p-1 rounded-2xl max-w-sm w-full animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-500 blur-xl" />
                            <div className="relative bg-black rounded-xl p-8 flex flex-col items-center text-center h-full border border-yellow-900/30 group-hover:border-yellow-500/50 transition-colors duration-500">
                                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-yellow-500/30 group-hover:border-yellow-500 transition-all duration-500 group-hover:scale-110 shadow-lg shadow-yellow-500/20">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                                <div className="flex gap-4 mt-auto">
                                    {/* Social placeholders */}
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
                                        <Users className="w-4 h-4" />
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 cursor-pointer">
                                        <MessageCircle className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
