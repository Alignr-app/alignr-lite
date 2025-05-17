
import React from "react";
import { Card } from "@/components/ui/card";

const QuickStartCard: React.FC = () => {
  return (
    <Card className="p-5 glassmorphism mb-6 overflow-hidden">
      <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Quick Start</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="text-brand-lightBlue/90 mb-2">
            Start experiencing Mood Halos right away - choose your preferred visual effect below.
          </p>
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
