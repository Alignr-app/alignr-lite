
import React from "react";
import VisualCueCard from "@/components/VisualCueCard";
import ColorPalette from "@/components/ColorPalette";
import { colorPalettes } from "@/context/AlignrContext";

interface VisualModeSettingsProps {
  visualCue: string;
  colorPalette: {
    name: string;
    colors: string[];
  };
  updateVisualCue: (cue: string) => void;
  updateColorPalette: (palette: typeof colorPalettes.coolTones) => void;
}

const VisualModeSettings: React.FC<VisualModeSettingsProps> = ({
  visualCue,
  colorPalette,
  updateVisualCue,
  updateColorPalette
}) => {
  const visualCues = [
    { id: "foggy-forest", title: "Foggy Forest" },
    { id: "colored-clouds", title: "Colored Clouds" },
    { id: "ocean-waves", title: "Ocean Waves" },
    { id: "liquid-gold", title: "Liquid Gold" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-sm text-brand-lightBlue/80">Halos</p>
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

      <div className="space-y-2 mt-3">
        <p className="text-sm text-brand-lightBlue/80">Color Palette</p>
        <div className="space-y-2">
          <ColorPalette
            name="Cool Tones"
            colors={colorPalettes.coolTones.colors}
            isSelected={colorPalette.name === "Cool Tones"}
            onClick={() => updateColorPalette(colorPalettes.coolTones)}
          />
          <ColorPalette
            name="Earth Tones"
            colors={colorPalettes.earthTones.colors}
            isSelected={colorPalette.name === "Earth Tones"}
            onClick={() => updateColorPalette(colorPalettes.earthTones)}
          />
          <ColorPalette
            name="Soft Purples"
            colors={colorPalettes.softPurples.colors}
            isSelected={colorPalette.name === "Soft Purples"}
            onClick={() => updateColorPalette(colorPalettes.softPurples)}
          />
        </div>
      </div>
    </div>
  );
};

export default VisualModeSettings;
