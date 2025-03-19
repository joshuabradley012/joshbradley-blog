"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
];

export default function InteractiveChart() {
  const [activePoint, setActivePoint] = useState<string | null>(null);

  return (
    <>
      <div className="my-8 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            onMouseMove={(e) => {
              if (e.activeLabel) {
                setActivePoint(e.activeLabel);
              }
            }}
            onMouseLeave={() => setActivePoint(null)}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {activePoint && (
        <div className="mb-6 rounded bg-blue-50 p-4">
          <p className="font-medium">Currently hovering: {activePoint}</p>
          <p>
            This text updates based on user interaction with the chart above!
          </p>
        </div>
      )}
    </>
  );
}
