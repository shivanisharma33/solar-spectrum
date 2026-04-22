'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
    showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ width = 180, height = 50, className = '', showText = false }) => {
    return (
        <div className={`flex items-center ${className}`} style={{ display: 'flex', alignItems: 'center' }}>
            <Image 
                src="/logo.png" 
                alt="Solar Spectrum Logo" 
                width={width} 
                height={height}
                style={{ objectFit: 'contain' }}
                priority
            />
            {showText && (
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, marginLeft: '10px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 900, color: '#349920', letterSpacing: '1px' }}>SOLAR</span>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#febd59', letterSpacing: '2px' }}>SPECTRUM</span>
                </div>
            )}
        </div>
    );
};

export default Logo;

