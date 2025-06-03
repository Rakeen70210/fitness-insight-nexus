
import { Heart, Activity, Flame, Moon } from "lucide-react";
import { MetricCard } from "./MetricCard";

export const MetricsGrid = () => {
  const metrics = [
    {
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      change: "+2%",
      trend: "up" as const,
      icon: Heart,
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50",
    },
    {
      title: "Steps",
      value: "8,542",
      unit: "steps",
      change: "+12%",
      trend: "up" as const,
      icon: Activity,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Calories",
      value: "2,341",
      unit: "kcal",
      change: "-5%",
      trend: "down" as const,
      icon: Flame,
      color: "from-orange-400 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      title: "Sleep",
      value: "7h 32m",
      unit: "duration",
      change: "+18min",
      trend: "up" as const,
      icon: Moon,
      color: "from-purple-400 to-indigo-500",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
      {metrics.map((metric, index) => (
        <MetricCard key={metric.title} metric={metric} index={index} />
      ))}
    </div>
  );
};
