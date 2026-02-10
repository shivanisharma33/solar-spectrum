'use client';

import React from 'react';

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
    showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ width = 50, height = 50, className = '', showText = true }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Outer Circle Frame */}
                <circle cx="50" cy="50" r="48" stroke="#349920" strokeWidth="3" fill="none" />

                {/* Sun Rays */}
                <g transform="translate(15, 15)">
                    <circle cx="15" cy="15" r="10" fill="#febd59" />
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <rect
                            key={angle}
                            x="14"
                            y="-2"
                            width="2"
                            height="8"
                            fill="#febd59"
                            transform={`rotate(${angle}, 15, 15)`}
                        />
                    ))}
                </g>

                {/* House & Solar Panels */}
                <path d="M20 50 L50 25 L80 50 L80 80 L20 80 Z" fill="white" />
                <path d="M50 25 L85 53 L75 58 L50 38 L25 58 L15 53 Z" fill="#349920" />

                {/* Solar Panel Detail on Roof */}
                <path d="M55 35 L80 50 L75 55 L50 40 Z" fill="#febd59" opacity="0.8" />
                <line x1="55" y1="35" x2="80" y2="50" stroke="#fff" strokeWidth="0.5" />
                <line x1="60" y1="34" x2="85" y2="49" stroke="#fff" strokeWidth="0.5" />

                {/* Windows */}
                <rect x="35" y="60" width="10" height="10" fill="#349920" rx="1" />
                <rect x="55" y="60" width="10" height="10" fill="#349920" rx="1" />

                {/* Bottom Green Swash (Leaf-like) */}
                <path d="M10 65 Q 25 95 90 70 Q 70 85 10 65" fill="#349920" />
            </svg>

            {showText && (
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                    <span style={{ fontSize: '24px', fontWeight: 900, color: '#349920', letterSpacing: '1px' }}>SOLAR</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#febd59', letterSpacing: '2px' }}>SPECTRUM</span>
                </div>
            )}
        </div>
    );
};

export default Logo;
