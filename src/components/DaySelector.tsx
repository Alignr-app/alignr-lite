
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface DaySelectorProps {
  selectedDays: string[];
  onChange: (value: string[]) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ selectedDays, onChange }) => {
  const days = [
    { value: "mon", label: "M" },
    { value: "tue", label: "T" },
    { value: "wed", label: "W" },
    { value: "thu", label: "T" },
    { value: "fri", label: "F" },
    { value: "sat", label: "S" },
    { value: "sun", label: "S" },
  ];

  return (
    <ToggleGroup
      type="multiple"
      variant="outline"
      value={selectedDays}
      onValueChange={onChange}
      className="justify-between"
    >
      {days.map((day) => (
        <ToggleGroupItem
          key={day.value}
          value={day.value}
          aria-label={`Toggle ${day.value}`}
          className="w-10 h-10 data-[state=on]:bg-primary data-[state=on]:text-white"
        >
          {day.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default DaySelector;
