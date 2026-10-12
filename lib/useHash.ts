import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

// The current URL hash (e.g. "#f1"), or "" when there is none or on the server
export function useHash() {
  return useSyncExternalStore(
    subscribe,
    () => window.location.hash,
    () => "",
  );
}
