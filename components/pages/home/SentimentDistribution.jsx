"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { data } from "@/data/data";
import { PieChart as PieChartIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const COLORS = {
  positive: "#10B981",
  negative: "#EF4444",
  neutral: "#9CA3AF",
};

const rawSentiment = data?.sentiment_analysis?.sentiment_distribution;

const SentimentDistribution = () => {
  const [hiddenKeys, setHiddenKeys] = useState([]);
  const { resolvedTheme } = useTheme(); // light or dark

  const handleToggle = (key) => {
    setHiddenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const chartData = Object.entries(rawSentiment)
    .filter(([name]) => !hiddenKeys.includes(name))
    .map(([name, value]) => ({
      name,
      value: parseFloat(value),
    }));

  const getButtonStyles = (key) => {
    const isHidden = hiddenKeys.includes(key);
    const baseColor = COLORS[key];
    const textColor = resolvedTheme === "dark" ? "white" : "white";
    return {
      backgroundColor: isHidden ? "transparent" : baseColor,
      color: isHidden
        ? resolvedTheme === "dark"
          ? "#CBD5E1"
          : "#1E293B"
        : textColor,
      border: `1px solid ${baseColor}`,
    };
  };
  return (
    <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
          <PieChartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span>Sentiment Distribution</span>
        </CardTitle>
        <CardDescription className="text-sm">
          Analysis of post sentiment (Posts Only)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 sm:space-y-6">
        {/* Toggle Buttons */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
          {Object.keys(rawSentiment).map((key) => (
            <Button
              key={key}
              variant="outline"
              size="sm"
              onClick={() => handleToggle(key)}
              style={getButtonStyles(key)}
              className="transition-all"
            >
              {key}
            </Button>
          ))}
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
export default SentimentDistribution;
