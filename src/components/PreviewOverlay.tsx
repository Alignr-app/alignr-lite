
import React from "react";
import { cn } from "@/lib/utils";

interface PreviewOverlayProps {
  overlayClass: string;
  active: boolean;
  opacity?: number;
}

const PreviewOverlay: React.FC<PreviewOverlayProps> = ({
  overlayClass,
  active,
  opacity = 0.4,
}) => {
  if (!active) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 pointer-events-none z-0 animate-float",
        overlayClass
      )}
      style={{ opacity }}
    />
  );
};

export default PreviewOverlay;
