import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { data } from "@/data/data";
import { Activity, Heart, MessageSquare, TrendingUp } from "lucide-react";

const kpiData = [
  {
    title: "Total Mentions",
    value: "48",
    subtitle: "Posts & Comments",
    change: "+12%",
    trend: "up",
    icon: MessageSquare,
  },
  {
    title: "Prime Bank Posts",
    value: "19",
    subtitle: "Direct mentions",
    change: "+5%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Sentiment Score",
    value: "+9",
    subtitle: "Overall positive",
    change: "+2.1",
    trend: "up",
    icon: Heart,
  },
  {
    title: "Engagement Score",
    value: "773.67",
    subtitle: "Weighted sentiment",
    change: "-1.2%",
    trend: "down",
    icon: Activity,
  },
];

const kpi = data.kpi;

const KpiCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <Card className="relative overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {kpi.total_mentions_of_all_banks}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Total Mentions
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Posts & Comments
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {kpi.posts_mentioning_prime_bank}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Prime Bank Posts
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Posts & Comments
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {kpi.bank_sentiment_score}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Sentiment Score
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Overall positive
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="relative overflow-hidden border-0 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="p-2 sm:p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-blue-200/50 dark:border-blue-700/50">
              <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              {kpi.engagement_weighted_sentiment}
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              Engagement Score
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Weighted sentiment
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default KpiCards;
