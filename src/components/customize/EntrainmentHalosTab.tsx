
import React from "react";
import { Card } from "@/components/ui/card";

// This is a placeholder component since we're simplifying the app
// and not using Entrainment Halos feature
interface EntrainmentHalosTabProps {
  setActivePreviewMode: (mode: "visual" | "breath") => void;
}

const EntrainmentHalosTab: React.FC<EntrainmentHalosTabProps> = () => {
  return (
    <Card className="p-5 glassmorphism">
      <h2 className="text-lg font-medium mb-4 text-brand-offWhite">
        Entrainment Halos
      </h2>
      <p className="text-brand-lightBlue/90">
        This feature has been simplified in this version.
      </p>
    </Card>
  );
};

export default EntrainmentHalosTab;
