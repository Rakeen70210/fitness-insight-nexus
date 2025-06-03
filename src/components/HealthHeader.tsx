
import { Calendar, User, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HealthHeaderProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}

export const HealthHeader = ({ selectedDate, onDateChange }: HealthHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8 animate-fade-in">
      <div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Health Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Track your wellness journey with AI-powered insights
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-2xl px-4 py-2 border border-gray-200">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium">
            {selectedDate.toLocaleDateString('en-US', { 
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </span>
        </div>
        
        <Button variant="ghost" size="icon" className="rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90">
          <Settings className="h-4 w-4" />
        </Button>
        
        <Button variant="ghost" size="icon" className="rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
