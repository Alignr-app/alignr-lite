
import React from "react";
import { Card } from "@/components/ui/card";
import { useAlignr } from "@/context/AlignrContext";
import { Button } from "../ui/button";

const QuickStartCard: React.FC = () => {
  const { setPreviewActive, setActivePreviewMode } = useAlignr();
  
  const handleQuickStart = () => {
    setActivePreviewMode("visual");
    setPreviewActive(true);
  };

  return (
    <Card className="p-5 glassmorphism mb-6 overflow-hidden">
      <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Quick Start</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="text-brand-lightBlue/90 mb-4">
            Start aligning now - we'll cycle you into a new Mood Halo every hour.
          </p>
          <Button 
            onClick={handleQuickStart}
            className="border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue"
          >
            Start Now
          </Button>
        </div>
        <div className="flex-1">
          <img 
            src="/lovable-uploads/942f7b03-a937-424d-9f2e-e5b218ba55ca.png" 
            alt="Visual cues preview" 
            className="rounded-md w-full h-32 object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default QuickStartCard;
