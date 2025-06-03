
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const heartRateData = [
  { time: '6:00', resting: 58, active: 72, max: 145 },
  { time: '9:00', resting: 62, active: 78, max: 152 },
  { time: '12:00', resting: 65, active: 82, max: 148 },
  { time: '15:00', resting: 68, active: 85, max: 165 },
  { time: '18:00', resting: 70, active: 88, max: 172 },
  { time: '21:00', resting: 64, active: 75, max: 138 },
];

export const HeartRateChart = () => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={heartRateData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
          <XAxis dataKey="time" stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          />
          <Line type="monotone" dataKey="resting" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
          <Line type="monotone" dataKey="active" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
          <Line type="monotone" dataKey="max" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
