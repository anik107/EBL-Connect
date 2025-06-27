"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import GlobalContext from "@/contexts/context";
import { ExternalLink } from "lucide-react";
import { useContext } from "react";

const ActionItems = () => {
  const { fullData, loading } = useContext(GlobalContext);
  const posts = fullData?.Posts?.splice(0, 10) ?? [];
  const comments = fullData?.Comments?.splice(0, 10) ?? [];

  return (
    <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Action Items</CardTitle>
        <CardDescription className="text-sm">
          Recommended actions based on sentiment analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="mb-3 text-base sm:text-lg font-bold text-gray-500 dark:text-slate-100">
          Processed Posts Data
        </h1>
        {loading ? (
          <Skeleton className="w-full aspect-video bg-slate-200 dark:bg-slate-700" />
        ) : (
          <div className="relative">
            <div className="overflow-auto max-h-[50vh] sm:max-h-96 border rounded-lg">
              <table className="w-full text-xs sm:text-sm">
                <thead className="sticky top-0 bg-slate-50 dark:bg-slate-700 z-10">
                  <tr className="border-b">
                    <th className="sticky left-0 bg-slate-50 dark:bg-slate-700 p-2 sm:p-3 text-left font-medium border-r z-20 w-[200px] whitespace-nowrap"></th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] whitespace-nowrap">
                      Text
                    </th>
                    <th className="p-2 sm:p-3 font-medium min-w-[100px] whitespace-nowrap text-center">
                      Share Count
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] whitespace-nowrap">
                      Sentiment
                    </th>
                    <th className="p-2 sm:p-3 text-center font-medium min-w-[60px] whitespace-nowrap">
                      Reaction Count
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                      Post Routing ID
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] whitespace-nowrap">
                      Date
                    </th>
                    <th className="p-2 sm:p-3 text-center font-medium min-w-[100px] whitespace-nowrap">
                      Comment Count
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                      Category
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                      Emotion
                    </th>
                    <th className="p-2 sm:p-3 text-center font-medium min-w-[80px] whitespace-nowrap">
                      Viral Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {posts?.length === 0 ? (
                    <tr>
                      <td
                        colSpan={11}
                        className="text-center p-2 sm:p-3 whitespace-nowrap"
                      >
                        No posts found!
                      </td>
                    </tr>
                  ) : (
                    posts.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-slate-50/50 dark:hover:bg-slate-700/50"
                      >
                        <td className="sticky left-0 bg-white dark:bg-slate-800 p-2 sm:p-3 border-r z-10 whitespace-nowrap">
                          <div
                            className="max-w-[120px] block sm:max-w-xs truncate font-bold"
                            title={index}
                          >
                            {index}
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          <a
                            href={row?.post_url}
                            target="_blank"
                            rel="noreferrer"
                            className="max-w-[120px] block cursor-pointer text-blue-500 font-bold truncate"
                          >
                            {row.text}
                          </a>
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.share_count}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.sentiment}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.reaction_count}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.post_routing_id}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.date}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.comment_count}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.category}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.emotion}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.Viral_score}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <h1 className="mt-7 mb-3 text-base sm:text-lg font-bold text-gray-500 dark:text-slate-100">
          Processed Comments & Reviews Data
        </h1>
        {loading ? (
          <Skeleton className="w-full aspect-video bg-slate-200 dark:bg-slate-700" />
        ) : (
          <div className="relative">
            <div className="overflow-auto max-h-[50vh] sm:max-h-96 border rounded-lg">
              <table className="w-full text-xs sm:text-sm">
                <thead className="sticky top-0 bg-slate-50 dark:bg-slate-700 z-10">
                  <tr className="border-b">
                    <th className="sticky left-0 bg-slate-50 dark:bg-slate-700 p-2 sm:p-3 text-left font-medium border-r z-20 whitespace-nowrap"></th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                      Text
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                      Likes
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                      Replies
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] sm:min-w-[100px] whitespace-nowrap">
                      Time
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] sm:min-w-[100px] whitespace-nowrap">
                      Post Routing ID
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                      Comment URL
                    </th>
                    <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                      Virality Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comments?.length === 0 ? (
                    <tr>
                      <td
                        colSpan={11}
                        className="text-center p-2 sm:p-3 whitespace-nowrap"
                      >
                        No comments found!
                      </td>
                    </tr>
                  ) : (
                    comments.map((row, index) => (
                      <tr
                        key={index}
                        className="border-b hover:bg-slate-50/50 dark:hover:bg-slate-700/50"
                      >
                        <td className="sticky left-0 bg-white dark:bg-slate-800 p-2 sm:p-3 border-r z-10 whitespace-nowrap">
                          <div
                            className="max-w-[120px] block sm:max-w-xs truncate font-bold"
                            title={index}
                          >
                            {index}
                          </div>
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          <a
                            href={row?.post_url}
                            target="_blank"
                            rel="noreferrer"
                            className="max-w-[120px] block cursor-pointer text-blue-500 font-bold truncate"
                          >
                            {row.comment_text}
                          </a>
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.comment_likes}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.comment_replies}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.comment_time}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          {row.post_routing_id}
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap">
                          <Badge asChild>
                            <a href={row.comment_url} target="_blank">
                              <ExternalLink /> Open Link
                            </a>
                          </Badge>
                        </td>
                        <td className="p-2 sm:p-3 whitespace-nowrap text-center">
                          {row.virality_score}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
export default ActionItems;
