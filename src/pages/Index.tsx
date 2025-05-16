
import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAlignr } from "@/context/AlignrContext";
import PreviewOverlay from "@/components/PreviewOverlay";
import BreathAnimation from "@/components/BreathAnimation";
import BackgroundCarousel from "@/components/BackgroundCarousel";

const Index: React.FC = () => {
  const { activeVisualCue, breathMode, selectedPalette, previewActive } = useAlignr();

  return (
    <div className="min-h-screen">
      <BackgroundCarousel />

      {/* Preview Overlay */}
      {previewActive && (
        <>
          <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
          <BreathAnimation mode={breathMode} colors={selectedPalette.colors} active={previewActive} />
        </>
      )}

      {/* Main Content */}
      <div className="flex-1 container max-w-md px-4 py-8 flex flex-col gap-6">
        <div className="grid gap-4 mt-8">
          <Link to="/customize" className="block">
            <Card className="p-6 text-center shadow-md transition-shadow glassmorphism active:bg-brand-blue/10 md:hover:shadow-lg md:hover:border-primary/30">
              <div className="mb-3">
                <span className="px-3 py-1 bg-brand-gold/90 text-brand-darkBlue text-sm rounded-full font-medium">Step 1</span>
              </div>
              <h2 className="text-xl font-semibold mb-4 text-brand-offWhite">Customize Your Experience</h2>
            </Card>
          </Link>

          <Link to="/schedule" className="block">
            <Card className="p-6 text-center shadow-md transition-shadow glassmorphism active:bg-brand-blue/10 md:hover:shadow-lg md:hover:border-primary/30">
              <div className="mb-3">
                <span className="px-3 py-1 bg-brand-gold/90 text-brand-darkBlue text-sm rounded-full font-medium">Step 2</span>
              </div>
              <h2 className="text-xl font-semibold mb-4 text-brand-offWhite">Schedule Your Alignment</h2>
            </Card>
          </Link>
        </div>
        
        {/* Logo Below Buttons */}
        <div className="mt-12 flex justify-center">
          <img 
            src="/lovable-uploads/44437f12-5067-4515-980b-344d2c178c8c.png" 
            alt="Alignr Logo" 
            className="h-40 w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
