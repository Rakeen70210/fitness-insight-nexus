
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Metric {
  title: string;
  value: string;
  unit: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

interface MetricCardProps {
  metric: Metric;
  index: number;
}

export const MetricCard = ({ metric, index }: MetricCardProps) => {
  const { title, value, unit, change, trend, icon: Icon, color, bgColor } = metric;

  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
        bgColor
      )}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-3 rounded-2xl bg-gradient-to-br", color)}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center gap-1 text-sm">
          {trend === "up" ? (
            <TrendingUp className="h-4 w-4 text-green-500" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-500" />
          )}
          <span className={cn(
            "font-medium",
            trend === "up" ? "text-green-600" : "text-red-600"
          )}>
            {change}
          </span>
        </div>
      </div>
      
      <div>
        <h3 className="text-gray-600 text-sm font-medium mb-1">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          <span className="text-sm text-gray-500">{unit}</span>
        </div>
      </div>
    </div>
  );
};
