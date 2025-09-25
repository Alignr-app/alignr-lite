
import React from "react";
import { Card } from "@/components/ui/card";
import { useAlignr } from "@/context/AlignrContext";
import VisualCueCard from "@/components/VisualCueCard";

interface MoodHalosTabProps {
  setActivePreviewMode: (mode: "visual" | "breath") => void;
}

const MoodHalosTab: React.FC<MoodHalosTabProps> = ({ setActivePreviewMode }) => {
  const { activeVisualCue, setActiveVisualCue } = useAlignr();

  const visualCues = [
    { id: "foggy-forest", title: "Foggy Forest" },
    { id: "colored-clouds", title: "Starry Night" },
    { id: "ocean-waves", title: "Ocean Waves" },
    { id: "liquid-gold", title: "Liquid Gold" },
  ];

  const handleVisualCueClick = (cueId: string) => {
    setActiveVisualCue(cueId);
    setActivePreviewMode("visual");
  };

  return (
    <Card className="p-5 glassmorphism">
      <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Choose Your Halo</h2>
      <div className="grid grid-cols-2 gap-4">
        {visualCues.map((cue) => (
          <VisualCueCard
            key={cue.id}
            title={cue.title}
            overlayClass={`overlay-${cue.id}`}
            isSelected={activeVisualCue === cue.id}
            onClick={() => handleVisualCueClick(cue.id)}
          />
        ))}
      </div>
    </Card>
  );
};

export default MoodHalosTab;
