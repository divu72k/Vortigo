import React from 'react';
import { BookOpen } from 'lucide-react';

export default function LoadingScreen({ progress }) {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 animate-pulse-slow" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #eab308 0%, transparent 50%)',
                }} />
            </div>
            <div className="relative z-10 text-center px-4">
                <div className="animate-float">
                    <BookOpen className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wider animate-fade-in">
                    <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                        Vortigo Solutions
                    </span>
                </h1>
                <div className="space-y-4 animate-fade-in-delay">
                    <p className="text-yellow-400 text-lg tracking-widest">Loading stories...</p>
                    <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500 ease-out"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <p className="text-yellow-300 font-mono transition-all duration-300">{Math.floor(progress)}%</p>
                </div>
            </div>
        </div>
    );
}
