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
    // Capture current values at the start of the effect
    const frames = framesRef.current;
    const container = containerRef.current;

    if (!container) return;

    // Clean up any existing content first
    container.innerHTML = "";
    frames.forEach((frameId) => cancelAnimationFrame(frameId));
    frames.clear();

    // Create a scoped requestAnimationFrame tracker
    const scopedRequestAnimationFrame = (
      callback: FrameRequestCallback,
    ): number => {
      const frameId = requestAnimationFrame(callback);
      frames.add(frameId);
      return frameId;
    };

    try {
      const executeCode = new Function(
        "container",
        "requestAnimationFrame",
        children,
      );
      executeCode(container, scopedRequestAnimationFrame);
    } catch (error) {
      console.error("Error executing script:", error);
    }

    return () => {
      frames.forEach((frameId) => cancelAnimationFrame(frameId));
      frames.clear();
      if (container) {
        container.innerHTML = "";
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
