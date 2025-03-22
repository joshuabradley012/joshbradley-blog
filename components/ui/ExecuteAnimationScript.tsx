"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ExecuteScriptProps {
  id: string;
  children: string;
  className?: string;
}

export default function ExecuteAnimationScript({
  id,
  children,
  className,
}: ExecuteScriptProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef(new Set<number>());

  useEffect(() => {
    if (!containerRef.current) return;

    // Clean up any existing content first
    containerRef.current.innerHTML = "";
    framesRef.current.forEach((frameId) => cancelAnimationFrame(frameId));
    framesRef.current.clear();

    // Create a scoped requestAnimationFrame tracker
    const scopedRequestAnimationFrame = (
      callback: FrameRequestCallback,
    ): number => {
      const frameId = requestAnimationFrame(callback);
      framesRef.current.add(frameId);
      return frameId;
    };

    try {
      const executeCode = new Function(
        "container",
        "requestAnimationFrame",
        children,
      );
      executeCode(containerRef.current, scopedRequestAnimationFrame);
    } catch (error) {
      console.error("Error executing script:", error);
    }

    return () => {
      framesRef.current.forEach((frameId) => cancelAnimationFrame(frameId));
      framesRef.current.clear();
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={cn(
        "my-8 [&>canvas]:w-full [&>canvas]:border [&>canvas]:border-neutral-200",
        className,
      )}
    />
  );
}
