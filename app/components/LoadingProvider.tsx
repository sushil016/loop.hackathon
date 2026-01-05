"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import LoadingAnimation from "./LoadingAnimation";

interface LoadingProviderProps {
  children: ReactNode;
  minimumLoadingTime?: number;
}

export default function LoadingProvider({ 
  children, 
  minimumLoadingTime = 2500 
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const pathname = usePathname();
  
  // Don't show loading animation on problem-statements page
  const shouldShowLoading = pathname !== "/problem-statements";

  useEffect(() => {
    // Skip loading animation for problem-statements page
    if (!shouldShowLoading) {
      setIsLoading(false);
      return;
    }

    // Minimum loading time for smooth UX
    const timer = setTimeout(() => {
      setIsFading(true);
      // Fade out animation duration
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, minimumLoadingTime);

    return () => clearTimeout(timer);
  }, [minimumLoadingTime, shouldShowLoading]);

  return (
    <>
      {isLoading && shouldShowLoading && (
        <div
          className={`transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          <LoadingAnimation />
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${
          isLoading && !isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
