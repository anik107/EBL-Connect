import { Skeleton } from "@/components/ui/skeleton";
import GlobalContext from "@/contexts/context";
import { useContext } from "react";
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

const COLORS = {
  Neutral: "#9CA3AF", // Slate
  Joy: "#FACC15", // Yellow
  Confusion: "#60A5FA", // Blue
  Frustration: "#EF4444", // Red
};

const EmotionBarChart = () => {
  const { data, loading } = useContext(GlobalContext);
  const rawEmotionData = data?.sentiment_analysis?.emotion_distribution ?? {};
  const chartData = Object.entries(rawEmotionData).map(([key, value]) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    value: parseFloat(value),
  }));

  return loading ? (
    <Skeleton className="w-full aspect-video" />
  ) : (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 10, right: 20, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis unit="%" />
        <Tooltip />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[entry.name] || "#3B82F6"}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default EmotionBarChart;
