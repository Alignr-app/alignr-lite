
import React from "react";
import { cn } from "@/lib/utils";

interface ColorPaletteProps {
  name: string;
  colors: string[];
  isSelected: boolean;
  onClick: () => void;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  name,
  colors,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-3 rounded-lg cursor-pointer transition-all duration-300",
        isSelected 
          ? "bg-brand-blue border border-brand-gold/50" 
          : "hover:bg-brand-darkBlue/50 border border-transparent"
      )}
      onClick={onClick}
    >
      <p className="text-sm font-medium text-brand-offWhite">{name}</p>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full border border-white/10 shadow-inner"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
