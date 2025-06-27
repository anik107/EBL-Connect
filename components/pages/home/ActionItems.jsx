"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import GlobalContext from "@/contexts/context";
import { useContext } from "react";

const ActionItems = () => {
  const { data, loading } = useContext(GlobalContext);

  if (loading) {
    return <Skeleton className="w-full aspect-square" />;
  }

  const posts = data?.action_items ?? [];

  return (
    <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">Action Items</CardTitle>
        <CardDescription className="text-sm">
          Recommended actions based on sentiment analysis
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="overflow-auto max-h-[50vh] sm:max-h-96 border rounded-lg">
            <table className="w-full text-xs sm:text-sm">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-700 z-10">
                <tr className="border-b">
                  <th className="sticky left-0 bg-slate-50 dark:bg-slate-700 p-2 sm:p-3 text-left font-medium border-r z-20">
                    Text
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[120px]">
                    Sentiment
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[120px]">
                    Category
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[120px]">
                    Emotion
                  </th>
                  <th className="p-2 sm:p-3 font-medium min-w-[80px] sm:min-w-[120px] text-center">
                    Viral Score
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] sm:min-w-[120px]">
                    Url
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50/50 dark:hover:bg-slate-700/50"
                  >
                    <td className="sticky left-0 bg-white dark:bg-slate-800 p-2 sm:p-3 border-r z-10">
                      <a
                        href={row?.post_url}
                        target="_blank"
                        rel="noreferrer"
                        className="max-w-[120px] block sm:max-w-xs truncate cursor-pointer text-blue-500 font-bold"
                      >
                        {row.text}
                      </a>
                    </td>
                    <td className="p-2 sm:p-3 capitalize">{row?.sentiment}</td>
                    <td className="p-2 sm:p-3 capitalize">{row?.category}</td>
                    <td className="p-2 sm:p-3 capitalize">{row?.emotion}</td>
                    <td className="p-2 sm:p-3 capitalize text-center">
                      {row?.virality_score}
                    </td>
                    <td className="p-2 sm:p-3 capitalize">N/A</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default ActionItems;
