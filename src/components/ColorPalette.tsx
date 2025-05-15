
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
        isSelected ? "bg-secondary" : "hover:bg-secondary/50"
      )}
      onClick={onClick}
    >
      <p className="text-sm font-medium">{name}</p>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
