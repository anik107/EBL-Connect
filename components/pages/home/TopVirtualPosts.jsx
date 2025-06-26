import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { data } from "@/data/data";
import { Heart, MessageCircle, TrendingUp } from "lucide-react";

const viralPosts = [
  {
    text: "অভিনন্দন প্রাইম ব্যাংক লিমিটেড Prime Bank Ltd...",
    score: 95,
    engagement: 1240,
    sentiment: "positive",
  },
  {
    text: "Alhamdulillah Prime Bank Card Shop Payment order...",
    score: 87,
    engagement: 980,
    sentiment: "positive",
  },
  {
    text: "List of Student accounts has good HD view policy...",
    score: 78,
    engagement: 756,
    sentiment: "positive",
  },
  {
    text: "Prime bank charged me hidden fees very disappointing...",
    score: 65,
    engagement: 543,
    sentiment: "negative",
  },
  {
    text: "prime bank youth account in manikganj is ALL ATM...",
    score: 52,
    engagement: 432,
    sentiment: "neutral",
  },
  {
    text: "Prime Bank ATM is not working again. So frustrating...",
    score: 48,
    engagement: 387,
    sentiment: "negative",
  },
];

const posts = data.sentiment_analysis.top_posts ?? [];

const TopVirtualPosts = () => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
          <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
          <span>Top Viral Posts</span>
        </CardTitle>
        <CardDescription className="text-sm">
          Posts ranked by viral score and engagement
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-slate-50/50 dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex-1 line-clamp-2">
                {post.text}
              </p>
              <Badge
                variant={
                  post.sentiment === "positive"
                    ? "default"
                    : post.sentiment === "negative"
                    ? "destructive"
                    : "secondary"
                }
                className="shrink-0 text-xs"
              >
                {post.sentiment?.toUpperCase()}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{post.reaction_count}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Comments: {post.comments_count}</span>
                </div>
              </div>
              <Progress
                value={post.reaction_count}
                className="w-full sm:w-20 h-2"
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
export default TopVirtualPosts;
