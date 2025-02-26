// components/Chart.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Chart = ({ transactions }) => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={transactions.map((t, i) => ({ ...t, index: i + 1 }))}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="index" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;