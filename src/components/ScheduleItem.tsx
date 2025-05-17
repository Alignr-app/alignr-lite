
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAlignr } from "@/context/AlignrContext";
import { X } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import ScheduleTimeSettings from "@/components/schedule/ScheduleTimeSettings";
import ScheduleModeSelector from "@/components/schedule/ScheduleModeSelector";
import VisualModeSettings from "@/components/schedule/VisualModeSettings";
import BreathModeSettings from "@/components/schedule/BreathModeSettings";

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
  id,
  days,
  startTime,
  endTime,
  scheduleMode,
  visualCue,
  breathMode,
  colorPalette,
  onRemove
}) => {
  const { updateSchedule } = useAlignr();

  const updateDays = (newDays: string[]) => {
    updateSchedule(id, { days: newDays });
  };

  const updateStartTime = (time: string) => {
    updateSchedule(id, { startTime: time });
  };

  const updateEndTime = (time: string) => {
    updateSchedule(id, { endTime: time });
  };

  const updateVisualCue = (cue: string) => {
    updateSchedule(id, { visualCue: cue });
  };

  const updateBreathMode = (mode: "focus" | "deep") => {
    updateSchedule(id, { breathMode: mode });
  };

  const updateColorPalette = (palette: typeof colorPalette) => {
    updateSchedule(id, { colorPalette: palette });
  };

  const updateScheduleMode = (mode: "visual" | "breath") => {
    updateSchedule(id, { scheduleMode: mode });
  };

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
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="settings">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 mb-2">
              {scheduleMode === "visual" ? (
                <>
                  <div 
                    className={`w-3 h-3 rounded-full ${
                      visualCue === "foggy-forest" ? "bg-[#AEEEEE]" : 
                      visualCue === "colored-clouds" ? "bg-[#B2C8BA]" : 
                      visualCue === "ocean-waves" ? "bg-[#C4C3D0]" : "bg-[#D8BFD8]"
                    }`}
                  />
                  <span className="text-sm text-brand-lightBlue/80">
                    {visualCue === "foggy-forest" ? "Foggy Forest" : 
                     visualCue === "colored-clouds" ? "Colored Clouds" : 
                     visualCue === "ocean-waves" ? "Ocean Waves" : "Liquid Gold"}
                  </span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 rounded-full bg-brand-gold" />
                  <span className="text-sm text-brand-lightBlue/80">
                    {breathMode === "focus" ? "Focus" : "Deep"} entrainment
                  </span>
                </>
              )}
            </div>
            <AccordionTrigger className="py-0">
              <span className="sr-only">Toggle settings</span>
            </AccordionTrigger>
          </div>
          
          <AccordionContent>
            <div className="pt-3 space-y-4">
              <ScheduleTimeSettings
                days={days}
                startTime={startTime}
                endTime={endTime}
                updateDays={updateDays}
                updateStartTime={updateStartTime}
                updateEndTime={updateEndTime}
              />
              
              <ScheduleModeSelector 
                id={id}
                scheduleMode={scheduleMode}
                updateScheduleMode={updateScheduleMode}
              />
              
              {/* Show relevant settings based on selected mode */}
              {scheduleMode === "visual" ? (
                <VisualModeSettings 
                  visualCue={visualCue}
                  colorPalette={colorPalette}
                  updateVisualCue={updateVisualCue}
                  updateColorPalette={updateColorPalette}
                />
              ) : (
                <BreathModeSettings
                  breathMode={breathMode}
                  colorPalette={colorPalette}
                  updateBreathMode={updateBreathMode}
                  updateColorPalette={updateColorPalette}
                />
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ScheduleItem;
