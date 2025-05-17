
import React from "react";
import { Card } from "@/components/ui/card";
import { colorPalettes, useAlignr } from "@/context/AlignrContext";
import ColorPalette from "@/components/ColorPalette";

interface EntrainmentHalosTabProps {
  setActivePreviewMode: (mode: "visual" | "breath") => void;
}

const EntrainmentHalosTab: React.FC<EntrainmentHalosTabProps> = ({ setActivePreviewMode }) => {
  const { breathMode, setBreathMode, selectedPalette, setSelectedPalette } = useAlignr();

  const handleBreathModeClick = (mode: "focus" | "deep") => {
    setBreathMode(mode);
    setActivePreviewMode("breath");
  };

  return (
    <>
      <Card className="p-5 glassmorphism">
        <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Choose Entrainment Halo</h2>
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              breathMode === "focus"
                ? "bg-brand-blue text-brand-offWhite"
                : "bg-brand-darkBlue/50 hover:bg-brand-darkBlue/70 text-brand-lightBlue"
            }`}
            onClick={() => handleBreathModeClick("focus")}
          >
            <h3 className="font-medium">Focus Mode</h3>
            <p className="text-sm opacity-90">Balanced breath for concentration</p>
          </div>

          <div
            className={`p-4 rounded-lg cursor-pointer transition-all ${
              breathMode === "deep"
                ? "bg-brand-blue text-brand-offWhite"
                : "bg-brand-darkBlue/50 hover:bg-brand-darkBlue/70 text-brand-lightBlue"
            }`}
            onClick={() => handleBreathModeClick("deep")}
          >
            <h3 className="font-medium">Deep Dive Mode</h3>
            <p className="text-sm opacity-90">Extended breath cycle for relaxation</p>
          </div>
        </div>
      </Card>

      <Card className="p-5 glassmorphism">
        <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Color Palette</h2>
        <div className="space-y-3">
          <ColorPalette
            name="Cool Tones"
            colors={colorPalettes.coolTones.colors}
            isSelected={selectedPalette.name === "Cool Tones"}
            onClick={() => setSelectedPalette(colorPalettes.coolTones)}
          />
          <ColorPalette
            name="Earth Tones"
            colors={colorPalettes.earthTones.colors}
            isSelected={selectedPalette.name === "Earth Tones"}
            onClick={() => setSelectedPalette(colorPalettes.earthTones)}
          />
          <ColorPalette
            name="Soft Purples"
            colors={colorPalettes.softPurples.colors}
            isSelected={selectedPalette.name === "Soft Purples"}
            onClick={() => setSelectedPalette(colorPalettes.softPurples)}
          />
        </div>
      </Card>
    </>
  );
};

export default EntrainmentHalosTab;
