
import React from "react";

interface BackgroundCarouselProps {
  opacity?: number;
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ opacity = 0.75 }) => {
  // Using only the canyon and stars image
  const image = "/lovable-uploads/5d20ae3f-e8e7-4350-9f87-37779e0d2274.png";

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          opacity: opacity,
        }}
      />
      {/* Dark overlay removed */}
    </div>
  );
};

export default BackgroundCarousel;
