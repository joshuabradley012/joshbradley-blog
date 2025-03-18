"use client";

import { useHydrateAtoms } from "jotai/utils";
import { loadingAtom } from "@/lib/atoms";

/**
 * Hook to initialize atoms with their default values
 * This helps ensure atoms have consistent initial state
 */
export function useInitializeAtoms() {
  // Set initial atom values
  useHydrateAtoms([[loadingAtom, true]]);
}
