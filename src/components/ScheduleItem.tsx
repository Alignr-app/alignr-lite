
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { colorPalettes, useAlignr } from "@/context/AlignrContext";
import DaySelector from "@/components/DaySelector";
import TimeSelector from "@/components/TimeSelector";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import VisualCueCard from "@/components/VisualCueCard";
import ColorPalette from "@/components/ColorPalette";

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

  const visualCues = [
    { id: "foggy-forest", title: "Foggy Forest" },
    { id: "colored-clouds", title: "Colored Clouds" },
    { id: "ocean-waves", title: "Ocean Waves" },
    { id: "liquid-gold", title: "Liquid Gold" },
  ];

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
              <div>
                <p className="text-sm text-brand-lightBlue/80 mb-2">Days</p>
                <DaySelector selectedDays={days} onChange={updateDays} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <TimeSelector
                  label="Start Time"
                  value={startTime}
                  onChange={updateStartTime}
                />
                <TimeSelector
                  label="End Time"
                  value={endTime}
                  onChange={updateEndTime}
                />
              </div>

              {/* Mode Selection (Visual vs Breath) */}
              <div className="space-y-2">
                <p className="text-sm text-brand-lightBlue/80">Schedule Mode</p>
                <RadioGroup 
                  defaultValue={scheduleMode} 
                  value={scheduleMode}
                  onValueChange={(value) => updateScheduleMode(value as "visual" | "breath")}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="visual" id={`visual-${id}`} 
                      className="text-brand-gold data-[state=checked]:border-brand-gold data-[state=checked]:text-brand-gold" />
                    <Label 
                      htmlFor={`visual-${id}`} 
                      className="text-brand-lightBlue cursor-pointer"
                    >
                      Mood Halos
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="breath" id={`breath-${id}`} 
                      className="text-brand-gold data-[state=checked]:border-brand-gold data-[state=checked]:text-brand-gold" />
                    <Label 
                      htmlFor={`breath-${id}`} 
                      className="text-brand-lightBlue cursor-pointer"
                    >
                      Entrainment Halos
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Show relevant settings based on selected mode */}
              {scheduleMode === "visual" ? (
                <div className="space-y-3">
                  <p className="text-sm text-brand-lightBlue/80">Mood Halos</p>
                  <div className="grid grid-cols-2 gap-2">
                    {visualCues.map((cue) => (
                      <VisualCueCard
                        key={cue.id}
                        title={cue.title}
                        overlayClass={`overlay-${cue.id}`}
                        isSelected={visualCue === cue.id}
                        onClick={() => updateVisualCue(cue.id)}
                      />
                    ))}
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
              ) : (
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
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default ScheduleItem;
