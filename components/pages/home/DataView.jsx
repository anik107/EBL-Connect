import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const posts = Array.from({ length: 20 }, (_, i) => {
  const now = new Date();
  const randomDaysAgo = Math.floor(Math.random() * 30);
  const date = new Date(
    now.setDate(now.getDate() - randomDaysAgo)
  ).toISOString();

  return {
    text: `This is a sample post number ${i + 1}.`,
    likes: Math.floor(Math.random() * 1000),
    shares: Math.floor(Math.random() * 800),
    comments: `Comment for post ${i + 1}`,
    location: ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna"][i % 5],
    source_file: `file_${i + 1}.json`,
    file_type: ["image", "video", "text"][i % 3],
    post_id: `post_id_${i + 1}`,
    author: `Author ${i + 1}`,
    url: `https://example.com/post/${i + 1}`,
    primary_bank: ["Prime Bank", "City Bank", "BRAC Bank", "Dutch Bangla"][
      i % 4
    ],
    all_banks_mentioned: [
      "Prime Bank, City Bank",
      "Eastern Bank, BRAC Bank",
      "Dutch Bangla",
    ][i % 3],
    prime_mentions: Math.floor(Math.random() * 20),
    sentiment: ["positive", "neutral", "negative"][i % 3],
    polarity: ["high", "medium", "low"][i % 3],
    date, // New field added here
  };
});

const processedComments = Array.from({ length: 20 }, (_, i) => {
  const emotions = ["Joy", "Frustration", "Neutral", "Confusion"];
  const categories = ["Praise", "Complaint", "Inquiry", "Suggestion"];
  const emotionKeywordsMap = {
    Joy: ["happy", "great", "love", "awesome"],
    Frustration: ["disappointed", "angry", "slow", "crash"],
    Neutral: ["okay", "fine", "normal"],
    Confusion: ["unclear", "confused", "don't understand", "issue"],
  };
  const categoryReasons = {
    Praise: "Positive feedback on service or features",
    Complaint: "Negative feedback on issues or experience",
    Inquiry: "Asked about a product or process",
    Suggestion: "Gave advice or feature request",
  };

  const emotion = emotions[i % emotions.length];
  const category = categories[i % categories.length];

  return {
    post_id: `post_10${i + 1}`,
    author: `User ${i + 1}`,
    date: `2025-06-${((i % 30) + 1).toString().padStart(2, "0")}`,
    text:
      category === "Praise"
        ? "Prime Bank has great customer service and fast responses."
        : category === "Complaint"
        ? "Very disappointed with Prime Bank's app performance."
        : category === "Inquiry"
        ? "How do I activate mobile banking in Prime Bank?"
        : "Please add biometric login in Prime Bank app.",
    likes: Math.floor(Math.random() * 100),
    shares: Math.floor(Math.random() * 50),
    comments: Math.floor(Math.random() * 20),
    location: ["Dhaka", "Chittagong", "Sylhet", "Khulna", "Rajshahi"][i % 5],
    url: `https://example.com/post/10${i + 1}`,
    source_file: `test_review_comments#${i + 1}`,
    file_type: "comment",
    primary_bank: i % 3 === 0 ? "brac_bank" : "prime_bank",
    all_mentioned_bank:
      i % 3 === 0 ? ["prime_bank", "brac_bank"] : ["prime_bank"],
    prime_mentions: 1,
    post_link: `https://example.com/post/10${i + 1}`,
    emotion,
    emotion_keywords: emotionKeywordsMap[emotion],
    category,
    category_reason: categoryReasons[category],
    viral_score: parseFloat((Math.random() * 100).toFixed(2)),
  };
});

const DataView = () => {
  return (
    <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          Explore the Raw and Processed Data
        </CardTitle>
        <CardDescription className="text-sm">
          Complete dataset with all posts and their metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <h1 className="mb-3 text-base sm:text-lg font-bold text-gray-500 dark:text-slate-100">
          Processed Posts Data
        </h1>
        <div className="relative">
          <div className="overflow-auto max-h-[50vh] sm:max-h-96 border rounded-lg">
            <table className="w-full text-xs sm:text-sm">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-700 z-10">
                <tr className="border-b">
                  <th className="sticky left-0 bg-slate-50 dark:bg-slate-700 p-2 sm:p-3 text-left font-medium border-r z-20 w-[200px] whitespace-nowrap"></th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] whitespace-nowrap">
                    Text
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] whitespace-nowrap">
                    Date
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] whitespace-nowrap">
                    Likes
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] whitespace-nowrap">
                    Shares
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Comments
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] whitespace-nowrap">
                    Location
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[100px] whitespace-nowrap">
                    Source File
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    File Type
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Post ID
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Author
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    URL
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Primary Bank
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    All Banks Mentioned
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Prime Mentions
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Sentiment
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] whitespace-nowrap">
                    Polarity
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((row, index) => (
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
                        className=" cursor-pointer text-blue-500 font-bold"
                      >
                        {row.text}
                      </a>
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.date}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.likes}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.shares}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.comments}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.location}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.source_file}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.file_type}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.post_id}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.author}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.url}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.primary_bank}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.all_banks_mentioned}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.prime_mentions}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.sentiment}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.polarity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <h1 className="mt-7 mb-3 text-base sm:text-lg font-bold text-gray-500 dark:text-slate-100">
          Processed Comments & Reviews Data
        </h1>
        <div className="relative">
          <div className="overflow-auto max-h-[50vh] sm:max-h-96 border rounded-lg">
            <table className="w-full text-xs sm:text-sm">
              <thead className="sticky top-0 bg-slate-50 dark:bg-slate-700 z-10">
                <tr className="border-b">
                  <th className="sticky left-0 bg-slate-50 dark:bg-slate-700 p-2 sm:p-3 text-left font-medium border-r z-20 w-[200px] whitespace-nowrap"></th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Post ID
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Author
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Date
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] sm:min-w-[100px] whitespace-nowrap">
                    Text
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[60px] sm:min-w-[100px] whitespace-nowrap">
                    Likes
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Shares
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Comments
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Location
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    URL
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Source File
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    File Type
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Primary Bank
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    All Mentioned bank
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Prime Mentions
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Sentiment
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Priority
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Post Link
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Emotion
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Emotion Keywords
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Category
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Category Reason
                  </th>
                  <th className="p-2 sm:p-3 text-left font-medium min-w-[80px] sm:min-w-[100px] whitespace-nowrap">
                    Viral Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {processedComments.map((row, index) => (
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
                      {row.post_id}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.author}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.date}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.text}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.likes}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.shares}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.comments}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.location}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">{row.url}</td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.source_file}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.file_type}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.primary_bank}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.all_mentioned_bank}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.prime_mentions}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.sentiment}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.priority}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.post_link}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.emotion}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.emotion_keywords}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.category}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.category_reason}
                    </td>
                    <td className="p-2 sm:p-3 whitespace-nowrap">
                      {row.viral_score}
                    </td>
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
export default DataView;
