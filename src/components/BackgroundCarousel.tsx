
import React from "react";

interface BackgroundCarouselProps {
  opacity?: number;
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ opacity = 1 }) => {
  // Using the new eclipse/space image
  const image = "/lovable-uploads/cffb4c57-93fd-4eae-bcea-0ecf8b8e7a02.png";

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${image})`,
          opacity: opacity,
        }}
      />
    </div>
  );
};

export default BackgroundCarousel;
