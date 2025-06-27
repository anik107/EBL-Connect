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
import Markdown from "react-markdown";

const AiOverview = () => {
  const { data, loading } = useContext(GlobalContext);

  const ai_overview = data?.ai_overview ?? {};

  return (
    <Card className="flex flex-col flex-grow border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">AI overview</CardTitle>
        <CardDescription className="text-sm">
          Detailed emotion breakdown across all posts and comments
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {loading ? (
          <ul className="flex flex-col gap-3">
            {Array(5)
              .fill(null)
              .map((_, key) => (
                <li key={key}>
                  <Skeleton className="w-full h-40 bg-slate-200 dark:bg-slate-700" />
                </li>
              ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-3">
            {Object.entries(ai_overview).map(([key, value]) => (
              <li key={key}>
                <Card>
                  <CardHeader>
                    <CardTitle className="capitalize">{key}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose dark:prose-invert max-w-none text-sm">
                      <Markdown>{value.toString()}</Markdown>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};
export default AiOverview;
