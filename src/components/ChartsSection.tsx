
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HeartRateChart } from "./charts/HeartRateChart";
import { StepsChart } from "./charts/StepsChart";
import { SleepChart } from "./charts/SleepChart";
import { CaloriesChart } from "./charts/CaloriesChart";

export const ChartsSection = () => {
  return (
    <Card className="p-6 bg-white/70 backdrop-blur-sm border-gray-200/50 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Trends</h2>
      
      <Tabs defaultValue="heart-rate" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100/50">
          <TabsTrigger value="heart-rate" className="data-[state=active]:bg-white">Heart Rate</TabsTrigger>
          <TabsTrigger value="steps" className="data-[state=active]:bg-white">Steps</TabsTrigger>
          <TabsTrigger value="sleep" className="data-[state=active]:bg-white">Sleep</TabsTrigger>
          <TabsTrigger value="calories" className="data-[state=active]:bg-white">Calories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="heart-rate" className="mt-6">
          <HeartRateChart />
        </TabsContent>
        
        <TabsContent value="steps" className="mt-6">
          <StepsChart />
        </TabsContent>
        
        <TabsContent value="sleep" className="mt-6">
          <SleepChart />
        </TabsContent>
        
        <TabsContent value="calories" className="mt-6">
          <CaloriesChart />
        </TabsContent>
      </Tabs>
    </Card>
  );
};
