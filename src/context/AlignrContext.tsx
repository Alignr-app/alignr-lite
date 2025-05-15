
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define Color Palette Types
type ColorPalette = {
  name: string;
  colors: string[];
};

// Define the context state
interface AlignrState {
  activeVisualCue: string;
  setActiveVisualCue: (cue: string) => void;
  breathMode: "focus" | "deep";
  setBreathMode: (mode: "focus" | "deep") => void;
  selectedPalette: ColorPalette;
  setSelectedPalette: (palette: ColorPalette) => void;
  selectedDays: string[];
  setSelectedDays: (days: string[]) => void;
  startTime: string;
  setStartTime: (time: string) => void;
  endTime: string;
  setEndTime: (time: string) => void;
  duration: number;
  setDuration: (duration: number) => void;
  previewActive: boolean;
  setPreviewActive: (active: boolean) => void;
}

// Available color palettes
export const colorPalettes = {
  coolTones: {
    name: "Cool Tones",
    colors: ["#AEEEEE", "#6BCDC7", "#B0D9D8"],
  },
  earthTones: {
    name: "Earth Tones",
    colors: ["#B2C8BA", "#A3B18A", "#9AA19A"],
  },
  softPurples: {
    name: "Soft Purples",
    colors: ["#C4C3D0", "#D8BFD8", "#C3B1E1"],
  },
};

// Create the context
const AlignrContext = createContext<AlignrState | undefined>(undefined);

// Create a provider component
export const AlignrProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeVisualCue, setActiveVisualCue] = useState("foggy-forest");
  const [breathMode, setBreathMode] = useState<"focus" | "deep">("focus");
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette>(colorPalettes.coolTones);
  const [selectedDays, setSelectedDays] = useState<string[]>(["mon", "tue", "wed", "thu", "fri"]);
  const [startTime, setStartTime] = useState("09");
  const [endTime, setEndTime] = useState("17");
  const [duration, setDuration] = useState(10);
  const [previewActive, setPreviewActive] = useState(false);

  const value = {
    activeVisualCue,
    setActiveVisualCue,
    breathMode,
    setBreathMode,
    selectedPalette,
    setSelectedPalette,
    selectedDays,
    setSelectedDays,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    duration,
    setDuration,
    previewActive,
    setPreviewActive,
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
