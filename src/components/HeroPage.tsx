import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
    // State to manage mouse position for the radial blur effect
    const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });

    // Ref for the main container to attach event listeners
    const containerRef = useRef<HTMLElement>(null);

    // Effect for handling mouse movement for the blur container
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY + window.scrollY; // Account for scroll position
            setMousePos({ x, y });
        };

        const handleMouseLeave = () => {
            setMousePos({ x: -9999, y: -9999 }); // Move mask off-screen
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []); // Empty dependency array means this runs once on mount

    return (
        <main>
            <section
                className="hero-startup hero-blur-container"
                id='hero'
                ref={containerRef}
                style={{
                    // Apply CSS variables dynamically for the blur mask
                    '--mouse-x': mousePos.x === -9999 ? '-9999px' : `${mousePos.x}px`,
                    '--mouse-y': mousePos.y === -9999 ? '-9999px' : `${mousePos.y}px`,
                } as React.CSSProperties} // Type assertion for custom CSS properties
            >
                {/* Images with radial cover */}
                <div className="hero-scrolling-div-container-radial-cover"></div>
                <div className="hero-scrolling-div-container">
                    <div className="hero-scrolling-div hero-div1">
                        <div className="hero-div-1-img-1"></div>
                        <div className="hero-div-1-img-2"></div>
                        <div className="hero-div-1-img-3"></div>
                        <div className="hero-div-1-img-4"></div>
                    </div>
                    <div className="hero-scrolling-div hero-div2">
                        <div className="hero-div-2-img-1"></div>
                        <div className="hero-div-2-img-2"></div>
                        <div className="hero-div-2-img-3"></div>
                        <div className="hero-div-2-img-4"></div>
                    </div>
                    <div className="hero-scrolling-div hero-div3">
                        <div className="hero-div-3-img-1"></div>
                        <div className="hero-div-3-img-2"></div>
                        <div className="hero-div-3-img-3"></div>
                        <div className="hero-div-3-img-4"></div>
                    </div>
                    <div className="hero-scrolling-div hero-div4">
                        <div className="hero-div-4-img-1"></div>
                        <div className="hero-div-4-img-2"></div>
                        <div className="hero-div-4-img-3"></div>
                        <div className="hero-div-4-img-4"></div>
                    </div>
                </div>

                {/* SVG background grid and animated lines */}
                <svg className="hero-background-svg" viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <defs>
                        <filter id="hero-glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <rect width="100%" height="100%" fill="black" />

                    <g stroke="gray" strokeWidth="0.1">
                        {/* Vertical Lines */}
                        {[...Array(21).keys()].map(i => (
                            <line key={`v-${i}`} x1={i * 10} y1="0" x2={i * 10} y2="200" />
                        ))}
                        {/* Horizontal Lines */}
                        {[...Array(21).keys()].map(i => (
                            <line key={`h-${i}`} x1="0" y1={i * 10} x2="200" y2={i * 10} />
                        ))}
                    </g>

                    <g strokeWidth="0.5" filter="url(#hero-glow)">
                        {/* Animated glowing lines */}
                        <line x1="40" y1="0" x2="40" y2="200" stroke="cyan">
                            <animate attributeName="stroke-opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                        </line>
                        <line x1="0" y1="100" x2="200" y2="100" stroke="cyan">
                            <animate attributeName="stroke-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                        </line>
                        <line x1="120" y1="0" x2="120" y2="200" stroke="cyan">
                            <animate attributeName="stroke-opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
                        </line>
                        <line x1="65" y1="50" x2="200" y2="50" stroke="cyan">
                            <animate attributeName="stroke-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                        </line>
                    </g>
                </svg>

                {/* Blur overlay controlled by mouse position */}
                <div className="hero-blurred-overlay"></div>

                 <div className="hero-text-container">
                    <h1 className="hero-heading">Where Every Frame Tells Your Story</h1>
                    <p className="hero-paragraph">At JC Studios, we go beyond simply capturing images—we create visual stories that move, inspire, and endure. Whether it’s a romantic wedding, a high-profile corporate event, a compelling business commercial, or a vibrant social gathering, we bring a creative eye and professional edge to every project. Our team is dedicated to turning your most important moments and brand visions into stunning, high-quality visuals that speak volumes. Let JC Studios frame your story—one unforgettable shot at a time.</p>
<div className='hero-button'>
        <a
          href="https://m.me/thejcstudios" // <--- Replace with your desired URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security when using target="_blank"
          className="my-app-button"
        >
          Start Now
        </a>
        <a
          href="/videos" // <--- Replace with your desired URL
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security when using target="_blank"
          className="my-app-button"
        >
          Sample Videos
        </a>
        </div>
      </div>

            </section>
           
        </main>
    );
};

export default Hero;