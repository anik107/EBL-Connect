import { Button } from "@/components/ui/button";
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

const rawCategories = {
  inquiry: "30%",
  suggestions: "20%",
  complaint: "10%",
  praise: "10%",
  other: "30%",
  total_number_of_posts: 24,
};

const COLORS = {
  Inquiry: "#3B82F6", // Blue
  Suggestions: "#10B981", // Emerald
  Complaint: "#F87171", // Red
  Praise: "#FACC15", // Yellow
  Other: "#6366F1", // Indigo
};

const EmotionDonutChart = () => {
  const { resolvedTheme } = useTheme();
  const [hidden, setHidden] = useState([]);

  // Transform & filter data
  const data = Object.entries(rawCategories)
    .filter(([key]) => key !== "total_number_of_posts")
    .filter(([key]) => !hidden.includes(key))
    .map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: parseFloat(value),
    }));

  // Button toggle handler
  const handleToggle = (key) => {
    setHidden((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const getButtonStyle = (key) => {
    const name = key.charAt(0).toUpperCase() + key.slice(1);
    const isHidden = hidden.includes(key);
    const bg = isHidden ? "transparent" : COLORS[name];
    const fg = isHidden
      ? resolvedTheme === "dark"
        ? "#CBD5E1"
        : "#1E293B"
      : "white";
    return {
      backgroundColor: bg,
      color: fg,
      border: `1px solid ${COLORS[name]}`,
    };
  };

  const totalPosts = rawCategories.total_number_of_posts;

  return (
    <>
      {/* Toggle buttons */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
        {Object.keys(rawCategories)
          .filter((key) => key !== "total_number_of_posts")
          .map((key) => (
            <Button
              key={key}
              size="sm"
              variant="outline"
              onClick={() => handleToggle(key)}
              style={getButtonStyle(key)}
              className="transition-all"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </Button>
          ))}
      </div>

      {/* Chart container with center text */}
      <div className="relative w-full h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div className="absolute top-[calc(50%-1rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center -z-1">
          <p className="text-xl font-bold text-slate-900 dark:text-slate-100">
            {totalPosts}
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Total Posts
          </p>
        </div>
      </div>
    </>
  );
};
export default EmotionDonutChart;
