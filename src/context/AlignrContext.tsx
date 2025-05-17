
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define color palettes
export const colorPalettes = {
  coolTones: {
    name: "Cool Tones",
    colors: ["#87CEEB", "#6495ED", "#4169E1"]
  },
  earthTones: {
    name: "Earth Tones",
    colors: ["#D2B48C", "#8B4513", "#A0522D"]
  },
  softPurples: {
    name: "Soft Purples",
    colors: ["#D8BFD8", "#DDA0DD", "#DA70D6"]
  }
};

// Define the context state
interface AlignrState {
  activeVisualCue: string;
  setActiveVisualCue: (cue: string) => void;
  previewActive: boolean;
  setPreviewActive: (active: boolean) => void;
  // Additional properties needed by components
  breathMode: "focus" | "deep";
  setBreathMode: (mode: "focus" | "deep") => void;
  selectedPalette: typeof colorPalettes.coolTones;
  setSelectedPalette: (palette: typeof colorPalettes.coolTones) => void;
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
  duration: number;
  setDuration: (duration: number) => void;
  schedules: Schedule[];
  addSchedule: () => void;
  removeSchedule: (id: string) => void;
  updateSchedule: (id: string, updates: Partial<Omit<Schedule, "id">>) => void;
}

// Define Schedule type
interface Schedule {
  id: string;
  days: string[];
  startTime: string;
  endTime: string;
  scheduleMode: "visual" | "breath";
  visualCue: string;
  breathMode: "focus" | "deep";
  colorPalette: typeof colorPalettes.coolTones;
}

// Create the context
const AlignrContext = createContext<AlignrState | undefined>(undefined);

// Create a provider component
export const AlignrProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeVisualCue, setActiveVisualCue] = useState("foggy-forest");
  const [previewActive, setPreviewActive] = useState(false);
  const [breathMode, setBreathMode] = useState<"focus" | "deep">("focus");
  const [selectedPalette, setSelectedPalette] = useState(colorPalettes.coolTones);
  const [selectedDays, setSelectedDays] = useState<string[]>(["mon", "tue", "wed", "thu", "fri"]);
  const [duration, setDuration] = useState(15);
  const [schedules, setSchedules] = useState<Schedule[]>([]);

  const addSchedule = () => {
    const newSchedule: Schedule = {
      id: Date.now().toString(),
      days: ["mon", "tue", "wed", "thu", "fri"],
      startTime: "09",
      endTime: "17",
      scheduleMode: "visual",
      visualCue: activeVisualCue,
      breathMode: "focus",
      colorPalette: selectedPalette,
    };
    setSchedules([...schedules, newSchedule]);
  };

  const removeSchedule = (id: string) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  const updateSchedule = (id: string, updates: Partial<Omit<Schedule, "id">>) => {
    setSchedules(
      schedules.map(schedule => 
        schedule.id === id ? { ...schedule, ...updates } : schedule
      )
    );
  };

  const value = {
    activeVisualCue,
    setActiveVisualCue,
    previewActive,
    setPreviewActive,
    breathMode,
    setBreathMode,
    selectedPalette,
    setSelectedPalette,
    selectedDays,
    setSelectedDays,
    duration,
    setDuration,
    schedules,
    addSchedule,
    removeSchedule,
    updateSchedule,
  };

  return <AlignrContext.Provider value={value}>{children}</AlignrContext.Provider>;
};

// Create a custom hook to use the context
export const useAlignr = (): AlignrState => {
  const context = useContext(AlignrContext);
  if (context === undefined) {
    throw new Error("useAlignr must be used within an AlignrProvider");
  }
  return context;
};
