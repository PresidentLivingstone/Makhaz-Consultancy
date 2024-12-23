import React from 'react';
import '../styles/glowing.css';

interface GlowingTextProps {
  text: string;
  className?: string;
}

const GlowingText: React.FC<GlowingTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`glowing-text ${className}`}>
      {text}
    </span>
  );
};

export default GlowingText;