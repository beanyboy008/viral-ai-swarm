
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-viral-dark bg-hero-pattern grid-pattern"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-viral-purple/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-viral-blue/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      
      {/* Animated dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-viral-purple rounded-full animate-float"></div>
      <div className="absolute top-40 right-40 w-3 h-3 bg-viral-blue rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 left-1/3 w-2 h-2 bg-viral-neon rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-viral-purple/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default AnimatedBackground;
