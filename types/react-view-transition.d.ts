import type { ExoticComponent, ViewTransitionProps } from "react";

// Next's experimental.viewTransition runs its bundled experimental React,
// which only exports the unstable_ name. @types/react >=19.2 only declares
// the stable ViewTransition, so re-declare the name used at runtime.
declare module "react" {
  export const unstable_ViewTransition: ExoticComponent<ViewTransitionProps>;
}
