import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative py-16 px-6 bg-black border-t border-yellow-900/30">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-4">
                          {/* <BookOpen className="w-8 h-8 text-yellow-500 transition-transform duration-300 hover:rotate-12" /> */}
                           {/* <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Vortigo</span>
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
                            {/* 
             <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Write for Us</a></div>
             <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Advertise</a></div>
            */}
                          {/*  <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></div> */}
                        </div>
                    </div>
                     <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                     {/*   <h4 className="font-semibold mb-4 text-lg text-yellow-400">Legal</h4>   */}
                      {/*  <div className="space-y-2 text-gray-400">
                            <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></div>
                            <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</a></div>
                            <div><a href="#" className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block">Cookie Policy</a></div>
                        </div> */}
                    </div>
                </div>
                <div className="border-t border-yellow-900/30 pt-8 text-center text-gray-400 animate-fade-in">
                    <p>© 2025 Vortigo. Crafted with passion for readers worldwide.</p>
                </div>
            </div>
        </footer>
    );
}
