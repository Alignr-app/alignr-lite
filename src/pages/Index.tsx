
import React from "react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAlignr } from "@/context/AlignrContext";
import PreviewOverlay from "@/components/PreviewOverlay";
import BreathAnimation from "@/components/BreathAnimation";
import { Button } from "@/components/ui/button";

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
        {/* Top Logo Area */}
        <div className="mt-20 mb-10">
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/da4a7b35-fff7-4c13-8eeb-046a902eeac7.png" 
              alt="Alignr Logo" 
              className="h-28 w-auto"
            />
          </div>
        </div>
        
        {/* Center Text */}
        <div className="flex-grow flex flex-col justify-center items-center px-8 mb-20">
          <div className="text-center mb-6">
            <p className="text-2xl text-brand-gold font-light mb-2">Become</p>
            <h1 className="text-5xl font-bold text-white mb-6">Alignr</h1>
            <p className="text-lg text-white/90 uppercase tracking-widest font-light">MIND SERIES</p>
          </div>
          
          {/* Cards Section */}
          <div className="w-full space-y-3 mt-12">
            <Link to="/customize" className="block">
              <Card className="p-5 shadow-lg glassmorphism border-none active:bg-white/10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-darkBlue font-semibold">1</span>
                    <h2 className="text-xl ml-4 font-medium text-white">Customize</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Card>
            </Link>

            <Link to="/schedule" className="block">
              <Card className="p-5 shadow-lg glassmorphism border-none active:bg-white/10">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-darkBlue font-semibold">2</span>
                    <h2 className="text-xl ml-4 font-medium text-white">Schedule</h2>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Start Button */}
        <div className="pb-10 px-8">
          <Link to="/customize" className="block w-full">
            <Button variant="default" className="w-full py-6 bg-brand-gold hover:bg-brand-gold/90 text-brand-darkBlue text-lg font-medium rounded-full">
              START
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
