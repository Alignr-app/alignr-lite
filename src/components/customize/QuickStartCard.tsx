
import React from "react";
import { Card } from "@/components/ui/card";
import { useAlignr } from "@/context/AlignrContext";
import { Button } from "@/components/ui/button";

const QuickStartCard: React.FC = () => {
  const { setActiveVisualCue, setPreviewActive } = useAlignr();

  const handleQuickStart = (visualCue: string) => {
    setActiveVisualCue(visualCue);
    setPreviewActive(true);
  };

  return (
    <Card className="p-5 glassmorphism mb-6 overflow-hidden">
      <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Quick Start</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="text-brand-lightBlue/90 mb-2">
            Start experiencing Mood Halos right away - choose your preferred visual effect below.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Button 
              variant="outline" 
              className="border border-brand-blue/30 text-brand-gold bg-brand-darkBlue hover:bg-brand-gold hover:text-brand-darkBlue"
              onClick={() => handleQuickStart("foggy-forest")}
            >
              Foggy Forest
            </Button>
            <Button 
              variant="outline" 
              className="border border-brand-blue/30 text-brand-gold bg-brand-darkBlue hover:bg-brand-gold hover:text-brand-darkBlue"
              onClick={() => handleQuickStart("ocean-waves")}
            >
              Ocean Waves
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="/lovable-uploads/d9e68b90-c0e6-4c96-a11a-8050f62ceadd.png" 
            alt="Visual cues preview" 
            className="rounded-md w-full h-32 object-cover"
          />
        </div>
      </div>
    </Card>
  );
};

export default QuickStartCard;
