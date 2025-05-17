
import React from "react";
import DaySelector from "@/components/DaySelector";
import TimeSelector from "@/components/TimeSelector";

interface ScheduleTimeSettingsProps {
  days: string[];
  startTime: string;
  endTime: string;
  updateDays: (days: string[]) => void;
  updateStartTime: (time: string) => void;
  updateEndTime: (time: string) => void;
}

const ScheduleTimeSettings: React.FC<ScheduleTimeSettingsProps> = ({
  days,
  startTime,
  endTime,
  updateDays,
  updateStartTime,
  updateEndTime
}) => {
  return (
    <>
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
    </>
  );
};

export default ScheduleTimeSettings;
