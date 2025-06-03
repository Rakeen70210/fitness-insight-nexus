
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HealthDashboard } from "@/components/HealthDashboard";
import { HealthHeader } from "@/components/HealthHeader";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <HealthHeader selectedDate={selectedDate} onDateChange={setSelectedDate} />
        <HealthDashboard />
      </div>
    </div>
  );
};

export default Index;
