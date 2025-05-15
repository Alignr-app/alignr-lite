
import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VisualCueCardProps {
  title: string;
  overlayClass: string;
  isSelected: boolean;
  onClick: () => void;
}

const VisualCueCard: React.FC<VisualCueCardProps> = ({
  title,
  overlayClass,
  isSelected,
  onClick,
}) => {
  return (
    <Card
      className={cn(
        "relative h-40 overflow-hidden rounded-xl cursor-pointer transition-all duration-300",
        isSelected ? "ring-4 ring-brand-gold ring-offset-2 ring-offset-brand-darkBlue" : "hover:scale-105"
      )}
      onClick={onClick}
    >
      <div className={`absolute inset-0 ${overlayClass} animate-pulse-slow`} />
      <div className="absolute bottom-0 left-0 right-0 bg-brand-darkBlue/80 backdrop-blur-sm p-3 text-brand-offWhite font-medium">
        {title}
      </div>
    </Card>
  );
};

export default VisualCueCard;
