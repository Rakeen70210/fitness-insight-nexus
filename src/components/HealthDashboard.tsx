
import { MetricsGrid } from "./MetricsGrid";
import { AIInsights } from "./AIInsights";
import { ChartsSection } from "./ChartsSection";

export const HealthDashboard = () => {
  return (
    <div className="space-y-6">
      <MetricsGrid />
      <AIInsights />
      <ChartsSection />
    </div>
  );
};
