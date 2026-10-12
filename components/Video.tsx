"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoProps {
  src: string;
  poster?: string;
  width: number;
  height: number;
  // Videos have no alt text, so the label is announced instead
  label: string;
  caption?: string;
  className?: string;
  // For light-background footage: in dark mode, invert it to a dark panel
  // (white becomes about neutral-100) and rotate hues back to the originals
  invertInDark?: boolean;
}

// A muted, looping video for short animations. Much smaller than a GIF, and
// unlike a GIF it only downloads and plays while it is on screen.
export default function Video({
  src,
  poster,
  width,
  height,
  label,
  caption,
  className,
  invertInDark,
}: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Autoplay can be refused (e.g. low power mode); the poster remains
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className={cn("my-8", className)}>
      <div className="border border-neutral-200 bg-neutral-100">
        <video
          ref={ref}
          src={src}
          poster={poster}
          width={width}
          height={height}
          aria-label={label}
          className={cn(
            "h-auto w-full",
            invertInDark && "dark:hue-rotate-180 dark:invert-[0.86]",
          )}
          muted
          loop
          playsInline
          preload="none"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-neutral-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
