
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const stepsData = [
  { day: 'Mon', steps: 8542, goal: 10000 },
  { day: 'Tue', steps: 12453, goal: 10000 },
  { day: 'Wed', steps: 9876, goal: 10000 },
  { day: 'Thu', steps: 11234, goal: 10000 },
  { day: 'Fri', steps: 8967, goal: 10000 },
  { day: 'Sat', steps: 15432, goal: 10000 },
  { day: 'Sun', steps: 7865, goal: 10000 },
];

export const StepsChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={stepsData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis dataKey="day" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Bar dataKey="steps" fill="url(#stepsGradient)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="goal" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
          <defs>
            <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
