
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Schedule: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-background">
      <Header />

      <div className="flex-1 container max-w-lg px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-brand-offWhite">Schedule</h1>
          <p className="text-brand-lightBlue/90">This feature has been simplified in the current version.</p>
        </div>

        <Card className="p-5 glassmorphism hover-card">
          <h2 className="text-lg font-medium mb-4 text-brand-offWhite">Daily Schedule</h2>
          <p className="text-center text-brand-lightBlue/80 py-6">
            Scheduling functionality is not available in this simplified version.
          </p>
          
          <Button 
            className="w-full border border-brand-blue/30 text-brand-gold bg-brand-darkBlue hover:bg-brand-gold hover:text-brand-darkBlue"
            onClick={() => navigate("/")}
          >
            Return Home
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
