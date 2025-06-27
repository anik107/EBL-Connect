"use client";

import GlobalContext from "@/contexts/context";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const NextThemeProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [fullData, setFullData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: "give_full_data" }),
          }
        );
        if (!res.ok) throw new Error("Failed to fetch user data");

        const result = await res.json();
        setData(result ?? {});
      } catch (err) {
        setError("Failed to fetch scrapped data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    const fetchFullData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/full_data`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: "give_full_data" }),
          }
        );

        if (!res.ok) throw new Error("Failed to fetch full data");

        const result = await res.json();
        console.log(result);
        setFullData(result ?? {});
      } catch (err) {
        setError("Failed to fetch full data");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (!ignore) {
      fetchFullData();
      fetchData();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <GlobalContext value={{ data, error, loading, fullData }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </GlobalContext>
  );
};

export default NextThemeProvider;
