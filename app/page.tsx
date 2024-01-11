"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const BASE_URL = "https://uuzox6han8.execute-api.eu-west-2.amazonaws.com/prod/";

export default function Home() {
  const [count, setCount] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setCount(data.number);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="absolute top-0 right-0 pt-8 pr-8">
        <ModeToggle />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <h1 className="text-4xl font-semibold">
          Hello, here is a progress bar
        </h1>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <p className="text-5xl font-semibold">{count ? count : 0}%</p>
          <Progress value={count ? count : 0} className="h-[1.5rem]" />
        </div>
      </div>
    </main>
  );
}
