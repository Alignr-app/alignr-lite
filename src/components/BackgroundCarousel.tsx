import React, { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/8119c49b-d71f-41da-ac6d-d4722bd6a199.png",
  "/lovable-uploads/27cfb732-6252-416b-b746-acdd27835b72.png",
  "/lovable-uploads/dc9a399b-288c-4aa5-b612-217cdf3b4be9.png"
];

interface BackgroundCarouselProps {
  opacity?: number;
}

const BackgroundCarousel: React.FC<BackgroundCarouselProps> = ({ opacity = 0.75 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(-1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Change image at random intervals between 7 and 15 seconds
    const changeImage = () => {
      setPreviousImageIndex(currentImageIndex);
      setIsTransitioning(true);
      
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * images.length);
      } while (nextIndex === currentImageIndex && images.length > 1);
      
      setCurrentImageIndex(nextIndex);
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);
    };
    
    const randomTime = Math.floor(Math.random() * (15000 - 7000 + 1)) + 7000;
    const timerId = setTimeout(changeImage, randomTime);
    
    return () => clearTimeout(timerId);
  }, [currentImageIndex]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {previousImageIndex >= 0 && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ 
            backgroundImage: `url(${images[previousImageIndex]})`,
            opacity: isTransitioning ? 0 : opacity,
          }}
        />
      )}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: opacity,
        }}
      />
      <div className="absolute inset-0 bg-background/70" />
    </div>
  );
};

export default BackgroundCarousel;
