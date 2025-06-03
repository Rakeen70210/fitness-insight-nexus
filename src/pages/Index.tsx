
import { useState } from "react";
import { HealthDashboard } from "@/components/HealthDashboard";
import { HealthHeader } from "@/components/HealthHeader";
import { AIInsights } from "@/components/AIInsights";
import { MetricsGrid } from "@/components/MetricsGrid";
import { ChartsSection } from "@/components/ChartsSection";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <HealthHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <div className="space-y-6">
          <MetricsGrid />
          <AIInsights />
          <ChartsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
