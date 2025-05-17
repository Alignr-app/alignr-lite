
import React from "react";
import VisualCueCard from "@/components/VisualCueCard";

// This is a placeholder component since we're simplifying the app
interface VisualModeSettingsProps {
  visualCue: string;
  colorPalette: {
    name: string;
    colors: string[];
  };
  updateVisualCue: (cue: string) => void;
  updateColorPalette: (palette: any) => void;
}

const VisualModeSettings: React.FC<VisualModeSettingsProps> = ({
  visualCue,
  updateVisualCue
}) => {
  const visualCues = [
    { id: "foggy-forest", title: "Foggy Forest" },
    { id: "colored-clouds", title: "Colored Clouds" },
    { id: "ocean-waves", title: "Ocean Waves" },
    { id: "liquid-gold", title: "Liquid Gold" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-lightBlue/80">Mood Halos</p>
      <div className="grid grid-cols-2 gap-2">
        {visualCues.map((cue) => (
          <VisualCueCard
            key={cue.id}
            title={cue.title}
            overlayClass={`overlay-${cue.id}`}
            isSelected={visualCue === cue.id}
            onClick={() => updateVisualCue(cue.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default VisualModeSettings;
