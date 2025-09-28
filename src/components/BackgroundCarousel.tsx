
import React from "react";

interface BackgroundCarouselProps {
  opacity?: number;
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ opacity = 1 }) => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-brand-darkBlue via-slate-900 to-brand-darkBlue"
        style={{ 
          opacity: opacity,
        }}
      />
    </div>
  );
};

export default BackgroundCarousel;
