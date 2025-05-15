
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Header />

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Schedule</h1>
          <p className="text-gray-600">Set when you want Alignr to help you</p>
        </div>

        <div className="space-y-6">
          <Card className="p-5">
            <h2 className="text-lg font-medium mb-4">Peak Usage Schedule</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-3">Select days</p>
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
                  <h3 className="font-medium">Automatically activate</h3>
                  <p className="text-sm text-gray-500">
                    Turn on during scheduled times
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-lg font-medium mb-4">Time-Based Activation</h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                Activate after continuous usage of:
              </p>
              <DurationSelector
                durations={[5, 10, 15, 20]}
                selectedDuration={duration}
                onChange={setDuration}
              />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Smart activation</h3>
                  <p className="text-sm text-gray-500">
                    Only activate during focus-requiring apps
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 space-y-4">
          <Separator />

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={handleSave}>
              Save Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
