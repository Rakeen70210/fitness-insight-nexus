
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sleepData = [
  { day: 'Mon', deep: 1.5, light: 4.2, rem: 1.8, awake: 0.3 },
  { day: 'Tue', deep: 1.8, light: 4.5, rem: 2.1, awake: 0.2 },
  { day: 'Wed', deep: 1.2, light: 3.8, rem: 1.6, awake: 0.4 },
  { day: 'Thu', deep: 1.9, light: 4.7, rem: 2.3, awake: 0.1 },
  { day: 'Fri', deep: 1.4, light: 4.1, rem: 1.9, awake: 0.3 },
  { day: 'Sat', deep: 2.1, light: 5.2, rem: 2.4, awake: 0.2 },
  { day: 'Sun', deep: 1.7, light: 4.6, rem: 2.0, awake: 0.2 },
];

export const SleepChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={sleepData}>
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
          <Area type="monotone" dataKey="deep" stackId="1" stroke="#4c1d95" fill="#4c1d95" />
          <Area type="monotone" dataKey="light" stackId="1" stroke="#7c3aed" fill="#7c3aed" />
          <Area type="monotone" dataKey="rem" stackId="1" stroke="#a855f7" fill="#a855f7" />
          <Area type="monotone" dataKey="awake" stackId="1" stroke="#d8b4fe" fill="#d8b4fe" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
