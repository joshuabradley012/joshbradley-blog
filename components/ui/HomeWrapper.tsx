'use client'

import { useLoadingSignal } from '@/hooks/useLoadingSignal'
import { ReactNode } from 'react'

export default function HomeWrapper({ children }: { children: ReactNode }) {
  // Signal that the home page has loaded
  useLoadingSignal();
  
  return <>{children}</>
} 