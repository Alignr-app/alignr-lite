
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAlignr } from "@/context/AlignrContext";
import PreviewOverlay from "@/components/PreviewOverlay";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import QuickStartCard from "@/components/customize/QuickStartCard";

const Index: React.FC = () => {
  const { activeVisualCue, previewActive, activePreviewMode } = useAlignr();

  return (
    <div className="min-h-screen">
      <BackgroundCarousel />

      {/* Preview Overlay */}
      {previewActive && activePreviewMode === "visual" && (
        <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
      )}

      {/* Main Content */}
      <div className="flex-1 container max-w-md px-4 py-8 flex flex-col gap-6">
        {/* Logo at the top of the page */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/alignr-full-logo.png" 
            alt="Alignr Logo" 
            className="h-40 w-auto"
          />
        </div>

        {/* Tagline */}
        <div className="text-center mb-8">
          <p className="text-brand-offWhite text-lg font-medium max-w-sm mx-auto">
            Align your attention with your intention via our moment-to-moment mindful support.
          </p>
        </div>

        <QuickStartCard />

        {/* Customize Button - Now below QuickStart */}
        <div className="grid gap-4">
          <Link to="/customize" className="block">
            <Card className="p-6 text-center shadow-md transition-shadow glassmorphism active:bg-brand-blue/10 md:hover:shadow-lg md:hover:border-primary/30">
              <h2 className="text-xl font-semibold mb-4 text-brand-offWhite">Customize Your Experience</h2>
            </Card>
          </Link>
        </div>

        {/* Customization Options - 8 Halo Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/bubbles-thumb.jpg" 
              alt="Bubbles Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Bubbles</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/diamonds.jpg" 
              alt="Diamonds Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Diamonds</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/dragon-thumb.jpg" 
              alt="Dragon Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Dragon</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/pink.jpg" 
              alt="Pink Marble Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Pink Marble</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/smoke-thumb.jpg" 
              alt="Smoke Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Smoke</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/snowflake-halo-thumb.jpg" 
              alt="Snowflake Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Snowflake</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/sparkles.jpg" 
              alt="Sparkles Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Sparkles</span>
            </div>
          </button>
          
          <button className="relative overflow-hidden rounded-lg border border-brand-blue/30 glassmorphism hover:border-brand-gold/50 transition-all">
            <img 
              src="/lovable-uploads/waves-thumb.jpg" 
              alt="Ocean Waves Halo" 
              className="w-full h-24 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <span className="text-brand-offWhite text-sm font-medium p-2">Ocean Waves</span>
            </div>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 mt-6">
          <Button className="border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue">
            Save Changes
          </Button>
          <Button 
            variant="outline" 
            className="border-brand-blue/30 text-brand-lightBlue hover:bg-brand-blue/10"
          >
            Exit Alignr
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
