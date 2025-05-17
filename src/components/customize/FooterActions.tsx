
import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface FooterActionsProps {
  previewActive: boolean;
  setPreviewActive: (active: boolean) => void;
}

const FooterActions: React.FC<FooterActionsProps> = ({ previewActive, setPreviewActive }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your customization preferences have been saved.",
    });
    navigate("/");
  };

  return (
    <div className="mt-6 space-y-4">
      <Button
        onClick={() => setPreviewActive(!previewActive)}
        variant={previewActive ? "default" : "secondary"}
        className={`w-full ${previewActive ? 'bg-brand-gold hover:bg-brand-gold/90 text-brand-darkBlue' : 'border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue'}`}
      >
        {previewActive ? "End Preview" : "Preview Your Settings"}
      </Button>

      <Separator className="bg-brand-blue/30" />

      <div className="flex gap-3">
        <Button className="flex-1 border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue" onClick={() => navigate("/")}>
          Back
        </Button>
        <Button className="flex-1 border border-brand-blue/30 bg-brand-darkBlue text-brand-gold hover:bg-brand-gold hover:text-brand-darkBlue" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default FooterActions;
