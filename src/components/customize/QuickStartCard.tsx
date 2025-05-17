
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAlignr } from "@/context/AlignrContext";
import { ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const QuickStartCard: React.FC = () => {
  const { 
    activeVisualCue, 
    setActiveVisualCue,
    breathMode,
    setBreathMode,
    setActivePreviewMode,
    setPreviewActive
  } = useAlignr();

  // Visual cues for quick rotation
  const visualCues = ["foggy-forest", "colored-clouds", "ocean-waves", "liquid-gold"];
  // Breath modes for quick rotation
  const breathModes = ["focus", "deep"] as const;

  const startMoodHalo = () => {
    // Find the current index and move to the next one in the array
    const currentIndex = visualCues.indexOf(activeVisualCue);
    const nextIndex = (currentIndex + 1) % visualCues.length;
    
    setActiveVisualCue(visualCues[nextIndex]);
    setActivePreviewMode("visual");
    setPreviewActive(true);
    
    toast({
      title: "Mood Halo Activated",
      description: `Switched to ${visualCues[nextIndex].split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)).join(" ")} mood`,
    });
  };

  const startEntrainmentHalo = () => {
    // Toggle between focus and deep modes
    const nextMode = breathMode === "focus" ? "deep" : "focus";
    
    setBreathMode(nextMode);
    setActivePreviewMode("breath");
    setPreviewActive(true);
    
    toast({
      title: "Entrainment Halo Activated",
      description: `Switched to ${nextMode} breathing pattern`,
    });
  };

  return (
    <Card className="p-5 glassmorphism mb-6 overflow-hidden">
      <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Quick Start</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <p className="text-brand-lightBlue/90 mb-4">
            Start aligning now - we'll cycle you into a new Mood or Entrainment Halo every hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={startMoodHalo}
              className="bg-brand-blue hover:bg-brand-blue/80 text-white flex items-center gap-2"
            >
              Next Mood Halo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              onClick={startEntrainmentHalo}
              className="bg-brand-purple hover:bg-brand-purple/80 text-white flex items-center gap-2"
              variant="outline"
            >
              Toggle Entrainment
              <ArrowRight className="h-4 w-4" />
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
