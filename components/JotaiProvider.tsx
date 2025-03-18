"use client";

import { Provider } from "jotai";
import { ReactNode } from "react";
import { useInitializeAtoms } from "@/hooks/useInitializeAtoms";

export default function JotaiProvider({ children }: { children: ReactNode }) {
  useInitializeAtoms();
  return <Provider>{children}</Provider>;
}
