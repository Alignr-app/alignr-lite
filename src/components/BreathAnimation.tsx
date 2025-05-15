
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BreathAnimationProps {
  mode: "focus" | "deep";
  colors: string[];
  active: boolean;
}

const BreathAnimation: React.FC<BreathAnimationProps> = ({
  mode,
  colors,
  active,
}) => {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = mode === "focus" ? 4000 : 6000;
    const holdTime = mode === "focus" ? 1000 : 2000;

    const breatheIn = () => {
      setPhase("in");
      setTimeout(() => {
        setPhase("hold");
        setTimeout(() => {
          setPhase("out");
          setTimeout(() => {
            setCount((prev) => prev + 1);
          }, duration);
        }, holdTime);
      }, duration);
    };

    breatheIn();

    return () => {
      // Cleanup timers if needed
    };
  }, [active, count, mode]);

  if (!active) return null;

  const primaryColor = colors[0];
  const secondaryColor = colors[1];
  const tertiaryColor = colors[2] || colors[0];

  const gradient = `radial-gradient(circle, ${primaryColor}50 0%, ${secondaryColor}30 50%, ${tertiaryColor}10 100%)`;

  return (
    <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-10">
      <div
        className={cn(
          "w-64 h-64 rounded-full opacity-90 transition-all duration-1000",
          phase === "in" && "animate-breathe-in",
          phase === "out" && "animate-breathe-out"
        )}
        style={{
          background: gradient,
          transform: phase === "hold" ? "scale(1.05)" : "scale(1)",
        }}
      />
    </div>
  );
};

export default BreathAnimation;
