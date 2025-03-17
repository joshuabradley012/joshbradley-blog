'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useAtom } from 'jotai';
import { loadingAtom } from '@/lib/atoms';
import { useEffect } from 'react';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useAtom(loadingAtom);
  
  // Reset loading state to true on route change
  useEffect(() => {
    setIsLoading(true);
  }, [pathname, setIsLoading]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial="hidden"
        animate={isLoading ? "hidden" : "enter"}
        exit="exit"
        transition={{ 
          duration: 0.4,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 