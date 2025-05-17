
import React from "react";
import ColorPalette from "@/components/ColorPalette";
import { colorPalettes } from "@/context/AlignrContext";

interface BreathModeSettingsProps {
  breathMode: "focus" | "deep";
  colorPalette: {
    name: string;
    colors: string[];
  };
  updateBreathMode: (mode: "focus" | "deep") => void;
  updateColorPalette: (palette: typeof colorPalettes.coolTones) => void;
}

const BreathModeSettings: React.FC<BreathModeSettingsProps> = ({
  breathMode,
  colorPalette,
  updateBreathMode,
  updateColorPalette
}) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-brand-lightBlue/80">Entrainment Halo</p>
      <div className="space-y-2">
        <div
          className={`p-3 rounded-lg cursor-pointer transition-all ${
            breathMode === "focus"
              ? "bg-brand-blue text-brand-offWhite"
              : "bg-brand-darkBlue/50 hover:bg-brand-darkBlue/70 text-brand-lightBlue"
          }`}
          onClick={() => updateBreathMode("focus")}
        >
          <h3 className="font-medium">Focus Mode</h3>
          <p className="text-xs opacity-90">Balanced breath for concentration</p>
        </div>

        <div
          className={`p-3 rounded-lg cursor-pointer transition-all ${
            breathMode === "deep"
              ? "bg-brand-blue text-brand-offWhite"
              : "bg-brand-darkBlue/50 hover:bg-brand-darkBlue/70 text-brand-lightBlue"
          }`}
          onClick={() => updateBreathMode("deep")}
        >
          <h3 className="font-medium">Deep Dive Mode</h3>
          <p className="text-xs opacity-90">Extended breath cycle for relaxation</p>
        </div>
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

export default BreathModeSettings;
