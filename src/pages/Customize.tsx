
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import VisualCueCard from "@/components/VisualCueCard";
import ColorPalette from "@/components/ColorPalette";
import { useAlignr, colorPalettes } from "@/context/AlignrContext";

const Customize: React.FC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    activeVisualCue,
    setActiveVisualCue,
    breathMode,
    setBreathMode,
    selectedPalette,
    setSelectedPalette,
    previewActive,
    setPreviewActive,
  } = useAlignr();

  const visualCues = [
    { id: "foggy-forest", title: "Foggy Forest" },
    { id: "colored-clouds", title: "Colored Clouds" },
    { id: "ocean-waves", title: "Ocean Waves" },
    { id: "liquid-gold", title: "Liquid Gold" },
  ];

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your customization preferences have been saved.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      <Header />

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Customize Your Experience</h1>
          <p className="text-gray-600">Choose visual cues and breathing patterns</p>
        </div>

        <Tabs defaultValue="visual-cues" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="visual-cues" className="flex-1">
              Visual Cues
            </TabsTrigger>
            <TabsTrigger value="breath-patterns" className="flex-1">
              Breath Patterns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visual-cues" className="space-y-6">
            <Card className="p-5">
              <h2 className="text-lg font-medium mb-4">Choose Your Visual Cue</h2>
              <div className="grid grid-cols-2 gap-4">
                {visualCues.map((cue) => (
                  <VisualCueCard
                    key={cue.id}
                    title={cue.title}
                    overlayClass={`overlay-${cue.id}`}
                    isSelected={activeVisualCue === cue.id}
                    onClick={() => setActiveVisualCue(cue.id)}
                  />
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="breath-patterns" className="space-y-6">
            <Card className="p-5">
              <h2 className="text-lg font-medium mb-4">Choose Breath Pattern</h2>
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    breathMode === "focus"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => setBreathMode("focus")}
                >
                  <h3 className="font-medium">Focus Mode</h3>
                  <p className="text-sm">Balanced breath for concentration</p>
                </div>

                <div
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    breathMode === "deep"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => setBreathMode("deep")}
                >
                  <h3 className="font-medium">Deep Dive Mode</h3>
                  <p className="text-sm">Extended breath cycle for relaxation</p>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h2 className="text-lg font-medium mb-4">Color Palette</h2>
              <div className="space-y-3">
                <ColorPalette
                  name="Cool Tones"
                  colors={colorPalettes.coolTones.colors}
                  isSelected={selectedPalette.name === "Cool Tones"}
                  onClick={() => setSelectedPalette(colorPalettes.coolTones)}
                />
                <ColorPalette
                  name="Earth Tones"
                  colors={colorPalettes.earthTones.colors}
                  isSelected={selectedPalette.name === "Earth Tones"}
                  onClick={() => setSelectedPalette(colorPalettes.earthTones)}
                />
                <ColorPalette
                  name="Soft Purples"
                  colors={colorPalettes.softPurples.colors}
                  isSelected={selectedPalette.name === "Soft Purples"}
                  onClick={() => setSelectedPalette(colorPalettes.softPurples)}
                />
              </div>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-6 space-y-4">
          <Button
            onClick={() => setPreviewActive(!previewActive)}
            variant={previewActive ? "default" : "secondary"}
            className="w-full"
          >
            {previewActive ? "End Preview" : "Preview Your Settings"}
          </Button>

          <Separator />

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button className="flex-1" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
