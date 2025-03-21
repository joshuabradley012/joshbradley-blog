"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { loadingAtom } from "@/lib/atoms";

const variants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useAtom(loadingAtom);

  // Reset loading state to true on route change
  useEffect(() => {
    setIsLoading(true);
  }, [pathname, setIsLoading]);

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate={isLoading ? "hidden" : "enter"}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
