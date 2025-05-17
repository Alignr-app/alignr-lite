
import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAlignr } from "@/context/AlignrContext";
import PreviewOverlay from "@/components/PreviewOverlay";
import BackgroundCarousel from "@/components/BackgroundCarousel";

const Index: React.FC = () => {
  const { activeVisualCue, previewActive } = useAlignr();

  return (
    <div className="min-h-screen">
      <BackgroundCarousel />

      {/* Preview Overlay */}
      {previewActive && (
        <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
      )}

      {/* Main Content */}
      <div className="flex-1 container max-w-md px-4 py-8 flex flex-col gap-6">
        <div className="grid gap-4 mt-8">
          <Link to="/customize" className="block">
            <Card className="p-6 text-center shadow-md transition-shadow glassmorphism active:bg-brand-blue/10 md:hover:shadow-lg md:hover:border-primary/30">
              <h2 className="text-xl font-semibold mb-4 text-brand-offWhite">Customize Your Experience</h2>
              <p className="text-brand-lightBlue/90">Choose and preview your mood halos</p>
            </Card>
          </Link>
        </div>
        
        {/* Logo Below Buttons - added 50px more top margin */}
        <div className="mt-[162px] flex justify-center">
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
