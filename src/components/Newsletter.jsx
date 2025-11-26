import React from 'react';
import { Users } from 'lucide-react';

export default function Newsletter() {
    return (
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
    );
}
