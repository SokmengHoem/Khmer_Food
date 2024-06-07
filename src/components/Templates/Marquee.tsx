import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ children }) => {
  return (
    <div className="marquee-container overflow-hidden whitespace-nowrap w-full flex items-center">
      <div className="marquee-content">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
