'use client';

import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { loadingAtom } from '@/lib/atoms';

/**
 * Custom hook that signals when a component has loaded
 * by setting the loading atom to false after a small delay.
 * 
 * @param delay Optional delay in ms before setting loading to false (default: 50ms)
 */
export function useLoadingSignal(delay: number = 50) {
  const [_, setIsLoading] = useAtom(loadingAtom);
  
  useEffect(() => {
    // Set loading to false with a small delay for smoother transitions
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    
    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, [setIsLoading, delay]);
} 