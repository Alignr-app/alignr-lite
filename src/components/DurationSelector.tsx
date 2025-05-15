
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DurationSelectorProps {
  durations: number[];
  selectedDuration: number;
  onChange: (duration: number) => void;
}

const DurationSelector: React.FC<DurationSelectorProps> = ({
  durations,
  selectedDuration,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {durations.map((duration) => (
        <Button
          key={duration}
          variant={selectedDuration === duration ? "default" : "outline"}
          className={cn(
            "flex-1 min-w-[60px]",
            selectedDuration === duration 
              ? "bg-brand-blue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue" 
              : "border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue"
          )}
          onClick={() => onChange(duration)}
        >
          {duration} min
        </Button>
      ))}
    </div>
  );
};

export default DurationSelector;
