"use client";

import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-lg border bg-gray-50 p-6">
      <p className="mb-4">
        This is a nested interactive component with its own state:
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Decrease
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Increase
        </button>
      </div>
    </div>
  );
}
