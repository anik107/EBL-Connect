"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const rawBankMentions = {
  prime_bank: 42,
  eastern_bank: 18,
  brac_bank: 22,
  city_bank: 15,
  dutch_bangla: 29,
  total_bank_mentions: 126,
};

// Optional: Human-friendly display names
const BANK_LABELS = {
  prime_bank: "Prime Bank",
  eastern_bank: "Eastern Bank",
  brac_bank: "BRAC Bank",
  city_bank: "City Bank",
  dutch_bangla: "Dutch-Bangla Bank",
};

const COLORS = ["#3B82F6", "#6366F1", "#10B981", "#F59E0B", "#EF4444"];

export default function BankMentionsBarChart() {
  const data = Object.entries(rawBankMentions)
    .filter(([key]) => key !== "total_bank_mentions")
    .map(([key, value]) => ({
      name: BANK_LABELS[key] || key,
      value,
    }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
