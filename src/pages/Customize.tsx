
import React from "react";
import { useAlignr } from "@/context/AlignrContext";
import Header from "@/components/Header";
import PreviewOverlay from "@/components/PreviewOverlay";
import MoodHalosTab from "@/components/customize/MoodHalosTab";
import QuickStartCard from "@/components/customize/QuickStartCard";
import FooterActions from "@/components/customize/FooterActions";

const Customize: React.FC = () => {
  const {
    activeVisualCue,
    previewActive,
    setPreviewActive,
  } = useAlignr();

  return (
    <div className="page-background">
      <Header />

      {/* Preview Overlay */}
      {previewActive && (
        <PreviewOverlay overlayClass={`overlay-${activeVisualCue}`} active={previewActive} opacity={0.7} />
      )}

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-brand-offWhite">Customize Your Experience</h1>
          <p className="text-brand-lightBlue/90">Choose your preferred mood halo</p>
        </div>

        <QuickStartCard />

        <MoodHalosTab />

        <FooterActions 
          previewActive={previewActive}
          setPreviewActive={setPreviewActive}
        />
      </div>
    </div>
  );
};

export default Customize;
