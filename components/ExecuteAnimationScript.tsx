"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

// The panel color behind animations: the theme's neutral-100, like code blocks
function readBackgroundRgb() {
  const hex = getComputedStyle(document.documentElement)
    .getPropertyValue("--color-neutral-100")
    .trim();
  const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
  if (!match) return "245, 242, 236";
  return match
    .slice(1)
    .map((channel) => parseInt(channel, 16))
    .join(", ");
}

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

    // Scripts paint their canvas with background(alpha), which follows the
    // color scheme, including when it changes while the page is open
    let backgroundRgb = readBackgroundRgb();
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const updateBackground = () => {
      backgroundRgb = readBackgroundRgb();
    };
    colorScheme.addEventListener("change", updateBackground);
    const background = (alpha = 1) => `rgba(${backgroundRgb}, ${alpha})`;

    try {
      const executeCode = new Function(
        "container",
        "requestAnimationFrame",
        "background",
        children,
      );
      executeCode(container, scopedRequestAnimationFrame, background);
    } catch (error) {
      console.error("Error executing script:", error);
    }

    return () => {
      colorScheme.removeEventListener("change", updateBackground);
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
