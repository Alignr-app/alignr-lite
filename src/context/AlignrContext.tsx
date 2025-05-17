
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the context state
interface AlignrState {
  activeVisualCue: string;
  setActiveVisualCue: (cue: string) => void;
  previewActive: boolean;
  setPreviewActive: (active: boolean) => void;
}

// Create the context
const AlignrContext = createContext<AlignrState | undefined>(undefined);

// Create a provider component
export const AlignrProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeVisualCue, setActiveVisualCue] = useState("foggy-forest");
  const [previewActive, setPreviewActive] = useState(false);

  const value = {
    activeVisualCue,
    setActiveVisualCue,
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
