"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
// using local static dataset instead of backend
import { data } from "@/data/data";
import { Heart, MessageCircle, TrendingUp, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const TopVirtualPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // error is rarely used now, kept for future

  useEffect(() => {
    // load posts from local data file and ensure they're ordered by virality_score desc
    // data.sentiment_analysis.top_posts contains the list
    const top = (data.sentiment_analysis?.top_posts || []).slice().sort((a, b) => b.virality_score - a.virality_score);
    setPosts(top);
    setLoading(false);
  }, []);

  /**
   * decide what to be rendered
   */
  let content = null;

  if (loading) {
    content = (
      <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-lg bg-slate-50/50 dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="flex items-start justify-between gap-2">
              <Skeleton className="w-full h-20 bg-slate-200 dark:bg-slate-700" />
            </div>
          ))}
      </div>
    );
  } else if (!loading && error) {
    content = (
      <Alert variant="destructive">
        <Terminal className="w-4 h-4 mr-2" />
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  } else {
    content = posts.map((post, index) => (
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
    ));
  }

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
      <CardContent className="space-y-3 sm:space-y-4">{content}</CardContent>
    </Card>
  );
};
export default TopVirtualPosts;
