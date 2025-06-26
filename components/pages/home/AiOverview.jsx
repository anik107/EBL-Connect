"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { data } from "@/data/data";
import ReactTextFormat from "react-text-format";
const ai_overview = data?.ai_overview;

const AiOverview = () => {
  return (
    <Card className="flex flex-col flex-grow border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm h-full">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">AI overview</CardTitle>
        <CardDescription className="text-sm">
          Detailed emotion breakdown across all posts and comments
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="flex flex-col gap-3">
          {Object.entries(ai_overview).map(([key, value]) => (
            <li key={key}>
              <Card>
                <CardHeader>
                  <CardTitle className="capitalize">{key}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReactTextFormat className="prose dark:prose-invert max-w-none text-sm">
                    {value}
                  </ReactTextFormat>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
export default AiOverview;
