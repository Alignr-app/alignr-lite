
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { useAlignr } from "@/context/AlignrContext";
import PreviewOverlay from "@/components/PreviewOverlay";
import BreathAnimation from "@/components/BreathAnimation";

const Index: React.FC = () => {
  const { activeVisualCue, breathMode, selectedPalette, previewActive, setPreviewActive } = useAlignr();

  return (
    <div className="page-background">
      <Header />

      {/* Preview Overlay */}
      <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
      <BreathAnimation mode={breathMode} colors={selectedPalette.colors} active={previewActive} />

      {/* Main Content */}
      <div className="flex-1 container max-w-md px-4 py-8 flex flex-col gap-6">
        <div className="text-center space-y-3 mt-4">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/da4a7b35-fff7-4c13-8eeb-046a902eeac7.png" 
              alt="Alignr Logo" 
              className="h-20"
            />
          </div>
          <p className="text-white/90">
            Become more intentional with your phone usage through gentle visual cues and mind-alignment patterns.
          </p>
        </div>

        <div className="grid gap-4">
          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow glassmorphism hover-card">
            <div className="mb-3">
              <span className="px-3 py-1 bg-brand-gold/90 text-brand-darkBlue text-sm rounded-full font-medium">Step 1</span>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-brand-offWhite">Customize Your Experience</h2>
            <p className="text-brand-lightBlue/80 mb-6">
              Choose visual cues and mind-alignment patterns that help you stay aligned.
            </p>
            <Link to="/customize">
              <Button className="w-full border border-brand-blue/30 text-brand-gold bg-brand-darkBlue hover:bg-brand-gold hover:text-brand-darkBlue transition-colors">Customize</Button>
            </Link>
          </Card>

          <Card className="p-6 text-center shadow-md hover:shadow-lg transition-shadow glassmorphism hover-card">
            <div className="mb-3">
              <span className="px-3 py-1 bg-brand-gold/90 text-brand-darkBlue text-sm rounded-full font-medium">Step 2</span>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-brand-offWhite">Schedule Your Alignment</h2>
            <p className="text-brand-lightBlue/80 mb-6">
              Set times when you want to be most aware of your phone usage.
            </p>
            <Link to="/schedule">
              <Button className="w-full border border-brand-blue/30 text-brand-gold bg-brand-darkBlue hover:bg-brand-gold hover:text-brand-darkBlue transition-colors">
                Schedule
              </Button>
            </Link>
          </Card>
        </div>

        <Button
          onClick={() => setPreviewActive(!previewActive)}
          variant={previewActive ? "default" : "secondary"}
          className={`mt-4 ${previewActive ? 'bg-brand-gold hover:bg-brand-gold/90 text-brand-darkBlue' : 'border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue'}`}
        >
          {previewActive ? "End Preview" : "Preview Your Settings"}
        </Button>
      </div>
    </div>
  );
};

export default Index;
