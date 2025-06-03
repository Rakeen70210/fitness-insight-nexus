
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const caloriesData = [
  { day: 'Mon', burned: 2341, consumed: 2100, target: 2200 },
  { day: 'Tue', burned: 2567, consumed: 2300, target: 2200 },
  { day: 'Wed', burned: 2234, consumed: 1950, target: 2200 },
  { day: 'Thu', burned: 2789, consumed: 2450, target: 2200 },
  { day: 'Fri', burned: 2123, consumed: 2000, target: 2200 },
  { day: 'Sat', burned: 2890, consumed: 2600, target: 2200 },
  { day: 'Sun', burned: 2456, consumed: 2200, target: 2200 },
];

export const CaloriesChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={caloriesData}>
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
          <Bar dataKey="burned" fill="url(#burnedGradient)" radius={[4, 4, 0, 0]} />
          <Bar dataKey="consumed" fill="url(#consumedGradient)" radius={[4, 4, 0, 0]} />
          <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={3} strokeDasharray="5 5" />
          <defs>
            <linearGradient id="burnedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="consumedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
          </defs>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
