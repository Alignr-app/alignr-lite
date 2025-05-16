
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import DaySelector from "@/components/DaySelector";
import TimeSelector from "@/components/TimeSelector";
import DurationSelector from "@/components/DurationSelector";
import { useAlignr } from "@/context/AlignrContext";
import ScheduleItem from "@/components/ScheduleItem";
import { Plus } from "lucide-react";

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    selectedDays,
    setSelectedDays,
    duration,
    setDuration,
    schedules,
    addSchedule,
    removeSchedule
  } = useAlignr();

  const handleSave = () => {
    toast({
      title: "Schedule saved",
      description: "Your schedule preferences have been saved.",
    });
    navigate("/");
  };

  return (
    <div className="page-background">
      <Header />

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-brand-offWhite">Schedule</h1>
          <p className="text-brand-lightBlue/90">Set when you want Alignr to help you</p>
        </div>

        <div className="space-y-6">
          <Card className="p-5 glassmorphism hover-card">
            <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Daily Schedule</h2>
            
            <div className="space-y-4">
              {schedules.length === 0 ? (
                <p className="text-center text-brand-lightBlue/80 py-6">
                  No time slots scheduled. Add one below.
                </p>
              ) : (
                schedules.map(schedule => (
                  <ScheduleItem
                    key={schedule.id}
                    id={schedule.id}
                    days={schedule.days}
                    startTime={schedule.startTime}
                    endTime={schedule.endTime}
                    visualCue={schedule.visualCue}
                    breathMode={schedule.breathMode}
                    colorPalette={schedule.colorPalette}
                    onRemove={() => removeSchedule(schedule.id)}
                  />
                ))
              )}
              
              <Button 
                onClick={addSchedule}
                className="w-full border border-brand-blue/30 text-brand-gold bg-brand-darkBlue hover:bg-brand-gold hover:text-brand-darkBlue"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Time Slot
              </Button>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-brand-offWhite">Automatically activate</h3>
                  <p className="text-sm text-brand-lightBlue/80">
                    Turn on during scheduled times
                  </p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-brand-gold" />
              </div>
            </div>
          </Card>

          <Card className="p-5 glassmorphism hover-card">
            <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Time-Based Activation</h2>
            <div className="space-y-4">
              <p className="text-sm text-brand-lightBlue/80">
                Activate after continuous usage of:
              </p>
              <DurationSelector
                durations={[5, 10, 15, 20]}
                selectedDuration={duration}
                onChange={setDuration}
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-brand-offWhite">Smart activation</h3>
                  <p className="text-sm text-brand-lightBlue/80">
                    Only activate during focus-requiring apps
                  </p>
                </div>
                <Switch defaultChecked className="data-[state=checked]:bg-brand-gold" />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 space-y-4">
          <Separator className="bg-brand-blue/30" />

          <div className="flex gap-3">
            <Button className="flex-1 border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button className="flex-1 border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue" onClick={handleSave}>
              Save Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
