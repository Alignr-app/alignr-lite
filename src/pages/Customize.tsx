
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAlignr } from "@/context/AlignrContext";
import Header from "@/components/Header";
import PreviewOverlay from "@/components/PreviewOverlay";
import BreathAnimation from "@/components/BreathAnimation";
import MoodHalosTab from "@/components/customize/MoodHalosTab";
import EntrainmentHalosTab from "@/components/customize/EntrainmentHalosTab";
import QuickStartCard from "@/components/customize/QuickStartCard";
import FooterActions from "@/components/customize/FooterActions";

const Customize: React.FC = () => {
  const {
    activeVisualCue,
    breathMode,
    selectedPalette,
    previewActive,
    setPreviewActive,
    activePreviewMode,
    setActivePreviewMode,
  } = useAlignr();

  const handleTabChange = (value: string) => {
    if (value === "visual-cues") {
      setActivePreviewMode("visual");
    } else if (value === "breath-patterns") {
      setActivePreviewMode("breath");
    }
  };

  return (
    <div className="page-background">
      <Header />

      {/* Preview Overlay - Conditionally render based on activePreviewMode */}
      {previewActive && activePreviewMode === "visual" && (
        <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
      )}
      {previewActive && activePreviewMode === "breath" && (
        <BreathAnimation mode={breathMode} colors={selectedPalette.colors} active={previewActive} />
      )}

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-brand-offWhite">Customize Your Experience</h1>
          <p className="text-brand-lightBlue/90">Choose visual cues and entrainment patterns</p>
        </div>

        <QuickStartCard />

        <Tabs defaultValue="visual-cues" className="w-full" onValueChange={handleTabChange}>
          <TabsList className="w-full mb-6 bg-brand-darkBlue/50">
            <TabsTrigger value="visual-cues" className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-brand-offWhite">
              Mood Halos
            </TabsTrigger>
            <TabsTrigger value="breath-patterns" className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-brand-offWhite">
              Entrainment Halos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visual-cues" className="space-y-6">
            <MoodHalosTab setActivePreviewMode={setActivePreviewMode} />
          </TabsContent>

          <TabsContent value="breath-patterns" className="space-y-6">
            <EntrainmentHalosTab setActivePreviewMode={setActivePreviewMode} />
          </TabsContent>
        </Tabs>

        <FooterActions 
          previewActive={previewActive}
          setPreviewActive={setPreviewActive}
        />
      </div>
    </div>
  );
};

export default Customize;
