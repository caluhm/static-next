"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import React from "react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    if (count >= 100) return;
    setCount((prev) => prev + 10);
  };

  const handleDecrement = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 10);
  };
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
          <p className="text-5xl font-semibold">{count}%</p>
          <Progress value={count} className="h-[1.5rem]" />
        </div>
        <div className="flex flex-row justify-center items-center gap-6">
          <Button className="font-semibold" onClick={() => handleIncrement()}>
            Increment
          </Button>
          <Button className="font-semibold" onClick={() => handleDecrement()}>
            Decrement
          </Button>
        </div>
      </div>
    </main>
  );
}
