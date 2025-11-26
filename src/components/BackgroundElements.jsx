import React from 'react';

export default function BackgroundElements({ scrollY }) {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
            {[...Array(30)].map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full transition-transform duration-300 ease-out"
                    style={{
                        width: `${Math.random() * 300 + 50}px`,
                        height: `${Math.random() * 300 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `radial-gradient(circle, ${i % 2 === 0 ? 'rgba(234, 179, 8, 0.15)' : 'rgba(251, 191, 36, 0.1)'} 0%, transparent 70%)`,
                        transform: `translateY(${scrollY * (0.1 + Math.random() * 0.2)}px)`,
                        animation: `float ${10 + Math.random() * 10}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
    );
}
