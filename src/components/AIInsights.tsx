
import { Brain, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const AIInsights = () => {
  const insights = [
    {
      title: "Sleep Quality Analysis",
      content: "Your sleep pattern shows excellent consistency this week. The 7.5-hour average aligns perfectly with optimal recovery needs. Consider maintaining your current bedtime routine.",
      confidence: 92,
    },
    {
      title: "Activity Performance",
      content: "Your step count has increased by 12% compared to last week, indicating great progress towards your fitness goals. Heart rate variability suggests good cardiovascular health.",
      confidence: 88,
    },
    {
      title: "Recovery Insights",
      content: "Based on your heart rate patterns and sleep data, your body is recovering well from workouts. Consider adding one more rest day to optimize your training cycle.",
      confidence: 85,
    },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-violet-50 to-blue-50 border-violet-200/50 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Health Insights</h2>
          <p className="text-gray-600">Personalized analysis of your health data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insights.map((insight, index) => (
          <div
            key={insight.title}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:bg-white/80 transition-colors duration-300"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="h-4 w-4 text-violet-500" />
              <h3 className="font-semibold text-gray-900">{insight.title}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              {insight.content}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-violet-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${insight.confidence}%` }}
                />
              </div>
              <span className="text-xs text-gray-500 font-medium">
                {insight.confidence}% confidence
              </span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
