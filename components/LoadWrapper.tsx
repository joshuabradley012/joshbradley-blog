"use client";

import type { ReactNode } from "react";
import { useLoadingSignal } from "@/hooks/useLoadingSignal";

export default function LoadWrapper({ children }: { children: ReactNode }) {
  // Signal that the home page has loaded
  useLoadingSignal();

  return <>{children}</>;
}
