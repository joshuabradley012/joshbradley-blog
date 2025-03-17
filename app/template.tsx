'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { loadingAtom } from '@/lib/atoms';
import { useEffect } from 'react';

const variants = {
  hidden: { 
    opacity: 0,
    filter: "blur(4px)",
    scale: 1.02
  },
  enter: { 
    opacity: 1,
    filter: "blur(0px)",
    scale: 1
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
        filter: { delay: 0.1 }
      }}
    >
      {children}
    </motion.div>
  );
} 