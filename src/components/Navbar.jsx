import React, { useState } from 'react';
import { BookOpen, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
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
                    <a href="#team" className="text-gray-300 hover:text-yellow-400 transition-all duration-500 ease-out font-medium relative group">
                        Team
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
                        <a href="#team" className="text-gray-300 hover:text-yellow-400 transition-all duration-300 font-medium transform hover:translate-x-2">Team</a>
                        <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-yellow-500/30 text-center font-semibold hover:scale-105">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
