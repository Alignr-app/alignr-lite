
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

// This is a placeholder component since we're simplifying the app
interface ScheduleItemProps {
  id: string;
  days: string[];
  startTime: string;
  endTime: string;
  scheduleMode: "visual" | "breath";
  visualCue: string;
  breathMode: "focus" | "deep";
  colorPalette: {
    name: string;
    colors: string[];
  };
  onRemove: () => void;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  startTime,
  endTime,
  onRemove
}) => {
  // Format time for display
  const formatTime = (timeStr: string) => {
    const hour = parseInt(timeStr);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12} ${ampm}`;
  };

  return (
    <Card className="p-5 glassmorphism hover-card mb-4">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium text-brand-offWhite">
          {formatTime(startTime)} - {formatTime(endTime)}
        </h3>
        <Button 
          variant="ghost" 
          className="h-8 w-8 p-0" 
          onClick={onRemove}
        >
          <X className="h-4 w-4 text-brand-lightBlue/80" />
        </Button>
      </div>
      <p className="text-brand-lightBlue">This feature has been simplified in this version.</p>
    </Card>
  );
};

export default ScheduleItem;
