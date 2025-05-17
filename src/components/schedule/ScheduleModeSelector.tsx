
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ScheduleModeSelectorProps {
  id: string;
  scheduleMode: "visual" | "breath";
  updateScheduleMode: (mode: "visual" | "breath") => void;
}

const ScheduleModeSelector: React.FC<ScheduleModeSelectorProps> = ({
  id,
  scheduleMode,
  updateScheduleMode
}) => {
  return (
    <div className="space-y-2">
      <p className="text-sm text-brand-lightBlue/80">Schedule Mode</p>
      <RadioGroup 
        defaultValue={scheduleMode} 
        value={scheduleMode}
        onValueChange={(value) => updateScheduleMode(value as "visual" | "breath")}
        className="flex flex-col space-y-2"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="visual" 
            id={`visual-${id}`} 
            className="text-brand-gold data-[state=checked]:border-brand-gold data-[state=checked]:text-brand-gold" 
          />
          <Label 
            htmlFor={`visual-${id}`} 
            className="text-brand-lightBlue cursor-pointer"
          >
            Mood Halos
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem 
            value="breath" 
            id={`breath-${id}`} 
            className="text-brand-gold data-[state=checked]:border-brand-gold data-[state=checked]:text-brand-gold" 
          />
          <Label 
            htmlFor={`breath-${id}`} 
            className="text-brand-lightBlue cursor-pointer"
          >
            Entrainment Halos
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ScheduleModeSelector;
