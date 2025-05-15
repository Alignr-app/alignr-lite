
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
    <div className="page-background">
      <Header />

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-brand-offWhite">Customize Your Experience</h1>
          <p className="text-brand-lightBlue/90">Choose visual cues and breathing patterns</p>
        </div>

        <Tabs defaultValue="visual-cues" className="w-full">
          <TabsList className="w-full mb-6 bg-brand-darkBlue/50">
            <TabsTrigger value="visual-cues" className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-brand-offWhite">
              Visual Cues
            </TabsTrigger>
            <TabsTrigger value="breath-patterns" className="flex-1 data-[state=active]:bg-brand-blue data-[state=active]:text-brand-offWhite">
              Breath Patterns
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visual-cues" className="space-y-6">
            <Card className="p-5 glassmorphism">
              <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Choose Your Visual Cue</h2>
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
            <Card className="p-5 glassmorphism">
              <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Choose Breath Pattern</h2>
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    breathMode === "focus"
                      ? "bg-brand-blue text-brand-offWhite"
                      : "bg-brand-darkBlue/50 hover:bg-brand-darkBlue/70 text-brand-lightBlue"
                  }`}
                  onClick={() => setBreathMode("focus")}
                >
                  <h3 className="font-medium">Focus Mode</h3>
                  <p className="text-sm opacity-90">Balanced breath for concentration</p>
                </div>

                <div
                  className={`p-4 rounded-lg cursor-pointer transition-all ${
                    breathMode === "deep"
                      ? "bg-brand-blue text-brand-offWhite"
                      : "bg-brand-darkBlue/50 hover:bg-brand-darkBlue/70 text-brand-lightBlue"
                  }`}
                  onClick={() => setBreathMode("deep")}
                >
                  <h3 className="font-medium">Deep Dive Mode</h3>
                  <p className="text-sm opacity-90">Extended breath cycle for relaxation</p>
                </div>
              </div>
            </Card>

            <Card className="p-5 glassmorphism">
              <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Color Palette</h2>
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
            className={`w-full ${previewActive ? 'bg-brand-gold hover:bg-brand-gold/90 text-brand-darkBlue' : 'border border-brand-blue/30 bg-brand-darkBlue text-brand-lightBlue hover:bg-brand-gold hover:text-brand-darkBlue'}`}
          >
            {previewActive ? "End Preview" : "Preview Your Settings"}
          </Button>

          <Separator className="bg-brand-blue/30" />

          <div className="flex gap-3">
            <Button className="flex-1 border border-brand-blue/30 bg-brand-darkBlue text-brand-lightBlue hover:bg-brand-gold hover:text-brand-darkBlue" onClick={() => navigate("/")}>
              Cancel
            </Button>
            <Button className="flex-1 border border-brand-blue/30 bg-brand-darkBlue text-brand-lightBlue hover:bg-brand-gold hover:text-brand-darkBlue" onClick={handleSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
