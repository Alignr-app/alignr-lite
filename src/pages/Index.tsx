
import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAlignr } from "@/context/AlignrContext";
import PreviewOverlay from "@/components/PreviewOverlay";
import BreathAnimation from "@/components/BreathAnimation";

const Index: React.FC = () => {
  const { activeVisualCue, breathMode, selectedPalette, previewActive } = useAlignr();

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/lovable-uploads/e74e7acd-00f9-41bd-8112-ce4048a7e78e.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Preview Overlay */}
      <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
      <BreathAnimation mode={breathMode} colors={selectedPalette.colors} active={previewActive} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-screen">
        {/* Top Logo Area with Blue Banner */}
        <div className="mt-12 w-full">
          <div className="bg-brand-blue py-8 px-4 flex justify-center">
            <img 
              src="/lovable-uploads/da4a7b35-fff7-4c13-8eeb-046a902eeac7.png" 
              alt="Alignr Logo" 
              className="h-40 w-auto"
            />
          </div>
        </div>
        
        {/* Center with Large Square Buttons */}
        <div className="flex-grow flex flex-col items-center justify-center px-8">
          <div className="w-full grid grid-cols-1 gap-6 max-w-md mx-auto">
            <Link to="/customize" className="block">
              <Card className="aspect-square shadow-lg glassmorphism border-none active:bg-white/10 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="w-16 h-16 mb-4 rounded-full bg-brand-gold flex items-center justify-center text-brand-darkBlue text-2xl font-semibold">1</span>
                  <h2 className="text-2xl font-medium text-white">Customize</h2>
                </div>
              </Card>
            </Link>

            <Link to="/schedule" className="block">
              <Card className="aspect-square shadow-lg glassmorphism border-none active:bg-white/10 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <span className="w-16 h-16 mb-4 rounded-full bg-brand-gold flex items-center justify-center text-brand-darkBlue text-2xl font-semibold">2</span>
                  <h2 className="text-2xl font-medium text-white">Schedule</h2>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="pb-10"></div>
      </div>
    </div>
  );
};

export default Index;
