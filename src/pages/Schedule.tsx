
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

const Schedule: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    selectedDays,
    setSelectedDays,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    duration,
    setDuration,
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
            <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Peak Usage Schedule</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-brand-lightBlue/80 mb-3">Select days</p>
                <DaySelector selectedDays={selectedDays} onChange={setSelectedDays} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <TimeSelector
                  label="Start Time"
                  value={startTime}
                  onChange={setStartTime}
                />
                <TimeSelector
                  label="End Time"
                  value={endTime}
                  onChange={setEndTime}
                />
              </div>

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
